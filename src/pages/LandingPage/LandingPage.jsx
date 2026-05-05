import React from "react";
import { useRef } from "react";

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

            {/* navbar para las opciones */}
            <div className="navbar-options">
              <div className="navbar-options-item" onClick={() => darFoco(devRef)} >
                <img src={iconDev} alt="icon developer" />
                <span>DEV</span>
              </div>
              <div className="navbar-options-item" onClick={() => darFoco(booksRef)} >
                <img src={iconBook} alt="icon book" />
                <span>Books</span>
              </div>
              <div className="navbar-options-item" onClick={() => darFoco(meRef)} >
                <img src={iconMe} alt="icon me" />
                <span>Me</span>
              </div>
              <div className="navbar-options-item" onClick={() => darFoco(fotoRef)} >
                <img src={iconCamera} alt="icon camera" />
                <span>Foto</span>
              </div>
              <div className="navbar-options-item" onClick={() => darFoco(gymRef)} >
                <img src={iconGYM} alt="icon GYM" />
                <span>GYM</span>
              </div>
            </div>


            {/* seccion Developer*/}
            <section ref={devRef}  className='seccion seccion-index'>
                <h1>Hey, it’s me</h1>
                <h3>La vida es muy corta para hacer una sola cosa</h3>
            </section>

            {/* seccion Books*/}
            <section ref={booksRef} className='seccion'>
                

            </section>


            {/* seccion Me*/}
            <section ref={meRef} className='seccion'>
                

            </section>

            {/* seccion Foto*/}
            <section ref={fotoRef} className='seccion'>
                
            </section>

            {/* seccion GYM*/}
            <section ref={gymRef} className='seccion'>
                
            </section>

        </section>
    );
};

export default LandingPageComponent;

// Memorizar el componente
export const LandingPage = React.memo(LandingPageComponent);