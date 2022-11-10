import {configureStore,combineReducers} from 'redux'// will need to add apply middleware
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
 import cartReducer from './cartReducer'
// will need to import logger


let reducers = combineReducers({
  products:productReducer,
  categories:categoryReducer,
  cart:cartReducer

});

export default function store(){
  // add applyMiddlware like composeWithDevTools(applyMiddleware(logger))
  return configureStore(reducers, composeWithDevTools());
}