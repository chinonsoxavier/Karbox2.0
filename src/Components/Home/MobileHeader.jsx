import Menu1 from "./MainMenu";
import { Laptop, lmobile, mmobile, mobile } from "../../responsive";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { KeyboardBackspace, Menu, Search } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
const Container = styled.div`
  color: white;
  background-color: ${(props) =>
    props.bgt === "scrollTrasparent" ? "transparent" : props.onscroll};
  display: none;
  // width: 100%;
  flex:1;
  box-sizing: border-box;
  padding:0 2vh;
  ${lmobile({ display: "block" })};
  height: 60px;
`;
const Wrapper = styled.div`
  height: 100%;
`;

const Logo = styled.span`
  flex: 1;
  margin-left: 10px;
`;
const LogoTxt = styled.span`
  color: ${(props) => props.cl};
  max-width: ${(props) => props.wd};
  font-weight: 700;
  font-size: 20px;
  ${Laptop({ fontSize: "23px" })}
`;

const LeftCon = styled.div`
  flex: 1;
`;
const RightCon = styled.div`
  height: 100%;
  flex:2;
`;
const RightConText = styled.span`
  font-weight: 300;
`;
const RightConVr = styled.div`
  height: 40%;
  background: white;
  width: 1px;
  margin: 0 15px;
`;

const SearchCon = styled.div`
box-sizing:border-box;
padding:0 8px;
`;
const SearchInputCon = styled.div`
  position: relative;
  max-width: 80%;
  height: 28px;
  background:#252525;
  // flex:1;
  padding:0 5px;
`;
const SearchInput = styled.input`
border:none;
outline:none;
width:100%;
height:100%;
background:transparent;
`;

function MobileHeader({ bgt, onscroll }) {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(true);
  const route = location.pathname.split("/")[0];
  const [menu, setMenu] = useState(false);
  const [color, setColor] = useState();

  useEffect(() => {
    setMenu(false);
  }, [route]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = window.pageYOffset;
      if (height > 400) {
        setColor(onscroll);
      }
    });
  }, [color, onscroll]);

  return (
    <Container
      className="flex aic jcc "
      id="contactUs"
      bgt={bgt}
      onscroll={onscroll}
    >
      <Wrapper className="flex aic jcc">
        <LeftCon className="flex aic jcfs flex1">
          <LogoTxt
            className="flex jcc"
            onClick={() => {
              setMenu(true);
            }}
          >
            <Menu sx={{ color: "white", fontSize: "30px" }} />
          </LogoTxt>
          <Logo className="flex aic jcfs">
            <LogoTxt className="s" cl="white">
              KAR
            </LogoTxt>
            <LogoTxt className="s" cl="orangered">
              BOX
            </LogoTxt>
          </Logo>
        </LeftCon>
        <RightCon className="flex aic jcfe flex1">
          {!searchOpen ? (
            <SearchCon className="flex aic jcc">
              <KeyboardBackspace
                onClick={() => setSearchOpen((current) => !current)}
              />
              <SearchInputCon className="flex aic jcfe">
                <SearchInput placeholder="Search" />
                <Search
                  sx={{
                    color: "orangered",
                    fontSize: "25px",
                    position: "absolute",
                  }}
                />
              </SearchInputCon>
            </SearchCon>
          ) : (
            <>
              <Search
                sx={{ color: "white", fontSize: "20px" }}
                onClick={() => setSearchOpen((current) => !current)}
              />
              <RightConVr />
              <RightConText>Sign Up</RightConText>
            </>
          )}
        </RightCon>
        {/* <InputCon className="flex aic jcsb">
          <Search sx={{color:'grey',fontSize:'20px'}} />
          <Input placeholder='search make,model, or type.....' />
          <LogoTxt
            className="s flex jcfe"
            cl="white"
            wd='40px'
            onClick={() => {
              setMenu(true);
            }}
          >
            <Menu sx={{ color: "black", fontSize: "30px" }} />
          </LogoTxt>
        </InputCon> */}
      </Wrapper>
      {menu && <Menu1 setMenu={setMenu} />}
    </Container>
  );
}

export default MobileHeader;
