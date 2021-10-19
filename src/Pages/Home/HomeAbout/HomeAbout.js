import React from 'react';
import { Col, Row } from 'react-bootstrap';
import doctor from "../../../Images/doctoor.jpg"

const HomeAbout = () => {
    return (
        <div className="container my-5">
            <h1>About Us</h1>
           
  <Row className="mt-5">
    <Col  xs={12} sm={6}><h1>ASH Health Care</h1>
    <p className="text-justify mt-4">A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, seniors' (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain disease categories. Specialized hospitals can help reduce health care costs compared to general hospitals.[2] Hospitals are classified as general, specialty, or government depending on the sources of income received. A teaching hospital combines assistance to people with teaching to medical students and nurses. A medical facility smaller than a hospital is generally called a clinic. Hospitals have a range of departments (e.g. surgery and urgent care) and specialist units such as cardiology. Some hospitals have outpatient departments and some have chronic treatment units. Common support units include a pharmacy, pathology, and radiology. Hospitals are typically funded by public funding, health organisations (for-profit or nonprofit), health insurance companies, or charities, including direct charitable donations. Historically, hospitals were often founded and funded by religious orders, or by charitable individuals and leaders</p></Col>
    <Col xs={12} sm={6}><img className="img-fluid" src={doctor} alt="" /></Col>
  </Row>


        </div>
    );
};

export default HomeAbout;