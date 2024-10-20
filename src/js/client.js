
// Verificar si el usuario ha iniciado sesión
if (localStorage.getItem("loggedIn") !== "true") {
    // Si no ha iniciado sesión, redirigir al login
    window.location.href = "/src/login.html";
} else {
    // Si ha iniciado sesión, mostrar un mensaje de bienvenida
    const username = localStorage.getItem("username"); // Almacena el nombre de usuario en localStorage al iniciar sesión
}


function crearCliente() {

    const clientName = document.getElementById("clientName").value;
    const clientEmail = document.getElementById("clientEmail").value;
    const clientPassword = document.getElementById("clientPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value; 
    const type_document = document.getElementById("typeDocument").value;
    const number_document = document.getElementById("numberDocument").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const date_of_birth = document.getElementById("dateOfBirth").value;

    const informactionCheck = document.getElementById('informactionCheck');
    if (!informactionCheck.checked) {
        Swal.fire({
            title: `Alert`,
            text: "Debes aceptar los terminos y condiciones",
            icon: "warning"
          });
        return;
    }
    const conditionCheck = document.getElementById('conditionCheck');
    if (!conditionCheck.checked) {
        Swal.fire({
            title: `Alert`,
            text: "Debes aceptar los terminos y condiciones",
            icon: "warning"
          });
        return;
    }

    // Validar que todos los campos tienen valor
    if (!clientName || !clientEmail || !clientPassword || !confirmPassword || !type_document || !number_document || !lastname || !phone || !date_of_birth) {
        Swal.fire({
            title: `Alert`,
            text: "Todos los campos son obligatorios",
            icon: "warning"
          });
        return;
    }

    // Validar que las contraseñas coinciden
    if (clientPassword !== confirmPassword) {
        Swal.fire({
            title: `Alert`,
            text: "Las contraseñas no coinciden",
            icon: "warning"
          });
        return;
    }


    // Crear un nuevo cliente
    const newClient = {
        email: clientEmail,
        password: clientPassword,
        name: clientName,
        type_document: type_document,
        number_document: number_document,
        lastname: lastname,
        phone: phone,
        date_of_birth: date_of_birth
    };

    // Cargar los clientes existentes
    fetch("/src/data/clients.json")
        .then(response => response.json())
        .then(clients => {
            // Añadir el nuevo cliente a la lista
            clients.push(newClient);
            localStorage.setItem('clients', JSON.stringify(clients));
        })
        .then(() => {
            Swal.fire({
                title: `Alert`,
                text: "Cliente registrado exitosamente",
                icon: "success"
              });

            //esperar unos segundos 
            setTimeout(() => {
                window.location.href = "../../index.html"; // Redirigir a la página de login
            }, 2000);
        })
        .catch(error => {
            Swal.fire({
                title: `Alert`,
                text: "Error al registrar el cliente",
                icon: "error"
              });

            console.error(error);
            document.getElementById("message").innerText = "Error al registrar el cliente.";
        });

}
