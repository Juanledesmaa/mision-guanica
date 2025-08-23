import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavigationBar.scss';

const NavigationBar = () => (
  <div className="navigationBar">
    <Navbar>
      <Container fluid>
        <Row className="w-100 align-items-center justify-content-center">
          <Col className="d-flex align-items-center justify-content-center px-2">
            <Navbar.Brand as="div" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
              <h1 className="brand-text m-0 text-center">SOMOS UNO - MISIÓN GUÁNICA</h1>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </div>
);

export default NavigationBar;