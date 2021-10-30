import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Place from '../place/Place';
import './Destinations.css'

const Destinations = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, [])
  
  return (
    <div className='my-5 des' id='destinations'>
      <div className="container">
        <div className='mb-5'>
        <h5>Destination lists</h5>
        <h1>Go Exotic Places</h1>
        </div>
        <Row xs={1} md={2} lg={4} className="g-5">
          {
            places.map(place => <Place
              key={place._id}
              place={place}
            ></Place>)
          }
        </Row>
      </div>
    </div>
  );
};

export default Destinations;