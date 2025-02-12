import React from 'react';
import logo from '../../assets/logo4.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark  custom-navbar'>
        <a className='navbar-brand' href=''>
          <img className='logo' src={logo} alt='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <Link to={'/'}>
                <a className='nav-link'>
                  Inicio <span className='sr-only'></span>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/about'}>
                <a className='nav-link'>Sobre mi</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/portfolio'}>
                {' '}
                <a className='nav-link'>portfolio</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/contact'}>
                {' '}
                <a className='nav-link'>contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
