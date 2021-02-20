import React from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import './card.css'

function Card(props) {
    const [isClicked, setIsClicked] = useState(false)

    // function handleClick() {
    //     setIsClicked(!isClicked)
    // };

    const { bgColor, children, className } = props;

    return (
        <>
        <p>hyuktybi</p>
            <Container
                className={className}
                bgColor={bgColor}
                onClick={() => setIsClicked(!isClicked)}
                isClicked={isClicked}>
                {children}
            </Container>
        </>
    )
}

// background-color: ${ (props) => props.theme.backgroundColor };

const Container = styled.div`
  width: calc(100vw - 100px);
  height: 100px;
 background-color: ${(props) => props.bgColor || 'orange'};
 color: ${(props) => props.theme.textColor || 'black'}
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }

  ${props => props.isClicked && `
     transform: skew(33deg);
   `}
`;

export default Card;