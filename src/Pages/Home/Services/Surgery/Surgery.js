import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Surgery.css"

const Surgery = ({img}) => {
    return (
    //     <div class="wrapper">
    //     <div class="service-card">
    //          <img src={img} />
    //       <div class="info">
    //         <h1>Mountain</h1>
    //         <p>Lorem Ipsum is simply dummy text from the
    //      printing and typeseting industry</p>
    //         <button class="readme-btn">Read More</button>
    //       </div>
    //     </div>
    
    //   </div>



        <Col className="wrapper">

            <Card className="service-card">
               <div class="service-body">
               <Card.Img  variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Sergery</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
               </div>
               <div class="info">
                   <button>sdfsdfdsfg</button>
               </div>
            </Card>
           
        </Col>
    );
};

export default Surgery;