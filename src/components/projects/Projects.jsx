import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './projects.css';
import Image from '../../assets/download.jpg';

const Projects = () => {
  return (
    
    <div className="flex-column projects__bg gradient__bg" id="Projects">
       <h1>Projects</h1>
      <div className="projects__bg1" >
        <Row  className="g-4">
          {Array.from({ length:3}).map((_, idx) => (
           <Col key={idx}>
            <Card className="card__body" border="Header"> 
            <Card.Img className="projects__img" variant="top" src={Image} alt="Image" />
            <Card.Body >
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  </div>
  
  )
}

export default Projects;
