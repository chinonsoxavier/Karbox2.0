import styled from "styled-components";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";
import MobileHeader from "../Components/Home/MobileHeader";
import HomeMenu from "../Components/Brands/HomeMenu";
import { mobile, tablet } from "../responsive";
import Products from "../Components/Brands/Products";
import {useState,useEffect,useRef} from 'react'
const Container = styled.div`
  background-color: black;
`;
const Wrapper = styled.div`
  // padding: 0 14vh;
//   position: relative;
`;
const BrandsHeader = styled.div``;
const HeaderText = styled.h3`
   color:white;
`;
const HeaderCon = styled.div`
  // position: absolute;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  padding:0 14vh;
  ${tablet({padding:'0 4vh'})}
  //   position:absolute;
`;

const ProductsCon = styled.div`
   padding:0 14vh;
   ${tablet({padding:'0 4vh'})}
`

function Brands({brand,route}) {
   
  
  // const ref = useRef();

  //  useEffect(() => {
  //    const handleHeaderPosition = () =>{
  //     alert(HeaderPosition);
  //     const HeaderPosition = Math.abs(ref.current.getBoundingClientRect().top - ref.current.offsetTop)
  //    } 
  //  }, [])
   
  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       const navBar = document.getElementById("nav");

  //       if (window.pageYOffset > 0) {
  //         // navBar.style.background = "#693FF5";
  //         navBar.style.position = 'fixed';
  //         navBar.style.top = 0;
  //       } else {
  //         navBar.style.background = "transparent";
  //         // navBar.style.position='relative'
  //       }
  //     });
  //   });
   
  //  const OffSet = '100vh'
   const [header, setheader] = useState(false);
       const navBar = document.getElementById("nav");
   useEffect(()=>{
      // if (window.pageYOffset > 0) {
      //     // navBar.style.background = "#693FF5";
      //     navBar.style.position = 'fixed';
      //     navBar.style.top = 0;
      //   } else {
      //     navBar.style.background = "transparent";
      //     // navBar.style.position='relative'
      //   }
     window.onscroll=()=>{
    setheader(window.pageYOffset < 800 ? false : true);
    console.log(window.pageYOffset)
    return () => (window.onscroll=null)
   }
  },[header])

   useEffect(()=>{
      // if (window.pageYOffset > 0) {
      //     // navBar.style.background = "#693FF5";
      //     navBar.style.position = 'fixed';
      //     navBar.style.top = 0;
      //   } else {
      //     navBar.style.background = "transparent";
      //     // navBar.style.position='relative'
      //   }
     window.onscroll=()=>{
      if(window.pageYOffset<50){
          navBar.style.position = "absolute";
      }
       else {
      //     navBar.style.background = "transparent";
          navBar.style.position='sticky'
        }
    // setheader(window.ScrollY < 614 ? false : true);
    // console.log(window.ScrollY)
    return () => (window.onscroll=null)
   }
  },[header])

  return (
    <Container className="w100">
      <Wrapper className="w100 bsbb">
        <HeaderCon className='w100 bsbb' id='nav' >
          <Header route={route} bgt={true} header={header} bg='black' />
          <MobileHeader />
        </HeaderCon>
        <HomeMenu/>
        <BrandsHeader className="w100 flex aic jcc">
          <HeaderText>{brand}</HeaderText>
        </BrandsHeader>
        <ProductsCon className='flex aic jcc bsbb' >
        <Products/>
        </ProductsCon>
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export default Brands;
