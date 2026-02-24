import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import photoCard1 from '../../assets/cardmovieapp.png';
import photoCard2 from '../../assets/photo-jesus.png';
import photoCard3 from '../../assets/photo-sandalia.png';
import photoCard4 from '../../assets/shopping.png';
import photoCard5 from '../../assets/laravel_foto.jpg';
import photoCard6 from '../../assets/portfolio2.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio fotografía Jesús Coll',
      description:
        'Sitio web de fotografía para destacar la obra del artista, con galerías dinámicas.',
      tags: ['Front-end', 'React'],
      imageUrl: photoCard2,
      altText: 'Portfolio fotografía',
      link: 'https://jesuscollgallardo.com',
      linkGithub: 'https://github.com/Menchu02/Photography-web',
    },
    {
      id: 2,
      title: 'App de películas',
      description:
        'App web de películas consumiendo API: crear, editar y eliminar contenido.',
      tags: ['Front-end', 'React', 'API'],
      imageUrl: photoCard1,
      altText: 'Movie App',
      link: 'https://menchu02.github.io/movie-app-main/',
      linkGithub: 'https://github.com/Menchu02/movie-app-main',
    },
    {
      id: 3,
      title: 'Laravel CRUD',
      description:
        'CRUD de posts,filtra,elimina, edita, compra vía email y genera reunión (Google Meet).',
      tags: ['Back-end', 'Laravel'],
      imageUrl: photoCard5,
      altText: 'Laravel CRUD',
      link: '', // si no hay live, lo ocultamos
      linkGithub: 'https://github.com/Menchu02/laravel-crud-posts',
    },
    {
      id: 4,
      title: 'Carrito de compra',
      description:
        'Carrito de compras para tienda online: añade productos y gestiona cantidades.',
      tags: ['Front-end', 'React'],
      imageUrl: photoCard3,
      altText: 'Shopping Cart',
      link: 'https://menchu02.github.io/shopping-cart/',
      linkGithub: 'https://github.com/Menchu02/shopping-cart',
    },
    {
      id: 5,
      title: 'Lista de la compra',
      description: 'Lista de la compra: añade, edita y elimina productos.',
      tags: ['Front-end', 'React'],
      imageUrl: photoCard4,
      altText: 'Shopping List',
      link: 'https://menchu02.github.io/shopping-list/',
      linkGithub: 'https://github.com/Menchu02/shopping-list',
    },
    {
      id: 6,
      title: 'Portfolio Carmen Blanco',
      description:
        'Mi portfolio personal donde expongo quién soy y algunos de mis trabajos.',
      tags: ['Front-end', 'React'],
      imageUrl: photoCard6,
      altText: 'Portfolio ',
      link: 'https://menchu02.github.io/portfolio_developer_front_end/',
      linkGithub: 'https://github.com/Menchu02/portfolio_developer_front_end',
    },
  ];

  return (
    <section id='portfolio' className='section section--dark'>
      <div className='panel'>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {projects.map((p) => (
            <Col key={p.id}>
              <Card className='project-card h-100'>
                <div className='project-media'>
                  <img
                    className='project-img'
                    src={p.imageUrl}
                    alt={p.altText}
                  />
                </div>

                <Card.Body className='project-body'>
                  <div className='project-top'>
                    <Card.Title className='project-title'>{p.title}</Card.Title>

                    <div className='project-tags'>
                      {p.tags?.map((t) => (
                        <span key={t} className='project-tag'>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Card.Text className='project-desc'>
                    {p.description}
                  </Card.Text>

                  <div className='project-actions'>
                    {p.link ? (
                      <a
                        className='project-btn'
                        href={p.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Live →
                      </a>
                    ) : null}

                    <a
                      className='project-btn project-btn--ghost'
                      href={p.linkGithub}
                      target='_blank'
                      rel='noreferrer'
                    >
                      GitHub →
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
