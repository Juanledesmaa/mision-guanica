import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.scss';

const Contact = () => (
  <div className="contact">
    <Container>
      <Row className="py-5">
        <Col xs={12}>
          <h2 className="section-title">Contact Us</h2>
          <div className="title-underline"></div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form className="contact-form">
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={5} placeholder="Your Message" />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="submit-btn">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;