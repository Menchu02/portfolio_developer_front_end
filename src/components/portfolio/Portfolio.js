import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import photoCard1 from '../../assets/cardmovieapp.png';
import photoCard2 from '../../assets/photo-jesus.png';
import photoCard3 from '../../assets/photo-sandalia.png';
import photoCard4 from '../../assets/shopping.png';
import logoGithub from '../../assets/github.png';
import photoCard5 from '../../assets/laravel_foto.jpg';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Porfolio fotografía',
      description:
        'Sitio web de fotografía pensado para destacar la obra del artista, con galerías dinámicas (Front-end)',
      imageUrl: photoCard2,
      altText: 'Imagen del Proyecto 1',
      link: 'https://jesuscollgallardo.com',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/Photography-web',
    },
    {
      id: 2,
      title: 'Movie App',
      description:
        'App web de gestión de películas consumiendo Api. Crea, añade, edita y elimina películas (Front-end)',
      imageUrl: photoCard1,
      altText: 'Imagen del Proyecto 2',
      link: 'https://menchu02.github.io/movie-app-main/',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/movie-app-main',
    },
    {
      id: 3,
      title: 'Laravel Crud',
      description:
        'CRUD de Laravel,filtrar por título y comprar mediante email.Genera reunión GoogleMeeting (Back-end)',
      imageUrl: photoCard5,
      altText: 'Imagen del Proyecto 3',
      link: '',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/laravel-crud-posts',
    },

    {
      id: 4,
      title: 'Shopping Cart',
      description:
        'Carrito de compras para tienda online. Navega, añade a tu carrito y gestiona tus compras (Front-end)',
      imageUrl: photoCard3,
      altText: 'Imagen del Proyecto 3',
      link: 'https://menchu02.github.io/shopping-cart/',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/shopping-cart',
    },
    {
      id: 5,
      title: 'Shopping List',
      description:
        'App web lista de la compra. Añade, cambia o elimina los productos de tu lista para no olvidarlos (Front-end)',
      imageUrl: photoCard4,
      altText: 'Imagen del Proyecto 4',
      link: 'https://menchu02.github.io/shopping-list/',
      logo: logoGithub,
      linkGithub: 'https://github.com/Menchu02/shopping-list',
    },
  ];

  return (
    <div>
      <h1 className='header-portfolio'>Mis proyectos:</h1>
      <Row xs={1} sm={2} md={3} lg={4} className='g-4 portfolio-row'>
        {projects.map((project) => (
          <Col key={project.id} className='d-flex justify-content-center'>
            <Card className='card'>
              <Card.Img
                className='card-img'
                variant='top'
                src={project.imageUrl}
                alt={project.altText}
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
