import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



const Header =()=>{
  return(
    <Box>
    <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      OUR STORE
    </Typography>
    <Button >CART</Button>
  </Toolbar>
</AppBar>
</Box>
  )

}


export default Header