import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import '../../global.css';
import './LandingPage.css';

//importamos iconos
import iconDev from '../../assets/icons/iconDev.svg'
import iconBook from '../../assets/icons/iconBook.svg'
import iconMe from '../../assets/icons/iconMe.svg'
import iconCamera from '../../assets/icons/iconCamera.svg'
import iconGYM from '../../assets/icons/iconGYM.svg'







const LandingPageComponent = ()=>{

    //referencias para el foco de cada seccion
    const devRef = useRef(null);
    const booksRef = useRef(null);
    const meRef = useRef(null);
    const fotoRef = useRef(null);
    const gymRef = useRef(null);


    // para la lista de proyectos dev
    const [listaProyectosDev, setListaProyectosDev] = useState([
      {
        titulo:'FishGroup',
        icono_titulo:'./imagenes_proyectos_dev/iconFishGroup.png',
        descripcion:'Sistema de control y monitoreo de invernadero',
        imagen:'./imagenes_proyectos_dev/FishGroup.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconDocker.svg',
          './icons/iconPostgreSQL.svg',
          './icons/iconDjango.svg',
          './icons/iconCPlusPlus.svg',
          './icons/iconJS.svg',
          './icons/iconPython.svg',
          './icons/iconGIT.svg',
          './icons/iconFigma.svg',
        ]
      },
      {
        titulo:'Polserial',
        icono_titulo:'./imagenes_proyectos_dev/iconPolSerial.ico',
        descripcion:'app para comunicacion serial',
        imagen:'./imagenes_proyectos_dev/PolSerial.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCSharp.svg',
          './icons/iconCPlusPlus.svg',
        ]
      },{
        titulo:'Control peliculas',
        icono_titulo:'./icons/iconJava.svg',
        descripcion:'Sistema de gestión de inventario para la renta de peliculas.',
        imagen:'./imagenes_proyectos_dev/controlPeliculas.png',
        tecnologias:[
          './icons/iconJava.svg',
          './icons/iconSQL.svg',
          './icons/iconGIT.svg',
        ]
      },{
        titulo:'CZ',
        icono_titulo:'./imagenes_proyectos_dev/iconCZPRO.svg',
        descripcion:'Sistema de control de invernadero para plantas.',
        imagen:'./imagenes_proyectos_dev/czPRO.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconDocker.svg',
          './icons/iconPostgreSQL.svg',
          './icons/iconDjango.svg',
          './icons/iconCPlusPlus.svg',
          './icons/iconJS.svg',
          './icons/iconPython.svg',
          './icons/iconGIT.svg',
          './icons/iconFigma.svg',
        ]
      },{
        titulo:'Domotica',
        icono_titulo:'./imagenes_proyectos_dev/iconDomotica.ico',
        descripcion:'Sistema de control de luces para mi hogar.',
        imagen:'./imagenes_proyectos_dev/domotica.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCSharp.svg',
          './icons/iconCPlusPlus.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'Dron',
        icono_titulo:'./imagenes_proyectos_dev/iconDron.ico',
        descripcion:'Sistema de control motores de dron.',
        imagen:'./imagenes_proyectos_dev/dron.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCSharp.svg',
          './icons/iconCPlusPlus.svg',
        ]
      },{
        titulo:'Estación',
        icono_titulo:'./imagenes_proyectos_dev/iconEstacion.png',
        descripcion:'Estación metereologica propia.',
        imagen:'./imagenes_proyectos_dev/sistemaMonitoreo.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconDocker.svg',
          './icons/iconPostgreSQL.svg',
          './icons/iconDjango.svg',
          './icons/iconCPlusPlus.svg',
          './icons/iconJS.svg',
          './icons/iconPython.svg',
          './icons/iconTensorFlow.svg',
          './icons/iconNodeJS.svg',
          './icons/iconGIT.svg',
          './icons/iconFigma.svg',
        ]
      },{
        titulo:'Finanzas X',
        icono_titulo:'./imagenes_proyectos_dev/iconFinanzasX.png',
        descripcion:'Sistema para la gestión de finanzas de proyectos de software.',
        imagen:'./imagenes_proyectos_dev/finanzasX.png',
        tecnologias:[
          './icons/iconDjango.svg',
          './icons/iconJS.svg',
          './icons/iconPython.svg',
          './icons/iconGIT.svg',
          './icons/iconFigma.svg',
        ]
      },{
        titulo:'Inifap',
        icono_titulo:'./imagenes_proyectos_dev/iconInifap.svg',
        descripcion:'Sistema para la gestión de gastos de proyectos del inifap.',
        imagen:'./imagenes_proyectos_dev/inifap.png',
        tecnologias:[
          './icons/iconDocker.svg',
          './icons/iconPostgreSQL.svg',
          './icons/iconDjango.svg',
          './icons/iconJS.svg',
          './icons/iconPython.svg',
          './icons/iconGIT.svg',
          './icons/iconFigma.svg',
        ]
      },{
        titulo:'Sistema de control de riegos',
        icono_titulo:'./imagenes_proyectos_dev/iconInvernaderoPRO.ico',
        descripcion:'Sistema para la gestión de riego de plantas.',
        imagen:'./imagenes_proyectos_dev/invernaderoPRO.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCSharp.svg',
          './icons/iconCPlusPlus.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'Sistema recolección de datos',
        icono_titulo:'./imagenes_proyectos_dev/iconIplant.png',
        descripcion:'Sistema para la gestión de experimentos con plantas.',
        imagen:'./imagenes_proyectos_dev/iplant.png',
        tecnologias:[
          './icons/iconJS.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'Sistema de control de luces',
        icono_titulo:'./imagenes_proyectos_dev/iconLampara.png',
        descripcion:'Sistema para el control de luces creado totalmente por mi.',
        imagen:'./imagenes_proyectos_dev/sistemaControlLampara.png',
        tecnologias:[
          './icons/iconJS.svg',
          './icons/iconNodeJS.svg',
        ]
      },{
        titulo:'Lecheria Cienega Jerez',
        icono_titulo:'./imagenes_proyectos_dev/iconLecheriaCienegaJerez.svg',
        descripcion:'Sistema para la gestion de compras y ventas de una empresa de lacteos.',
        imagen:'./imagenes_proyectos_dev/lecheriaCienegaJerez.png',
        tecnologias:[
          './icons/iconDocker.svg',
          './icons/iconPostgreSQL.svg',
          './icons/iconDjango.svg',
          './icons/iconJS.svg',
          './icons/iconTensorFlow.svg',
          './icons/iconPython.svg',
          './icons/iconGIT.svg',
          './icons/iconFigma.svg',
        ]
      },{
        titulo:'Sistema de gestion de respiradores',
        icono_titulo:'./imagenes_proyectos_dev/iconMedikTrue.ico',
        descripcion:'Sistema para la gestion y control de respidadores.',
        imagen:'./imagenes_proyectos_dev/medikTrue.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCSharp.svg',
          './icons/iconCPlusPlus.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'Sistema monitoreo de temperatura y humedad',
        icono_titulo:'./imagenes_proyectos_dev/iconMonitoreoTemperaturaHumedad.png',
        descripcion:'Sistema para la gestion y control de respidadores.',
        imagen:'./imagenes_proyectos_dev/monitoreoTemperaturaHumedad.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCPlusPlus.svg',
          './icons/iconJS.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'MotApp',
        icono_titulo:'./imagenes_proyectos_dev/iconMotApp.svg',
        descripcion:'Sistema de control y monitoreo de motocicletas.',
        imagen:'./imagenes_proyectos_dev/motApp.jpg',
        tecnologias:[
          './icons/iconJava.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'Planeación docente',
        icono_titulo:'./imagenes_proyectos_dev/iconPlaneacionDocente.svg',
        descripcion:'Sistema de gestión de planeaciones de docentes.',
        imagen:'./imagenes_proyectos_dev/planeacionDocente.png',
        tecnologias:[
          './icons/iconDjango.svg',
          './icons/iconJS.svg',
          './icons/iconPython.svg',
          './icons/iconGIT.svg',
          './icons/iconFigma.svg',
        ]
      },{
        titulo:'Plantas Labsol',
        icono_titulo:'./imagenes_proyectos_dev/iconPlantasLabsol.ico',
        descripcion:'Sistema de monitoreo de plantas de labsol.',
        imagen:'./imagenes_proyectos_dev/plantasLabsol.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCPlusPlus.svg',
          './icons/iconCSharp.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'Polbot',
        icono_titulo:'./imagenes_proyectos_dev/iconPolbol.ico',
        descripcion:'Sistema de control de un brazo robotico de 5 grados de libertad.',
        imagen:'./imagenes_proyectos_dev/polBot.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCPlusPlus.svg',
          './icons/iconCSharp.svg',
        ]
      },{
        titulo:'PolFit',
        icono_titulo:'./imagenes_proyectos_dev/iconPolfit.ico',
        descripcion:'Sistema embebido para el conteo de ejercicios corporales.',
        imagen:'./imagenes_proyectos_dev/polFit.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCPlusPlus.svg',
          './icons/iconCSharp.svg',
        ]
      },{
        titulo:'PolHome',
        icono_titulo:'./imagenes_proyectos_dev/iconPolHome.ico',
        descripcion:'Sistema de monitoreo y control de luces IOT, alimentado con energia solar.',
        imagen:'./imagenes_proyectos_dev/polHome.jpg',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCPlusPlus.svg',
          './icons/iconCSharp.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'PolIce',
        icono_titulo:'./imagenes_proyectos_dev/iconPolIce.ico',
        descripcion:'Sistema de gestion de ventas e inventario de una tienda.',
        imagen:'./imagenes_proyectos_dev/polIce.png',
        tecnologias:[
          './icons/iconCSharp.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'PolSafe',
        icono_titulo:'./imagenes_proyectos_dev/iconPolsafe.ico',
        descripcion:'Sistema de alarma.',
        imagen:'./imagenes_proyectos_dev/polSafe.jpg',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCPlusPlus.svg',
          './icons/iconCSharp.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'PSG',
        icono_titulo:'./imagenes_proyectos_dev/iconPSG.ico',
        descripcion:'Sistema de monitoreo de vehiculos de carga.',
        imagen:'./imagenes_proyectos_dev/PSG.png',
        tecnologias:[
          './icons/iconJava.svg',
          './icons/iconCSharp.svg',
          './icons/iconFirebase.svg',
        ]
      },{
        titulo:'Respirador',
        icono_titulo:'./imagenes_proyectos_dev/iconRespirador.ico',
        descripcion:'Sistema de gestion y control de respiradores.',
        imagen:'./imagenes_proyectos_dev/respirador.png',
        tecnologias:[
          './icons/arduino.png',
          './icons/iconCPlusPlus.svg',
          './icons/iconCSharp.svg',
          './icons/iconFirebase.svg',
        ]
      },
    ]);

    // para la lista de libros
    const [listaBooks, setListaBooks] = useState([
      {
        titulo:'Republica de platon',
        icono_titulo:'./imagenes_books/iconRepublicaPlaton.svg',
        descripcion:'Nos habla de de como deberia ser una republica y sus consecuencias de ser, ademas de las cosas por las cuales es ideal para cada individuo.',
      },
      {
        titulo:'Etica de Spinoza',
        icono_titulo:'./imagenes_books/iconEticaSpinoza.svg',
        descripcion:'Etica segun spinoza',
      },
    ]);
    // para la lista de cursos
    const [listaCursos, setListaCursos] = useState([
      {
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-seguridad-empresas-old.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-analitica-instrumentacion.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-ux-defi.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-data-viz.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-docker-avanzado.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-react-avanzado.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-iot.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-intro-finanzas.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-intro-ciberseguridad-empresas.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-ia-seo.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-ia-finanzas.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-iapd.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-adopcion-ia.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-estrategia-proyectos-ai.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-ai.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-ai-servicio-cliente.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-chatgpt-2024.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-gestion-2019-2019.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-colorizacion-davinci.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-fotografia-lightroom.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-sat.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-diseno-marketing.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-diseno-interfaces-ux.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-design-systems.png',
      },{
        link:'https://platzi.com/p/paul-santana/curso/2311-course/diploma/detalle/',
        imagen:'./diplomas_cursos/diploma-basico-ui.png',
      },
    ]);
    //para la seccion seleccionada del sistema
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('index');
    const [mostrarMe, setMostrarMe] = useState(false);
    const [proyectoActivo, setProyectoActivo] = useState(0);
    const [bookActivo, setbookActivo] = useState(0);
    const [cursoActivo, setCursoActivo] = useState(0);

    const modalMeRef = useRef(null);
    const carruselRef = useRef(null);
    const carruselBookRef = useRef(null);
    const carruselCursoRef = useRef(null);

    //este metodo da foco a la referencia que le pasemos como parametro
  const darFoco = (info) => {
    if (info.current) {
      info.current.focus(); // Enfoca el elemento
      info.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Mueve el elemento a la vista
    }
  };

  const irAProyecto = (indice) => {
    if (!carruselRef.current) return;

    const items = carruselRef.current.querySelectorAll(
      '.contenedor-proyecto-dev-LandingPage'
    );

    const proyecto = items[indice];

    if (!proyecto) return;

    proyecto.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    setProyectoActivo(indice);
  };

  const irACurso = (indice) => {
    if (!carruselCursoRef.current) return;
    const items = carruselCursoRef.current.querySelectorAll(
      '.contenedor-proyecto-dev-LandingPage'
    );
    const proyecto = items[indice];
    if (!proyecto) return;
    proyecto.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
    setCursoActivo(indice);
  };

    const irABook = (indice) => {
    if (!carruselBookRef.current) return;

    const items = carruselBookRef.current.querySelectorAll(
      '.contenedor-proyecto-dev-LandingPage'
    );

    const proyecto = items[indice];

    if (!proyecto) return;

    proyecto.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    setbookActivo(indice);
  };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          mostrarMe &&
          modalMeRef.current &&
          !modalMeRef.current.contains(event.target)
        ) {
          setMostrarMe(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [mostrarMe]);

    // Devuelve la fecha actual con hora 00:00:00
    function obtenerFechaConHoraCero() {
        const ahora = new Date();
        ahora.setHours(0, 0, 0, 0);
        return ahora.toISOString(); // Formato ISO con hora 00:00:00
    }

    // Devuelve la fecha actual con hora 18:00:00
    function obtenerFechaConHoraDieciocho() {
      const ahora = new Date();
      ahora.setHours(18, 0, 0, 0);
      return ahora.toISOString(); // Formato ISO con hora 18:00:00
    }


    const analista = `
# Temas Clave
- __Servicios públicos deficientes__  

`;

const asesor = `
# Diagnóstico político de riesgos y oportunidades


`;

    return (
        <section className="LandingPage">

            {/* navbar para la parte superior*/}
            <nav className='navbar-LandingPage'>
                <a href='/'>Paul Santana</a>
                <div>
                    <h4>Entrenando</h4>
                </div>
            </nav>


            {mostrarMe && (
              <div ref={modalMeRef} className="contenedor-me-LandingPage">
                <h1>Hola soy un creador de tecnologia fuera de lo común</h1>
                <h3>estudie ing en robotica y mecatronica e ing de software ademas de multiples  disciplinas más de manera autodidacta las cuales me han llevado a La interrogante y que mas sigue...</h3>
                <div className="mensaje-me-LandingPage">
                  <div>
                    <h1>Contactame</h1>
                    <h3>Solo si vamos a hacer algo increible</h3>
                  </div>
                  <h4>Servicios</h4>
                  <h2>Marketing</h2>
                  <h2>Programación de sistemas</h2>
                </div>
                <div className="redes-me-LandingPage">
                  <a href="https://www.facebook.com/elsantana.santana.9" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconFacebook.svg" alt="icon facebook" />
                  </a>

                  <a href="https://www.instagram.com/paul_s4ntana" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconInstagram.svg" alt="icon instagram" />
                  </a>

                  <a href="https://www.tiktok.com/@paul_santana?_t=8mQxz8bga73&_r=1" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconTiktok.svg" alt="icon tiktok" />
                  </a>

                  <a href="https://x.com/PaulSan03224341?t=NPx7NWQDuFI4JSKrBNhJRA&s=08" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconX.svg" alt="icon twitter" />
                  </a>

                  <a href="https://mx.linkedin.com/in/paul-santana-5678341a6" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconLinkeding.svg" alt="icon linkeding" />
                  </a>

                  <a href="https://github.com/pauguz1" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconGithub.svg" alt="icon github" />
                  </a>
                </div>
              </div>
            )}

            {/* navbar para las opciones */}
            <div className="navbar-options">
              <div className="navbar-options-item" onClick={() =>{ darFoco(devRef); setOpcionSeleccionada('dev') }} >
                <img src={iconDev} alt="icon developer" />
                <span>DEV</span>
              </div>
              <div className="navbar-options-item" onClick={() =>{ darFoco(booksRef); setOpcionSeleccionada('books') }} >
                <img src={iconBook} alt="icon book" />
                <span>Books</span>
              </div>
              <div className="navbar-options-item" onClick={() => { setMostrarMe(!mostrarMe); setOpcionSeleccionada('me'); }} >
                <img src={iconMe} alt="icon me" />
                <span>Me</span>
              </div>
              <div className="navbar-options-item" onClick={() =>{ darFoco(fotoRef); setOpcionSeleccionada('foto') }} >
                <img src={iconCamera} alt="icon camera" />
                <span>Foto</span>
              </div>
              <div className="navbar-options-item" onClick={() =>{ darFoco(gymRef); setOpcionSeleccionada('gym') }} >
                <img src={iconGYM} alt="icon GYM" />
                <span>GYM</span>
              </div>
            </div>


            {/* seccion Developer*/}
            <section className='seccion seccion-index'>
                <h1>Hey, it’s me</h1>
                <h3>La vida es muy corta para hacer una sola cosa</h3>
            </section>

            {/* seccion Developer*/}
            <section ref={devRef}  className='seccion'>
                <h1 className="titulo-interno-seccion-LandingPage">Tecnologias que conozco</h1>
                <div className="contenedor-items-tecnologia-LandingPage">
                  <img src='./icons/iconC.svg' alt="icon lenguaje C" />
                  <img src='./icons/iconCPlusPlus.svg' alt="icon lenguaje C++" />
                  <img src='./icons/iconCSharp.svg' alt="icon lenguaje C#" />
                  <img src='./icons/iconJava.svg' alt="icon lenguaje Java" />
                  <img src='./icons/iconJS.svg' alt="icon lenguaje JS" />
                  <img src='./icons/iconPython.svg' alt="icon lenguaje Python" />
                  <img src='./icons/iconDocker.svg' alt="icon Docker" />
                  <img src='./icons/iconAWS.svg' alt="icon AWS" />
                  <img src='./icons/iconSQL.svg' alt="icon lenguaje SQL" />
                  <img src='./icons/iconPostgreSQL.svg' alt="icon PostgreSQL" />
                  <img src='./icons/iconGIT.svg' alt="icon GIT" />
                  <img src='./icons/iconDjango.svg' alt="icon Django" />
                  <img src='./icons/iconReact.svg' alt="icon React" />
                  <img src='./icons/iconFigma.svg' alt="icon Figma" />
                </div>

                <h1 className="titulo-interno-seccion-LandingPage">Proyectos({listaProyectosDev.length})</h1>
          
                <div
                  ref={carruselRef}
                  className="contenedor-primario-proyecto-dev-LandingPage"
                  onScroll={(e) => {
                    const contenedor = e.currentTarget;
                    const items = contenedor.querySelectorAll('.contenedor-proyecto-dev-LandingPage');

                    if (!items.length) return;

                    const centroContenedor =
                      contenedor.getBoundingClientRect().left +
                      contenedor.clientWidth / 2;

                    let indiceActivo = 0;
                    let distanciaMinima = Infinity;

                    items.forEach((item, index) => {
                      const rect = item.getBoundingClientRect();
                      const centroItem = rect.left + rect.width / 2;
                      const distancia = Math.abs(centroContenedor - centroItem);

                      if (distancia < distanciaMinima) {
                        distanciaMinima = distancia;
                        indiceActivo = index;
                      }
                    });

                    setProyectoActivo(indiceActivo);
                  }}
                >
                  {listaProyectosDev.map((proyecto, index) => (
                    <div key={index} className="contenedor-proyecto-dev-LandingPage">
                      <div className="cabecera-proyecto-dev-LandingPage">
                        <img src={proyecto.icono_titulo} alt="icon proyecto" />
                        <span>{proyecto.titulo}</span>
                      </div>

                      <p>{proyecto.descripcion}</p>

                      <img src={proyecto.imagen} alt={proyecto.titulo} />

                      <h3>Tecnologias</h3>

                      <div className="contenedor-tecnologias-proyecto-dev-LandingPage">
                        {proyecto.tecnologias?.map((tecnologia, techIndex) => (
                          <img
                            key={techIndex}
                            src={tecnologia}
                            alt={`tecnologia-${techIndex}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  
                </div>
                
                <div className="indicadores-LandingPage">
                  {listaProyectosDev.map((_, index) => (
                    <span
                      key={index}
                      className={proyectoActivo === index ? 'proyecto-activo-LandingPage' : ''}
                      onClick={() => irAProyecto(index)}
                    ></span>
                  ))}
                </div>
                
                {/* seccion Cursos */}
                <h1 className="titulo-interno-seccion-LandingPage">Cursos({listaCursos.length})</h1>

                <div
                  ref={carruselCursoRef}
                  className="contenedor-primario-proyecto-dev-LandingPage"
                  onScroll={(e) => {
                    const contenedor = e.currentTarget;
                    const items = contenedor.querySelectorAll('.contenedor-proyecto-dev-LandingPage');

                    if (!items.length) return;

                    const centroContenedor =
                      contenedor.getBoundingClientRect().left +
                      contenedor.clientWidth / 2;

                    let indiceActivo = 0;
                    let distanciaMinima = Infinity;

                    items.forEach((item, index) => {
                      const rect = item.getBoundingClientRect();
                      const centroItem = rect.left + rect.width / 2;
                      const distancia = Math.abs(centroContenedor - centroItem);

                      if (distancia < distanciaMinima) {
                        distanciaMinima = distancia;
                        indiceActivo = index;
                      }
                    });

                    setCursoActivo(indiceActivo);
                  }}
                >
                  {listaCursos.map((proyecto, index) => (
                    <div key={index} className="contenedor-proyecto-dev-LandingPage">
                      <img className="redondo-LandingPage" src={proyecto.imagen} alt={proyecto.titulo} />
                    </div>
                  ))}
                  
                </div>

                <div className="indicadores-LandingPage">
                  {listaCursos.map((_, index) => (
                    <span
                      key={index}
                      className={cursoActivo === index ? 'proyecto-activo-LandingPage' : ''}
                      onClick={() => irACurso(index)}
                    ></span>
                  ))}
                </div>
                
            </section>

            {/* seccion Books*/}
            <section ref={booksRef} className='seccion'>
                <h1 className="titulo-interno-seccion-LandingPage">Books({listaBooks.length})</h1>

                <div
                  ref={carruselBookRef}
                  className="contenedor-primario-proyecto-dev-LandingPage"
                  onScroll={(e) => {
                    const contenedor = e.currentTarget;
                    const items = contenedor.querySelectorAll('.contenedor-proyecto-dev-LandingPage');

                    if (!items.length) return;

                    const centroContenedor =
                      contenedor.getBoundingClientRect().left +
                      contenedor.clientWidth / 2;

                    let indiceActivo = 0;
                    let distanciaMinima = Infinity;

                    items.forEach((item, index) => {
                      const rect = item.getBoundingClientRect();
                      const centroItem = rect.left + rect.width / 2;
                      const distancia = Math.abs(centroContenedor - centroItem);

                      if (distancia < distanciaMinima) {
                        distanciaMinima = distancia;
                        indiceActivo = index;
                      }
                    });

                    setbookActivo(indiceActivo);
                  }}
                >
                  {listaBooks.map((proyecto, index) => (
                    <div key={index} className="contenedor-proyecto-dev-LandingPage">
                      <div className="cabecera-proyecto-dev-LandingPage">
                        <img src={proyecto.icono_titulo} alt="icon proyecto" />
                        <span>{proyecto.titulo}</span>
                      </div>

                      <p>{proyecto.descripcion}</p>

                    </div>
                  ))}
                  
                </div>
                <div className="indicadores-LandingPage">
                  {listaBooks.map((_, index) => (
                    <span
                      key={index}
                      className={bookActivo === index ? 'proyecto-activo-LandingPage' : ''}
                      onClick={() => irABook(index)}
                    ></span>
                  ))}
                </div>

            </section>


            {/* seccion Me*/}
            <section ref={meRef} className='seccion'>
                

            </section>

            {/* seccion Foto*/}
            <section ref={fotoRef} className='seccion'>
                <h1 className="titulo-interno-seccion-LandingPage">Herramientas</h1>
                <div className="contenedor-items-tecnologia-LandingPage">
                  <h3>Camara Nikon D3200</h3>
                  <h3>lightroom</h3>
                  <h3>Photoshop</h3>
                </div>
                <h1 className="titulo-interno-seccion-LandingPage">PICS</h1>
                <div className="contenedor-galeria-imagenes-LandingPage">
                  <img src='./Paul-Dani-Final-2024-17.jpg' alt="imagen pics" />
                  <img src='./Paul-Dani-Final-2024-17.jpg' alt="imagen pics" />
                  <img src='./Paul-Dani-Final-2024-17.jpg' alt="imagen pics" />
                </div>
            </section>

            {/* seccion GYM*/}
            <section ref={gymRef} className='seccion'>
                <h1 className="titulo-interno-seccion-LandingPage">Entrenamientos</h1>
                <h2 className="subtitulo-interno-seccion-LandingPage">Ejercicios</h2>
                <div className="contenedor-items-tecnologia-LandingPage">
                  <h3>Calistenia</h3>
                  <h3>Pesas</h3>
                  <h3>BOX</h3>
                </div>
                <h2 className="subtitulo-interno-seccion-LandingPage">Medidas</h2>
                <div className="contenedor-items-tecnologia-LandingPage">
                  <h3>172 cm</h3>
                  <h3>72 KG</h3>
                </div>

                <h2 className="subtitulo-interno-seccion-LandingPage">Rutina</h2>
                <div className="contenedor-rutina-gym-LandingPage">
                  <div className="cabecera-rutina-gym-LandingPage">
                    <h1>Lunes</h1>
                    <h1>Martes</h1>
                    <h1>Miercoles</h1>
                    <h1>Jueves</h1>
                    <h1>Viernes</h1>
                    <h1>Sabado</h1>
                    <h1>Domingo</h1>
                  </div>

                  <div className="contenedor-semana-gym-LandingPage">
                    <h2>Semana 1</h2>
                    <div>
                      <h3>Pecho Tricep Espalda</h3>
                      <h3>Bicep Hombro</h3>
                      <h3>Antebrazo Trapecio</h3>
                      <h3>Pierna</h3>
                      <h3>Pecho Tricep Espalda</h3>
                      <h3>Bicep Hombro</h3>
                      <h3>Abdomen</h3>
                    </div>
                  </div>

                  <div className="contenedor-semana-gym-LandingPage">
                    <h2>Semana 2</h2>
                    <div>
                      <h3>Pierna</h3>
                      <h3>Pecho Tricep Espalda</h3>
                      <h3>Bicep Hombro</h3>
                      <h3>Antebrazo Trapecio</h3>
                      <h3>Pierna</h3>
                      <h3>Pecho Tricep Espalda</h3>
                      <h3>Abdomen</h3>
                    </div>
                  </div>

                  <div className="contenedor-semana-gym-LandingPage">
                    <h2>Semana 3</h2>
                    <div>
                      <h3>Bicep Hombro</h3>
                      <h3>Pierna</h3>
                      <h3>Pecho Tricep Espalda</h3>
                      <h3>Antebrazo Trapecio</h3>
                      <h3>Bicep Hombro</h3>
                      <h3>Pierna</h3>
                      <h3>Abdomen</h3>
                    </div>
                  </div>
                </div>


                <h1 className="titulo-interno-seccion-LandingPage">PICS</h1>
                <div className="contenedor-galeria-imagenes-LandingPage">
                  <img src='./Paul-Dani-Final-2024-17.jpg' alt="imagen pics" />
                  <img src='./Paul-Dani-Final-2024-17.jpg' alt="imagen pics" />
                  <img src='./Paul-Dani-Final-2024-17.jpg' alt="imagen pics" />
                </div>

            </section>

        </section>
    );
};

export default LandingPageComponent;

// Memorizar el componente
export const LandingPage = React.memo(LandingPageComponent);