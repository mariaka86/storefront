import { connect } from 'react-redux'
import { Box, Button, ButtonGroup, Card, CardActions, CardMedia, Typography } from "@mui/material"



const ProductList = (props) => {
  const { items } = props
  

  return (
    <> <h1> Products</h1>
    {
      items.map((product, index) =>
        <Card key={`product- ${index}`}>
          <Typography>
          {product.category}
          </Typography>
          <Typography>
          {product.name}
          </Typography>
          <Typography>
          {product.description}
          </Typography>
          {product.price}
          <Typography>
          {product.inventory}
          </Typography>
        </Card>
      )
  }
  </>
);
};
 

const mapStateToProps = ({products}) => {
  return {
   items:products.products,
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);