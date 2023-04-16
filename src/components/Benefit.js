import React from 'react'
import styled from 'styled-components';
import Biuro from '../img/Biuro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShieldHeart} from '@fortawesome/free-solid-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faLayerGroup} from '@fortawesome/free-solid-svg-icons'


function Benefit() {
  const Box = styled.div`
  background-color:#fff;
  display:flex;
  justify-content:space-around;
  `
  const BoxTwo = styled.div`
    display:flex;
    align-items:center;
  `
  const BoxThree = styled.div`
  flex-direction:column;
  margin-left:10px;

  `
  const P = styled.p`
  margin:0;
  letter-spacing:1px;
  color:#00000080;

  `
  const H = styled.h2`
  margin:0;
  color:rgb(9, 42, 89);
  letter-spacing:1px;
  `
  const Img = styled.img`
    width:40%;
  `
  const Icons = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;

  `
  const Line = styled.div`
  width:5px;
  height:70px;
  background-color:tomato;
  border-radius:20px;
  margin-right:50px;
  `


  return (
    <Box>
      <Icons>
        <BoxTwo>
          <Line/>
          <FontAwesomeIcon icon={faShieldHeart} color='#1565d6' size='3x' />
          <BoxThree>
            <H>100% Protection</H>
            <P>All secure protection for your future house</P>
          </BoxThree>
        </BoxTwo>
        <BoxTwo>
            <Line/>
            <FontAwesomeIcon icon={faHouse} color='#1565d6' size='3x' />
            <BoxThree>
              <H>Top Tier House</H>
              <P>We just provide top tier house for you</P>
            </BoxThree>
        </BoxTwo>
        <BoxTwo>
          <Line/> 
          <FontAwesomeIcon icon={faLayerGroup} color='#1565d6' size='3x' />
          <BoxThree>
              <H>Transparancy</H>
              <P>Transparency is always for customers</P>
            </BoxThree>
        </BoxTwo>
      </Icons>
      <Img src={Biuro}/>

    </Box>
  )
}

export default Benefit