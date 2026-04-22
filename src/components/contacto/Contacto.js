import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id='contacto' className='section section--dark'>
      <div className='panel'>
        <Row className='justify-content-center'>
          <Col md={8}>
            <ul className='contact-list'>
              <li>
                <FaEnvelope className='contact-icon' />
                <div>
                  <span className='contact-label'>Correo electrónico</span>
                  <a
                    href='mailto:blancodelgadocarmen3@gmail.com'
                    className='contact-link'
                  >
                    blancodelgadocarmen3@gmail.com
                  </a>
                </div>
              </li>

              <li>
                <FaPhone className='contact-icon' />
                <div>
                  <span className='contact-label'>Teléfono</span>
                  <a href='tel:+34699037483' className='contact-link'>
                    +34 699 037 483
                  </a>
                </div>
              </li>

              <li>
                <FaLinkedin className='contact-icon' />
                <div>
                  <a
                    href='https://www.linkedin.com/in/carmen-blanco-delgado-892711233/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='contact-link'
                  >
                    Linkedin
                  </a>
                </div>
              </li>

              <li>
                <FaGithub className='contact-icon' />
                <div>
                  <a
                    href='https://github.com/Menchu02'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='contact-link'
                  >
                    GitHub
                  </a>
                </div>
              </li>

              <li>
                <FaMapMarkerAlt className='contact-icon' />
                <div>
                  <span className='contact-label'>Ubicación</span>
                  <span>Barcelona</span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
}
