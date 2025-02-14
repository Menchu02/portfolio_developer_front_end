import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Contacto() {
  return (
    <Container className='mt-5 contacto-container container'>
      <Row className='justify-content-center'>
        <Col md={6} className='text-center'>
          <h2>Contáctame:</h2>
          <ul className='list-unstyled mt-4 contacto-lista'>
            <li>
              <FaEnvelope className='me-2' />
              <strong>Correo Electrónico:</strong>{' '}
              <a href='mailto:menxuuu02@gmail.com' className='custom-link'>
                menxuuu02@gmail.com
              </a>
            </li>
            <li>
              <FaPhone className='me-2' />
              <strong>Teléfono:</strong>{' '}
              <a href='tel:+34699037483' className='custom-link'>
                +34 699 037 483
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/carmen-blanco-delgado-892711233/'
                target='_blank'
                rel='noopener noreferrer'
                className='custom-link'
              >
                <FaLinkedin className='me-2' />
                <strong>LinkedIn:</strong>{' '}
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Menchu02'
                target='_blank'
                rel='noopener noreferrer'
                className='custom-link'
              >
                <FaGithub className='me-2' />
                <strong>GitHub:</strong>{' '}
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className='me-2' />
              <strong>Ubicación:</strong> Barcelona
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
