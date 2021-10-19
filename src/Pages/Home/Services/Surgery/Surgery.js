import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Surgery.css"

const Surgery = ({surg}) => {
    return (
        <Col className="wrapper">
            <Card className="service-card">
               <div class="service-body">
               <Card.Img  variant="top" src={surg?.img} />
                <Card.Body>
                    <Card.Title>{surg?.title}</Card.Title>
                    <Card.Text>
                    {surg?.desc.slice(0,80)}
                    </Card.Text>
                </Card.Body>
               </div>
               <div class="info" fixed="bottom">
                  <Link to={`/Servicesditails/${surg?.key}`}> <button>See More <i class="fas fa-chevron-right ms-2"></i></button></Link>
               </div>
            </Card>
        </Col>
    );
};

export default Surgery;