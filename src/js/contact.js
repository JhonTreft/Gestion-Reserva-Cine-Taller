// Verificar si el usuario ha iniciado sesión
if (localStorage.getItem("loggedIn") !== "true") {
    // Si no ha iniciado sesión, redirigir al login
    window.location.href = "/src/login.html";
} else {
    // Si ha iniciado sesión, mostrar un mensaje de bienvenida
    const username = localStorage.getItem("username"); // Almacena el nombre de usuario en localStorage al iniciar sesión
}

function enviar(){
    Swal.fire({
        title: 'Alert',
        text: "Gracias por contactarnos",
        icon: "success"
    }).then(() => {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000); // 2000 milisegundos = 2 segundos
    });
}