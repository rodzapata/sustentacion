function iniciarSesion() {

    localStorage.setItem('usuarioLogueado', "samuel y cecilia");

    // Obtener los valores de los campos de email y password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Crear el objeto JSON para enviar
    const loginData = {
        email: email,
        password: password
    };

    // Realizar la solicitud al servidor
    fetch('http://localhost:8080/user/validar-credenciales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Si la respuesta es 200 OK, convertir a JSON
        } else {
            throw new Error('Error en las credenciales. Código de estado: ' + response.status);
        }
    })
    .then(data => {
        // Guardar la respuesta del servidor en localStorage
        //localStorage.setItem('usuarioLogueado', JSON.stringify(data));

        localStorage.setItem('usuarioLogueado', "samuel y cecilia");
        console.log(localStorage.getItem("usuariologueado"));

        // Mostrar mensaje de éxito en el DOM
        const loginMessage = document.getElementById('loginMessage');
        loginMessage.textContent = "Inicio de sesión exitoso";
        loginMessage.style.color = 'green';

        // Redireccionar o actualizar la página si es necesario
        // window.location.href = 'dashboard.html'; // Descomentar si necesitas redirigir después de iniciar sesión
    })
    .catch(error => {
        // Manejar errores y mostrar mensaje en el DOM
        const loginMessage = document.getElementById('loginMessage');
        loginMessage.textContent = error.message;
        loginMessage.style.color = 'red';
    });
}
