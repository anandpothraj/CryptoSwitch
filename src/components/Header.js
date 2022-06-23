import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Select, createTheme, ThemeProvider, MenuItem, makeStyles} from '@material-ui/core';
import { Crypto } from '../CryptoContext';

const useStyles = makeStyles(() => ({
  title : {
    flex:1,
    color:"gold",
    fontFamily:"Montserrat",
    fontWeight:"bold",
    cursor: "pointer",
  }
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {

  const history = useHistory();

  const { currency, setCurrency } = useContext(Crypto);
  
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position="static">
        <Container>
          <Toolbar>
            <Typography  className={classes.title} onClick={() => history.push("/")} variant="h6">Crypto-Switch</Typography>
            <Select
              variant="outlined" 
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}
            >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>    
  );
};

export default Header;