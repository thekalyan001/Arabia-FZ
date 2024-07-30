import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Navbar.Brand href="#home">Coffee Maker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#hero">Home</Nav.Link>
                    <Nav.Link href="#product">Product</Nav.Link>
                    <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                    <Nav.Link href="#trust">Trust</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
