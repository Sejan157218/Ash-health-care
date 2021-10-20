
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SmoothList from 'react-smooth-list';

import useServicesData from '../../hooks/useServicesData';
import ServiceCard from '../Home/Services/ServiceCard/ServiceCard';

const ServicesDitails = () => {
  const { Serviceid } = useParams();
  const [data] = useServicesData()
  const newService = data.filter(service => service.key == Serviceid);
  const serviceCard = [];
  for (let i = 0; i < 4; i++) {
    let randomService = data[Math.floor(Math.random() * data.length)];

    serviceCard.push(randomService);
  }
  return (
    <Container className="mt-4">
      <Row>
        <Col >
          <Card>
            <Row>
              <Col xs={12} sm={6}><Card.Body>
                <Card.Title>{newService[0]?.title}</Card.Title>
                <Card.Text>
                  {newService[0]?.desc}
                </Card.Text>
              </Card.Body>
                <div className="text-center"> <Link to="/home"> <button className="banner-btn">Go back </button></Link></div></Col>
              <Col xs={12} sm={6}> <Card.Img variant="top" style={{ height: "30rem" }} src={newService[0]?.img} /></Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4 mt-5">

        {
          serviceCard?.map(data => <SmoothList> <ServiceCard data={data}></ServiceCard></SmoothList>

          )}
      </Row>
    </Container>
  );
};

export default ServicesDitails;