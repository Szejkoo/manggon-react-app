import React from 'react'
import styled from 'styled-components';
function nav() {

    const Logo = styled.div`
        color:white;
        font-size:32px;
        font-weight:bold;
    `

    const Nav = styled.div`
        display:flex;
        align-items: center;
        justify-content: space-around;
        margin-top:30px;

    `
    const Links = styled.div`
        color:white;
        padding:0 10px;
        font-size:24px;
        cursor:pointer;
        margin:0 10px;
        font-weight:bold;
    `
    const Box = styled.div`
        display:flex;
    
    `
    const Button = styled.div`
        color:white;
        padding:0 20px;
        font-size:24px;
        background-color:#fd5056;
        border-radius:50px;
        cursor:pointer;
    `

  return (
    <div>
        <Nav>
            <Logo>Manggon</Logo>
            <Box>
                <Links>Gallery</Links>
                <Links>Reviews</Links>
                <Links>About</Links>
                <Button>Consult</Button>
            </Box>
        </Nav>
    </div>
  )
}

export default nav