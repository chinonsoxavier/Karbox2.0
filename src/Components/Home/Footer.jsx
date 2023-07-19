import React from 'react';
import bg from '../../images/footerBg.jpg'
import styled from 'styled-components';
// import News_Letter from './NewsLetter';
import paypal from '../../images/paypal.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import discover from '../../images/discover.png'
import { LocalPhone, AllInbox, Send, LinkedIn, Instagram, Twitter, Fax, FacebookRounded } from '@mui/icons-material';
import { Laptop, lmobile, ltablet ,mobile, tablet} from '../../responsive';


const FooterCon = styled.div`
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  // background-color: green;
  margin-top: 90px;
  padding: 5px 14vh;
  ${tablet({ padding: "0 4vh" })};
  ${Laptop({ padding: "0 4vh" })};
  ${mobile({ padding: "0 1vh" })};
  ${lmobile({ padding: "0" })};
  box-sizing:border-box;
`;
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  box-sizing:border-box;
  padding:8px 20px;
  width:100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const TFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const TopFooter1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  // width:100%;
  flex:1;
`;
const TopFooter2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  // width: 100%;
  flex: 1;
`;

   const TopFooter=styled.div`
  //  flex-direction:column;
   margin-top:100px;
   width:80%;
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    flex-wrap:wrap;
    flex:3;
    height:850px;
    margin-bottom:100px;
    background-red;
    // ${ltablet({display:'block'})}
`
const FooterDivisions=styled.div`
     flex:1;
     color:white;
     display:flex;
     align-items:flex-start;
     justify-content:space-between;
     flex-direction:column; 
     margin:8px 10px;
`
const FooterLinksTxtHeader = styled.span`
    font-size:21px;
    cursor:pointer;
    white-space:nowrap;
    ${ltablet({fontSize:'16px'})};
    ${mobile({fontSize:'11px'})};

    &:hover{
      color:orange;
    }   
`

const FooterLinksTxt = styled.span`
  margin-top: 15px;
  color: whitesmoke;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${ltablet({ fontSize: "13px",marginTop:'10px' })};
  ${mobile({ fontSize: "8px",marginTop:'0' })};
  ${lmobile({ marginTop:'5px' })};

  &:hover {
    color: orange;
  }
`;
const FooterSocial = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  ${mobile({ display: "none" })};
`;
const SocialIcon = styled.div`
    margin-right:5px;
    padding:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props=>props.bgc};
    border-radius:50%;
    height:45px;
    width:45px;
    ${ltablet({width:'37px',height:'37px',padding:'3px',marginRight:'3px'})}
    ${mobile({width:'30px',height:'30px',padding:'1px',marginRight:'1px'})}
    color:gray;
    ${lmobile({height:'30px',width:'30px'})}
    &:hover{
      background-color:#EE4730;
      color:white;
    }
`
const HR = styled.hr`
    border:none;
    background-color:whitesmoke;
    height:1px;
    width:80%;
    margin-bottom:50px;
    ${lmobile({marginBottom:'0px'})}
    ${mobile({marginBottom:'10px'})};
`
const BottomFooter=styled.div`
     display:flex;
     align-items:center;
     justify-content:space-between;
     flex:1;
     height:300px;
     margin-bottom:50px;
     ${mobile({marginBottom:'0'})}
     width:80%;
`
const BottomFooterLeft = styled.div`
      display:flex;
      align-items:flex-start;
      justify-content:flex-start;
      ${tablet({display:'none'})};
`

const Brand = styled.span`
  flex: 1;
  font-size: 40px;
  font-weight: 800;
  color: white;
`

const BottomFooterMiddle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
${tablet({ display: "none" })};
`;

const PaymentLinks = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
`
const PaymentLinksImg = styled.img`
   width:100%;
   margin:5px;
`

const BottomFooterRight= styled.div`
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const FooterCopyrightTxt = styled.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex:wrap:wrap;
  white-space:nowrap;
  color: ${(props) => props.color};
  margin: 2px;
  ${tablet({ fontSize:'14px' })};
  ${mobile({ fontSize:'9px' })};
`;

function Footer() {
  return (
    <FooterCon className="w100 " bg={bg}>
      <Container className="w100">
        <TFooter>
          <TopFooter1>
            <FooterDivisions>
              <FooterLinksTxtHeader>Auction Categories</FooterLinksTxtHeader>
              <FooterLinksTxt>Vehicles</FooterLinksTxt>
              <FooterLinksTxt>Used</FooterLinksTxt>
              <FooterLinksTxt>New</FooterLinksTxt>
              <FooterLinksTxt>Nigerian used</FooterLinksTxt>
              <FooterLinksTxt>Luxurios</FooterLinksTxt>
            </FooterDivisions>

            <FooterDivisions className="FooterMobile">
              <FooterLinksTxtHeader>About Us</FooterLinksTxtHeader>
              <FooterLinksTxt>About Company</FooterLinksTxt>
              <FooterLinksTxt>Help</FooterLinksTxt>
              <FooterLinksTxt>Affiliates</FooterLinksTxt>
              <FooterLinksTxt>Jobs</FooterLinksTxt>
              <FooterLinksTxt>Press</FooterLinksTxt>
              <FooterLinksTxt>Our blog</FooterLinksTxt>
              <FooterLinksTxt>Collector`s portal </FooterLinksTxt>
              <FooterLinksTxt></FooterLinksTxt>
            </FooterDivisions>
          </TopFooter1>
          <TopFooter2>
            <FooterDivisions id="FooterMobile">
              <FooterLinksTxtHeader>We`re Here to Help</FooterLinksTxtHeader>
              <FooterLinksTxt>Your Account</FooterLinksTxt>
              <FooterLinksTxt>Safe and Secure</FooterLinksTxt>
              <FooterLinksTxt>Shipping Information</FooterLinksTxt>
              <FooterLinksTxt>Contact Us</FooterLinksTxt>
              <FooterLinksTxt>Help & FAQ</FooterLinksTxt>
            </FooterDivisions>

            <FooterDivisions id="FooterDivision_FollowUs" ht="">
              <FooterLinksTxtHeader>Follow Us</FooterLinksTxtHeader>
              <FooterLinksTxt>
                <LocalPhone id="FooterLinksTxt_Icon FooterIcons" />
                (646) 663-4574
              </FooterLinksTxt>
              <FooterLinksTxt>
                {" "}
                <Fax id=" FT_Icon FooterIcons" />
                (646) 968-0608{" "}
              </FooterLinksTxt>
              <FooterLinksTxt>
                {" "}
                <AllInbox id=" FT_Icon FooterIcons" />
                help@engotheme.com{" "}
              </FooterLinksTxt>
              <FooterLinksTxt>
                {" "}
                <Send id=" FT_Icon FooterIcons" />
                1201 BroadWay Suite{" "}
              </FooterLinksTxt>
              <FooterSocial>
                <SocialIcon bgc="#EE4730">
                  <FacebookRounded id="FooterIcons" />
                </SocialIcon>

                <SocialIcon bgc="white">
                  <Twitter id="FooterIcons" />
                </SocialIcon>

                <SocialIcon bgc="white">
                  <Instagram id="FooterIcons" />
                </SocialIcon>

                <SocialIcon bgc="white">
                  <LinkedIn id="FooterIcons" />
                </SocialIcon>
              </FooterSocial>
            </FooterDivisions>
          </TopFooter2>
        </TFooter>
        <HR />
        <BottomFooter>
          <BottomFooterLeft>
            <Brand className="brand">LOGO</Brand>
          </BottomFooterLeft>
          <BottomFooterMiddle>
            <PaymentLinks>
              <PaymentLinksImg src={paypal} alt="paypal" />
            </PaymentLinks>
            <PaymentLinks>
              <PaymentLinksImg src={visa} alt="visa" />
            </PaymentLinks>
            <PaymentLinks>
              <PaymentLinksImg src={discover} alt="discover" />
            </PaymentLinks>
            <PaymentLinks>
              <PaymentLinksImg src={mastercard} alt="mastercard" />
            </PaymentLinks>
          </BottomFooterMiddle>
          <BottomFooterRight>
            <FooterCopyrightTxt>© Copyright 2021 | </FooterCopyrightTxt>
            <FooterCopyrightTxt color="#EE4730"> Sbidu </FooterCopyrightTxt>
            <FooterCopyrightTxt> {" By "} </FooterCopyrightTxt>
            <FooterCopyrightTxt color="#EE4730"> Uiaxis </FooterCopyrightTxt>
          </BottomFooterRight>
        </BottomFooter>
        {/* </Wrapper> */}
      </Container>
    </FooterCon>
  );
}

export default Footer