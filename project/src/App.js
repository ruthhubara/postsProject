import './App.css';
import RoutesNav from './route/nav';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Register from './component/register/register'
import Login from './component/login/login'

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect to="/"></Redirect>

      {/* <RoutesNav /> */}


        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route path='/registerUser'>
            <Register></Register>
          </Route>


          {/* <div className="row">
          <div className="col" > */}
          <Route path='/nav'>
            <RoutesNav />
          </Route>
          {/* </div>
        </div> */}
        </Switch>

      </Router>
    </div>
  );
}

export default App;