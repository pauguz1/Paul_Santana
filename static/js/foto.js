
/**
 * Este codigo es para la seccion de foto
 */



/**
 * Este metodo muestra la opcion de desarollo en la pantalla
 */
function mostrarOpcionFoto(){
    let contenedor = document.querySelector('#seccion-foto');

    if(contenedor.innerHTML ==''){
        contenedor.innerHTML =  `
    <h1 class="title">Herramientas</h1>
            
    <div class="tools">
        <div>
            <img src="static/icons/iconNikon.svg" alt="nikon">
            <span>Camara Nikon D3200</span>
        </div>
        <div>
            <img src="static/icons/iconLightroom.svg" alt="lightroom">
            <span>lightroom</span>
        </div>
        <div>
            <img src="static/icons/iconPhotoshop.svg" alt="photoshop">
            <span>Photoshop</span>
        </div>
    </div>
    <h1 class="title">PICS</h1>

    <div class='container-images'>
        <img src="static/fotos/2022.png" alt="paul santana" loading="lazy">
        <img src="static/fotos/2022-1.png" alt="paul santana" loading="lazy">
    </div>
    `;
    }
    //mostramos la seccion
    mostrarSeccionSeleccionada(contenedor);
}