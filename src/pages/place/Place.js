import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = (props) => {
  const { name, title, img, review, _id } = props.place
  return (
    <div>
      <Col>
        <Card className='cards'>
          <Card.Img className='img-fluid  placeImg' variant="top" src={img} />
          <Card.Body>
            <div className='name-font'>
              <Card.Title className='textName'>{name}</Card.Title>
            </div>
            <Card.Text>
              {title}
            </Card.Text>
            <Link to={`/booking/${_id}`}>
            <button className='book-btn2'>BOOK NOW <i className="fas fa-arrow-right"></i></button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Place;