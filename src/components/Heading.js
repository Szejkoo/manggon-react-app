import React from 'react'
import styled from 'styled-components';


function Heading() {

    const Box = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        background-color:#fff;

    `

    const H2 = styled.h1`
        font-weight:bold;
        color:#092a59;
        font-size:48px;
    `
    const P = styled.p`
        color:#092a59;
        font-weight:100;
        font-size:30px;
        margin: 10px;
    `


  return (
    <div>
        <Box>
            <H2>See Our Exclusive Works</H2>
            <P>Our Selection Just For You</P>
        </Box>
        

    </div>
  )
}

export default Heading