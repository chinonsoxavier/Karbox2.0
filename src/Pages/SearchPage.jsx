import styled from "styled-components";
import Header from "../Components/Home/Header";
import { Laptop, mobile, tablet } from "../responsive";
import Footer from "../Components/Home/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  background: black;
  padding: 0 14vh;
  ${tablet({ padding: "0 4vh" })}
  ${Laptop({ padding: "0 4vh" })}
    ${mobile({ padding: "0 4vh" })}
    box-sizing:border-box;
`;
const FooterCon = styled.div`
  width: 100%;
  padding: 0 14vh;
  ${tablet({ padding: "0 4vh" })}
  ${Laptop({ padding: "0 4vh" })}
    ${mobile({ padding: "0 4vh" })}
    box-sizing:border-box;
  background: url(./footer-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: auto;
`;
function SearchPage() {
  return (
    <Container>
      <HeaderCon>
        <Header />
        {/* <Menu/> */}
      </HeaderCon>
      <Wrapper>search bpage</Wrapper>
      <FooterCon>
        <Footer />
      </FooterCon>
    </Container>
  );
}

export default SearchPage;
