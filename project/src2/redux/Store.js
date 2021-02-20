import { createStore, combineReducers, applyMiddleware} from 'redux';
import {toUpperCase} from './MiddleWares/crud'
import userReducer from './Reducers/UserReducer';

const reducer = combineReducers({userReducer })

const store = createStore(reducer, applyMiddleware(toUpperCase));
window.store = store;
export default store