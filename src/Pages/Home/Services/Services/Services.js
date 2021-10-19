import React, { useState } from 'react';
import {Col, Container, Nav, Row } from 'react-bootstrap';
import "./Services.css";

import Cardiology from '../Cardiology/Cardiology';
import Laboratory from '../Laboratory/Laboratory';
import Pediatrics from '../Pediatrics/Pediatrics';
import Surgery from '../Surgery/Surgery';
import Therapist from '../Therapist/Therapist';

import SmoothList from 'react-smooth-list';
import { Link } from 'react-router-dom';

import useData from '../../../../hooks/useData';
import Gastroenterology from '../Gastroenterology/Gastroenterology';



const Services = () => {
    const [active, setActive] = useState('cardiology');
   const [cardiology, laboratory, gastroenterology,pediatrics,surgery,therapist] = useData();
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
                        <Nav.Link as={Link} to={''} className="Services-nav" onClick={() => setActive('gastroenterology')}><i class="fas fa-angle-right me-2 Services-arrow"></i>Gastroenterology</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={12} md={9}>
                    <Row xs={1} md={3} className="g-2">
                        {
                            active === "cardiology" && cardiology.map(cardio=><SmoothList> <Cardiology cardio={cardio}></Cardiology></SmoothList>)
                        }
                        {
                            active === "laboratory" && laboratory.map(labo =><SmoothList> <Laboratory labo={labo}></Laboratory></SmoothList>)
                        }
                        {
                            active === "pediatrics" && pediatrics.map(pediatric =><SmoothList> <Pediatrics pediatric={pediatric}></Pediatrics></SmoothList>)
                        }
                        {
                            active === "surgery" && surgery.map(surg => <SmoothList><Surgery surg={surg}></Surgery></SmoothList>)
                        }
                        {
                            active === "therapist" && therapist.map(therapy=><SmoothList> <Therapist therapy={therapy}></Therapist></SmoothList>)
                        }
                        {
                            active === "gastroenterology" && gastroenterology.map(gastro =><SmoothList> <Gastroenterology gastro={gastro}></Gastroenterology></SmoothList>)
                        }

                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;