var validMethods = ["GET", "POST", "PUT", "DELETE"];

function callApi(url, method, data, cbSuccess, cbError) {

    console.log("callApi :: " + method + " :: " + url);


    isPresent = validMethods.find(function(item){
        return item === method;
    });

    if(isPresent === "") {
        alert("Metodo " + method + "No permitido");
        return;
    }

    var jsonData = "";
    if(method === "POST" || method === "PUT") {
        jsonData = JSON.stringify(data);
    }

    $.ajax({
        url: url,
        type: method,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: jsonData, 
        headers: {
            'Authorization':'token123'
        },
        success: function (result) {
            try {
                cbSuccess(result);
            } catch (e) {
                console.log("Error en cbSuccess", e);
            }
        },
        error: function (xhr, status, error) {
            try {
                console.log(error);
                cbError(xhr.status);
            } catch (e) {
                cbErrorBase(xhr.status);
                console.log("Error en cbError", e);
            }
        }
    });
}

function loadZoneTemplate(zone) {
    var url = "assets/template/" + zone + ".html";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            try {
                $("#content_" + zone).html(result);
            } catch (e) {
                console.log("Error en cbSuccess", e);
            }
        },
        error: function (xhr, status, error) {
            try {
                console.log(error);
                cbError(xhr.status);
            } catch (e) {
                console.log("Error en cbError", e);
            }
        }
    });
}


// Guardar datos de usuario en localStorage (esto simula el login)
//localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioAdmin));  // Cambia a 'usuarioAsistente' para probar

// Función para actualizar el perfil dinámicamente
// function actualizarPerfil(user) {
//     // Obtener los datos del usuario guardados en localStorage
//     //const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
//     //const usuarioLogueado = localStorage.getItem('usuarioLogueado');

//     if (usuarioLogueado) {
//         // // Actualizar el nombre
//         // document.getElementById('userName').textContent = usuarioLogueado.email;
//         // document.getElementById('userName').textContent = 'rzapata@serviparamo.com';
//         // // Actualizar el rol
//         // document.getElementById('userRole').textContent = usuarioLogueado.rolName;
//         // // Actualizar la imagen de perfil
//         // document.getElementById('userImage').src = usuarioLogueado.avatar;

//         document.getElementById('userName').textContent = user.email;
//         // Actualizar el rol
//         document.getElementById('userRole').textContent = user.rolName;
//         // Actualizar la imagen de perfil
//         document.getElementById('userImage').src = user.avatar;


//     }
//     else{
//         alert('usuarioLogueado no guardado');
//     }
// }

