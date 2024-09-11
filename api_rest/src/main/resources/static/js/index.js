$(function () {
    $("#resetData").click(function () {
        $(".error-input").removeClass("error-input");
        $("#userId").val("");
    });

    $("#resetData2").click(function () {
        $(".error-input").removeClass("error-input");
        $("#customerId").val("");
    });


    // loadRoles();
    // loadUsuarios();
    // loadCustomers();
    loadFormEvent();

});

// window.onload = function() {
//     alert("¡La página se ha cargado completamente!");
//     console.log("La página se ha cargado correctamente.");
// };

function loadFormEvent() {

    console.log("loadFormEvent");

    $("#frm1").on("submit", function (e) {
        e.preventDefault();

        $(".error-input").removeClass("error-input");

        if ($("#nombres").val() === "") {
            $("#nombres").addClass("error-input");
        }

        if ($("#fechaNacimiento").val() === "") {
            $("#fechaNacimiento").addClass("error-input");
        }

        if ($("#correo").val() === "") {
            $("#correo").addClass("error-input");
        }

        if ($("#telefono").val() === "") {
            $("#telefono").addClass("error-input");
        }

        if ($("#avatar").val() === "") {
            $("#avatar").addClass("error-input");
        }

        if ($("#rol").val() === "") {
            $("#rol").addClass("error-input");
        }

        if ($(".error-input").length > 0) {
            alert("Verifique los datos ingresados");
            return;
        }

        var objUsuario = {
            "fullName": $("#nombres").val(),
            "bornDate": $("#fechaNacimiento").val(),
            "email": $("#correo").val(),
            "phone": $("#telefono").val(),
            "avatar": "foto.png",
            "rolId": $("#rol").val()
        };

        if ($("#userId").val() === "") {
            console.log("Creando nuevo usuario " + JSON.stringify(objUsuario));
            createUsuario(objUsuario);
        } else {
            var userId = $("#userId").val();
            console.log("Editando usuario " + userId + " :: " + JSON.stringify(objUsuario));
            editUsuario(userId, objUsuario);
        }

    });


    //formulario Activity
    $("#frmActivity").on("submit", function (e) {
        e.preventDefault();
        // alert('boton aceptar en Activity');
        $(".error-input").removeClass("error-input");

        if ($("#nombreActividad").val() === "") {
            $("#nombreActividad").addClass("error-input");
        }

        if ($(".error-input").length > 0) {
            alert("Verifique los datos ingresados");
            return;
        }

        var objActivity = {
            "activityName": $("#nombreActividad").val()
        };

        if ($("#activityId").val() === "") {
            console.log("Creando nuevo Acitidad " + JSON.stringify(objActivity));
            createActivity(objActivity);
        } else {
            var activityId = $("#activityId").val();
            console.log("Editando Actividad " + activityId + " :: " + JSON.stringify(objActivity));
            editActivity(activityId, objActivity);
        }

    });

// ==== formulario tipo de quipos =========

    $("#frmAEquipmentType").on("submit", function (e) {
        e.preventDefault();
        // alert('boton aceptar en Tipo de Equipos');
        $(".error-input").removeClass("error-input");

        if ($("#nombreTipoEquipo").val() === "") {
            $("#nombreTipoEquipo").addClass("error-input");
        }

        if ($(".error-input").length > 0) {
            alert("Verifique los datos ingresados");
            return;
        }

        var objEquipmentType = {
            "equipmentTypeName": $("#nombreTipoEquipo").val()
        };

        if ($("#equipmentTypeId").val() === "") {
            console.log("Creando nuevo Tipo de Equipo " + JSON.stringify(objEquipmentType));
            createEquipmentType(objEquipmentType);
        } else {
            var equipmentTypeId = $("#equipmentTypeId").val();
            console.log("Editando Tipo de Equipo " + equipmentTypeId + " :: " + JSON.stringify(objEquipmentType));
            editEquipmentType(equipmentTypeId, objEquipmentType);
        }

    });

// ==== formulario de marcas =========

$("#frmBrand").on("submit", function (e) {
    e.preventDefault();
    // alert('boton aceptar en Marcas');
    $(".error-input").removeClass("error-input");

    if ($("#nombreMarca").val() === "") {
        $("#nombreMarca").addClass("error-input");
    }

    if ($(".error-input").length > 0) {
        alert("Verifique los datos ingresados");
        return;
    }

    var objBrand = {
        "brandName": $("#nombreMarca").val()
    };

    if ($("#brandId").val() === "") {
        console.log("Creando nueva Marca " + JSON.stringify(objBrand));
        createBrand(objBrand);
    } else {
        var brandId = $("#brandId").val();
        console.log("Editando Marca " + brandId + " :: " + JSON.stringify(objBrand));
        editBrand(brandId, objBrand);
    }

});

    //formulario Refrigerant
    $("#frmRefrigerant").on("submit", function (e) {
        e.preventDefault();
        // alert('boton aceptar en Refrigerant');
        $(".error-input").removeClass("error-input");

        if ($("#nombreRefrigerante").val() === "") {
            $("#nombreRefrigerante").addClass("error-input");
        }

        if ($(".error-input").length > 0) {
            alert("Verifique los datos ingresados");
            return;
        }

        var objRefrigerant = {
            "refrigerantName": $("#nombreRefrigerante").val()
        };

        if ($("#refrigerantId").val() === "") {
            console.log("Creando nuevo Refrigerante " + JSON.stringify(objRefrigerant));
            createRefrigerant(objRefrigerant);
        } else {
            var refrigerantId = $("#refrigerantId").val();
            console.log("Editando Refrigerante " + refrigerantId + " :: " + JSON.stringify(objRefrigerant));
            editRefrigerant(refrigerantId, objRefrigerant);
        }

    });


    //formulario 2 Customer
    $("#frmCustomer").on("submit", function (e) {
        e.preventDefault();
        // alert('boton aceptar en Customer');
        $(".error-input").removeClass("error-input");

        if ($("#nombres").val() === "") {
            $("#nombres").addClass("error-input");
        }

        if ($("#fechaNacimiento").val() === "") {
            $("#fechaNacimiento").addClass("error-input");
        }

        if ($("#correo").val() === "") {
            $("#correo").addClass("error-input");
        }

        if ($("#telefono").val() === "") {
            $("#telefono").addClass("error-input");
        }


        if ($(".error-input").length > 0) {
            alert("Verifique los datos ingresados");
            return;
        }

        var objCustomer = {
            "fullName": $("#nombres").val(),
            "bornDate": $("#fechaNacimiento").val(),
            "email": $("#correo").val(),
            "phone": $("#telefono").val(),
            "city": $("#ciudad").val(),
            "address": $("#direccion").val()
        };

        if ($("#customerId").val() === "") {
            console.log("Creando nuevo Customer " + JSON.stringify(objCustomer));
            createCustomer(objCustomer);
        } else {
            var customerId = $("#customerId").val();
            console.log("Editando Customer " + customerId + " :: " + JSON.stringify(objCustomer));
            editCustomer(customerId, objCustomer);
        }

    });

    // formulario tecnicos

    $("#frmTechnician").on("submit", function (e) {
        e.preventDefault();
        // alert('boton aceptar en Technician');
        $(".error-input").removeClass("error-input");

        if ($("#nombres").val() === "") {
            $("#nombres").addClass("error-input");
        }

        if ($("#fechaContratacion").val() === "") {
            $("#fechaContratacion").addClass("error-input");
        }

        if ($("#correo").val() === "") {
            $("#correo").addClass("error-input");
        }

        if ($("#telefono").val() === "") {
            $("#telefono").addClass("error-input");
        }


        if ($(".error-input").length > 0) {
            alert("Verifique los datos ingresados");
            return;
        }

        var objTechnician = {
            "fullName": $("#nombres").val(),
            "hireDate": $("#fechaContratacion").val(),
            "email": $("#correo").val(),
            "phone": $("#telefono").val(),
        };

        if ($("#technicianId").val() === "") {
            console.log("Creando nuevo Tecnico " + JSON.stringify(objTechnician));
            createTechnician(objTechnician);
        } else {
            var technicianId = $("#technicianId").val();
            console.log("Editando Tecnico " + technicianId + " :: " + JSON.stringify(objTechnician));
            editTechnician(technicianId, objTechnician);
        }

    });


    //formulario 3 Equipo
    $("#frmEquipo").on("submit", function (e) {
        e.preventDefault();
        // alert('boton aceptar en Equipment');
        $(".error-input").removeClass("error-input");

        if ($("#nombres").val() === "") {
            $("#nombres").addClass("error-input");
        }

        if ($("#fechaNacimiento").val() === "") {
            $("#fechaNacimiento").addClass("error-input");
        }

        if ($("#correo").val() === "") {
            $("#correo").addClass("error-input");
        }

        if ($("#telefono").val() === "") {
            $("#telefono").addClass("error-input");
        }

        if ($(".error-input").length > 0) {
            alert("Verifique los datos ingresados");
            return;
        }


        var objEquipment = {
            "serialNumber": $("#serial").val(),
            "installationDate": $("#fechaInstalacion").val(),
            "lastMaintenanceDate": $("#fechaUltimoMantenimiento").val(),
            "customerId": $("#cmbcliente").val(),
            "equipmentTypeId":$("#cmbtipoEquipo").val(),
            "brandId": $("#cmbMarca").val(),
            "refrigerantId": $("#cmbRefrigerante").val()
        };

        if ($("#equipmentId").val() === "") {
            console.log("Creando nuevo Equipo " + JSON.stringify(objEquipment));
            createEquipment(objEquipment);
        } else {
            var equipmentId = $("#equipmentId").val();
            console.log("Editando Equipo " + equipmentId + " :: " + JSON.stringify(objEquipment));
            editEquipment(equipmentId, objEquipment);
        }

    });

// ====== ORDEN DE SERVICIOS ===============

$("#frmServiceOrder").on("submit", function (e) {
    e.preventDefault();
    // alert('boton aceptar Orden de servicios');
    $(".error-input").removeClass("error-input");

    if ($("#cmbcliente").val() === "") {
        $("#cmbcliente").addClass("error-input");
    }

    if ($("#fechaInstalacion").val() === "") {
        $("#fechaInstalacion").addClass("error-input");
    }

    if ($("#correo").val() === "") {
        $("#correo").addClass("error-input");
    }

    if ($("#telefono").val() === "") {
        $("#telefono").addClass("error-input");
    }


    if ($(".error-input").length > 0) {
        alert("Verifique los datos ingresados");
        return;
    }


    var objServiceOrder = createObjectOrden();
    console.log(objServiceOrder);
    

    console.log("Creando nuevo Orden de servicio " + JSON.stringify(objServiceOrder));
    createServiceOrder(objServiceOrder);

    // if ($("#serviceOrderId").val() === "") {
    //     console.log("Creando nuevo Orden de servicio " + JSON.stringify(objServiceOrder));
    //     createServiceOrder(objServiceOrder);
    // } else {
    //     var serviceOrderId = $("#serviceOrderId").val();
    //     console.log("Editando Oden de Servicio " + serviceOrderId + " :: " + JSON.stringify(objServiceOrder));
    //     editServiceOrder(serviceOrderId, objServiceOrder);
    // }

});


// ===== FIN ORDEN DE SERVICIO ============

    // ==== formulario Ordenes de servicio ===
    // ===== agregar linea en el formulario de ordenes de servicio ========

    // document.querySelector('.add-linea').addEventListener('click', function() {
    //     alert("boton adicionar linea ");
    //     const detallesContainer = document.getElementById('detalles-container');
    //     const comboActivity =document.getElementById('cmbActivity');
    //     const nuevaLinea = document.createElement('div');
    //     nuevaLinea.className = 'linea-detalle';
    //     nuevaLinea.innerHTML = `
    //         <select name="actividad" id="cmbActivity" required>
    //         </select>
    //         <input type="text" name="descripcionActividad" placeholder="Descripción de la actividad" required>
    //         <button type="button" class="remove-linea">Eliminar</button>
    //         `;
    //     detallesContainer.appendChild(nuevaLinea);

    
    //     // Añadir el evento para eliminar la línea
    //     nuevaLinea.querySelector('.remove-linea').addEventListener('click', function() {
    //         nuevaLinea.remove();
    //     });
    // });

    // // Añadir el evento para eliminar la línea inicial
    // document.querySelector('.remove-linea').addEventListener('click', function() {
    //     this.parentElement.remove();
    // });

    // ==== codigo modificado ============

    document.querySelector('.add-linea').addEventListener('click', function() {
        const addLineaBtn = document.getElementById('add-linea-btn');
        const detallesContainer = document.getElementById('detalles-container');

        // Clonar el div con la clase "linea-detalle"
        const originalLinea = document.querySelector('.linea-detalle');
        const newLinea = originalLinea.cloneNode(true);
    
        // Añadir el evento al botón "Eliminar" de la nueva línea
        const removeButton = newLinea.querySelector('.remove-linea');
        removeButton.addEventListener('click', function() {
            detallesContainer.removeChild(newLinea);
        });
    
        // Agregar la nueva línea al contenedor de detalles
        detallesContainer.appendChild(newLinea);
    });

    // Evento para eliminar la primera línea cuando se haga clic en el botón "Eliminar"
    document.querySelectorAll('.remove-linea').forEach(button => {
        button.addEventListener('click', function() {
            const parentDiv = button.parentElement;
            detallesContainer.removeChild(parentDiv);
        });
    });

    // Añadir el evento para eliminar la línea inicial
    document.querySelector('.remove-linea').addEventListener('click', function() {
        this.parentElement.remove();
    });


// === nuevo meotodo para agregar linea ===

// Obtener el botón para agregar nuevas líneas y el contenedor de detalles
// const addLineaBtn = document.getElementById('add-linea-btn');
// const detallesContainer = document.getElementById('detalles-container');

// // Función para agregar una nueva línea de detalles
// addLineaBtn.addEventListener('click', function() {
//     // Clonar el div con la clase "linea-detalle"
//     const originalLinea = document.querySelector('.linea-detalle');
//     const newLinea = originalLinea.cloneNode(true);
    
//     // Añadir el evento al botón "Eliminar" de la nueva línea
//     const removeButton = newLinea.querySelector('.remove-linea');
//     removeButton.addEventListener('click', function() {
//         detallesContainer.removeChild(newLinea);
//     });
    
//     // Agregar la nueva línea al contenedor de detalles
//     detallesContainer.appendChild(newLinea);
// });

// // Evento para eliminar la primera línea cuando se haga clic en el botón "Eliminar"
// document.querySelectorAll('.remove-linea').forEach(button => {
//     button.addEventListener('click', function() {
//         const parentDiv = button.parentElement;
//         detallesContainer.removeChild(parentDiv);
//     });
// });


// ==== fin de agregar linea =========
    function createObjectOrden() {
        // Capturar los valores del formulario
       // const id = document.getElementById('id').value;
        const customerId = document.getElementById('cmbcliente').value;
        const equipmentId = document.getElementById('cmbEquipoCliente').value;
        const date = new Date(document.getElementById('fechaInstalacion').value).toISOString(); // Formato ISO
    
        // Capturar los detalles (aquí se asume que hay al menos un detalle)
        const detailElements = document.querySelectorAll('#detalles-container .linea-detalle');
        const details = Array.from(detailElements).map(detail => {
            return {
                // const actividadSelect = document.querySelector('select[name="actividad"]');
                // const valorSeleccionado = actividadSelect.value;

                // id: parseInt(detail.querySelector('input[name="detailId"]').value),
                // activityId: parseInt(detail.querySelector('select[name="actividad[]"]').value),
                activityId: parseInt(detail.querySelector('select[name="actividad"]').value),
                description: detail.querySelector('input[name="descripcionActividad"]').value
            };
        });
    
    
        // Crear el objeto con los valores capturados
        const ordenDeServicio = {
            // id: parseInt(id),
            customerId: parseInt(customerId),
            equipmentId: parseInt(equipmentId),
            date: date,
            details: details
        };
    
        // Mostrar el objeto en la consola (o hacer cualquier otra acción necesaria)
        console.log(ordenDeServicio);
        return ordenDeServicio;
    }

   

}

// Función para actualizar los Equpos según el cliente seleccionado seleccionado
function actualizarEquipos() {
    //alert("update equipo");
    var id=$("#cmbcliente").val();
    var url = "http://localhost:8080/equipment/findByCustomerId/"+id;
    //callApi(url, "GET", null, listEquipoCliente);

    const clienteSeleccionado = document.getElementById('cmbcliente').value;

    if (clienteSeleccionado) {
        // Realizar la solicitud AJAX para obtener los equipos del cliente seleccionado
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const equipos = JSON.parse(xhr.responseText);
                let html = "";
                equipos.forEach(equipo => {
                    html += "<option value='" + equipo.id + "'>" + equipo.serialNumber+' - '+equipo.equipmentTypeName + "</option>";
                });
                $("#cmbEquipoCliente").html(html);

            } else {
                console.error('Error al cargar los países');
            }
        };
        xhr.send();
    }
         
}

function actualizarCamposDelEquipo(){
    var id=$("#cmbEquipoCliente").val();
    var url = "http://localhost:8080/equipment/" + id;
    callApi(url, "GET", null, renderEquipmentOrder);

}

function renderEquipmentOrder(result) {
    var data = result.data;

    $("#cmbMarca").val(data.brandId);
    $("#cmbRefrigerante").val(data.refrigerantId);

}



// ==== USER =========
function viewUser(id) {
    var url = "http://localhost:8080/user/" + id;
    callApi(url, "GET", null, renderUser);
}

function deleteUser(id) {
    var url = "http://localhost:8080/user/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadUsuarios();
    })
}

function editUsuario(id, data) {
    var url = "http://localhost:8080/user/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetData").click();
        loadUsuarios();
    });

}

function createUsuario(data) {
    var url = "http://localhost:8080/user";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetData").click();
        loadUsuarios();
    });
}

function renderUser(result) {
    var data = result.data;

    var birthDayUser = new Date(data.bornDate);
    var day = ("0" + birthDayUser.getDate()).slice(-2);
    var month = ("0" + (birthDayUser.getMonth() + 1)).slice(-2);
    var today = birthDayUser.getFullYear() + "-" + (month) + "-" + (day);

    $("#userId").val(data.id);
    $("#nombres").val(data.fullName);
    $("#fechaNacimiento").val(today);
    // $("#color").val(data.color);
    $("#correo").val(data.email);
    $("#telefono").val(data.phone);
    $("#rol").val(data.rolId);
}

function renderUsers(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var user = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + user.id + "</td>"
        html += "<td>" + user.fullName + "</td>"
        html += "<td>" + user.bornDate + "</td>"
        html += "<td>" + 0 + "</td>"
        html += "<td>"
        // html += "<div class='userColor' style='background-color:" + user.color + "'></div>"
        // html += "<label class='detail-color'>" + user.color + "</label>"
        html += "</td>"
        html += "<td>" + user.email + "</td>"
        html += "<td>" + user.phone + "</td>"
        html += "<td>"
        html += "<img src='http://localhost/imagenes/not-found.png' class='avatar' width='50px' height='50px'>"
        html += "</td>"
        html += "<td>" + user.rolName + "</td>"
        html += "<td>"
        html += "<div data-id='" + user.id + "' class='eliminarUsu'>Eliminar</div>"
        html += "<div data-id='" + user.id + "' class='editarUsu'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListUsers").html(html);
    $(".eliminarUsu").click(function () {
        if (confirm("Desea eliminar el Usuario?")) {
            var id = $(this).data('id');
            deleteUser(id);
        }
    });
    $(".editarUsu").click(function () {
        if (confirm("Desea editar el Usuario?")) {
            var id = $(this).data('id');
            viewUser(id);
        }
    });
}

function loadUsuarios() {
    var url = "http://localhost:8080/user";
    callApi(url, "GET", null, renderUsers);
}


// ==== ACTIVITY ===========
function viewActivity(id) {
    var url = "http://localhost:8080/activity/" + id;
    callApi(url, "GET", null, renderActivity);
}

function deleteActivity(id) {
    var url = "http://localhost:8080/activity/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadActivitys()
    })
}

function editActivity(id, data) {
    var url = "http://localhost:8080/activity/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetActivity").click();
        loadActivitys()
    });

}

function createActivity(data) {
    var url = "http://localhost:8080/activity";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetActivity").click();
        loadActivitys()
    });
}

function renderActivity(result) {
    var data = result.data;

    $("#activityId").val(data.id);
    $("#nombreActividad").val(data.activityName);
}

function renderActivitys(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var activity = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + activity.id + "</td>"
        html += "<td>" + activity.activityName + "</td>"
        html += "<td>"
        html += "<div data-id='" + activity.id + "' class='eliminarActivity'>Eliminar</div>"
        html += "<div data-id='" + activity.id + "' class='editarActivity'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListActivity").html(html);
    $(".eliminarActivity").click(function () {
        if (confirm("Desea eliminar la actividad?")) {
            var id = $(this).data('id');
            deleteActivity(id);
        }
    });
    $(".editarActivity").click(function () {
        if (confirm("Desea editar la actividad ?")) {
            var id = $(this).data('id');
            viewActivity(id);
        }
    });
}

function loadActivitys() {
    var url = "http://localhost:8080/activity";
    callApi(url, "GET", null, renderActivitys);
}

// ===== MARCAS BRAND ========

function viewBrand(id) {
    var url = "http://localhost:8080/brand/" + id;
    callApi(url, "GET", null, renderBrand);
}

function deleteBrand(id) {
    var url = "http://localhost:8080/brand/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadBrands()
    })
}

function editBrand(id, data) {
    var url = "http://localhost:8080/brand/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetBrand").click();
        loadBrands()
    });

}

function createBrand(data) {
    var url = "http://localhost:8080/brand";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetBrand").click();
        loadBrands()
    });
}

function renderBrand(result) {
    var data = result.data;

    $("#brandId").val(data.id);
    $("#nombreMarca").val(data.brandName);
}

function renderBrands(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var brand = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + brand.id + "</td>"
        html += "<td>" + brand.brandName + "</td>"
        html += "<td>"
        html += "<div data-id='" + brand.id + "' class='eliminarBrand'>Eliminar</div>"
        html += "<div data-id='" + brand.id + "' class='editarBrand'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListBrand").html(html);
    $(".eliminarBrand").click(function () {
        if (confirm("Desea eliminar la marca?")) {
            var id = $(this).data('id');
            deleteBrand(id);
        }
    });
    $(".editarBrand").click(function () {
        if (confirm("Desea editar la marca ?")) {
            var id = $(this).data('id');
            viewBrand(id);
        }
    });
}

function loadBrands() {
    var url = "http://localhost:8080/brand";
    callApi(url, "GET", null, renderBrands);
}


// ======= REFRIGERANT ==============
function viewRefrigerant(id) {
    var url = "http://localhost:8080/refrigerant/" + id;
    callApi(url, "GET", null, renderRefrigerant);
}

function deleteRefrigerant(id) {
    var url = "http://localhost:8080/refrigerant/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadRefrigerants()
    })
}

function editRefrigerant(id, data) {
    var url = "http://localhost:8080/refrigerant/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetRefrigerant").click();
        loadRefrigerants()
    });

}

function createRefrugerant(data) {
    var url = "http://localhost:8080/refrigerant";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetRefrigerant").click();
        loadRefrigerants()
    });
}

function renderRefrigerant(result) {
    var data = result.data;

    $("#refrigerantId").val(data.id);
    $("#nombreRefrigerante").val(data.refrigerantName);
}

function renderRefrigerants(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var refrigerant = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + refrigerant.id + "</td>"
        html += "<td>" + refrigerant.refrigerantName + "</td>"
        html += "<td>"
        html += "<div data-id='" + refrigerant.id + "' class='eliminarRefrigerant'>Eliminar</div>"
        html += "<div data-id='" + refrigerant.id + "' class='editarRefrigerant'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListRefrigerants").html(html);
    $(".eliminarRefrigerant").click(function () {
        if (confirm("Desea eliminar el Refrigerante?")) {
            var id = $(this).data('id');
            deleteRefrigerant(id);
        }
    });
    $(".editarRefrigerant").click(function () {
        if (confirm("Desea editar el Refrigerante ?")) {
            var id = $(this).data('id');
            viewRefrigerant(id);
        }
    });
}

function loadRefrigerants() {
    var url = "http://localhost:8080/refrigerant";
    callApi(url, "GET", null, renderRefrigerants);
}



// ========== TIPO DE EQUIPOS =========
function viewEquipmentType(id) {
    var url = "http://localhost:8080/equipment-type/" + id;
    callApi(url, "GET", null, renderEquipmentType);
}

function deleteEquipmentType(id) {
    var url = "http://localhost:8080/equipment-type/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadEquipmentTypes()
    })
}

function editEquipmentType(id, data) {
    var url = "http://localhost:8080/equipment-type/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetEquipmentType").click();
        loadEquipmentTypes()
    });

}

function createEquipmentType(data) {
    var url = "http://localhost:8080/equipment-type";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetEquipmentType").click();
        loadEquipmentTypes()
    });
}

function renderEquipmentType(result) {
    var data = result.data;

    $("#equipmentTypeId").val(data.id);
    $("#nombreTipoEquipo").val(data.equipmentTypeName);
}

function renderEquipmentTypes(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var equipmentType = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + equipmentType.id + "</td>"
        html += "<td>" + equipmentType.equipmentTypeName + "</td>"
        html += "<td>"
        html += "<div data-id='" + equipmentType.id + "' class='eliminarEquipmentType'>Eliminar</div>"
        html += "<div data-id='" + equipmentType.id + "' class='editarEquipmentType'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListEquipmentTypes").html(html);
    $(".eliminarEquipmentType").click(function () {
        if (confirm("Desea eliminar la tipo de equipo?")) {
            var id = $(this).data('id');
            deleteEquipmentType(id);
        }
    });
    $(".editarEquipmentType").click(function () {
        if (confirm("Desea editar tipo de equipo ?")) {
            var id = $(this).data('id');
            viewEquipmentType(id);
        }
    });
}

function loadEquipmentTypes() {
    var url = "http://localhost:8080/equipment-type";
    callApi(url, "GET", null, renderEquipmentTypes);
}


// ==== CUSTOMER ===========
function viewCustomer(id) {
    var url = "http://localhost:8080/customer/" + id;
    callApi(url, "GET", null, renderCustomer);
}

function deleteCustomer(id) {
    var url = "http://localhost:8080/customer/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadCustomers();
    })
}

function editCustomer(id, data) {
    var url = "http://localhost:8080/customer/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetData2").click();
        loadCustomers();
    });

}

function createCustomer(data) {
    var url = "http://localhost:8080/customer";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetData2").click();
        loadCustomers();
    });
}

function renderCustomer(result) {
    var data = result.data;

    var birthDayUser = new Date(data.bornDate);
    var day = ("0" + birthDayUser.getDate()).slice(-2);
    var month = ("0" + (birthDayUser.getMonth() + 1)).slice(-2);
    var today = birthDayUser.getFullYear() + "-" + (month) + "-" + (day);

    $("#customerId").val(data.id);
    $("#nombres").val(data.fullName);
    $("#fechaNacimiento").val(today);
    $("#correo").val(data.email);
    $("#telefono").val(data.phone);
    $("#ciudad").val(data.city);
    $("#direccion").val(data.address);
}

function renderCustomers(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var customer = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + customer.id + "</td>"
        html += "<td>" + customer.fullName + "</td>"
        html += "<td>" + customer.bornDate + "</td>"
        html += "<td>" + customer.email + "</td>"
        html += "<td>" + customer.phone + "</td>"
        html += "<td>" + customer.address + "</td>"
        html += "<td>"
        html += "<div data-id='" + customer.id + "' class='eliminarCli'>Eliminar</div>"
        html += "<div data-id='" + customer.id + "' class='editarCli'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListCustomers").html(html);
    $(".eliminarCli").click(function () {
        if (confirm("Desea eliminar el Cliente?")) {
            var id = $(this).data('id');
            deleteCustomer(id);
        }
    });
    $(".editarCli").click(function () {
        if (confirm("Desea editar el Cliente?")) {
            var id = $(this).data('id');
            viewCustomer(id);
        }
    });
}

function loadCustomers() {
    var url = "http://localhost:8080/customer";
    callApi(url, "GET", null, renderCustomers);
}


// =======TECHNICIAN ========
function viewTechnician(id) {
    var url = "http://localhost:8080/technician/" + id;
    callApi(url, "GET", null, renderTechnician);
}

function deleteTechnician(id) {
    var url = "http://localhost:8080/technician/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadTechnicians();
    })
}

function editTechnician(id, data) {
    var url = "http://localhost:8080/technician/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetTechnician").click();
        loadTechnicians();
    });

}

function createTechnician(data) {
    var url = "http://localhost:8080/technician";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetTechnician").click();
        loadTechnicians();
    });
}

function renderTechnician(result) {
    var data = result.data;

    var birthDayUser = new Date(data.hireDate);
    var day = ("0" + birthDayUser.getDate()).slice(-2);
    var month = ("0" + (birthDayUser.getMonth() + 1)).slice(-2);
    var today = birthDayUser.getFullYear() + "-" + (month) + "-" + (day);

    $("#technicianId").val(data.id);
    $("#nombres").val(data.fullName);
    $("#fechaContratacion").val(today);
    $("#correo").val(data.email);
    $("#telefono").val(data.phone);
}

function renderTechnicians(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var technician = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + technician.id + "</td>"
        html += "<td>" + technician.fullName + "</td>"
        html += "<td>" + technician.hireDate + "</td>"
        html += "<td>" + technician.email + "</td>"
        html += "<td>" + technician.phone + "</td>"
        html += "<td>"
        html += "<div data-id='" + technician.id + "' class='eliminarTech'>Eliminar</div>"
        html += "<div data-id='" + technician.id + "' class='editarTech'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListTechnicians").html(html);
    $(".eliminarTech").click(function () {
        if (confirm("Desea eliminar el Tecnico?")) {
            var id = $(this).data('id');
            deleteTechnician(id);
        }
    });
    $(".editarTech").click(function () {
        if (confirm("Desea editar el Tecnico?")) {
            var id = $(this).data('id');
            viewTechnician(id);
        }
    });
}

function loadTechnicians() {
    var url = "http://localhost:8080/technician";
    callApi(url, "GET", null, renderTechnicians);
}




// ===== LOAD COMBOS =======
function cmbTipoMantenimiento() {
    var url = "http://localhost:8080/maintenance-type";
    callApi(url, "GET", null, listTipoMantenimiento);
}
function listTipoMantenimiento(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.maintenanceTypeName + "</option>";
    }
    $("#cmbTipoMantenimiento").html(html);
}

function cmbTecnico() {
    var url = "http://localhost:8080/technician";
    callApi(url, "GET", null, listTecnico);
}
function listTecnico(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.fullName + "</option>";
    }
    $("#cmbTecnico").html(html);
}


function loadRoles() {
    var url = "http://localhost:8080/rol";
    callApi(url, "GET", null, renderRoles);
}


function renderRoles(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.name + "</option>";
    }
    $("#rol").html(html);
}

function cmbCustomers() {
    var url = "http://localhost:8080/customer";
    callApi(url, "GET", null, litsCustomers);
}
function litsCustomers(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.fullName + "</option>";
    }
    $("#cmbcliente").html(html);
}

function cmbTipoEquipo() {
    var url = "http://localhost:8080/equipment-type";
    callApi(url, "GET", null, listTipoEquipo);
}
function listTipoEquipo(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.equipmentTypeName + "</option>";
    }
    $("#cmbtipoEquipo").html(html);
}

function cmbMarca() {
    var url = "http://localhost:8080/brand";
    callApi(url, "GET", null, listMarca);
}
function listMarca(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.brandName + "</option>";
    }
    $("#cmbMarca").html(html);
}
function cmbEquipo() {
    var url = "http://localhost:8080/equipment";
    callApi(url, "GET", null, listEquipo);
}
function listEquipo(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.serialNumber+' - '+opcion.equipmentTypeName + "</option>";
    }
    $("#cmbEquipo").html(html);
}
function listEquipoCliente(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.serialNumber+' - '+opcion.equipmentTypeName + "</option>";
    }
    $("#cmbEquipoCliente").html(html);
}
function cmbRefrigerante() {
    var url = "http://localhost:8080/refrigerant";
    callApi(url, "GET", null, listRefrigerante);
}
function listRefrigerante(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.refrigerantName + "</option>";
    }
    $("#cmbRefrigerante").html(html);
}

function cmbActivity() {
    var url = "http://localhost:8080/activity";
    callApi(url, "GET", null, listActivity);
}
function listActivity(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var opcion = result.data[i];
        html += "<option value='" + opcion.id + "'>" + opcion.activityName + "</option>";
    }
    $("#cmbActivity").html(html);
}

// ==== EQUIPMENTS (EQUIPOS) ===========
function viewEquipment(id) {
    var url = "http://localhost:8080/equipment/" + id;
    callApi(url, "GET", null, renderEquipment);
}

function deleteEqluipment(id) {
    var url = "http://localhost:8080/equipment/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadEquipments();
    })
}

function editEquipment(id, data) {
    var url = "http://localhost:8080/equipment/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetData3").click();
        loadEquipments();
    });

}

function createEquipment(data) {
    var url = "http://localhost:8080/equipment";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetData3").click();
        loadEquipments();
    });
}

function renderEquipment(result) {
    var data = result.data;

    var birthDayUser = new Date(data.installationDate);
    var day = ("0" + birthDayUser.getDate()).slice(-2);
    var month = ("0" + (birthDayUser.getMonth() + 1)).slice(-2);
    var today = birthDayUser.getFullYear() + "-" + (month) + "-" + (day);

    var birthDayUser2 = new Date(data.lastMaintenanceDate);
    var day2 = ("0" + birthDayUser2.getDate()).slice(-2);
    var month2 = ("0" + (birthDayUser2.getMonth() + 1)).slice(-2);
    var today2 = birthDayUser2.getFullYear() + "-" + (month2) + "-" + (day2);

    $("#equipmentId").val(data.id);
    $("#serial").val(data.serialNumber);
    $("#fechaInstalacion").val(today);
    $("#fechaUltimoMantenimiento").val(today2);
    $("#cmbcliente").val(data.customerId);
    $("#cmbtipoEquipo").val(data.equipmentTypeId);
    $("#cmbMarca").val(data.brandId);
    $("#cmbRefrigerante").val(data.refrigerantId);

}

function renderEquipments(result) {
    let html = "";
    for (var i = 0; i < result.data.length; i++) {
        var equipment = result.data[i];
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>"
        html += "<td>" + equipment.id + "</td>"
        html += "<td>" + equipment.serialNumber + "</td>"
        html += "<td>" + equipment.customerFullName + "</td>"
        html += "<td>" + equipment.customerPhone + "</td>"
        html += "<td>" + equipment.equipmentTypeName + "</td>"
        html += "<td>" + equipment.brandName + "</td>"
        html += "<td>" + equipment.refrigerantName + "</td>"

        html += "<td>"
        html += "<div data-id='" + equipment.id + "' class='eliminarEquip'>Eliminar</div>"
        html += "<div data-id='" + equipment.id + "' class='editarEquip'>Editar</div>"
        html += "</td>"
        html += "</tr>"
    }
    $("#bodyListEquipos").html(html);
    $(".eliminarEquip").click(function () {
        if (confirm("Desea eliminar el Equipo ?")) {
            var id = $(this).data('id');
            deleteEquipment(id);
        }
    });
    $(".editarEquip").click(function () {
        if (confirm("Desea editar el Equipo ?")) {
            var id = $(this).data('id');
            viewEquipment(id);
        }
    });
}

function loadEquipments() {
    var url = "http://localhost:8080/equipment";
    callApi(url, "GET", null, renderEquipments);
}

// ===== ORDNES DE SERVICIO ====

function viewServiceOrder(id) {
    var url = "http://localhost:8080/service-order/" + id;
    callApi(url, "GET", null, renderServiceOrder);
}

function deleteServiceOrder(id) {
    var url = "http://localhost:8080/service-order/" + id;
    callApi(url, "DELETE", null, function () {
        alert("Registro eliminado con exito!");
        loadServiceOrders();
    })
}

function editServiceOrder(id, data) {
    var url = "http://localhost:8080/service-order/" + id;

    callApi(url, "PUT", data, function () {
        alert("Registro actualizado");
        $("#resetData4").click();
        loadServiceOrders();
    });

}

function createServiceOrder(data) {
    var url = "http://localhost:8080/service-order";

    callApi(url, "POST", data, function () {
        alert("Registro creado");
        $("#resetData4").click();
        loadServiceOrders();
    });
}

function renderServiceOrder(result) {
    var data = result.data;

    var birthDayUser = new Date(data.date);
    var day = ("0" + birthDayUser.getDate()).slice(-2);
    var month = ("0" + (birthDayUser.getMonth() + 1)).slice(-2);
    var today = birthDayUser.getFullYear() + "-" + (month) + "-" + (day);


    $("#serviceOrderId").val(data.id);
    $("#serial").val(data.serialNumber);
    $("#fechaInstalacion").val(today);
    // $("#fechaUltimoMantenimiento").val(today2);
    $("#cmbcliente").val(data.customerId);
    $("#cmbtipoEquipo").val(data.equipmentTypeId);
    $("#cmbMarca").val(data.brandId);
    $("#cmbRefrigerante").val(data.refrigerantId);

}

function renderServiceOrders(result) {
    //var data = result.data;
    console.log(typeof(result));
    let html = "";
    let i=0;
    result.forEach(item => {
        console.log("ID:", item.id);
        console.log("Customer ID:", item.customerId);
        console.log("Equipment ID:", item.equipmentId);
        console.log("Date:", item.date);
        console.log("Customer Full Name:", item.customerFullName);
        console.log("Serial Number:", item.serialNumber);
        console.log("Equipment Type Name:", item.equipmentTypeName);
        console.log("Brand Name:", item.brandName);
        console.log("Refrigerant Name:", item.refrigerantName);
    
        // Recorrer el array 'details' dentro de cada objeto
    
        item.details.forEach(detail => {
            console.log(detail.description)
            html += "<tr>";
            html += "<th scope='row'>" + (i+1) + "</th>"
            html += "<td>" + detail.id + "</td>"
            html += "<td>" + item.id + "</td>"
            html += "<td>" + item.serialNumber + "</td>"
            html += "<td>" + item.equipmentTypeName + "</td>"
            html += "<td>" + item.customerFullName + "</td>"
            html += "<td>" + detail.description + "</td>"
        
            // html += "<td>"
            // html += "<div data-id='" + detail.id + "' class='eliminarServi'>Eliminar</div>"
            // html += "<div data-id='" + detail.id + "' class='editarServi'>Editar</div>"
            // html += "</td>"
            html += "</tr>"
            i=i+1;
        });
   
    });

    $("#bodyListServiceOrder").html(html);
    $(".eliminar").click(function () {
        if (confirm("Desea eliminar el registro?")) {
            var id = $(this).data('id');
            deleteServiceOrder(id);
        }
    });
    $(".editar").click(function () {
        if (confirm("Desea editar el Equipo registro?")) {
            var id = $(this).data('id');
            viewServiceOrder(id);
        }
    });


}

function loadServiceOrders() {
    var url = "http://localhost:8080/service-order";
    callApi(url, "GET", null, renderServiceOrders);
}
