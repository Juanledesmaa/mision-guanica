import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <Row>
        <Col md={6}>
          <div className="contact-info">
            <h4>Get in Touch</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            
            <div className="info-item">
              <FontAwesomeIcon icon="map-marker-alt" className="info-icon" />
              <span>123 Main Street, City, State 12345</span>
            </div>
            
            <div className="info-item">
              <FontAwesomeIcon icon="phone" className="info-icon" />
              <span>+1 (123) 456-7890</span>
            </div>
            
            <div className="info-item">
              <FontAwesomeIcon icon="envelope" className="info-icon" />
              <span>info@example.com</span>
            </div>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
              <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
              <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            </div>
          </div>
        </Col>
        
        <Col md={6}>
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