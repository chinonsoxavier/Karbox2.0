import {CloseOutlined, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  background-color: white;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 85vw;
  left: 0;
  z-index: 300;
  height: 100vh;
  top: 0;
  color: black;
  padding-bottom: 30px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y:scroll;
  height:min-content;
`;

const Con = styled.div`
padding:15px;
box-sizing:border-box;
border-bottom:1px solid #eee;
`
const Icon = styled.div`
//   padding:5px;
  background:#eee;
  border-radius:50%;
  width:20px;
  height:20px;
`;
const Text = styled.span`
font-weight:${props=>props.lt ? 500 : 700};
`;
const TextIcon = styled.div`

`;

const Footer = styled.div`
padding:10px;
padding-bottom:18px;
// height:10%;
background:black;
// position:absolute;
// bottom:0;
width:100%;
`
const FooterText = styled.span`
color:white;
font-size:9px;
`
const DropDownCon = styled.div``

const MainMenu = () => {

  const [dropdown,setDropdown]=useState('New Car')

  return (
    <Container className='s flex aic jcsb fdc' >
      <Wrapper>
        <Con className="flex aic jcfe w100">
          <Icon className="flex aic jcc">
            <CloseOutlined sx={{ fontSize: "11px" }} />
          </Icon>
        </Con>
        <Con className='flex aic jcsb' >
<Text>New Cars</Text>
<TextIcon>
    <KeyboardArrowDown/>
</TextIcon>
        </Con>
        <Con className='flex aic jcsb' >
<Text>Old Cars</Text>
<TextIcon>
    <KeyboardArrowDown/>
</TextIcon>
        </Con>
        <Con className='flex aic jcsb' >
<Text>Research</Text>
<TextIcon>
    <KeyboardArrowDown/>
</TextIcon>
        </Con>
        <Con className='flex aic jcsb' >
<Text lt >Sign In </Text>
<TextIcon>
</TextIcon>
        </Con>
        <Con className='flex aic jcsb' >
<Text lt >Privacy Policy </Text>
<TextIcon>
</TextIcon>
        </Con>
      </Wrapper>
      <Footer className='flex aic jcc' >
        <FooterText>2023 Karbox,Inc.All right reserved</FooterText>
      </Footer>
    </Container>
  );
}

export default MainMenu