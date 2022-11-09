import { connect } from 'react-redux'
import Typography from '@mui/material/Typography';


const ProductList = (props) => {
  const { products } = props

  return (
    <>
      <h1> Products</h1>
      {
        products.map((product, index) =>
          <div key={`product- ${index}`}>
            <Typography>
            {product.name}
            {product.association}
            {product.description}
            {product.price}
            {product.inventory}
            </Typography>
          </div>
        )
    }
    </>
  );
};
const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer
  };
};
const mapDispatchToProps = {

}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);