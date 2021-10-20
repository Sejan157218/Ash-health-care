import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from "../../../Images/doctor1.jpg";
import img2 from "../../../Images/doctor2.jpg";
import img3 from "../../../Images/doctor3.jpg";
import img4 from "../../../Images/doctor4.jpg";
import './OurDoctor.css';
const OurDoctor = () => {

    return (
        <div className="container">
            <h1 className="my-5">Our Doctor</h1>
            <Row xs={1}  md={2} lg={4} className="g-2">
                <div className="card__collection clear-fix">
                    <div className="cards cards--two">
                        <img src={img1} className="img-responsive" alt="Cards Image" />
                        <span className="cards--two__rect"></span>
                        <span className="cards--two__tri"></span>
                        <p className="pb-2">Lucy Grace</p>

                        <ul className="cards__list">
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="card__collection clear-fix">
                    <div className="cards cards--two">
                        <img src={img2} className="img-responsive" alt="Cards Image" />
                        <span className="cards--two__rect"></span>
                        <span className="cards--two__tri"></span>
                        <p className="pb-2">David John</p>

                        <ul className="cards__list">
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="card__collection clear-fix">
                    <div className="cards cards--two">
                        <img src={img3} className="img-responsive" alt="Cards Image" />
                        <span className="cards--two__rect"></span>
                        <span className="cards--two__tri"></span>
                        <p className="pb-2">Peter Michael</p>

                        <ul className="cards__list">
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="card__collection clear-fix">
                    <div className="cards cards--two">
                        <img src={img4} className="img-responsive" alt="Cards Image" />
                        <span className="cards--two__rect"></span>
                        <span className="cards--two__tri"></span>
                        <p className="pb-2">Charlotte Olivia</p>

                        <ul className="cards__list">
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default OurDoctor;