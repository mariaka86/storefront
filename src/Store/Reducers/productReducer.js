const initialState = {

  products: [
    { name: 'IPod', category: 'Electronics',price:299, inventory:13},
    { name: 'Playstation 5', category:'Electronics' ,price:600, inventory:1 },
    { name: 'Sweater', category: 'Clothing', price:40.99, inventory:5 },
    { name: 'Boots', category: 'Clothing',price:60, inventory:3 },
    { name: 'Coca-Cola', category:'Food' ,price:1.99, inventory:8},
    { name: 'Hershey Kisses', category: 'food', price:0.99, inventory:200 },
    

  ],
  selectProducts:[]
};


function productReducer (state = initialState, action){
  const{type,payload}= action;

  switch(type){

    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectProducts: [...initialState.products].filter(product => product.category === payload),
        activeCategory: payload
      }
      
    default:
      return initialState;
  }
}


export default productReducer