// Verifica si hay una sesión activa
if (localStorage.getItem("loggedIn") === "true") {
    Swal.fire({
        title: `Alert`,
        text: "Ya has iniciado sesión",
        icon: "success"
      });
    // Redirigir o mostrar información de usuario
    window.location.href = "../../index.html"; // Cambia esto a tu página de destino
}


function validarLogin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


   // Cargar datos de usuarios desde users.json
    fetch("/src/data/clients.json")
    .then(response => response.json())
    .then(users => {
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Guardar sesión en localStorage
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("email", email); // Almacenar el nombre de usuario
            Swal.fire({
                title: `Alert`,
                text: "Inicio de sesión exitoso",
                icon: "success"
            });

            setTimeout(() => {
                // Redirigir a la página de destino
                window.location.href = "../../index.html"; 
            }, 2000);

        } else {
            // Si no se encontró en el JSON, buscar en localStorage
            const storedUsers = JSON.parse(localStorage.getItem('clients')) || [];
            const storedUser = storedUsers.find(u => u.email === email && u.password === password);

            if (storedUser) {
                // Guardar sesión en localStorage
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("email", email); // Almacenar el nombre de usuario
                Swal.fire({
                    title: `Alert`,
                    text: "Inicio de sesión exitoso",
                    icon: "success"
                });

                setTimeout(() => {
                    // Redirigir a la página de destino
                    window.location.href = "../../index.html"; 
                }, 2000);
            } else {
                Swal.fire({
                    title: `Alert`,
                    text: "Credenciales Invalidas",
                    icon: "error"
                });
            }
        }
    })
    .catch(error => {
        Swal.fire({
            title: `Alert`,
            text: "Error al cargar los datos de usuarios",
            icon: "error"
        });
    });


}
