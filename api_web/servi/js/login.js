// Esperar a que el DOM esté cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar el botón por su ID
    const btnGuardar = document.getElementById('btnGuardar');

    // Agregar un evento click al botón
    btnIniciar.addEventListener('click', function (e) {
        e.preventDefault();
        // Obtiene los valores de los campos de email y contraseña
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Crea el objeto JSON para enviar
        const loginData = {
            email: email,
            password: password
        };

        const messageElement = document.getElementById('loginMessage');

        fetch('http://localhost:8080/user/validar-credenciales', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    throw new Error('Credenciales incorrectas. Inténtalo de nuevo.');
                } else {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
            })
            .then(data => {
                // Mostrar mensaje de éxito
                messageElement.textContent = 'Login exitoso';
                messageElement.style.color = 'green';

                // Guardar datos de usuario en localStorage (esto simula el login)
                //localStorage.setItem('usuarioLogueado', JSON.stringify(data));  // Cambia a 'usuarioAsistente' para probar

                try {
                    localStorage.setItem('usuarioLogueado', JSON.stringify(data));
                    console.log('Datos guardados correctamente en localStorage.');
                } catch (error) {
                    console.error('Error al guardar los datos en localStorage:', error);
                    alert('Ocurrió un error al guardar los datos. Por favor, intenta nuevamente.');
                }


                // Obtener los datos del usuario guardados en localStorage
                const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

                //actualizarPerfil(usuarioLogueado);

                //console.log(usuarioLogueado);

                window.location.href = 'menu.html'
            })
            .catch(error => {
                // Mostrar mensaje de error
                messageElement.textContent = error.message;
                messageElement.style.color = 'red';
            });

    });

    // btnTraer.addEventListener('click', function () {
    //     const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    //     if (usuarioLogueado) {
    //         // Convertir el string de localStorage a objeto
    //         const usuarioData = JSON.parse(usuarioLogueado);
        
    //         // Extraer los valores de email, rolName y avatar
    //         const email = usuarioData.data.email;
    //         const rolName = usuarioData.data.rolName;
    //         const avatar = usuarioData.data.avatar;

    //         document.getElementById('userName').textContent = email;
    //         // Actualizar el rol
    //         document.getElementById('userRole').textContent = rolName;
    //         // Actualizar la imagen de perfil
    //         document.getElementById('userImage').src = avatar;
    
    //     }

    // });
});

