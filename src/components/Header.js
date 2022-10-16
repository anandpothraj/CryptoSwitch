import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { appContext } from '../Context';

const Header = () => {

  const { currency, setCurrency } = useContext(appContext);

  const changeCurrency = () => {
    if(currency === "INR"){
      setCurrency("USD");
    }
    else{
      setCurrency("INR");
    }
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{color:"#ffd200",fontWeight:"600"}}>
          CryptoSwitch
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:"transparent",border:"1px solid #ffd200",color:"#ffd200"}}>{currency}</Dropdown.Toggle>
          <Dropdown.Menu style={{minWidth:"70px"}}>
            <Dropdown.Item onClick={changeCurrency} >INR</Dropdown.Item>
            <Dropdown.Item onClick={changeCurrency} >USD</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;