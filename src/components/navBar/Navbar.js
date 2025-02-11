import React from 'react';
import logo from '../../assets/logo4.png';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark  custom-navbar'>
        <div className='container'>
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
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'></span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Sobre mi
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
