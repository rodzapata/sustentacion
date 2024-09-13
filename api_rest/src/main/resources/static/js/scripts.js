const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");
const themetoggler= document.querySelector(".theme-toggler");


menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';

})

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
    
})

themetoggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');

    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');

})

function loadMenu(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            activeOpcion();
            loadRoles();
            loadUsuarios();
            loadCustomers();
            loadEquipments();
            cmbCustomers();
            cmbTipoEquipo();
            cmbMarca();
            cmbRefrigerante();
            cmbEquipo();
            cmbTipoMantenimiento();
            cmbTecnico();
            cmbActivity();
            loadServiceOrders();
            loadActivitys();
            loadTechnicians();
            loadEquipmentTypes();
            loadBrands();
            loadRefrigerants();
            loadFormEvent();

        })
        .catch(error => console.error('Error al cargar la página:', error));
        
}
function activeOpcion(){
    let enlaces = document.querySelectorAll('a');
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            // Remover la clase "active" de todos los enlaces
            enlaces.forEach(function (enlace) {
                enlace.classList.remove('active');
            });
            
            // Agregar la clase "active" al enlace actual
            this.classList.add('active')
        });
    });

}

//Agregar un evento CLICK a cada enlace
function activeOption2(){
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            // Remover la clase "active" de todos los enlaces
            enlaces.forEach(function (enlace) {
                enlace.classList.remove('active');
            });
            
            // Agregar la clase "active" al enlace actual
            this.classList.add('active')
    
            // Obtener el contenido correspondiente según el enlace
            let contenido = obtenerContenido(this.textContent)
    
            tituloElemento.innerHTML = contenido.titulo
            subTituloElemento.innerHTML = contenido.subtitulo
            parrafoElemento.innerHTML = contenido.parrafo
            precioElemento.innerHTML = contenido.precio
        });
    });
}

function loadContent(page,elemenId) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elemenId).innerHTML = data;
            // loadRoles();
            // loadUsuarios();
            // loadFormEvent();
        
        })
        .catch(error => console.error('Error al cargar la página:', error));
}

function loadContentChange(page,elemenId) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elemenId).outerHTML = data;
            // loadRoles();
            // loadUsuarios();
            // loadFormEvent();
        
        })
        .catch(error => console.error('Error al cargar la página:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    // loadContent('aside_admin.html','aside');
    loadContent('dashboard.html','main-content');

    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado) {
        // Convertir el string de localStorage a objeto
        const usuarioData = JSON.parse(usuarioLogueado);
    
        // Extraer los valores de email, rolName y avatar
        const rolName = usuarioData.data.rolName;

        if  (rolName=="asistente"){
            loadContentChange('aside_asist.html','aside');
        }
    }
  
    actualizarPerfil();

});


