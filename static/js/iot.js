
/**
 * Este codigo es para la seccion del desarollo de sistemas iot
 */



/**
 * Este metodo muestra la opcion de desarollo en la pantalla
 */
function mostrarOpcionIot(){
    let contenedor = document.querySelector('#seccion-iot');

    if(contenedor.innerHTML == ''){
        contenedor.innerHTML =  `
            <h1 class="title">Tecnologias que conozco</h1>

            <div class="skill">
                <div>
                    <img src="static/icons/iconCamera.svg" alt="icono skill">
                    <span>Skill</span>
                </div>
                <p>
                    informacion adicional del skill
                </p>
            </div>


            <h1 class="title">Proyectos de programación</h1>

            <div class="proyect">
                <div>
                    <img src="static/icons/iconCamera.svg" alt="icono skill">
                    <span>PolSerial</span>
                </div>
                <p> informacion adicional del skill</p>
                <img src="static/images/imagenPrincipal.png" alt="">
                <h2>Tecnologias:</h2>
                <h3>C#</h3>
                <h3>C++</h3>
                <h3>Arduino</h3>
            </div>
    `;
    }
    //mostramos la seccion
    mostrarSeccionSeleccionada(contenedor);
}