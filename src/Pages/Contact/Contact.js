import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <div className="contact-container d-flex justify-content-center align-items-center">
                <Link to="/home" className="text-decoration-none">
                    <h1 className="about-h1">Home </h1>
                </Link>
                <h5 className="about-h5"> Contact US </h5>
            </div>
            <Container className="my-5">
                <form class="form-horizontal" >
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message" class="col-sm-2 control-label">Message</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="4" name="message"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <Button className="btn-contact">Submit</Button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Contact;