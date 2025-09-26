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
    'https://drive.google.com/file/d/1vFn_YlSpoIcE-Cz-wGWbNLDOrvpXlcz1/view';
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
            {/* <h2>Carmen Blanco Delgado</h2>
            <p className='lead'>Desarrolladora Web</p> */}
            <p>
              <span className='frontend'>¡Hola!</span> Soy Carmen Blanco,
              desarrolladora Full-stack. Amo crear proyectos y explorar todas
              sus posibilidades. Especializada en React JS, estoy siempre
              dispuesta a aprender y crecer en el mundo del desarrollo. Me
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

            <p>
              Actualmente estoy ampliando mis conocimientos en el desarrollo
              back-end, aprendiendo Php y su framework Laravel.
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
