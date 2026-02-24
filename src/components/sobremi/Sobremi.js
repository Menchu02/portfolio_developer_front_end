import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import photo from '../../assets/cuadrada_mujer.png';
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
import logoLaravel from '../../assets/result_laravel.png';

export default function Sobremi() {
  const cvLink =
    'https://drive.google.com/file/d/1zUww_TJamX5KdyD3k4cYg81TC7mRJig-/view?usp=drive_link';

  return (
    <section id='about' className='section section--dark'>
      <div className='panel'>
        <Row className='align-items-center g-4'>
          <Col md={4} className='text-center'>
            <Image
              src={photo}
              alt='Foto de perfil'
              roundedCircle
              fluid
              className='about-photo'
            />
          </Col>

          <Col md={8}>
            <p className='about-text'>
              <span className='span_sobremi'>¡Hola!</span> Soy Carmen Blanco,
              desarrolladora Full-stack con especial enfoque en el desarrollo
              Front-end con React. Me gusta darle forma y color a las ideas.
              Aunque mi base es el front-end, actualmente estoy profundizando en
              el back-end para ampliar mi visión técnica y consolidar mi perfil
              Full-stack. Me considero trabajadora, adaptable y amante de los
              retos. Disfruto trabajando en equipo y valoro la comunicación
              clara dentro de los proyectos. A nivel técnico, he trabajado con
              React, JavaScript, Bootstrap y Sass en el Front-end, así como con
              Java (Spring Boot) y Laravel en el Back-end.
            </p>

            <p className='about-subtitle'>Conocimientos</p>

            <div className='logos logos--dark'>
              <img src={logoHtml} alt='HTML' />
              <img src={logoCss} alt='CSS' />
              <img src={logoSass} alt='Sass' />
              <img src={logoBootstrap} alt='Bootstrap' />
              <img src={logoJs} alt='JavaScript' />
              <img src={logoJava} alt='Java' />
              <img src={logoReact} alt='React' />
              <img src={logoLaravel} alt='Laravel' />
              <img src={logoGit} alt='Git' />
              <img src={logoSpring} alt='Spring Boot' />
              <img src={logoScrum} alt='Scrum' />
            </div>

            <p className='about-text'>
              Actualmente estoy ampliando mis conocimientos en el desarrollo
              back-end, profundizando en PHP y su framework Laravel, y
              formándome en TypeScript para fortalecer mis proyectos en React.
            </p>
            <div className='cv-container'>
              <a href={cvLink} download='CarmenBlancoDelgado.pdf'>
                <button className='cv-button'>Descargar CV</button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
