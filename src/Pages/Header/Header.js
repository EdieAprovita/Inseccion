import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <ul className='navigation'>
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Sobre Intersección</a>
        </li>
        <li>
          <a href='#'>Productos</a>
        </li>
        <li>
          <a href='#'>Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
