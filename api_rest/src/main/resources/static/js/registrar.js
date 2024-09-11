        // Captura el formulario y agrega el evento de envío
        document.getElementById('loginForm').addEventListener('submit', async function (event) {
          event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
          // Obtén los valores de los campos
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const repetirPassword = document.getElementById('repetirPassword').value;
          const loginMessage = document.getElementById('loginMessage');
  
          // Validación: Verifica que la contraseña y repetir contraseña sean iguales
          if (password !== repetirPassword) {
              loginMessage.textContent = "Las contraseñas no coinciden.";
              loginMessage.style.color = "red";
              return;
          }
  
          // Crea el objeto JSON a enviar
          const userData = {
              email: email,
              password: password,
              rolId: 1 // Asigna un rolId fijo para el ejemplo
          };
  
          try {
              // Envía los datos al servidor
              const response = await fetch('http://localhost:8080/user', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userData)
              });
  
              // Maneja la respuesta
              if (response.ok) {
                  const data = await response.json(); // Convertir la respuesta a JSON si es necesario
                  loginMessage.textContent = "Usuario registrado con éxito.";
                  loginMessage.style.color = "green";
              } else {
                  // Si hay un error del lado del servidor
                  const errorData = await response.json();
                  loginMessage.textContent = "Error al registrar el usuario: " + errorData.message;
                  loginMessage.style.color = "red";
              }
          } catch (error) {
              // Si ocurre un error de red o un error inesperado
              loginMessage.textContent = "Error en la solicitud: " + error.message;
              loginMessage.style.color = "red";
          }
      });
