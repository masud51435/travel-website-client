import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <>
     <Carousel fade className='banners'>
  <Carousel.Item>
    <img
      className="d-block w-100 ban-img"
      src="https://tevily-html.vercel.app/assets/images/backgrounds/main-slider-1-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Travel & Adventure</h1>
      <h2>Where Would You Like To Go?</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 ban-img"
      src="https://tevily-html.vercel.app/assets/images/backgrounds/main-slider-1-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1>Travel & Adventure</h1>
      <h2>Where Would You Like To Go?</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 ban-img"
      src="https://tevily-html.vercel.app/assets/images/backgrounds/main-slider-1-3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1>Travel & Adventure</h1>
      <h2>Where Would You Like To Go?</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
    </>
  );
};

export default Banner;