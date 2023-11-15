// NavBar.jsx
import React from 'react';

const NavBar = () => {
  const handleClick = (page) => {

  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleClick('Inicio')}>Inicio</li>
        <li onClick={() => handleClick('Acerca de')}>Acerca de</li>
        <li onClick={() => handleClick('Instrumentos Musicales')}>Instrumentos Musicales</li>
        <li onClick={() => handleClick('Sonido')}>Sonido</li>
        <li onClick={() => handleClick('Accesorios')}>Accesorios</li>
        <li onClick={() => handleClick('Contacto')}>Contacto</li>
        
        
      </ul>
    </nav>
  );
};



export default NavBar;
