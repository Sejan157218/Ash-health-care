import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from "../../../Images/doctor2.jpg";
import img2 from "../../../Images/doctor3.jpg";
import img3 from "../../../Images/doctor4.jpg";
import img4 from "../../../Images/doctor5.jpg";
const OurDoctor = () => {

    return (
        <div className="container">
            <h1 className="my-5">Our Doctor</h1>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Mary Patricia</Card.Title>
                            <Card.Text>
                            Specialist in Gastroenterology
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>Linda Elizabeth</Card.Title>
                            <Card.Text>
                            Specialist in Surgery
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>James Robert</Card.Title>
                            <Card.Text>
                            Specialist in Cardiology
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Michael William</Card.Title>
                            <Card.Text>
                            Specialist in Therapist
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default OurDoctor;