import React from 'react';

const Banner = () => {
  return (
    <div className="banner text-light d-flex flex-column justify-content-center" style={{minHeight:"250px",backgroundColor:"#212529"}}>
      <div className='w-75 m-auto'>
        <h1 style={{fontSize:"50px",marginBottom:"20px"}}>CryptoSwitch</h1>
        <p>Get All The Info Regarding Your Favourite Crypto Currency</p>
      </div>
    </div>
  )
}

export default Banner