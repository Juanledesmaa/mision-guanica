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
          <Col xs={12} className="text-center">
            <p className="copyright">
              © {currentYear} Somos uno - Guánica.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;