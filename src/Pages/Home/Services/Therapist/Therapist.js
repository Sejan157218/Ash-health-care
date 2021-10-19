import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Therapist = ({therapy}) => {
    return (
        <Col className="wrapper">
        <Card className="service-card">
           <div class="service-body">
           <Card.Img  variant="top" src={therapy?.img} />
            <Card.Body>
                <Card.Title>{therapy?.title}</Card.Title>
                <Card.Text>
                    {therapy?.desc.slice(0,80)}
                </Card.Text>
            </Card.Body>
           </div>
           <div class="info" fixed="bottom">
              <Link to={`/Servicesditails/${therapy?.key}`}> <button>See More <i class="fas fa-chevron-right ms-2"></i></button></Link>
           </div>
        </Card>
    </Col>
    );
};

export default Therapist;