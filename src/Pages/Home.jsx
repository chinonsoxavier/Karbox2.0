import styled from "styled-components";
import BrandMenu from "../Components/Home/BrandMenu";
import CarsSelect from "../Components/Home/CarsSelect";
import ContactCard from "../Components/Home/ContactCard";
import Header from '../Components/Home/Header'
import HomeMenu from "../Components/Home/HomeMenu";
import Footer from "../Components/Home/Footer";
import MobileHeader from "../Components/Home/MobileHeader";
import MobileBottom from "../Components/Home/MobileBottom";
import { Laptop, lmobile, mobile, tablet } from "../responsive";
import HomeMenuMessage from "../Components/Home/HomeMenuMessage";
import Find from "../Components/Home/Find";
import Brands from "../Components/Home/Brands";
import ShopType from "../Components/Home/ShopType";

const Container = styled.div`
  background-color: black;
  box-sizing: border-box;
  width:100%;
  `;
  
  const HomeCon = styled.div`
    background-color: black;
    padding: 0 14vh;
    width: 100%;
    ${tablet({ padding: "0 4vh" })}
  box-sizing: border-box;
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
  position: sticky;
  top: 0;
  z-index: 200;
  background: black;
`;
const HomeContainer = styled.div``

const Wrapper = styled.div``;
const FooterCon = styled.div`
    box-sizing:border-box;
  background: url(./footer-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; 
  height: auto;
`;
function Home({ route,menu,setMenu }) {
  return (
    <Container>
      <MobileHeaderCon>
            <MobileHeader menu={menu} setMenu={setMenu} />
            <MobileBottom/>
      </MobileHeaderCon>
        <HomeContainer>

          <HeaderCon>
            <Header route={route} />
          </HeaderCon>
          <HomeCon>
            <Wrapper>
              <HomeMenu />
              <HomeMenuMessage />
              <Find/>
              <ShopType/>
              <Brands/>
              <BrandMenu />
              <CarsSelect />
              <ContactCard />
            </Wrapper>
          </HomeCon>
          <FooterCon>
            <Footer />
          </FooterCon>
        </HomeContainer>
      {/* ) */}
      {/* } */}
    </Container>
  );
}

export default Home;
