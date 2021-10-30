import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
  return (
    <div id='blog' className='my-5'>
      <h4>To Get More Tips And Tricks</h4>
      <h1>Read Our Daily Blog</h1>
      <Container>
        <Row xs={1} md={1} lg={2} className="g-5">
          <Col className='cont'>
           
            <img className=' blog-img' src="https://templates.envytheme.com/traip/default/assets/images/blogs/blog-details-lg-1.jpg" alt="" />
            
            <div className='img-text'>
              <h6><i className="fas fa-calendar-alt"></i> 03 Feb</h6>
              <h4 style={{ fontWeight: "700" }}>How To Spend A Perfect Weekend In Asia Together</h4>
              <p className='my-3'>How Not To Get Lost In Foreign Country,I used to travel before there were smartphones, easy access to wifi and all of the other glorious things that make international travel so much easie</p>
              <h5>Read Article <i className="fas fa-angle-double-right"></i></h5>
            </div>
           
          </Col>
          <Col>
            <div className='blog-text' id='fst-1'>
              <h6><i className="fas fa-calendar-alt"></i> 03 Feb</h6>
              <h4 style={{ fontWeight: "700" }}>How Not To Get Lost In Foreign Country</h4>
              <p className='my-3'>How Not To Get Lost In Foreign Country,I used to travel before there were smartphones, easy access to wifi and all of the other glorious things that make international travel so much easie</p>
              <h5>Read Article <i className="fas fa-angle-double-right"></i></h5>
            </div>

            <div className='blog-text' id='second-2'>
              <h6><i className="fas fa-calendar-alt"></i> 03 Feb</h6>
              <h4 style={{ fontWeight: "700" }}>The Best Places To Visit With Family</h4>
              <p className='my-3'>How Not To Get Lost In Foreign Country,I used to travel before there were smartphones, easy access to wifi and all of the other glorious things that make international travel so much easie</p>
              <h5>Read Article <i className="fas fa-angle-double-right"></i></h5>
            </div>

            <div className='blog-text' id='third-3'>
              <h6><i className="fas fa-calendar-alt"></i> 03 Feb</h6>
              <h4 style={{ fontWeight: "700" }}>How To Spend A Perfect Weekend In Asia Together</h4>
              <p className='my-3'>How Not To Get Lost In Foreign Country,I used to travel before there were smartphones, easy access to wifi and all of the other glorious things that make international travel so much easie</p>
              <h5>Read Article <i className="fas fa-angle-double-right"></i></h5>
            </div>

          </Col>
        </Row>
        <button className='book-btn'>Explore Blog <i className="fas fa-arrow-right"></i></button>
      </Container>
    </div>
  );
};

export default Blog;