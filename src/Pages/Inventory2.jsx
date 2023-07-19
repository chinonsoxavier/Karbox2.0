import styled from "styled-components";
import Header from "../Components/Home/Header";
import MobileBottom from "../Components/Home/MobileBottom";
import MobileHeader from "../Components/Home/MobileHeader";
import Products from "../Components/Inventory/Products";
// import SelectBrand from "../Components/Inventory/SelectBrand";
import Footer from '../Components/Home/Footer'
// import Filter from "../Components/Inventory/Filter";
// import SortCategories from "../Components/Inventory/SortCategoties";
import { CustomerBreakpoint, Laptop, lmobile, ltablet, mobile, tablet } from "../responsive";
import HomeSection from "../Components/Inventory/HomeSection";

const Container = styled.div`
   background-color:black;
`;
const Wrapper = styled.div`
  box-sizing:border-box;
  padding:0 14vh;
  ${mobile({padding:'0 4vh'})}
`;
const HeaderCon = styled.div`
position: fixed;
top: 0;
z-index: 200;
width: 100%;
// background:black;
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

const SortCon = styled.div`flex:2;`
const ProductsCon = styled.div`flex:4`

// const Wrapper = styled.div``;

function Inventory2({route}) {
  return (
    <Container className="PP">
          <MobileHeaderCon>
            <MobileHeader bgt='scrollTrasparent' 
            onscroll='blue' />
      </MobileHeaderCon>

          <HeaderCon >
            <Header route={route}  />
          </HeaderCon>
          <HomeSection/>
        <Wrapper className='flex aifs jcfs' >
          {/* <SortCon>
        <SortCategories/>
          </SortCon> */}
          <ProductsCon>
        <Products/>
          </ProductsCon>
        <MobileBottom/>
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export default Inventory2;
