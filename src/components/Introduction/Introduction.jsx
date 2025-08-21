import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Introduction.scss';

const Introduction = () => (
  <div className="introduction">
    <Container>
      <Row className="py-5">
        <Col lg={8} className="mx-auto">
          <h2 className="section-title">Acerca de Somos Uno - Guánica</h2>
          <div className="title-underline"></div>
          <p className="intro-text">
            Nos alegra que estés aquí. En Misión Guánica queremos conocerte, escucharte y caminar contigo. 
            Nuestro propósito es unir esfuerzos como iglesias para llevar el mensaje de esperanza y amor 
            de Jesús a cada rincón de Guánica. Creemos que nadie debería estar solo, y por eso queremos 
            ayudarte a encontrar una comunidad donde puedas crecer, compartir tu fe y descubrir el 
            propósito que Dios tiene para tu vida.
          </p>
          <p className="intro-text">
            Aquí podrás encontrar información sobre las diferentes iglesias en la zona y cómo cada una 
            puede ser un lugar de apoyo, amistad y transformación. Más que un evento, esto es una 
            invitación a ser parte de una familia en la fe.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Introduction;