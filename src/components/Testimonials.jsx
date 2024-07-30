import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css'

const Testimonials = () => {
    const reviews = [
        { name: 'John Doe', feedback: 'Best coffee maker I have ever used!', image:"https://images.inc.com/uploaded_files/image/1024x576/getty_481292845_77896.jpg" },
        { name: 'Jane Smith', feedback: 'Makes my mornings so much better!', image:"https://th.bing.com/th/id/OIP.hLTThhxHPeGqFQVjpD1-hwHaE8?rs=1&pid=ImgDetMain" },
    ];

    return (
        <Container id="testimonials" className="my-5 text-center">
            <h2 className="text-center mb-4">What Our Customers Say</h2>
            <Row>
                {reviews.map((review, index) => (
                    <Col md={6} key={index} className="mb-4">
                        <Card className="testimonial-card">
                            <Card.Img variant="top" src={review.image} className="testimonial-image" />
                            <Card.Body>
                                <Card.Title>{review.name}</Card.Title>
                                <Card.Text>{review.feedback}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Testimonials;
