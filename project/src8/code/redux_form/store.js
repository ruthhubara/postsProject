import { createStore ,combineReducers,applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form'
// import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import companyReducer from './reducers/company'
import {UpperToCompanyName} from './middleWares/crud'
const reducer = combineReducers({userReducer,companyReducer,form:formReducer });

const store = createStore(reducer,applyMiddleware(UpperToCompanyName,
    // thunk
    ));
window.store = store;
export default store;
