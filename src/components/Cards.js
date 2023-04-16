import React from 'react'
import styled from 'styled-components'
import Image from '../img/CardImage.jpg'
import ImageTwo from '../img/CardImage2.jpg'
import ImageThree from '../img/CardImage3.jpg'

function Cards() {
    const Box = styled.div`
        display:flex;
        justify-content: space-around;
        height:70vh;
        background-color:#fff;
    `
    const Img = styled.img`
        height:225px;
        width:350px;
        transition:0.4s;
        &:hover{
            scale:1.2;
        }
    `
    const Card = styled.div`
        height:450px;
        width:350px;
        border-radius:15px;
        overflow:hidden;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        
    `
    const Text = styled.h2`
    margin:20px;
    color:#092a59;
    
    `
    const Paragraf = styled.p`
    margin:20px;
    color:#092a59;

    `
    const Btn = styled.button`
        height:30px;
        width:100px;
        color:#1565d6;
        margin-left:20px;
        border:1px solid #1565d6;
        border-radius:25px;
        font-weight:bold;
        background-color:#fff;
        transition:0.3s;
        cursor:pointer;
        &:hover{
            color:#fff;
            background-color:#1565d6;
            border:1px solid #fff;
        }
        
    `

  return (
    <Box>
        <Card>
            <Img src={Image} alt=""/>
            <Text>St. Marry Narrow</Text>
            <Paragraf>Jalan Raya Padjajaran Km.2</Paragraf>
            <Btn>See More</Btn>
        </Card>
        <Card>
            <Img src={ImageTwo} alt=""/>
            <Text>Burnery House</Text>
            <Paragraf>Jalan Raya Padjajaran Km.2</Paragraf>
            <Btn>See More</Btn>
        </Card>
        <Card>
            <Img src={ImageThree} alt=""/>
            <Text>St. Marry Narrow</Text>
            <Paragraf>Jalan Raya Padjajaran Km.2</Paragraf>
            <Btn>See More</Btn>
        </Card>
        

    </Box>
  )
}

export default Cards