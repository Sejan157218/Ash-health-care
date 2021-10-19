import React, { useState } from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import "./Services.css";
import img from "../../../../Images/banner/doctor.jpg"
import Cardiology from '../Cardiology/Cardiology';
import Laboratory from '../Laboratory/Laboratory';
import Pediatrics from '../Pediatrics/Pediatrics';
import Surgery from '../Surgery/Surgery';
import Therapist from '../Therapist/Therapist';

import SmoothList from 'react-smooth-list';
import { Link } from 'react-router-dom';


const Services = () => {
    const [active, setActive] = useState('cardiology');
    console.log(active);
    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} md={3} className="shadow p-3 mb-5 bg-body rounded">
                    <h1 className="ms-2 Services-h1"><span>Services</span></h1>
                    <Nav className="flex-column Services-nav">
                        <Nav.Link as={Link} to={''} className="Services-nav" onClick={() => setActive('cardiology')}><i class="fas fa-angle-right me-2 Services-arrow"></i>Cardiology</Nav.Link>
                        <Nav.Link as={Link} to={''} className="Services-nav" onClick={() => setActive('laboratory')}><i class="fas fa-angle-right me-2 Services-arrow"></i>Laboratory</Nav.Link>
                        <Nav.Link as={Link} to={''} className="Services-nav" onClick={() => setActive('pediatrics')}><i class="fas fa-angle-right me-2 Services-arrow"></i>Pediatrics</Nav.Link>
                        <Nav.Link as={Link} to={''} className="Services-nav" onClick={() => setActive('surgery')}><i class="fas fa-angle-right me-2 Services-arrow"></i>Surgery</Nav.Link>
                        <Nav.Link as={Link} to={''} className="Services-nav" onClick={() => setActive('therapist')}><i class="fas fa-angle-right me-2 Services-arrow"></i>Therapist</Nav.Link>
                        <Nav.Link as={Link} to={''} className="Services-nav" onClick={() => setActive('therapist')}><i class="fas fa-angle-right me-2 Services-arrow"></i>Therapist</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={12} md={9}>
                    <Row xs={1} md={3} className="g-2">
                        {
                            active === "cardiology" && Array.from({ length: 6 }).map((_, idx) =><SmoothList> <Cardiology img={img}></Cardiology></SmoothList>)
                        }
                        {
                            active === "laboratory" && Array.from({ length: 6 }).map((_, idx) =><SmoothList> <Laboratory img={img}></Laboratory></SmoothList>)
                        }
                        {
                            active === "pediatrics" && Array.from({ length: 6 }).map((_, idx) =><SmoothList> <Pediatrics img={img}></Pediatrics></SmoothList>)
                        }
                        {
                            active === "surgery" && Array.from({ length: 6 }).map((_, idx) => <SmoothList><Surgery img={img}></Surgery></SmoothList>)
                        }
                        {
                            active === "therapist" && Array.from({ length: 6 }).map((_, idx) =><SmoothList> <Therapist img={img}></Therapist></SmoothList>)
                        }
                        {
                            active === "therapist" && Array.from({ length: 6 }).map((_, idx) =><SmoothList> <Therapist img={img}></Therapist></SmoothList>)
                        }

                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;