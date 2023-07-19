import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeSection from '../Components/Dealer/HomeSection';
import Products from '../Components/Dealer/Products';
import Footer from '../Components/Home/Footer';
import Header from "../Components/Home/Header";
import MobileHeader from "../Components/Home/MobileHeader";
import { CustomerBreakpoint, Laptop, lmobile, ltablet, mobile, tablet } from "../responsive";


const Container = styled .div`
//    background:white;
`
const Wrapper = styled .div`
// padding: 0 14vh;
// ${tablet({ padding: "0 4vh" })}
// ${Laptop({ padding: "0 4vh" })}
//   ${mobile({ padding: "0 4vh" })}
`
const Navbar = styled .div`
   padding:20px 14vh;
   background:white;
   box-sizing:border-box;
`
const HeaderCon = styled.div`
position: sticky;
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
const HeaderLeft = styled .div``
const HeaderLeftText = styled .span`
font-size:19px;
font-weight:500;
`
const HeaderRight = styled .div``
const HeaderButton =styled .button`
   border:none;
   background:blue;
   padding:10px 15px;
   color:white;
   font-size:18px;
   border-radius:8px;
`

function DealerProfile() {
  return (
    <Container>
        <MobileHeaderCon>
            <MobileHeader bgt='scrollTrasparent' 
            onscroll='blue' />
      </MobileHeaderCon>

          <HeaderCon >
            <Header header={false} />
          </HeaderCon>
        <Wrapper>
            <Navbar className='flex aic jcsb w100' >
                <HeaderLeft>
                    <HeaderLeftText>
                    Seller Profile 
                    </HeaderLeftText>
                </HeaderLeft>
                <HeaderRight>
                    <HeaderButton variant='contained' > 
                    <Link to='.dealercenter/user/signup/dostep/step1' className='link flex aic jcc'> 
                    {/* <Add/> */}
                    Follow
                        </Link>
                    </HeaderButton>
                </HeaderRight>
            </Navbar>
            <HomeSection/>
            <Products/>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default DealerProfile