import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [scroll,setScroll]  = useState(false);

    const scrollOnChange = ()=>{
        if(window.scrollY<80){
            setScroll(true) 
        }
        else{
            setScroll(false) 
        }
    }

    window.addEventListener('scroll',scrollOnChange)
    return (

        <Navbar collapseOnSelect expand="md" sticky="top" className={scroll ? "nav-container" : "nav-container-scroll"}>
            <Container>
                <Navbar.Brand as={Link} to="/">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/">Services</Nav.Link>
                            <Nav.Link as={Link} to="/">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/">Contact</Nav.Link>
                            <Nav.Link className="pe-0" as={Link} to="/">Sign Up / </Nav.Link>
                            <Nav.Link className="ps-0" as={Link} to="/"> Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Header;