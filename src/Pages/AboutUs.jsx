import styled from "styled-components";
// import HeaderSection from "..../Components/HeaderSection/HeaderSection";
import footer from '../images/footerBg.jpg'
import Experience from "../Components/AboutUs/Experience";
import WhatToExpect from "../Components/AboutUs/WhatToExpect";
import RegisterAndStart from "../Components/AboutUs/RegisterAndStart";
import ManagementTeam from "../Components/AboutUs/ManagementTeam";
import OurReviews from "../Components/AboutUs/OurReviews";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";
import MobileHeader from "../Components/Home/MobileHeader";

import { Laptop, mobile, tablet } from "../responsive";

const Container = styled.div`
  // background: url(./hero-bg.png);
  background: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  //   height: 90vh;
  //   color: #37406f;
  `;
  
  const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  background:black;
  padding: 0 14vh;
  ${tablet({ padding: "0 4vh" })}
  ${Laptop({ padding: "0 4vh" })}
    ${mobile({ padding: "0 4vh" })}
    box-sizing:border-box;
`;
const MobileHeaderCon = styled.div`
  position:sticky;
  top:0;
  z-index:200;
`
  
  const Wrapper = styled.div`
  padding:0 14vh;
width: 100%;
  ${tablet({ padding: "0 4vh" })}
  ${Laptop({ padding: "0 4vh" })}
    ${mobile({ padding: "0 4vh" })}
  box-sizing: border-box;
`;

const AboutUs_Con = styled.div`
  padding: 0 5vh;
  width: 100%;
  box-sizing: border-box;
  margin: 30px 0;
`;

const FooterCon = styled.div`
  width: 100%;

  background: url${props=>props.bg};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; 
  height: auto;
  // background:red;
`;

function AboutUs({ route,menu,setMenu }) {
  return (
    <Container>
       <MobileHeaderCon>
      {/* <MobileBottom /> */}
            <MobileHeader menu={menu} setMenu={setMenu} />
      </MobileHeaderCon>

          <HeaderCon>
            <Header route={route} />
            {/* <Menu/> */}
          </HeaderCon>
      <Wrapper>
        <AboutUs_Con>
          <Experience />
          <WhatToExpect />
        </AboutUs_Con>
        <RegisterAndStart />
        <ManagementTeam />
        <OurReviews />
      </Wrapper>
      <FooterCon>
      <Footer/>
      </FooterCon>
    </Container>
  );
}

export default AboutUs;
