import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cardiology = ({cardio}) => {
    return (
        <Col className="wrapper">
        <Card className="service-card">
           <div class="service-body">
           <Card.Img  variant="top" src={cardio?.img} />
            <Card.Body>
                <Card.Title>{cardio?.title}</Card.Title>
                <Card.Text>
                {cardio?.desc.slice(0,80)}
                </Card.Text>
            </Card.Body>
           </div>
           <div class="info" fixed="bottom">
              <Link to={`/Servicesditails/${cardio?.key}`}> <button>See More <i class="fas fa-chevron-right ms-2"></i></button></Link>
           </div>
        </Card>
    </Col>
    );
};

export default Cardiology;