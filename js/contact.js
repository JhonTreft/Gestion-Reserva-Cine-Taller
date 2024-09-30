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