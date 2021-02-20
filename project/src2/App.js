import './App.css';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Users from './components/users';
import Routerr from './components/rout';

// import { MobileHOC, TextHOC } from './components/iordercomponentNew';
import { User, Company } from './components/iordercomponent';


function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      {/* <Users></Users> */}

  <User></User>
  <Company></Company>
    </div>
    // </Provider>
  );
}

export default App;
