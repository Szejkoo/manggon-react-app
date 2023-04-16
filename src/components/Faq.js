import React, {useState} from 'react'
import styled from 'styled-components'
  


function Faq() {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const [isExpandedTwo, setIsExpandedTwo] = useState(false);

  const toggleExpandedTwo = () => {
    setIsExpandedTwo(!isExpandedTwo);
  };

  const [isExpandedThree, setIsExpandedThree] = useState(false);

  const toggleExpandedThree = () => {
    setIsExpandedThree(!isExpandedThree);
  };


    const Box = styled.div`
    display:flex;
    height:50vh;
    margin:100px;
    justify-content: space-around;

    `
    const Text = styled.div`
    flex-direction:column;
    color:#fff;
    `
    const H2 = styled.h2`
    font-size:70px;
    margin: 0;

    `
    const P = styled.p`
    font-size:30px;

    `
    const PTwo = styled.p`
    font-weight:100;
    font-size:24px;
    width:700px;
    letter-spacing: 2px;
    `

    const InfoBox = styled.div`
    width:800px;
    height:450px;
    background-color:#fff;
    border-radius:20px;
    `
    const Question = styled.p`
    margin:50px 50px 0 ;
    font-size:40px;
    font-weight:bold;
    color:#092a59;
    cursor:pointer;
    `
    const Answer = styled.p`
    margin:0 50px;
    font-size:24px;
    font-weight:100;
    `

  return (
    <div>
        <Box>
            <Text>
                <H2>Got a Questions?</H2>
                <P>We've Got the Answer</P>
                <PTwo>Fell free to ask us anything about your house program, discuss with us, and we will acompany you with your dreamy house in future.</PTwo>
            </Text>
            <InfoBox>
              <h2></h2>
            <div>
              <div onClick={toggleExpansion}>
                <Question>How to Get Started With Us?</Question>
              </div>
             {isExpanded && (
              <div>
                <Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.</Answer>
              </div>
             )}
            </div>
            <div>
              <div onClick={toggleExpandedTwo}>
                <Question>Can I Choose my Own House?</Question>
              </div>
             {isExpandedTwo && (
              <div>
                <Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.</Answer>
              </div>
             )}
            </div>
            <div>
              <div onClick={toggleExpandedThree}>
                <Question>When Should I Pay for my Stay?</Question>
              </div>
             {isExpandedThree && (
              <div>
                <Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id.</Answer>
              </div>
             )}
            </div>
            </InfoBox>

        </Box>

    </div>
  )
}

export default Faq