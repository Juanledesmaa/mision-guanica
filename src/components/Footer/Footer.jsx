import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col md={6}>
            <p className="copyright">
              © {currentYear} Your Company. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="footer-links">
              <li><button className="link-button" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</button></li>
              <li><button className="link-button" onClick={() => window.scrollTo(0, 0)}>Terms of Service</button></li>
              <li><button className="link-button" onClick={() => window.scrollTo(0, 0)}>Contact</button></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;