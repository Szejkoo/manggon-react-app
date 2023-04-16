import React from "react";
import styled from 'styled-components';
import Photo from '../img/bez_tła.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComputerMouse} from '@fortawesome/free-solid-svg-icons'


function Header() {

    const Flex = styled.div`
        display:flex;
        align-items:center;
    `
    const Flex2 = styled.div`
        display:flex;
        align-items:center;
        margin-top:6rem;
    `

    const BoxSecond = styled.div`
        position:relative;
        display:flex;
        min-height:93vh;
    `
    const BoxThird = styled.div`
        position:absolute;
        left:10em;
        top:10em;
        display:flex;
        flex-direction:column;
    `

    const Text = styled.div`
        font-size:80px;
        color:white;
        width:550px;
        font-weight:600;
    `
    const P = styled.p`
        color:white;
        width:550px;
        font-size:24px;
        font-weight:100;
    `
    const P2 = styled.p`
        color:white;
        width:550px;
        font-size:24px;
        font-weight:100;
        margin-left:10px;
        letter-spacing:5px;
    `
    
    const Img = styled.img`
        position:absolute;
        width:65%;
        bottom:0;
        right:0;
    `


    const StyledInput = styled.input`
        width:50%;
        height:50px;
        border-radius:15px;
        padding-left:20px;
        border:none;
    `
    const Search = styled.button`
        width:25%;
        height:50px;
        background-color:#fd5056;
        font-size:18px;
        color:white;
        border-radius:15px;
        border:none;
        cursor:pointer;
        margin-left:5px;
    `



    return (
        <div>
            <BoxSecond>
                <BoxThird>
                    <Text>Find Perfect Home With Us</Text>
                    <P>All ready set for you, just relax, and tell us how your dreamy housem and we sill find for you.</P>
                    <Flex>
                        <StyledInput defaultValue="Appartement, House"/>
                        <Search>Search</Search>
                    </Flex>
                    <Flex2>
                        <FontAwesomeIcon  icon={faComputerMouse} size="3x" color="white"/>
                        <P2> Scroll Down for More</P2>
                    </Flex2>
                </BoxThird>
                <Img src={Photo} alt=""/>
            </BoxSecond>
        </div>
    )
}

export default Header;