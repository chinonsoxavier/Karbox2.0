import styled from "styled-components";
import { lmobile, mobile } from "../../responsive";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
const Container = styled.div`
  color: black;
  height: 100%;
  width: 100%;
  background: url(./footer-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing:border-box;
`;
const Wrapper = styled.div``;
const Header = styled.div`
  padding: 20px 20px;
  text-align:center;
  width:100%;
`;
const Logo = styled.span``;


const LogoTxt = styled.h3`
  color: ${(props) => props.cl};
  font-weight: 700;
  font-size: 24px;
  ${lmobile({ fontSize: "20px" })}
`;

const HeaderBigText = styled.span`
  color: black;
  font-size: 25px;
  font-weight: 600;
  color: white;
  margin-bottom:16px;
`;
const HeaderSmTextCon = styled.div`
  padding: 0 7vh;
  box-sizing:border-box;
`;
const HeaderSmText = styled.span`
  color: black;
  font-size: 13px;
  font-weight: 400;
  color: white;
  text-spacing:2px;
  line-height:30px;
  ${mobile({fontSize:'10px'})}
`;

const SocialIconsCon = styled.div`
width:100%;
`
const SocialIcons = styled.div`
border-radius:25px;
border:1px solid white;
padding:3px 26px;
margin:0 6px;
${mobile({padding:'2px 13px',margin:'0 3px'})};
`

const AsideFooter = styled.div`
padding:10px 0;
margin-top:20px;
background-color: rgba(0,0,0,0.7);
`
const AsideFooterTextCon = styled.div`
`;
const AsideFooterText = styled.span`
  color: ${(props) => (props.cl ? props.cl : "white")};
  font-weight: ${(props) => (props.fw ? props.fw : 500)};
  margin: 0 3px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcc fdc">
          <Logo className="flex aic jcc">
            <LogoTxt className="s" cl="white">
              KAR
            </LogoTxt>
            <LogoTxt className="s" cl="orangered">
              BOX
            </LogoTxt>
            <LogoTxt cl="white" style={{ marginLeft: "8px" }}>
              Mobil
            </LogoTxt>
          </Logo>
          <HeaderSmTextCon>
            <HeaderSmText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              dolorem reiciendis excepturi in possimus, repellat unde itaque
              voluptates similique minima vel ea sit tempora aliquam iste quis!
              Quae, cumque amet?
            </HeaderSmText>
          </HeaderSmTextCon>
        </Header>
        <SocialIconsCon className="flex aic jcc">
          <SocialIcons>
            <Facebook sx={{ color: "white" }} />
          </SocialIcons>
          <SocialIcons>
            <Instagram sx={{ color: "white" }} />
          </SocialIcons>
          <SocialIcons>
            <Twitter sx={{ color: "white" }} />
          </SocialIcons>
          <SocialIcons>
            <LinkedIn sx={{ color: "white" }} />
          </SocialIcons>
        </SocialIconsCon>
        <AsideFooter>
          <AsideFooterTextCon className="flex aic jcc">
            <AsideFooterText>Designed by</AsideFooterText>
            <AsideFooterText className="c" cl="orangered" fw={600}>
              Chinonso Xavier
            </AsideFooterText>
          </AsideFooterTextCon>
        </AsideFooter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
