import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import photo from '../../assets/sobre mi.png';

export default function Sobremi() {
  return (
    <div>
      <Container className='my-5'>
        <Row className='align-items-center'>
          <Col md={4} className='text-center'>
            <Image
              src={photo}
              alt='Foto de perfil'
              roundedCircle
              fluid
              className='mb-3 photo'
            />
          </Col>
          <Col md={8}>
            <h2>Carmen Blanco Delgado</h2>
            <p className='lead'>Desarrollador Front-End</p>
            <p>
              ¡Hola! Soy una desarrolladora front-end apasionada en crear
              proyectos y explorar las posibilidades del código. Especializada
              en React js, estoy siempre dispuesta a aprender y crecer en el
              mundo del desarrollo. Me considero trabajadora, adaptaiva y amante
              de los retos. Disfruto aprendiendo y trabajando con personas.
            </p>
            <p className='lead'>Conocimientos:</p>
            <div className='logos'></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
