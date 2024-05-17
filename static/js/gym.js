
/**
 * Este codigo es para la seccion de foto
 */



/**
 * Este metodo muestra la opcion de desarollo en la pantalla
 */
function mostrarOpcionGym(){
    let contenedor = document.querySelector('#seccion-gym');

    if(contenedor.innerHTML ==''){
        contenedor.innerHTML =  `
        <h1 class="title">Entrenamientos</h1>

            <div class="container-gym">
                <div>
                    <h2>Ejercicios</h2>
                    <div>
                        <img src="static/icons/iconDumbell.svg" alt="">
                        <span>Pesas</span>
                    </div>
                    <div>
                        <img src="static/icons/iconBody.svg" alt="">
                        <span>Calistenia</span>
                    </div>
                    <div>
                        <img src="static/icons/iconBox.svg" alt="">
                        <span>Box</span>
                    </div>

                </div>

                <div>
                    <h2>Medidas</h2>
                    <div>
                        <img src="static/icons/iconBody.svg" alt="">
                        <span>1.72cm</span>
                    </div>
                    <div>
                        <img src="static/icons/iconBascula.svg" alt="">
                        <span>65kg</span>
                    </div>

                </div>
            </div>
        <h1 class="title">PICS</h1>

        <div class='container-images'>
            <img src="static/fotos-gym/2018.png" alt="nikon" loading="lazy">
            <img src="static/fotos-gym/2018-1.png" alt="nikon" loading="lazy">
        </div>
    `;
    }
    //mostramos la seccion
    mostrarSeccionSeleccionada(contenedor);
}