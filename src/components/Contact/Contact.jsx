import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.scss';

const Contact = () => {
  return (
  <div className="contact" id="contact">
    <Container>
      <Row className="py-3">
        <Col xs={12}>
          <h2 className="section-title">Contacto</h2>
          <div className="title-underline"></div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <p className="contact-intro-text text-center mb-4">
            Queremos ayudarte, puedes dejarnos tus datos en este formulario para ayudarte a conectar con una comunidad de la fe
          </p>
          <Form className="contact-form" action="https://nocodeform.io/f/68a90880a7999fa89b1f9230" method="POST">
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Nombre" 
                name="nombre"
                required 
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Barrio o pueblo que reside" 
                name="barrio_pueblo"
                required 
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control 
                type="tel" 
                placeholder="Número de teléfono" 
                name="telefono"
                required 
              />
            </Form.Group>
            
            <Button 
              variant="primary" 
              type="submit" 
              className="submit-btn"
            >
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Contact;