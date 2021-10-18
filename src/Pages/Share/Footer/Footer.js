import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import "./Footer.css";
import img from '../../../Images/banner/doctor.jpg'

const Footer = () => {
    return (
        <div className="footer-container mt-5" >
            <Container className="py-5">
                <Row>
                    <Col sm={4} xs={6}></Col>
                    <Col sm={3} xs={6}>
                        <Nav className="flex-column content-footer">
                            <Nav className="flex-column content-footer">
                                <Nav.Link >Home</Nav.Link>
                                <Nav.Link >About Us</Nav.Link>
                                <Nav.Link >Services</Nav.Link>
                                <Nav.Link >Blog</Nav.Link>
                                <Nav.Link >Contacts</Nav.Link>

                            </Nav>

                        </Nav>

                    </Col>
                    <Col sm={5} xs={12}>
                        <h1>Photos</h1>
                        <Row xs={4} md={6} className="g-2">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={img} />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <hr style={{ color: "white" }} />
                <Row className="mt-5 ms-3">
                    <Col sm={7} xs={12} className="d-flex align-items-center">
                        <p className="mb-0">Copyright © 2021 ..... by Sejan Mahmud</p>
                    </Col>
                    <Col sm={5} xs={12}>
                        <Nav className="content-footer">
                            <Nav.Link className="me-2">Privacy Policy.</Nav.Link>
                            <Nav.Link className="me-2">Terms of Use </Nav.Link>
                            <Nav.Link className="me-2">Pricing</Nav.Link>
                        </Nav>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;