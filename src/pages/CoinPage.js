import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Crypto } from "../CryptoContext";
import { SingleCoin } from '../config/api';
import parse from 'html-react-parser';
import CoinInfo from '../components/CoinPage/CoinInfo';

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
    // eslint-disable-next-line
  },[])

  return (
    <div className="container d-flex flex-col text-center align-items-center p-0 m-0 text-light mt-4" style={{minWidth:"100vw", minHeight:"100%"}}>
      <div className='sidebar align-items-center p-3' style={{width: "30vw",borderRight: "2px solid grey",minHeight:"80vh"}}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          style={{height:"200px",marginBottom:"20px"}}
        />
        <h3 className="display-5" style={{fontWeight:"500"}}>{coin?.name}</h3>
        <p style={{textAlign:"left",color:"#EEBC1D"}} >{parse(`${coin?.description.en.split(". ")[0]}`)}.</p>
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
      <CoinInfo/>
    </div>
  )
}

export default CoinPage;