import './App.css';
import StyleComponent from './components/style_component';
import styled, { createGlobalStyle } from 'styled-components';
import Users from './components/users';
import { Provider } from 'react-redux';
import  store  from './Redux/Store';


const GlobalStyle = createGlobalStyle`
body{
  border: black
}
`
const colors = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'
];

function App() {
  return (
    <div className="App">
    <Provider store = {store}>


    {/* <GlobalStyle></GlobalStyle>
      <div>
          {colors.map(color =>
            <StyleComponent bgColor={color} >click me!!</StyleComponent>
          )}
        </div> */}

        <Users></Users>
        </Provider>

    </div>
  );
}

export default App;
