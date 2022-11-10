let initialState = {
  categories: [
  { name: 'electronics', displayName: 'ELECTRONICS',description: 'enter description here' },
  { name: 'food', displayName: 'FOOD',description: 'enter description here' },
  { name: 'clothing', displayName: 'CLOTHING',description: 'enter description here' },
  ],
};  

  function categoryReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
  
      case 'Select':
        return {
          ...state,
          activeCategory: payload,
        }
  
      default:
        return initialState;
        
    }
  }

  export default categoryReducer;