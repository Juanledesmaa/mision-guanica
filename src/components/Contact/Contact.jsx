import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.scss';

const Contact = () => (
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
          <Form className="contact-form">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Barrio o pueblo que reside" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control type="tel" placeholder="Número de teléfono" />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="submit-btn">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;