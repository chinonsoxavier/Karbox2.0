import styled from "styled-components";
import Footer from "../Components/Home/Footer";
import Header from "../Components/Home/Header";
import HomeSection from "../Components/Vendor/HomeSection";
import { Laptop, mobile, tablet } from "../responsive";
// import Header from "../Components/Vendor/Header";
const Container = styled.div``
const Wrapper = styled.div``
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  padding: 0 14vh;
  background-color: black;
  ${tablet({ padding: "0 4vh" })};
  ${Laptop({ padding: "0 4vh" })};
  ${mobile({ padding: "0 4vh" })};
  box-sizing: border-box;
`;
function Vendor() {
  return <Container>
    <Wrapper>
      <HeaderCon>
        <Header/>
      </HeaderCon>
      <HomeSection/>
    </Wrapper>
    <Footer/>
  </Container>;
}

export default Vendor;
