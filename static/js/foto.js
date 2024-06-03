
/**
 * Este codigo es para la seccion de foto
 */



/**
 * Este metodo muestra la opcion de desarollo en la pantalla
 */
function mostrarOpcionFoto(){
    let contenedor = document.querySelector('#seccion-foto');
    
    let fotos = [
    		'1.jpg',
    		'2.jpg',
    		'3.jpg',
    		'4.jpg',
    		'5.jpg',
    		'6.jpg',
    		'7.jpg',
    		'8.jpg',
    		'9.jpg',
            '10.jpg'
    	];
    	
    let fotosHtml = '';
    for(a in fotos){
    	fotosHtml +=`<img src="static/fotos/${fotos[a]}" alt="paul santana" loading="lazy">`;
    }

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
        ${fotosHtml}
    </div>
    `;
    }
    //mostramos la seccion
    mostrarSeccionSeleccionada(contenedor);
}
