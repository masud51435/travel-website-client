import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TourPlan.css';

const TourPlan = () => {
  return (
    <div className='py-5 tour' id='tourplan'>
      <Container>
        <Row xs={1} md={1} lg={2} className="g-5">
          <Col>
            <img className='img-fluid' src="https://tevily-html.vercel.app/assets/images/resources/about-one-img-1.png" alt="" />
          </Col>
          <Col className='pt-4 desc'>
            <h3 className='my-2'>Get to know us plan</h3>
            <h1 className='mb-5'>Plan Your Trip with Farrell</h1>
            <h5 className='my-5'>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</h5>
            <h6 className='my-4'><i className="fas fa-check-circle"></i>  Invest in your simply neighborhood</h6>
            <h6 className='my-4'><i className="fas fa-check-circle"></i>  Support people in free text extreme need</h6>
            <h6 className='my-4'><i className="fas fa-check-circle"></i>  Largest global industrial business community</h6>
            <button className='book-btn'>BOOK WITH US NOW</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TourPlan;