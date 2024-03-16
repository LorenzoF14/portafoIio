function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;

    if (nombre === "" || correo === "" || telefono === "") {
        alert("Por favor, completa todos los campos");
        return false;
    }
    alert("¡Gracias por suscribirte!");
    return true;
}
