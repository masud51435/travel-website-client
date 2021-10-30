import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../context/UseAuth';
import './Booking.css';

const Booking = () => {
  const { bookId } = useParams();
  const { user } = useAuth();

  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState([]);
  useEffect(() => {
    fetch('https://morning-beyond-17054.herokuapp.com/places')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);


  useEffect(() => {
    const foundItem = items.find(item => item._id == bookId)
    setSingleItem(foundItem)
  }, [items]);



  const handleAddToCart = () => {
    singleItem.email = user.email;
    singleItem.status = 'pending';
    fetch('https://morning-beyond-17054.herokuapp.com/addCart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(singleItem)
    })
  }


  return (
    <div>
      <Container className="centers my-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={singleItem?.img} />
          <Card.Body>
            <Card.Title>{singleItem?.name}</Card.Title>
            <Card.Text>
              {singleItem?.review}
            </Card.Text>
            <Card.Text>
              {singleItem?.title}
            </Card.Text>
            <Link to="/home"><Button variant="primary">Go Back</Button></Link>
            <Link to='/myorder'>
              <Button onClick={handleAddToCart} className='ms-5' variant="primary">Add To Cart</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Booking;