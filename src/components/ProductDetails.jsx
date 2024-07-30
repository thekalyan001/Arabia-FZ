import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
const productImage = 'https://thumbs.dreamstime.com/b/barista-preparing-to-test-inspecting-quality-coffee-barista-preparing-to-test-inspecting-quality-coffee-270848902.jpg';

const ProductDetails = () => {
    return ( 
        <Container id="product" className="my-5">
            <Row>
                <Col md={6}>
                    <Image src={productImage} fluid />
                </Col>
                <Col md={6}>
                    <h2>The Ultimate Coffee Maker</h2>
                    <p>Features:</p>
                    <ul>
                        <li>Brews in 5 minutes</li>
                        <li>Easy to clean</li>
                        <li>Programmable settings</li>
                        <li>Available in multiple colors</li>
                    </ul>
                    <h3>$99.99</h3>
                    <Button variant="success">Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
