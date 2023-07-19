import styled from "styled-components";
import bg from "../images/headerbg.png";
import contact from "../images/contact.png";
import Header from "../Components/Home/Header";
import Button from "../Components/Home/Button";
import ManagementTeam from "../Components/AboutUs/ManagementTeam";
import Footer from "../Components/Home/Footer";
import Contact from "../Components/ContactUs/Contact";
import { useRef, useState } from "react";
import { Laptop, lmobile, ltablet, mobile, tablet } from "../responsive";
import MobileHeader from "../Components/Home/MobileHeader";
import MobileBottom from "../Components/Home/MobileBottom";
import { useEffect } from "react";

const Container = styled.div`
  background: url(${(props) => props.bg});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
`;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  // background:black;
  padding: 0 14vh;
  transition:1s linear;
  ${tablet({ padding: "0 4vh" })}
  ${Laptop({ padding: "0 4vh" })}
  ${mobile({ padding: "0 4vh" })}
  box-sizing:border-box;
`;
const MobileHeaderCon = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
`;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
`;

const MainTextCon = styled.div`
  height: 100%;
  width: 100%;
  ${tablet({ padding: "0 4vh" })}
  ${Laptop({ padding: "0 4vh" })}
  ${mobile({ padding: "0 4vh" })}
`;
const MainCon = styled.div``;
const MainConLeft = styled.div`
  color: white;
  flex: 3;
`;
const MainConLeftHr = styled.hr`
  border: none;
  height: 2px;
  width: 20px;
  background-color: white;
  margin-top: 12px;
  margin-right: 5px;
`;
const MainConLeftSmallText = styled.span`
  margin-top: 30px;
  width: ${(props) => props.wd};
  max-width: 300px;
`;
const MainConLeftBigText = styled.span`
  margin-top: 30px;
  font-size: 33px;
  font-weight: 500;
  max-width: 300px;
  ${tablet({ fontSize: "28px" })}
`;
const MainConLeftButton = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const MainConRight = styled.div`
  margin-top: 40px;
  flex: 1;
  ${lmobile({ display: "none" })};
`;
const MainConRightImgCon = styled.div`
  max-width: 400px;
  ${ltablet({ width: "230px" })}
  ${tablet({ width: "150px" })}
`;
const MainConRightImg = styled.img``;

function ContactUs({ route }) {
  const [Form, setForm] = useState(false);
  const [height, setheight] = useState();
  const handleClick = () => {
    setForm(true);
  };

  const MGRef = useRef(null);
  const [scrollPosition,setScrollPosition]=useState()



window.addEventListener("scroll",()=>{
      const x = window.scrollY;
      if(x>580){
       setScrollPosition(true)
      }else{
               setScrollPosition(false);

      }
})

  // useEffect(() => {

  //   window.addEventListener('scroll',()=>{
  //     // if(document.getElementById('ManagementTeam').scrollTop){

  //     //   const test = document.getElementById('ManagementTeam').scrollTop;
  //     // }
  //     setheight(document.getElementById('ManagementTeam').scrollTop)
  //     console.log('manage' + height)
  //   })
  // }, [])
  return (
    <Container id="contact-us" bg={bg} className="PP">
      <Wrapper>
        <MobileHeaderCon>
          <MobileHeader bgt="scrollTrasparent" onscroll="blue" />
          <MobileBottom />
        </MobileHeaderCon>

        <HeaderCon style={{ background: scrollPosition && 'blue'}}>
          <Header bg={scrollPosition && "blue"} route={route} header={true} />
        </HeaderCon>
        <MainTextCon className="flex aic jcc">
          <MainCon className="flex aic jcc">
            <MainConRight>
              <MainConRightImgCon>
                <MainConRightImg src={contact} alt="" />
              </MainConRightImgCon>
            </MainConRight>
            <MainConLeft className="flex aifs jcc fdc">
              <MainConLeftSmallText className="flex aic jcc">
                {" "}
                <MainConLeftHr /> contact us
              </MainConLeftSmallText>
              <MainConLeftBigText>
                Contact our support and sales team
              </MainConLeftBigText>
              <MainConLeftSmallText>
                {" "}
                Need to get in touch with our team? we`re all here
              </MainConLeftSmallText>
              <MainConLeftButton
                className="flex aifs jcfs w100"
                onClick={handleClick}
              >
                <Button
                  onClick={handleClick}
                  id="contact_us"
                  text="Contact Us"
                  border="none"
                  bg="orangered"
                  color="white"
                  padding="8px"
                  margin="5px"
                  bdr="16px"
                  wd="200px"
                />
              </MainConLeftButton>
              {Form && <Contact form={Form} update={setForm} />}
            </MainConLeft>
          </MainCon>
        </MainTextCon>
        <div ref={MGRef}>
          <ManagementTeam id="ManagementTeam" />
        </div>
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default ContactUs;
