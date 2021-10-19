import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import useServiceData from '../../hooks/useServiceData';
import useServicesData from '../../hooks/useServicesData';

const ServicesDitails = () => {
    const {Serviceid} =useParams();
    const [data] =useServicesData()
    const newService = data.filter(service=>service.key==Serviceid);
   
    return (
        <Container>
  <Row>
  <Col>
      <Card>
        <Card.Img variant="top" style={{height:"30rem"}} src={newService[0]?.img} />
        <Card.Body>
          <Card.Title>{newService[0]?.title}</Card.Title>
          <Card.Text>
          {newService[0]?.desc}
          </Card.Text>
        </Card.Body>
        <Link to="/home"> <button className="btn-regul">Go back <i class="fas fa-chevron-right ms-2"></i></button></Link>
      </Card>
    </Col>
  </Row>
</Container>
    );
};

export default ServicesDitails;