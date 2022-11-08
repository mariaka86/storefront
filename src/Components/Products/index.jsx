import { connect } from 'react-redux'

const Product = (props) => {
  const { products } = props

  return (
    <>
      <h1> Products</h1>
      {
        products.map((product, index) =>
          <div key={`product- ${index}`}>
            {product.name}
          </div>
        )
    }
    </>
  );
};
const mapStateToProps = ({ products }) => {
  return {
    products: products,
  };
};

export default connect(mapStateToProps)(Product);