import logo from './logo.svg';
import './App.css';
import React from 'react'
import { render } from 'react-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Card from './components/card';
import { coolTheme, darkTheme, backgroundColor, bodyColor } from './components/theme';


const colors = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'
];

const SpecialCard = styled(Card)`
background-color:black`;

const GlobalStyle = createGlobalStyle`
body{
  font-family:'Courier New', Courier, monospace
}
`

function App() {
  debugger
  return (
    <div className="App">
      <ThemeProvider theme={backgroundColor} >
      <GlobalStyle></GlobalStyle>

        <div>
          {colors.map(color =>
            // <SpecialCard>
            <Card bgColor={color} >Hello</Card>
            //  </SpecialCard>
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
