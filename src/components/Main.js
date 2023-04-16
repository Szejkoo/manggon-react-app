import React from 'react'
import styled from 'styled-components';
import Photo1 from '../img/Willa1.jpg'
import Photo2 from '../img/Willa2.jpg'
import Photo3 from '../img/Willa3.jpg'


function Main() {

    const Body = styled.div`
        display:flex;
        align-items:center;
        height:30vh;
        background-color:#fff;
    `
    const P = styled.p`
        color:#092a59;
        margin:0px;
        font-size:52px;
        font-weight:700;
    `
        const P2 = styled.p`
        color:#092a59;
        margin:0px;
        font-size:24px;
        font-weight:400;
    `

    const Flex = styled.div`
        display:flex;
        justify-content: space-around;
        align-items:center;
        width:100vw;
    `
    const Column = styled.div`
        display:flex;
        flex-direction:column;
    `
    const Img = styled.img`
        height:200px;
        border-radius:20px;
        transition:0.4s;
        &:hover{
            scale:1.1;
        }
    `


  return (
    
    <Body>
        <Flex>
            <Column>
                <P>10.000+</P>
                <P2>Assets & Agents</P2>
            </Column>
            <Img src={Photo1} alt=""/>
            <Img src={Photo2} alt=""/>
            <Img src={Photo3} alt=""/>
        </Flex>
        
    </Body>
    
  )
}

export default Main