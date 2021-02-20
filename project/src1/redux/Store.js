import { createStore, combineReducers, applyMiddleware} from 'redux';

import userReducer from './Reducers/UserReducer';
import productsReducer from './Reducers/ProductsReducer';
import { UpperToProductName  } from "./MiddleWares/crud";

const reducer = combineReducers({userReducer, productsReducer })

const store = createStore(reducer, applyMiddleware(UpperToProductName));
window.store = store;
export default store
