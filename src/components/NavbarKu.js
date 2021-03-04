import React from 'react';
import { Link } from "react-router-dom";

import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

// import styled from 'styled-components';

function activeNav(event,setActive){
    setActive(event.target.innerText);
}

function NavbarKu(props) {

    return (
        <>

        <Navbar collapseOnSelect expand="lg"  variant="dark" className="bg-dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link onClick={(event) => activeNav(event,props.setActive)} to="/" className={props.active === "Home" ?
                                "nav-link active" : "nav-link"}>Home</Link>
                <Link onClick={(event) => activeNav(event,props.setActive)} to="/inventory" className={props.active === "Inventory" ?
                                "nav-link active" : "nav-link"}>Inventory</Link>
            </Nav>
            <Nav>
                {props.button}
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </>

    )
}

export default NavbarKu
