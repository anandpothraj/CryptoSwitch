import React, { useState ,useEffect } from 'react';
import { createContext } from 'react';

export const Crypto = createContext();

const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState("INR");
    const [ symbol, setSymbol] = useState("₹");

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
    },[currency])


  return (
    <Crypto.Provider value={{currency, setCurrency, symbol}}>{children}</Crypto.Provider>
  )
}

export default CryptoContext;
