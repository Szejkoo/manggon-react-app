import React from 'react';
import styled from 'styled-components';
// import './Footer.css'; // importowanie stylów CSS

const Footer = () => {

  const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  aLign-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  `
  const FooterSection = styled.div`
  margin-right: 20px;
  `
  const FooterSectionH3 = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  color:#092a59;
  `
  const FooterSectionUl = styled.ul`
  List-style: none;
  margin: 0;
  padding: 0;
  `
  const Li = styled.li`
  margin-bottom: 10px;
  `
  const FooterBottom = styled.div`
  text-aLign: center;
  background-color: #092a59;
  color: #fff;
  padding: 10px;
  `



  return (
    <footer>
      <FooterContainer>
        <FooterSection>
          <FooterSectionH3>Company Name</FooterSectionH3>
          <p>123 Main Street</p>
          <p>City, State ZIP Code</p>
          <p>Phone: (123) 456-7890</p>
        </FooterSection>
        <FooterSection>
          <FooterSectionH3>Links</FooterSectionH3>
          <FooterSectionUl>
            <Li>About Us</Li>
            <Li>Contact Us</Li>
            <Li>Privacy PoLicy</Li>
            <Li>Terms and Conditions</Li>
          </FooterSectionUl>
        </FooterSection>
        <FooterSection>
          <FooterSectionH3>Social Media</FooterSectionH3>
          <FooterSectionUl>
            <Li>Facebook</Li>
            <Li>Twitter</Li>
            <Li>Instagram</Li>
          </FooterSectionUl>
        </FooterSection>
      </FooterContainer>
      <FooterBottom>
        <p>Copyright &copy; {new Date().getFullYear()}
        Company Name. All rights reserved.</p>
      </FooterBottom>
    </footer>
  );
};

export default Footer;
