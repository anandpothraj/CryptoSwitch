import React from 'react';
import Banner from '../components/Homepage/Banner';
import Carousel from '../components/Homepage/Carousel';
import CoinsTable from '../components/Homepage/CoinsTable';

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Carousel/>
      <CoinsTable/>
    </div>
  )
}

export default HomePage