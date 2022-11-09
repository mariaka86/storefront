import {createStore,combineReducers} from 'redux'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
  products:productReducer,
  categories:categoryReducer
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}