let initialState ={
  productsInCart:[],
  
};

function cartReducer(state=initialState,action){
  switch(action.type){
    case'ADD':
    return{
      productsInCart:[...state.productsInCart,{...action.payload,qty:1}]
     
    }

    case 'REMOVE':
      return{
        productsInCart:state.productsInCart.filter(product=>product.name !== action.payload.name)
      }
    default:
      return state;
  }
}



export default cartReducer;