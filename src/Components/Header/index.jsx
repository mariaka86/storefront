import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'

const Header =()=>{

  let productsInCart = useSelector(state => state.cart.productsInCart)
  
  return(
    <Box>
    <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      OUR STORE
    </Typography>
    <a href="value">Cart
    ({productsInCart.length})
    </a>
  </Toolbar>
</AppBar>
</Box>
  )

}


export default Header