import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import './TrustSection.css';

const TrustSection = () => {
    return (
        <Container id="trust" className="my-5 text-center">
            <h2 className="mb-4">Why Shop With Us?</h2>
            <Row>
                <Col md={4}>
                    <Card className="trust-card">
                        <Card.Body>
                            <i className="fa fa-thumbs-up fa-3x mb-3" aria-hidden="true"></i>
                            <Card.Title>Customer Satisfaction</Card.Title>
                            <Card.Text>We guarantee a full refund if you're not satisfied.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="trust-card">
                        <Card.Body>
                            <i className="fa fa-lock fa-3x mb-3" aria-hidden="true"></i>
                            <Card.Title>Secure Payments</Card.Title>
                            <Card.Text>Your payment information is protected.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="trust-card">
                        <Card.Body>
                            <i className="fa fa-truck fa-3x mb-3" aria-hidden="true"></i>
                            <Card.Title>Fast Shipping</Card.Title>
                            <Card.Text>Get your product delivered within 3-5 business days.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TrustSection;
