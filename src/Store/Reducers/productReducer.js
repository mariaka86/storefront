const initialState = {
  categories: [
    { name: 'IPod', category: 'Electronics',price:299, inventory:13},
    { name: 'Playstation 5', category:'Electronics' ,price:600, inventory:1 },
    { name: 'Sweater', category: 'Clothing', price:40.99, inventory:5 },
    { name: 'Boots', category: 'Clothing',price:60, inventory:3 },
    { name: 'Coca-Cola', category:'Food' ,price:1.99, inventory:8},
    { name: 'Hershey Kisses', category: 'food', price:0.99, inventory:200 },
    

  ],
  activeCategory: ''
};


function productReducer (state = initialState, action){
  const{type,payload}= action;

  switch(type){

    case 'SELECT_CATEGORY':
      return {
        ...state,
        products: state.products.filter(product => product.category === payload),
        activeCategory: payload
      }
      case 'reset':
        return initialState;
    default:
      return initialState;
  }
}

export const filterCategory =(activeCategory)=>{
  return{
    type:'category',
    payload: activeCategory,

  }
}

export default productReducer