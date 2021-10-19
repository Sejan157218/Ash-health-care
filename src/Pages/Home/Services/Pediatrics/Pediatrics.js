import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pediatrics = ({pediatric}) => {
    return (
        <Col className="wrapper">
        <Card className="service-card">
           <div class="service-body">
           <Card.Img  variant="top" src={pediatric?.img} />
            <Card.Body>
                <Card.Title>{pediatric?.title}</Card.Title>
                <Card.Text>
                {pediatric?.desc.slice(0,80)}
                </Card.Text>
            </Card.Body>
           </div>
           <div class="info" fixed="bottom">
              <Link to={`/Servicesditails/${pediatric?.key}`}> <button>See More <i class="fas fa-chevron-right ms-2"></i></button></Link>
           </div>
        </Card>
    </Col>
    );
};

export default Pediatrics;