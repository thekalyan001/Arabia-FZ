import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css'; // Create a CSS file for styles

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <Container>
                <h1>Discover the Perfect Brew</h1>
                <p>Experience rich flavors and aroma with our premium coffee maker.</p>
                <Button variant="primary" size="lg" href="#product">Buy Now</Button>
            </Container>
        </div>
    );
};

export default Hero;
