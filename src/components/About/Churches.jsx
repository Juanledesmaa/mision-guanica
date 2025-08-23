import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parallax } from 'react-parallax';
import secondParallaxImage from '../../img/second-parallax.jpg';
import './Churches.scss';

const Churches = ({ data = [] }) => {
  const placeholderData = [
    {
      icon: "fa-rocket",
      title: "Fast Service",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: "fa-shield-alt",
      title: "Secure Platform",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      icon: "fa-users",
      title: "Expert Team",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];
  
  const churchesData = data && data.length > 0 ? data : placeholderData;
  
  return (
    <div className="churches">
      <Parallax
        blur={0}
        bgImage={secondParallaxImage}
        bgImageAlt="Churches Background"
        strength={200}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      >
        <div className="churches-overlay">
          <Container>
            <Row className="py-5">
              <Col xs={12}>
                <h2 className="section-title">Iglesias en la zona</h2>
                <div className="title-underline"></div>
              </Col>
            </Row>
            <Row className="g-4 pb-5">
              {churchesData.map((church, index) => (
                <Col key={index} md={4}>
                  <Card className="church-card h-100">
                    <Card.Body className="text-center">
                      <div className="church-icon">
                        <FontAwesomeIcon 
                          icon={church.icon ? church.icon.replace('fa fa-', '').replace('fa-', '') : 'church'} 
                          size="3x" 
                        />
                      </div>
                      <h4 className="church-title">{church.title}</h4>
                      <p className="church-text">{church.text}</p>
                      {church.facebook && (
                        <a 
                          href={church.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="church-facebook-link"
                        >
                          <FontAwesomeIcon icon={['fab', 'facebook']} /> Visitar en Facebook
                        </a>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  );
};

export default Churches;