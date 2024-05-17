
/**
 * Este codigo contiene funciones globales usadas en toda la pagina
 */

/**
 * Este metodo recorre la lista de elementos 
 * y marca como seleccionado el que le pasemos como parametro
 * y todos los demas les quita la clase de seleccionado
 * @param {elemento que se va a seleccionar} seleccionado 
 */
function mostrarOpcionSeleccionada(seleccionado){
    let listaElmenetos = document.querySelectorAll('.navigation-bar-bottom div');

    listaElmenetos.forEach(elemento=>{
        //si el elemento es el seleccionado entonces agregamos la clase seleccionado
        //para que este se seleccione
        if(elemento == seleccionado){
            elemento.classList.add('selected');
            
        }else{// si no es entonces la quitamos la clase de seleccionado
            elemento.classList.remove('selected');
        }
    });
}


/**
 * Este metodo recorre la lista de secciones
 * y pone a todas las secciones la clase display-none
 * menos a la que le pasemos como parametro
 * @param {elemento que se va mostrar} seleccionado 
 */
function mostrarSeccionSeleccionada(seleccionado){
    let listaElmenetos = document.querySelectorAll('main section');

    listaElmenetos.forEach(elemento=>{
        //si el elemento es el seleccionado entonces agregamos la clase seleccionado
        //para que este se seleccione
        if(elemento == seleccionado){
            elemento.classList.remove('display-none');
            
        }else{// si no es entonces la quitamos la clase de seleccionado
            elemento.classList.add('display-none');
        }
    });
}


/**
 * Este metodo muestra en pantalla el mensaje para la instalacion de la PWA
 */
function instalarPWA(){
    // Consulta si ya se puede instalar la PWA
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    console.log('La PWA ya está instalada.');
  } else {
    // Verifica si el evento beforeinstallprompt está disponible
    if (window.deferredPrompt) {
      // Muestra el mensaje de instalación
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación de la PWA');
        } else {
          console.log('El usuario canceló la instalación de la PWA');
        }
        window.deferredPrompt = null;
      });
    } else {
      console.error('El evento beforeinstallprompt no está disponible.');
    }
  }
}