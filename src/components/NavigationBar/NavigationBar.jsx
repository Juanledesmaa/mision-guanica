import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.scss';

const NavigationBar = () => (
  <div className="navigationBar">
    <Navbar>
      <Container fluid>
        <div className="w-100 d-flex align-items-center justify-content-center">
          <h1 className="brand-text m-0 text-center" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
            SOMOS UNO - MISIÓN GUÁNICA
          </h1>
        </div>
      </Container>
    </Navbar>
  </div>
);

export default NavigationBar;