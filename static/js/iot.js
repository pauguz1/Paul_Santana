
/**
 * Este codigo es para la seccion del desarollo de sistemas iot
 */



/**
 * Este codigo es para la seccion del desarollo de software
 */



/**
 * Este metodo muestra la opcion de desarollo en la pantalla
 */
function mostrarOpcionIot(){
    let contenedor = document.querySelector('#seccion-iot');

    if(contenedor.innerHTML == ''){
        contenedor.innerHTML =  `
            <h1 class="title">Tecnologias que conozco</h1>

            <div id="contenedor-skills-iot"></div>

            <h1 class="title">Proyectos de programación</h1>
            <div id="contenedor-proyects-iot"></div>
    `;

    //agregamos los skills
    let contenedorSkill = document.querySelector("#contenedor-skills-iot");
    let skills = [
        {
            'titulo':'Arduino',
            'icon':'arduino.png',
            'info':'Utilizó el firmware de arduino para programar múltiples tipos de microcontroladores debido a su gran cantidad de librerías y comunidad existente.'
        },
        {
            'titulo':'Atmega 328P',
            'icon':'micro.png',
            'info':'Este microcontrolador lo utilizo mucho para cuando estoy realizando pruebas de código y necesito correr rápidamente las pruebas del sistema o hacer cosas rápido.'
        },
        {
            'titulo':'ESP-8266',
            'icon':'micro.png',
            'info':'Este microcontrolador lo utilizó para la mayor cantidad de proyectos por su gran versatilidad y bajo coste y su alto poder de cómputo ya que si uno programa adecuadamente no es necesario micros más potentes.'
        },
        {
            'titulo':'ESP-32',
            'icon':'micro.png',
            'info':'Este microcontrolador lo utilizo cuando necesito realizar 2 tareas a la par ya que cuenta con 2 hilos y con ello puedo realizar 2 tareas individuales y con ello obtener un mayor rendimiento en cada tarea.'
        }
    ]

    //recorremos las listas que contienen todos los elementos para crear un skill (titulo, imagen, informacion)
    for(a in skills){
        let skill = document.createElement('div');
        skill.classList.add('skill');
        skill.innerHTML=`
                <div>
                    <img src="static/icons/${skills[a].icon}" alt="icono ${skills[a].titulo}">
                    <span>${skills[a].titulo}</span>
                </div>
                <p>
                    ${skills[a].info}
                </p>`;
        //agreamos el skill al contenedor de skills
        contenedorSkill.appendChild(skill);
    }

    //agregamos los proyectos 
    let contenedorProyect = document.querySelector("#contenedor-proyects-iot");
    let proyects = [
        {
            'titulo':'PolHome',
            'icon':'PolHome.ico',
            'imagen':'PolHome.jpg',
            'info':'2019 sistema para el control y monitoreo de un sistema de iluminación el cual está alimentado por energía solar en el cual podemos ver la temperatura del exterior y la carga de las baterías de litio.',
            'tecnologia':['C#','Firebase','ESP8266','Arduino']
        },
        {
            'titulo':'PolSafe',
            'icon':'PolSafe.ico',
            'imagen':'PolSafe.jpg',
            'info':'2019 Sistema de alarma el cual envía los datos de las detecciones a una base de datos en tiempo real la cual puede ser consultada mediante una app móvil.',
            'tecnologia':['C#','Firebase','ESP8266','Arduino']
        },
        {
            'titulo':'PolSerial',
            'icon':'PolSerial2.ico',
            'imagen':'PolSerial.png',
            'info':'2019 Sistema para la comunicación de microcontroladores y una interfaz de software con la cual se puede realizar la configuración de una interfaz mediante el micro para con ello poder presentar datos en la interfaz o utilizar los botones para ejecutar acciones en el microcontrolador.',
            'tecnologia':['C#','Arduino']
        },
        {
            'titulo':'Plantas Labsol',
            'icon':'PlantasLabsol.ico',
            'imagen':'PlantasLabsol.png',
            'info':'2019 Sistema para el monitoreo en tiempo real de invernaderos del laboratorio de software libre labsol.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'Domótica',
            'icon':'Domotica.ico',
            'imagen':'Domotica.png',
            'info':'2019 Sistema para el control y monitoreo de las lámparas de una casa la cual es alimentada por energía solar en la cual podemos ver la carga restante de las baterías y la temperatura, además de configurar para que las luces se enciendan automáticamente si es de noche.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'PolFit',
            'icon':'PolFit.ico',
            'imagen':'PolFit.png',
            'info':'2019 Sistema para el monitoreo del conteo de ejercicios en tiempo real mediante una app de escritorio en la cual se pruebe visualizar el conteo de los ejercicios realizados por un usuario.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'MedikTrue',
            'icon':'MedikTrue.ico',
            'imagen':'MedikTrue.png',
            'info':'2020 Sistema de control en tiempo real de servomotores mediante una aplicación de escritorio en la cual se elige si se quiere controlar o ser controlado un servomotor.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'Dron',
            'icon':'dron.ico',
            'imagen':'dron.png',
            'info':'2020 Sistema para controlar los motores de un dron mediante una aplicación de escritorio y el puerto serial.',
            'tecnologia':['C#','Puerto Serial']
        },
        {
            'titulo':'PolBot',
            'icon':'polBot1.png',
            'imagen':'polBot.png',
            'info':'2020 Sistema para configurar una serie de movimientos que luego serán ejecutados mediante un brazo robótico de 5 grados de libertad utilizando el puerto serial.',
            'tecnologia':['C#','Puerto Serial']
        },
        {
            'titulo':'Respirador',
            'icon':'respirador.ico',
            'imagen':'respirador.png',
            'info':'2020 Sistema de monitoreo y administración del uso de los respiradores en tiempo real.',
            'tecnologia':['C#','Firebase','Puerto Serial']
        },
        {
            'titulo':'Monitoreo Temperatura y Humedad',
            'icon':'MonitoreoTempHum.png',
            'imagen':'MonitoreoTempHum1.png',
            'info':'2020 Sistema de monitoreo y administración del uso de los respiradores en tiempo real.',
            'tecnologia':['C#','Firebase','ESP-8266']
        },
        {
            'titulo':'Invernadero PRO',
            'icon':'InvernaderoPro.ico',
            'imagen':'InvernaderoPro.png',
            'info':'2021 Sistema para el control de los horarios de riego de invernaderos en tiempo real.',
            'tecnologia':['C#','Figma UX UI','Firebase','ESP-8266']
        },
        {
            'titulo':'Control Lámpara',
            'icon':'lampara.png',
            'imagen':'sistemaControlLampara.png',
            'info':'2023 Sistema de control en tiempo real de una lámpara utilizando microservicios y mi propia metodología de diseño e implementación de arquitectura de microservicios en sistemas IOT.',
            'tecnologia':['Nodejs','Figma UX UI','NGINX','Docker','HTML','CSS','JS','ESP-8266']
        },
        {
            'titulo':'Estación Meteorológica',
            'icon':'estacion.png',
            'imagen':'sistemaMonitoreo.png',
            'info':'2023 Sistema de monitoreo en tiempo real, monitoreo histórico y predicción de la temperatura y humedad del ambiente utilizando microservicios y mi propia metodología de diseño e implementación de arquitectura de microservicios en sistemas IOT.',
            'tecnologia':['Nodejs','Figma UX UI','Django','TensorFlow','API','NGINX','Docker','HTML','CSS','JS','ESP-8266']
        }
    ]

    //recorremos las listas que contienen todos los elementos para crear un proyect (titulo, imagen, informacion)
    for(a in proyects){
        //creamos las etiquetas para mostrar las tecnologias (recorriendo el arreglo que contiene las tecnologias)
        let tecnologias = '';
        for(b in proyects[a].tecnologia){
            tecnologias += '<h3>'+ proyects[a].tecnologia[b]+'</h3>';
        }
        //creamos el contenedor del proyecto
        let proyect = document.createElement('div');
        proyect.classList.add('proyect');
        proyect.innerHTML=`
            <div>
                <img src="static/proyectos/${proyects[a].icon}" alt="icono ${proyects[a].titulo}">
                <span>${proyects[a].titulo}</span>
            </div>
            <p>${proyects[a].info}</p>
            <img src="static/proyectos/${proyects[a].imagen}" alt="${proyects[a].titulo}">
            <h2>Tecnologias:</h2>
            ${tecnologias}
                `;
        //agreamos el proyect al contenedor de proyects
        contenedorProyect.appendChild(proyect);
    }




    }
    //mostramos la seccion
    mostrarSeccionSeleccionada(contenedor);
}