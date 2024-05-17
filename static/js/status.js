

/**
 * Este codigo se encarga del reloj de status el cual indica la tarea que posiblemente 
 * estoy realizando
 */



/**
 * Este metodo muestra el status del reloj
 * osea la tarea que esta realizando Paul Santana
 */
function mostrasStatusReloj(){
    let hora = new Date();
    //restamos 1 hora para que coincida con la actual
    hora.setHours(hora.getHours()-1);

    //obtenemos la etiqueta del status
    let status = document.querySelector('.state-container').children[1];

    //si esta entre 5 y 7 estoy haciendo ejercicio
    if(hora >= horario(5,0) && hora <= horario(7,0)){
        status.innerHTML= 'Entrenando🦍';
    }else if(hora >= horario(7,1) && hora <= horario(8,0)){
        //alistandome
        status.innerHTML= 'Alistandome🫡';
    }else if(hora >= horario(8,1) && hora <= horario(9,0)){
        //transporte
        status.innerHTML= 'Transportandome🛵';
    }else if(hora >= horario(9,1) && hora <= horario(10,0)){
        //desyunando
        status.innerHTML= 'Desayunando🐷';
    }else if(hora >= horario(10,1) && hora <= horario(13,30)){
        //trabajando
        status.innerHTML= 'Trabajando⚡';
    }else if(hora >= horario(13,31) && hora <= horario(14,0)){
        //comiendo
        status.innerHTML= 'Comiendo🐷';
    }else if(hora >= horario(14,1) && hora <= horario(18,0)){
        //trabajando
        status.innerHTML= 'Trabajando⚡';
    }else if(hora >= horario(18,1) && hora <= horario(19,0)){
        //transporte
        status.innerHTML= 'Transportandome🛵';
    }else if(hora >= horario(19,1) && hora <= horario(20,0)){
        //comiendo
        status.innerHTML= 'Comiendo🐷';
    }else if(hora >= horario(20,1) && hora <= horario(21,0)){
        //pensando
        status.innerHTML= 'Pensando🧠';
    }else if(hora >= horario(21,1) && hora <= horario(21,30)){
        //alistandome para dormir
        status.innerHTML= 'Alistandome para dormir🍃';
    }else{
        //durmiendo
        status.innerHTML= 'Durmiendo😴';
    }
}

//Mostramos el status al inicio del programa
mostrasStatusReloj();
//mostramos el status cada 1 Min
setInterval(mostrasStatusReloj,60000);

/**
 * Este metodo devuelve la fecha actual pero con la hora y minutos deseados
 * @param {hora que vamos a elegir} hora 
 * @param {minutos que vamos a elegir} minutos 
 * @returns fecha actual con hora y minutos alterados
 */
function horario(hora,minutos){
    let tiempo  = new Date();
    tiempo.setHours(hora);
    tiempo.setMinutes(minutos)
    return tiempo;
}