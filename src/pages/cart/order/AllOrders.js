import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allorders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);
  
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete');
    if (proceed) {
      fetch((`http://localhost:5000/order/${id}`), {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            const remaining = orders.filter(order => order._id !== id)
            setOrders(remaining);
          }
        })
    }
  }
  


  return (
    <Container className='my-5'>
      <h1 className='my-5'style={{fontFamily:"Segoe Script", color:"#E96957"}}>All Order List</h1>
      <Row xs={1} md={2} lg={4} className="g-5">
        {orders.map(order => (
          <Col>
            <Card className='cards'>
              <Card.Img className='img-fluid  placeImg' variant="top" src={order?.img} />
              <Card.Body>
                <div className='name-font'>
                  <Card.Title className='textName'>{order?.name}</Card.Title>
                </div>
                <Card.Text>
                  {order?.email}
                </Card.Text>
                <Card.Text>
                  {order?.title}
                </Card.Text>
                <button onClick={() => handleDelete(order._id)} className='book-btn2'>CANCEL <i className="fas fa-arrow-right"></i></button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllOrders;