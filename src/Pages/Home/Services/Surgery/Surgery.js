import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Surgery = ({img}) => {
    return (
        <Col>
            <Card className="shadow p-3 mb-5 bg-body rounded border-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Sergery</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Surgery;