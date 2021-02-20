import React, { useState } from 'react';
import styled from 'styled-components';

function StyleComponent(props) {

  const [isClicked, setIsClicked] = useState(false);

  const { bgColor, className, children } = props;

  return (
    <>
      <Button
        className={className}
        bgColor={bgColor}
        onClick={() => setIsClicked(!isClicked)}
        isClicked={isClicked}>
        {children}
      </Button>
    </>
  )

}

const Button = styled.div`
  width: 150px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'pink'};
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
   transform: skew(33deg); `}
  
  ${props => props.isClicked == false && `
    background-color: '#72ECBB'; `}
  
  ${props => props.isClicked && `
   background-color: '#72ECBB'; `}
`;

export default StyleComponent