


/**
 * codigo para la secciond e me
 */


function desplegarMe(){
    //obtenemos el contenedor
    let contenedor = document.querySelector('.me');
    //revisamos si el contenedor es visisble
    //si no es visibles le quitamos la clase display-none para que este sea visible
    if(contenedor.classList.contains('display-none') == true){
        contenedor.classList.remove('display-none');
    }else{// si es visible entonces lo escondemos
        contenedor.classList.add('display-none')
    }
}