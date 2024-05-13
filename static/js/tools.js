
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