import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import photoCard1 from '../../assets/cardmovieapp.png';
import photoCard2 from '../../assets/cursos.png';
import photoCard3 from '../../assets/eccomerce-app.png';
import photoCard4 from '../../assets/shopping.png';
import logoGithub from '../../assets/github.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Movie App',
      description:
        'App web de gestión de películas consumiendo Api.Funciones Crear, añadir, editar y eliminar',
      imageUrl: photoCard1,
      altText: 'Imagen del Proyecto 1',
      link: 'https://menchu02.github.io/movie-app-main/',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/movie-app-main',
    },
    {
      id: 2,
      title: 'Shopping List',
      description:
        'App web lista de la compra. Añade, cambia o elimina los productos de tu lista',
      imageUrl: photoCard4,
      altText: 'Imagen del Proyecto 3',
      link: 'https://menchu02.github.io/shopping-list/',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/shopping-list',
    },
    {
      id: 3,
      title: 'Dilámica',
      description:
        'App web gestión de cursos en una escuela online.Crea, añade, edita y elimina cursos',
      imageUrl: photoCard2,
      altText: 'Imagen del Proyecto 2',
      link: 'https://menchu02.github.io/Dilamica-web/',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/Dilamica-web',
    },

    {
      id: 4,
      title: 'E-commerce',
      description:
        'App web tienda online condumiendo Api.Listado proeductos, rebajas, formularios',
      imageUrl: photoCard3,
      altText: 'Imagen del Proyecto 3',
      link: 'https://menchu02.github.io/e-commerce/',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/e-commerce',
    },
  ];
  return (
    <div>
      <Row xs={1} md={5} className='g-4  '>
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className='card'>
              <Card.Img
                className='card-img'
                variant='top'
                src={project.imageUrl}
                alt={project.altText}
                // style={{
                //   objectFit: 'cover',
                //   objectPosition: 'center',
                //   height: '350px',
                // }} // Ajusta la altura según tus necesidades
              />
              <Card.Body className='card-body'>
                <Card.Title className='card-title'>{project.title}</Card.Title>
                <Card.Text className='card-text'>
                  {project.description}
                </Card.Text>
                <div className='button-container'>
                  <Button
                    className='card-button'
                    variant='primary'
                    href={project.link}
                    target='_blank'
                  >
                    Ver
                  </Button>
                  <Button
                    className='card-button'
                    variant='primary'
                    href={project.linkGithub}
                    target='_blank'
                  >
                    Github
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
