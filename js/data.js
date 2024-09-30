// Sample JSON data (replace this with your actual data source)
const movies = [
    {
        "title": "Pablo Escobar",
        "author": "Emilio",
        "descripcion":"",
        "image": "../img/Pablo-Escobar-el-patron-del-mal.jpg",
        "category": "now",
        "date": "2022-10-01",
        "genre":"accion",
        "duration": "2:00",
        "rating": "5",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]
        
    },
    {
        "title": "SWAT",
        "author": "hondon",
        "descripcion":"",
        "image": "../img/SWAT.jpg",
        "category": "soon",
        "date": "2023-10-05",
        "genre":"accion",
        "duration": "1:20:00",
        "rating": "10",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]

    },
    {
        "title": "Profundidades del Sena",
        "author": "shark",
        "descripcion":"",
        "image": "../img/profundidades_sena.jpg",
        "category": "now",
        "date": "2022-10-30",
        "genre":"accion",
        "duration": "50:00",
        "rating": "6",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]

    },
    {
        "title": "Rebel ridge",
        "author": "tar",
        "descripcion":"",
        "image": "../img/rebel.jpg",
        "category": "soon",
        "date": "2022-10-14",
        "genre":"accion",
        "duration": "1:28:00",
        "rating": "9",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]

    },
    {
        "title": "The black list",
        "author": "rick",
        "descripcion":"",
        "image": "../img/the_black_list.jpeg",
        "category": "now",
        "date": "2019-10-01",
        "genre":"accion",
        "duration": "12:00:00",
        "rating": "7",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]

    },
    {
        "title": "Mr. Robot",
        "author": "Hack",
        "descripcion":"",
        "image": "../img/mr_boot.webp",
        "category": "soon",
        "date": "2018-10-16",
        "genre":"accion",
        "duration": "2:00:00",
        "rating": "5",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]

    },
    {
        "title": "Unsolved",
        "author": "tupac",
        "descripcion":"",
        "image": "../img/tupac.jpg",
        "category": "now",
        "date": "2010-09-01",
        "genre":"accion",
        "duration": "4:00:00",
        "rating": "7",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]

    },
    {
        "title": "Bad boys",
        "author": "Will Smith",
        "descripcion":"",
        "image": "../img/bad-boys.webp",
        "category": "now",
        "date": "2022-10-01",
        "genre":"accion",
        "duration": "2:10:00",
        "rating": "10",
        "projections": [
            {
                "room": "Sala 1",
                "time": "15:00",
                "seats": Array(10).fill(true) // true = disponible, false = reservado
            },
            {
                "room": "Sala 2",
                "time": "18:00",
                "seats": Array(10).fill(true) // Puedes personalizar la cantidad
            }
        ]

    },
];

// Function to render movies
function renderMovies(movies) {
    const container = document.getElementById('movie-container');
    container.innerHTML = ''; // Clear existing content

    movies.forEach(movie => {
        const movieCard = `
            <div class="relative flex flex-col rounded-2xl max-w-xs w-full bg-white shadow-3xl p-4 hover:scale-105 transition-all ease-in-out duration-500" onclick='viewDetails(${JSON.stringify(movie)})'>
                <div class="relative w-full">
                    <img src="${movie.image}" class="mb-3 h-auto w-full rounded-xl" alt="${movie.title}">
                    <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                        <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="mb-3 flex items-center justify-between px-1 md:flex-row">
                    <div>
                        <p class="text-lg font-bold text-navy-700">${movie.title}</p>
                        <p class="mt-1 text-sm font-semibold text-gray-600">By ${movie.author}</p>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += movieCard;
    });
}

// Call the function to render movies
renderMovies(movies);


// Function to filter movies by date and category
function filterMovies(selectedDate, selectedCategory) {
    const filteredMovies = movies.filter(movie => {
        const matchesDate = selectedDate ? movie.date === selectedDate : true;
        const matchesCategory = selectedCategory ? movie.category === selectedCategory : true;
        return matchesDate && matchesCategory;
    });
    renderMovies(filteredMovies);
}


// Event listener for date select
document.getElementById('date-select').addEventListener('change', (event) => {
    const selectedDate = event.target.value;
    const selectedCategory = document.querySelector('button[data-category].active')?.getAttribute('data-category') || '';
    filterMovies(selectedDate, selectedCategory);
});

// Event listener for category buttons
const categoryButtons = document.querySelectorAll('button[data-category]');
categoryButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Desmarcar todos los botones
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Marcar el botón activo
        event.target.classList.add('active');

        const selectedCategory = event.target.getAttribute('data-category');
        const selectedDate = document.getElementById('date-select').value;
        filterMovies(selectedDate, selectedCategory);
    });
});


// Function to filter movies by title
function filterMoviesByTitle(searchText) {
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    renderMovies(filteredMovies);
}

// Event listener for input
document.getElementById('input-title-movies').addEventListener('input', (event) => {
    const searchText = event.target.value;
    filterMoviesByTitle(searchText);
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');

    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    } else {
        sidebar.classList.add('hidden');
    }
}



function viewDetails(movie) {
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
    window.location.href = 'detail.html'; // Redirigir a la página de detalles
}