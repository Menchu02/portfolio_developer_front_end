import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function Contacto() {
  return (
    <div>
      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col md={6}>
            <h2>Contáctame</h2>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <strong>Nombre:</strong> Carmen Blanco Delgado
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Correo Electrónico:</strong> menxuuu02@gmail.com
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Teléfono:</strong> 699037483
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Ubicación:</strong> Barcelona
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
