import React from 'react';
import { Col, Row } from 'react-bootstrap';
import doctor from "../../../Images/doctoor.jpg"

const HomeAbout = () => {
    return (
        <div className="container my-5">
            <Row className="mt-5">
                <Col xs={12} sm={6}><h1>We will help to find health, to everyone.
                </h1><h5>The optimum ratio of price and quality responsible and conscientious approach</h5>
                    <p className="text-justify mt-4">On the basis of the medical center "Ash health Care" can be given a thorough examination of the body and get the advice of highly qualified specialists in various fields of medicine. According to studies, our doctors will make an individual program of prevention and treatment of identified diseases, directed to a surgical treatment if necessary. In today’s operational department conducted a wide range of operations under local and general anesthesia.</p></Col>
                <Col xs={12} sm={6}><img className="w-75" style={{height:"30rem"}} src={doctor} alt="" /></Col>
            </Row>
        </div>
    );
};

export default HomeAbout;