import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Surgery.css"

const Surgery = ({img}) => {
    return (
        <Col className="wrapper">
            <Card className="service-card">
               <div class="service-body">
               <Card.Img  variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Sergery</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
               </div>
               <div class="info" fixed="bottom">
                  <Link to="/"> <button>See More <i class="fas fa-chevron-right ms-2"></i></button></Link>
               </div>
            </Card>
        </Col>
    );
};

export default Surgery;