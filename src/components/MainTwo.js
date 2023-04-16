import React from 'react'
import styled from 'styled-components';


function HeaderTwo() {
  const Div = styled.div`
  display:flex;
  align-items: center;
  height:30vh;
  background-color:#fff;
  `


  const P = styled.h1`
    margin:0;   
    width: 25rem;
    background-color:;
    color:#092a59;
    font-size:48px;
    font-weight:bold;
    margin-left:6rem;
  `


  return (
    <Div>
        <P>See Some Benefit From Us</P>
    </Div>
  )
}

export default HeaderTwo