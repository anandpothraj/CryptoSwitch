import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Crypto } from "../CryptoContext";
import { SingleCoin } from '../config/api';

const CoinPage = () => {

  const { id } = useParams();
  const [ coin, setCoin ] = useState();
  const { currency, symbol } = useContext(Crypto);

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  useEffect(() => {
    fetchCoin();
    console.log(coin?.description.en.split(". ")[0]);
    // eslint-disable-next-line
  },[])

  return (
    <div className="container d-flex flex-col align-items-center">
      <div className='sidebar d-flex flex-col align-items-center' style={{width: "30vw",marginTop: 25,borderRight: "2px solid grey"}}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          style={{ marginBottom:"20px",height:"20px" }}
        />
        <h3>{coin?.name}</h3>
        <p>{coin?.description.en.split(". ")[0]}</p>
        <div>
          <span style={{ display: "flex" }}>
            <h5>Rank:</h5>
            &nbsp; &nbsp;
            <h5>{coin?.market_cap_rank}</h5>
          </span>
          <span style={{ display: "flex" }}>
            <h5>Current Price:</h5>
            &nbsp; &nbsp;
            <h5>{symbol}{" "}{coin?.market_data.current_price[currency.toLowerCase()]}</h5>
          </span>
          <span style={{ display: "flex" }}>
            <h5>Market Cap:</h5>
            &nbsp; &nbsp;
            <h5>{symbol}{" "}{coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6)}M</h5>
          </span>
        </div>
      </div>
      {/* <CoinInfo coin={coin} /> */}
    </div>
  )
}

export default CoinPage;