//ACTIONS


export const filterCategory =
(activeCategory)=>{
  return{
    type:'category',
    payload: activeCategory,

  }
}
export const addToCart =(product)=>{
  return{
    type:'ADD',
    payload:product,
  }
}
export const removeFromCart =(product)=>{
  return{
  type:'REMOVE',
  payload:product,
  }
}