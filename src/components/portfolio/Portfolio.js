import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import photoCard1 from '../../assets/cardmovieapp.png';
import photoCard2 from '../../assets/dilamica-app.png';
import photoCard3 from '../../assets/eccomerce-app.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Movie App',
      description:
        'App web de gestión de películas consumiendo Api.Funciones Crear, añadir, editar y eliminar',
      imageUrl: photoCard1,
      altText: 'Imagen del Proyecto 1',
      link: 'https://usuario.github.io/proyecto1',
    },
    {
      id: 2,
      title: 'Dilámica',
      description: 'Descripción del Proyecto 2.',
      imageUrl: photoCard2,
      altText: 'Imagen del Proyecto 2',
      link: 'https://usuario.github.io/proyecto2',
    },
    {
      id: 3,
      title: 'Eccomerce',
      description: 'Descripción del Proyecto 3.',
      imageUrl: photoCard3,
      altText: 'Imagen del Proyecto 3',
      link: 'https://usuario.github.io/proyecto3',
    },
  ];
  return (
    <div>
      <Row xs={1} md={5} className='g-4  '>
        {projects.map((project) => (
          <Col key={project.id}>
            <Card style={{ width: '18rem', height: '30rem' }} className='card'>
              <Card.Img
                variant='top'
                src={project.imageUrl}
                alt={project.altText}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '350px',
                }} // Ajusta la altura según tus necesidades
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
            <Button variant='primary' href={project.link} target='_blank'>
              Ver Proyecto
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
}
