import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavigationBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => (
  <div className="navigationBar">
    <Navbar>
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={6} xl={{ span: 3, offset: 3 }} className="d-flex align-items-center">
            <Navbar.Brand as="div" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
              <h1 className="brand-text m-0">SOMOS UNO</h1>
            </Navbar.Brand>
          </Col>
          <Col xs={6} xl={3} className="d-flex align-items-center justify-content-end">
            <Navbar.Toggle />
            <Navbar.Collapse className="d-flex align-items-center justify-content-end">
              <FontAwesomeIcon icon={faPhone} />
              <h3 className="icon-text">123-456-7890</h3>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </div>
);

export default NavigationBar;