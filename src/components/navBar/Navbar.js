import React, { useState } from 'react';
import logo from '../../assets/logo4.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark custom-navbar'>
        <Link className='navbar-brand' to='/'>
          {' '}
          {/* Usar Link para el logo también */}
          <img className='logo' src={logo} alt='logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={toggleMenu} // Controlar el toggle con React
          aria-controls='navbarSupportedContent'
          aria-expanded={isMenuOpen} // Enlazar aria-expanded al estado
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} // Clase condicional
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              {' '}
              {/* Quitar la clase 'active' a menos que sea necesario */}
              <Link to='/' className='nav-link' onClick={toggleMenu}>
                {' '}
                {/* Cerrar al hacer clic */}
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link' onClick={toggleMenu}>
                Sobre mi
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/portfolio' className='nav-link' onClick={toggleMenu}>
                Porfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link' onClick={toggleMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
