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

function cbErrorBase(error) {
    alert("El llamado al servidor fallo " + error);
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


function actualizarPerfil() {
    // alert('actualizar perfil');
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado) {
        // Convertir el string de localStorage a objeto
        const usuarioData = JSON.parse(usuarioLogueado);
    
        // Extraer los valores de email, rolName y avatar
        const email = usuarioData.data.email;
        const rolName = usuarioData.data.rolName;
        const avatar = usuarioData.data.avatar;

        document.getElementById('userName').textContent = email;
        // Actualizar el rol
        document.getElementById('userRole').textContent = rolName;
        // Actualizar la imagen de perfil
        document.getElementById('userImage').src = avatar;

    }
}
