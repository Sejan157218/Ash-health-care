import React from 'react';
import { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
const OurBlogs = () => {
    const [blogs,setBlog]=useState([]);
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    return (
        <div className="container h-100">
            <h1 className="text-center mt-5 mb-4">Our Blog</h1>
            <Row xs={1} md={2} className="g-4">
  {blogs.map(blog => (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={blog?.img} />
        <Card.Body>
          <Card.Title>{blog?.title}</Card.Title>
          <Card.Text>
          {blog?.desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    );
};

export default OurBlogs;