import React from "react";
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

    //para la seccion seleccionada del sistema
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('index');
    const [mostrarMe, setMostrarMe] = useState(false);

    //este metodo da foco a la referencia que le pasemos como parametro
  const darFoco = (info) => {
    if (info.current) {
      info.current.focus(); // Enfoca el elemento
      info.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Mueve el elemento a la vista
    }
  };

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
              <div ref={meRef}  className="contenedor-me-LandingPage">
                <h1>Hola soy un creador de tecnologia fuera de lo común</h1>
                <h3>estudie ing en robotica y mecatronica e ing de software ademas de multiples  disciplinas más de manera autodidacta las cuales me han llevado a La interrogante y que mas sigue...</h3>
                <div className="mensaje-me-LandingPage">
                  <div>
                    <h1>Contactame</h1>
                    <h3>Solo si vamos a hacer algo increible</h3>
                  </div>
                  <h2>Marketing</h2>
                  <h2>Programacion de sistemas</h2>
                </div>
                <div className="redes-me-LandingPage">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconFacebook.svg" alt="icon facebook" />
                  </a>

                  <a href="https://instagram.com/paul_s4ntana" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconInstagram.svg" alt="icon instagram" />
                  </a>

                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconTiktok.svg" alt="icon tiktok" />
                  </a>

                  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconX.svg" alt="icon twitter" />
                  </a>

                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="./icons/iconLinkeding.svg" alt="icon linkeding" />
                  </a>

                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
                  <img src={iconDev} alt="icon GYM" />
                  <img src={iconDev} alt="icon GYM" />
                </div>
                <h2 className="subtitulo-interno-seccion-LandingPage">Proyectos(22)</h2>

                <div className="contenedor-proyecto-dev-LandingPage">
                  <div className="cabecera-proyecto-dev-LandingPage">
                    <img src={iconMe} alt="icon GYM" />
                    <span>PolSerial</span>
                  </div>
                  <p>Es una applicacion de escritorio con la cual podemos  interactuar con microcontroladores, en los cuales podremos realizar acciones como visualizar datos, encender led virtuales, y resalizar configuracion para la interaccion con los botones.</p>
                  <img src={iconGYM} alt="icon GYM" />
                  <h3>Tecnologias</h3>
                  <div className="contenedor-tecnologias-proyecto-dev-LandingPage">
                    <img src={iconMe} alt="icon GYM" />
                    <img src={iconMe} alt="icon GYM" />
                    <img src={iconMe} alt="icon GYM" />
                  </div>
                </div>
                
            </section>

            {/* seccion Books*/}
            <section ref={booksRef} className='seccion'>
                <h1 className="titulo-interno-seccion-LandingPage">Books(28)</h1>
                <div className="contenedor-proyecto-dev-LandingPage">
                  <div className="cabecera-proyecto-dev-LandingPage">
                    <img src={iconMe} alt="icon GYM" />
                    <span>Republica de platon</span>
                  </div>
                  <p>Nos habla de de como deberia ser una republica y sus consecuencias de ser, ademas de las cosas por las cuales es ideal para cada individuo.</p>
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