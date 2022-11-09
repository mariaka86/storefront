import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'



const Header =()=>{
  return(
    <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      OUR STORE
    </Typography>
    <Button >CART</Button>
  </Toolbar>
</AppBar>
  )

}


export default Header