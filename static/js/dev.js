
/**
 * Este codigo es para la seccion del desarollo de software
 */



/**
 * Este metodo muestra la opcion de desarollo en la pantalla
 */
function mostrarOpcionDev(){
    let contenedor = document.querySelector('#seccion-dev');

    if(contenedor.innerHTML == ''){
        contenedor.innerHTML =  `
            <h1 class="title">Tecnologias que conozco</h1>

            <div id="contenedor-skills"></div>

            <h1 class="title">Proyectos de programación</h1>
            <div id="contenedor-proyects"></div>
    `;

    //agregamos los skills
    let contenedorSkill = document.querySelector("#contenedor-skills");
    let skills = [
        {
            'titulo':'c',
            'icon':'c.svg',
            'info':'Lo utilizo cuando resuelvo problemas de programación competitiva por su alto rendimiento'
        },
        {
            'titulo':'c++',
            'icon':'cMas.svg',
            'info':'Lo utilizo cuando programo microcontroladores y problemas donde necesite programación orientada a objetos'
        },
        {
            'titulo':'C#',
            'icon':'cSharp.svg',
            'info': 'Lo utilizo para desarrollar programas de escritorio y algunas aplicaciones móviles'
        },
        {
            'titulo':'Java',
            'icon':'java.svg',
            'info':'Lo utilizo para desarrollar programas de escritorio o scripts para realizar ciertas tareas que necesito'
        },
        {
            'titulo':'JavaScript',
            'icon':'js.svg',
            'info':'Lo utilizo para aplicaciones web del lado del cliente para mejorar la experiencia de usuario'
        },
        {
            'titulo':'Python',
            'icon':'python.svg',
            'info':'Lo utilizo para aplicaciones web de lado del backend APIS o scripts en los que necesito realizar ciertas tareas'
        },
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
    let contenedorProyect = document.querySelector("#contenedor-proyects");
    let proyects = [
        {
            'titulo':'MotApp',
            'icon':'MotApp.svg',
            'imagen':'MotApp.jpg',
            'info':'2018 aplicación móvil android para el control y monitoreo de motocicletas.',
            'tecnologia':['Java','UX UI','Dialowflow']
        },
        {
            'titulo':'PSG',
            'icon':'PSG.ico',
            'imagen':'PSG.png',
            'info':'2019 Sistema para monitorear la ubicación de los vehículos y además realizar la gestión de los pedidos.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'IcePol',
            'icon':'PolIce.ico',
            'imagen':'PolIce.png',
            'info':'2019 Sistema de punto de venta para la gestión de ventas e inventario de productos.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'Sistema de punto de venta',
            'icon':'java.svg',
            'imagen':'PolIce.png',
            'info':'2021 Sistema de punto de venta para la gestión de ventas e inventario de productos.',
            'tecnologia':['Java','Derby']
        },
        {
            'titulo':'Sistema de control de peliculas',
            'icon':'java.svg',
            'imagen':'controlPeliculas.png',
            'info':'2021 Sistema para la gestión de la renta de peliculas.',
            'tecnologia':['Java','JDBC','GlassFish','MySQL','GIT']
        },
        {
            'titulo':'Finanzas X',
            'icon':'finanzasX.png',
            'imagen':'finanzasX1.png',
            'info':'2021 Sistema para la gestión de las finanzas de startups para el laboratorio de software libre labsol en el cual se puede realizar el balance de un proyecto así como el gestionar el gasto por los recursos de capital humano.',
            'tecnologia':['Django','Figma UX UI','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'Iplant',
            'icon':'Iplant1.png',
            'imagen':'Iplant.png',
            'info':'2021 Sistema para el registro de pruebas de los experimentos realizados en invernaderos.',
            'tecnologia':['Firebase','HTML','CSS','JS']
        },
        {
            'titulo':'Invernadero CZ',
            'icon':'czPRO.svg',
            'imagen':'czPRO.png',
            'info':'2022 Sistema de monitoreo y control de invernaderos ',
            'tecnologia':['Django','Figma UX UI','PWA','API','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'Planeación Docente',
            'icon':'planeacionDocente.svg',
            'imagen':'planeacionDocente.png',
            'info':'2022 Sistema para la gestión y colaboración de las planeaciones de los docentes.',
            'tecnologia':['Django','Figma UX UI','API','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'FishGroup',
            'icon':'fishGroup.png',
            'imagen':'fishGroup1.png',
            'info':'2023 Sistema para la gestión de pruebas y control de invernaderos de pescados.',
            'tecnologia':['Django','Figma UX UI','PWA','SPA','API','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'Inifap',
            'icon':'inifap.svg',
            'imagen':'inifap.png',
            'info':'2023 Sistema para la gestión de los gastos de proyectos del inifap.',
            'tecnologia':['Django','TDD','Figma UX UI','PWA','SPA','NGINX','API','HTML','CSS','JS','Docker','PostgreSQL','GIT']
        },
        {
            'titulo':'Lecheria Cienega Jerez',
            'icon':'lecheriaCienegaJerez.svg',
            'imagen':'lecheriaCienegaJerez.png',
            'info':'2024 Sistema para la gestión de compras y ventas de productos, análisis del comportamiento de compras y ventas de los usuarios y predicción de las mismas.',
            'tecnologia':['Django','TDD','Figma UX UI','PWA','SPA','NGINX','API','HTML','CSS','JS','Docker','PostgreSQL','GIT']
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