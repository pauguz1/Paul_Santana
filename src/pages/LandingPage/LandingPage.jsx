import React from "react";
import { useRef } from "react";

import '../../global.css';
import './LandingPage.css';

//importamos los componentes

//importamos el logo


const LandingPageComponent = ()=>{

    //referencias para el foco de cada seccion
    const valorRef = useRef(null);
    const serviciosRef = useRef(null);
    const contactoRef = useRef(null);

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
            <nav className='navbar-LandingPage'>
                <a href='/'>
                    Paul Santana
                </a>
                <div>
                    <h4 onClick={() => darFoco(valorRef)} >Valor</h4>
                    <h4 onClick={() => darFoco(serviciosRef)} >Servicios</h4>
                    <h4 onClick={() => darFoco(contactoRef)} >Contacto</h4>
                </div>
            </nav>

            <section className='seccion seccion-index'>
                
            </section>

            <section ref={valorRef} className='seccion'>
                

            </section>

            <section ref={serviciosRef} className='seccion'>
                

            </section>


            <section ref={contactoRef} className='seccion'>
                
            </section>

        </section>
    );
};

export default LandingPageComponent;

// Memorizar el componente
export const LandingPage = React.memo(LandingPageComponent);