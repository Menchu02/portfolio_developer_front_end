import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import photo from '../../assets/sobre mi.png';
import logoHtml from '../../assets/html.png';
import logoCss from '../../assets/css.png';
import logoSass from '../../assets/sass.png';
import logoJs from '../../assets/js.png';
import logoJava from '../../assets/java.png';
import logoReact from '../../assets/icons8-reaccionar-40.png';
import logoGit from '../../assets/git.png';
import logoScrum from '../../assets/scrum.png';
import logoSpring from '../../assets/springboot.png';
import logoBootstrap from '../../assets/bootstrap.png';
export default function Sobremi() {
  const cvLink =
    // 'https://drive.google.com/uc?export=download&id=1e7t844fM5UXFh8mI3ZsrnAhmKKSWJZZ7';
    'https://drive.google.com/file/d/1aYQ34nzYwl185hmPGrRrvAiD5fQBykJu/view?usp=drive_link';
  return (
    <div className='container'>
      <Container className='my-5 container'>
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
            <p className='lead'>Desarrolladora Web</p>
            <p>
              ¡Hola! Soy una desarrolladora Full-stack apasionada en el
              desarrollo <span className='frontend'>Front-end</span>. Amo crear
              proyectos y explorar las posibilidades del código. Especializada
              en React js, estoy siempre dispuesta a aprender y crecer en el
              mundo del desarrollo.También he trabajado con Vue.js y Angular. Me
              considero trabajadora, adaptaiva y amante de los retos. Disfruto
              aprendiendo y trabajando con personas.
            </p>
            <p className='lead'>Conocimientos:</p>
            <div className='logos'>
              <img src={logoHtml} alt='logoHtml' />
              <img src={logoCss} alt='logoCss' />
              <img src={logoSass} alt='logoSass' />
              <img src={logoBootstrap} alt='logoBootstrap' />
              <img src={logoJs} alt='logoJs' />
              <img src={logoJava} alt='logoJava' />
              <img src={logoReact} alt='logoReact' />
              <img src={logoGit} alt='logoGit' />
              <img src={logoSpring} alt='logoSpring' />
              <img src={logoScrum} alt='logoScrum' />
            </div>

            <p className='lead'>Estoy aprendiendo:</p>
            <p>
              Actualmente estoy desarrollando un nuevo proyecto con TypeScript
              en React
            </p>
            <p>
              Sigo enfocada en aprender en profundidad React, centrándome en el
              estudio de sus Hooks
            </p>
            <div className='cv-container'>
              <a href={cvLink} download='CarmenBlancoDelgado.pdf'>
                <button className='cv-button'>Descargar CV</button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
