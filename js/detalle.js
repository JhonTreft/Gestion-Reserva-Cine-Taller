const movie = JSON.parse(localStorage.getItem('selectedMovie'));

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movie-detail-container');

    if (movie) {
        container.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div x-data="{ image: 1 }" x-cloak>
                            <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                                <img src="${movie.image}" class="h-full w-full rounded-lg object-cover" alt="${movie.title}">
                            </div>
                            <div class="flex -mx-2 mb-4">
                                <template x-for="i in 4">
                                    <div class="flex-1 px-2">
                                        <button x-on:click="image = i" :class="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                                            <span x-text="i" class="text-2xl"></span>
                                        </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">${movie.title}</h2>
                        <p class="text-gray-500 text-sm font-semibold">Descripcion: <span class="text-gray-300">${movie.descripcion}</span></p>
                        <p class="text-gray-500 text-sm mt-2 font-semibold">Author: <a href="#" class="text-red-600 hover:underline ">${movie.author}</a></p>

                        <br>
                        <hr>
                        <div class="my-4 mt-2">
                                <p class="text-gray-500 text-sm font-semibold">Ficha Tecnica</p>
                                <p class="text-gray-500 text-sm font-semibold">Duracion: <span class="text-gray-400">${movie.duration}</span></p>
                                <p class="text-gray-500 text-sm font-semibold">Genero: <span class="text-gray-400">${movie.genre}</span></p>
                         </div>
                            
                        <div class="flex items-center space-x-4 my-4">
                            <div>
                                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                                    <span class="font-bold text-indigo-600 text-1xl">Rating: ${movie.rating}</span>
                                </div>
                            </div>
                            <hr>
                            
                        </div>
                        <p class="text-gray-500">${movie.descripcion}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = '<p>No hay detalles disponibles.</p>';
    }

});

function changeDate() {
    showProjections(movie.projections);
}

 // Función para mostrar proyecciones
 function showProjections(projections) {
    const projectionContainer = document.getElementById('projections-container');
    projectionContainer.innerHTML = '';

    if (projections.length === 0) {
        projectionContainer.innerHTML = '<p>No hay proyecciones disponibles.</p>';
        return;
    }

    const projectionsHtml = projections.map(projection => `
        <div class="flex justify-between p-2 bg-gray-100 rounded-lg mb-2 mt-4">
            <span class="font-semibold">${projection.room}</span>
            <button class="bg-indigo-500 text-white rounded-lg px-4 py-1 font-semibold" onclick="showSeats('${movie.title}', '${projection.room}')">Seleccionar Asiento</button>
        </div>
    `).join('');

    projectionContainer.innerHTML = projectionsHtml;
 }

 function showSeats(movieTitle, room) {
    const modal = document.getElementById('seat-modal');
    const modalTitle = document.getElementById('modal-title');
    const seatsContainer = document.getElementById('seats-container');

    // Cerrar modal al hacer clic en el botón
    document.getElementById('close-modal').onclick = () => {
        modal.classList.add('hidden');
    };

    // Obtener la película del localStorage
    const movie = JSON.parse(localStorage.getItem('selectedMovie'));

    if (movie) {
        // Buscar la proyección correspondiente a la sala
        const projection = movie.projections.find(p => p.room === room);
        
        if (projection) {
            modalTitle.textContent = `Selecciona asientos para ${movieTitle} en ${room}`;
            seatsContainer.innerHTML = ''; // Limpiar asientos anteriores

            // Cargar el estado de los asientos desde localStorage para esa película
            const occupiedSeatsKey = `occupiedSeats_${movieTitle}_${room}`;
            const occupiedSeats = JSON.parse(localStorage.getItem(occupiedSeatsKey)) || [];
            
            projection.seats.forEach((available, index) => {
                const seatLabel = String.fromCharCode(65 + Math.floor(index / 5)) + (index % 5 + 1); // Ejemplo: A1, A2, ..., B1, B2, etc.
                const seatButton = document.createElement('button');
                seatButton.textContent = seatLabel;

                // Verificar si el asiento está ocupado
                const isOccupied = occupiedSeats.includes(seatLabel);
                seatButton.className = `p-2 rounded ${isOccupied ? 'bg-red-500 text-white' : available ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`;
                seatButton.disabled = isOccupied || !available; // Deshabilitar si ya está ocupado o no disponible

                if (available && !isOccupied) {
                    seatButton.onclick = () => {
                        // Actualizar el estado del asiento en el arreglo
                        projection.seats[index] = false; // Marcar como ocupado
                        seatButton.className = 'p-2 rounded bg-red-500 text-white'; // Cambiar estilo a ocupado
                        seatButton.disabled = true; // Deshabilitar el botón
                        Swal.fire({
                            title: `Alert`,
                            text: `Has seleccionado el asiento ${seatLabel}`,
                            icon: "success"
                          });
                        //alert(`Has seleccionado el asiento ${seatLabel}`);

                        // Guardar la selección en localStorage
                        occupiedSeats.push(seatLabel);
                        localStorage.setItem(occupiedSeatsKey, JSON.stringify(occupiedSeats));
                    };
                }

                seatsContainer.appendChild(seatButton);
            });

            // Mostrar modal
            modal.classList.remove('hidden');
        } else {
            Swal.fire({
                title: `Alert`,
                text: "No se encontró la sala seleccionada",
                icon: "success"
              });
            //alert('No se encontró la sala seleccionada.');
        }
    } else {
        Swal.fire({
            title: `Alert`,
            text: "No hay información de la película seleccionada",
            icon: "success"
          });
        //alert('No hay información de la película seleccionada.');
    }
}
