import {
  ArrowDropDown,
  SettingsAccessibility,
  Logout,
} from "@mui/icons-material";
import { useState } from "react";
import {  Link } from "react-router-dom";
import styled from "styled-components";
import { tablet, Laptop, lmobile } from "../../responsive";

const Container = styled.div`
  color: white;
  width: 100%;
  z-index: 100;
  position: relative;
  background: ${(props) => props.bg};
  ${Laptop({ padding: "0 4vh" })}
  ${lmobile({ display: "none" })};
  transition: 1s linear;
`;
const Wrapper = styled.div`
  position: sticky;
  top: 0;
`;
const LeftCon = styled.div``;
const Logo = styled.span``;
const LogoTxtCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LogoTxt = styled.h3`
  color: ${(props) => props.cl};
  font-weight: 700;
  font-size:24px;
  ${lmobile({ fontSize: "20px" })}
`;
const LogoTxtActive = styled.div`
  border-radius: 50%;
  background-color: orangered;
  height: 5px;
  width: 5px;
`;
const MiddleCon = styled.div``;
const LinksTxt = styled.p`
  cursor: pointer;
  margin: 0 7px;
  font-weight: 400;
  font-size: 14px;
  opacity: 0.7;
  ${tablet({ fontSize: "14px" })};
`;
const RightCon = styled.div`
  ${tablet({ display: "none" })};
  position: relative;
`;
const Button = styled.button`
  padding: 7px;
  font-weight: 700;
  border-collapse: collapse;
  cursor: pointer;
  margin: ${(props) => (props.type === "filled" ? "0" : "0 15px")};
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid white")};
  background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "black" : "white")};
  ${tablet({ display: "none" })};
  white-space: nowrap;
`;
const Hr = styled.hr`
  width: 100%;
  border: none;
  height: 0.5px;
  background-color: grey;
`;


const AccountCon = styled.div`
  position: relative;
`;

const Accountoptions = styled.div`
  background-color: black;
  border: 1px solid gray;
  width: 100%;
  padding: 10px 5px;
  position: absolute;
`;
const RightText = styled.p`
     color:${(props) => props.cl};
     font-weight:${(props) => props.fw};
     width100%;
  white-space:nowrap;
     &:hover ${Accountoptions}{
      display:block;
     }
  `;
const AccountoptionsText = styled.span`
  font-size: 17px;
  margin:1px 0;
`;


function Header({ route, bgt,bg,header }) {
  const [account, setAccount] = useState(false);
  const handleTrueClick = () => {
    setAccount(true);
  };
  
  

  const handleFalseClick = () => {
    setAccount(false);
  };

  const User={
    user:true,
    username:'chinonso',
  }

  return (
    <Container
      style={
        header
          ? { backgroundColor:(bg) }
          : { backgroundColor: "transparent" }
      }
      className={`${bgt && "bgt"  } bsbb`}
    >
      <Wrapper className={`flex aic jcsb `}>
        
        <LeftCon flex1>
          <Link className="link" to="/">
            <Logo className="flex aic jcc">
              <LogoTxt className="s">KAR</LogoTxt>
              <LogoTxt className="s" cl="orangered">
                BOX
              </LogoTxt>
            </Logo>
          </Link>
        </LeftCon>
        <MiddleCon className="flex aic jcc flex4">
          <Link className="link" to="/about-us">
            <LogoTxtCon>
              <LinksTxt
                style={
                  route === "about-us"
                    ? { opacity: 1, marginTop: "8px", marginBottom: "3px" }
                    : { opacity: 0.7 }
                }
              >
                About Us
              </LinksTxt>
              {route === "about-us" && <LogoTxtActive></LogoTxtActive>}
            </LogoTxtCon>
          </Link>
          <Link className="link" to="/contact-us">
            <LogoTxtCon>
              <LinksTxt
                style={
                  route === "contact-us"
                    ? { opacity: 1, marginTop: "8px", marginBottom: "3px" }
                    : { opacity: 0.7 }
                }
              >
                Contact Us
              </LinksTxt>
              {route === "contact-us" && <LogoTxtActive></LogoTxtActive>}
            </LogoTxtCon>
          </Link>
          <Link className="link" to="/inventory">
            <LogoTxtCon>
              <LinksTxt
                style={
                  route === "inventory"
                    ? { opacity: 1, marginTop: "8px", marginBottom: "3px" }
                    : { opacity: 0.7 }
                }
              >
                Inventory
              </LinksTxt>
              {route === "inventory" && <LogoTxtActive></LogoTxtActive>}
            </LogoTxtCon>
          </Link>
        </MiddleCon>
        <RightCon className="flex aic jcc flex1 ">
          <AccountCon>
            <RightText className="flex aic jcsb" onMouseOver={handleTrueClick}>
              {User.user && (
                <p id="user_logo" className="flex aic jcc">
                  C
                </p>
              )}
              {User.user ? "Hi" : "Hello"}{" "}
              <b id="user_id"> {User.user ? "chinonso" : "Guest"} </b>
              {User.user && <ArrowDropDown />}
            </RightText>
            {account && User.user && (
              <Accountoptions
                className="flex aic jcc fdc"
                onMouseLeave={handleFalseClick}
              >
                <AccountoptionsText className="flex aic jcc">
                  {" "}
                  <SettingsAccessibility
                    sx={{
                      fontSize: "15px",
                      marginRight: "5px",
                      marginTop: "2px",
                    }}
                  />{" "}
                  settings
                </AccountoptionsText>
                <AccountoptionsText className="flex aic jcc">
                  {" "}
                  <Logout
                    sx={{
                      fontSize: "15px",
                      marginRight: "5px",
                      marginTop: "2px",
                    }}
                  />{" "}
                  logout
                </AccountoptionsText>
              </Accountoptions>
            )}
          </AccountCon>
          {!User.user && (
            <>
            <Link to='/welcome-back' className="link">
              <Button>Log In / Sign Up</Button>
              </Link>
            </>
          )}
          <Link to={'./dealercenter/user/signup/dostep/step1'} className="link" style={{margin:'0 5px'}} >
         <RightText>Become a seller</RightText>
          </Link>
        </RightCon>
      </Wrapper>
      <Hr />
    </Container>
  );
}

export default Header;
