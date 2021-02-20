import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Products from './components/Products';
import Users from './components/users';
import Product from './Product';


function App() {

  const id = 8
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <div className="col" style = {{ marginTop: 40}}>
          <h3 style = {{ color : "green"}}>Products:</h3>
            <Products></Products>
          </div>
          <div className="col" style = {{ marginTop: 40}}>
          <h3 style = {{ color : "green"}}>Users:</h3>
            <Users></Users>
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
