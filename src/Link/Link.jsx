import { Close, FacebookRounded, InsertLink, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import {useState} from 'react'
import styled from "styled-components";
import { CustomerBreakpoint, mmobile } from "../responsive";
const Container = styled.div`
   position:fixed;
   left:40px;
   bottom:50px;
   z-index:100;
`;
const Wrapper = styled.div`
transition:2s all linear;
`;
const IconCon = styled.div`
transition:2s all linear;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:50%;
   color:${props=>props.cl ==='black' ? 'black' : 'white'};
   cursor:pointer;
   width:50px;
   height:50px;
   background-color:${props=>props.bg};
   margin:2px 0;
   ${CustomerBreakpoint({height:'40px',width:'40px'})};
   ${mmobile({width:'30px',height:'30px'})};

`;

function Link() {

  const[showIcon,setShowIcon]=useState(false)

  return (
    <Container>
      <Wrapper className="flex aic jcc fdc">
        {showIcon && (
          <IconCon bg="#ff0000">
            <Instagram id="FooterIcons" />
          </IconCon>
        )}
        {showIcon && (
          <IconCon bg="#0000ff">
            <FacebookRounded id="FooterIcons" />
          </IconCon>
        )}
        {showIcon && (
          <IconCon bg="white" cl="black">
            <LinkedIn id="FooterIcons" />
          </IconCon>
        )}
        {showIcon && (
          <IconCon bg="#15d45b">
            <WhatsApp id="FooterIcons" />
          </IconCon>
        )}
        <IconCon bg="orangered">
          {showIcon ? (
            <Close id="FooterIcons" onClick={() => setShowIcon(false)} />
          ) : (
            <InsertLink id="FooterIcons" onClick={() => setShowIcon(true)} />
          )}
        </IconCon>
      </Wrapper>
    </Container>
  );
}

export default Link;
