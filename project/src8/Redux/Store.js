import { createStore, combineReducers, applyMiddleware} from 'redux';

import userReducer from './Reducers/UserReducer';

const reducer = combineReducers({userReducer })

const store = createStore(reducer);
window.store = store;
export default store
