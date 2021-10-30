import React from 'react';
import Banner from '../banner/Banner';
import Blog from '../blog/Blog';
import Destinations from '../destinations/Destinations';
import TourPlan from '../tour/TourPlan';

const Home = () => {
  return (
    <div id='home'>
      <Banner></Banner>
      <Destinations></Destinations>
      <TourPlan></TourPlan>
      <Blog></Blog>
    </div>
  );
};

export default Home;