import styled from "styled-components";
import Button from "./Button";
import {LocationOnTwoTone,Mail,PhoneTwoTone} from '@mui/icons-material'
import { Laptop, lmobile, mobile, tablet } from "../../responsive";
const Container = styled.div`
  margin: 50px 0;
  padding: 20px 0;
  ${mobile({ display: "none" })};
  ${lmobile({margin:'0'})};
`;
const Wrapper = styled.div`
   width:100%;
   ${tablet({flexDirection:'column',justifyContent:'flex-start'})}
`
const LeftCon = styled.div`
  padding: 15px 35px;
  box-sizing: border-box;
  ${lmobile({ padding:'6px 17px',boxSizing:'border-box'})};
  // ${Laptop({ maxWidth: "700px" })}
`;

const Header = styled.div``
const HeaderText = styled.span`
  color: black;
  font-size: 20px;
  ${lmobile({ fontSize:'15px'})};
`;
const Header2 = styled.div`
  margin:7px 0;
`
const HeaderText2 = styled.span`
  color: black;
  font-size: 18px;
  ${lmobile({ fontSize:'13px' })};
`;
const Form = styled.div`
width:100%;
`
const InputCon = styled.div`
  width: 100%;
  flex: 1;
  min-width: 440px;
  ${lmobile({ minWidth:'240px',margin:'2px'})};
  margin: 5px;
`;
  const Input = styled.input`
   border-bottom:1px solid #eee;
   width:100%;
   height:100%;
   outline:none;
   border:none;
   &:focus{
    border-bottom:1px solid grey;
   }
`

const LeftConButton = styled.div``
const RghtCon = styled.div`
   text-align:left;
   min-width:420px;
   display:none;
   width:88%;
`

const ContactInfoText = styled.p`
   color:white;
   font-weight:${props=>props.fw};
   font-size:${props=>props.fz};
   margin:10px 3px;
   display:flex;
   align-items:center;
   justify-content:center;
`
const ContactInfoTextActive = styled.div`
  width: 25px;
  border-top: 2px solid orangered;
  margin: 5px 0;
`;

function ContactCard() {
  return (
    <Container className="">
      <Wrapper className="flex aic jcsa ">
        <LeftCon className="bgw flex aic jcc fdc ">
          <Header>
            <HeaderText>Ready to Join Our Network?</HeaderText>
          </Header>
          <Header2 className="flex aic jcfs w100" >
            <HeaderText2>For Immediate Assistance Call 88-480-1313</HeaderText2>
          </Header2>
          <Form className="flex aic jcc wrap ">
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="First Name*" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="Last Name*" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="Email*" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="Phone Number*" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="Current Car" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="Website" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="Company" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="Zipcode" />
            </InputCon>
            <InputCon className="ContactCardInput" >
              <Input  type="text" placeholder="City" />
            </InputCon>
          </Form>
          <LeftConButton className="flex aic jcc w100">
            <Button
              color="orangered"
              fw={500}
              wd='100px'
              text="Submit"
              border="1px solid orangered"
              bg="transparent"
              padding="8px"
              margin="10px 0"
            />
          </LeftConButton>
        </LeftCon>
        <RghtCon className="flex aifs jcsb bgb w100 fdc">
          <ContactInfoText fz="22px">Contact Directly</ContactInfoText>
          <ContactInfoTextActive />
          <ContactInfoText>KARBOX</ContactInfoText>
          <ContactInfoText fz="12px">
            <LocationOnTwoTone sx={{fontSize:'21px', color: "orangered" }} />
            Wave,Via Habro Derennio 22/b 52100 Arezzo,Nigeria
          </ContactInfoText>
          <ContactInfoText fz="12px">
            <Mail sx={{fontSize:'21px', color: "orangered" }} />
            ask@KarBoxNg.com
          </ContactInfoText>
          <ContactInfoText fz="12px">
            <PhoneTwoTone sx={{fontSize:'21px', color: "orangered" }} />
            095 1856 558(Toll Free)
          </ContactInfoText>
        </RghtCon>
      </Wrapper>
    </Container>
  );
}

export default ContactCard;
