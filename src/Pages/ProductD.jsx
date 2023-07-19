import { useState, useRef } from "react";
import Footer from "../Components/Home/Footer";
import Product_HomeSection from "../Components/Product/Product_HomeSection";
import { Laptop, ltablet, mmobile, mobile, tablet } from "../responsive";
import MobileHeader from "../Components/Home/MobileHeader";
import MobileBottom from "../Components/Home/MobileBottom";
import {
  CameraAlt,
  ChevronLeft,
  ChevronRight,
  Close,
} from "@mui/icons-material";
import styled from "styled-components";
import img from "../images/auction-2.jpg";
import img2 from "../images/auction-2.jpg";
import img3 from "../images/auction-2.jpg";
import img4 from "../images/auction-2.jpg";
import ProductDSelection from "../Components/Product/ProductDSelection";
import Header from "../Components/Home/Header";
import Negotiate from "../Components/Product/Negotiate";
import VendorDetails from "../Components/Product/VendorDetails";

const ProductDCon = styled.div`
  width: 100%;
  box-sizing: border-box;
  box-shadow: -1.04px 4.81px 1px 0px rgb(69 49 83 / 2%);
  // background: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
`;
const Container = styled.div`
  // background: url(./hero-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  // width: 80%;
  // padding:0 4vh;
  ${mobile({ padding: "0 4vh" })};
  ${ltablet({ padding: "0 3vh" })};
  ${mmobile({ padding: "0" })};
`;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  padding: 0 14vh;
  background-color:black;
  ${tablet({ padding: "0 4vh" })};
  ${Laptop({ padding: "0 4vh" })};
    ${mobile({ padding: "0 4vh" })};
    ${mmobile({display:'none'})}
    box-sizing:border-box;
`;

const FooterCon = styled.div`
background: url(./footer-bg.jpg);
background:black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  // z-index:200;
  width:100%;
`;
const ImageSliderCon = styled.div`
width:100%;
background:black;
height:100vh;
position:relative;
`;
const ImageSliderHeader = styled.div``;
const ImageSliderHeaderIcon = styled.div`
  margin: 0 7px;
`;
const ImageSliderHeaderIconText = styled.span`
  text-decoloration: underline;
`;
const ImageSliderWrapper = styled.div``;
const ImageSlider = styled.div`
  display: none;
  height: 100%;
`;
const ImageSliderImg = styled.img`
width:80%;
`;

const ImageSliderIndexCon = styled.div`
color:white;
padding:0 30px;
`
const ImageSliderIndexText = styled.span`
font-size:12px;
`

const ButtonWrapper = styled.div`
  width:100%;
  position:absolute;
  `
  const ButtonCon = styled.div`
  padding:30px;
  position:absolute;
   z-index:900;
`
const Button = styled.div``


function ProductD() {
  
  const [slideIndex,setSlideIndex]=useState(0)
  const startIndex = slideIndex;
    const [makeanoffer, setMakeanoffer] = useState({});
    const SliderRef = useRef(slideIndex+1);
      const [showImageGalery, setShowImageGalery] = useState(false);
 const image2 = [
  
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 0,
     img: img,
   },
   {
     id: 1,
     img: img2,
   },
   {
     id: 2,
     img: img3,
   },
   {
     id: 3,
     img: img4,
   },
   {
     id: 4,
     img: img4,
   },
 ];


 console.log(image2.length)
 
  return (
    <ProductDCon className="flex aic jcc fdc w100">
      {showImageGalery ? (
        <ImageSliderCon className="flex aic jcc fdc">
          <ButtonWrapper className="flex aic jcsb w100 ">
            <ButtonCon
            style={{display:slideIndex<1 && 'none',left:0}}
              className="flex aic jcc"
              onClick={() => setSlideIndex(slideIndex - 1)}
            >
              <Button>
                <ChevronLeft sx={{ fontSize: "65px", color: "white" }} />
              </Button>
            </ButtonCon>
            <ButtonCon
            style={{display:slideIndex>image2.length-2 && 'none',right:0}}
              className="flex aic jcc"
              onClick={() =>
                setSlideIndex(
                  slideIndex +1
                )
              }
            >
              <Button>
                <ChevronRight sx={{ fontSize: "65px", color: "white" }} />
              </Button>
            </ButtonCon>=
          </ButtonWrapper>
          <ImageSliderHeader className="flex aic jcfe w100">
            <ImageSliderHeaderIcon className="flex aic jcc">
              <Close sx={{ fontSize: "16px", color: "white" }} />
              <ImageSliderHeaderIconText>Share</ImageSliderHeaderIconText>
            </ImageSliderHeaderIcon>
          </ImageSliderHeader>
          <ImageSliderWrapper className="flex aic jcc  w100">
            {image2.map((item, i) => (
              <ImageSlider
                className="flex aic jcc fdc "
                style={{ display: i === slideIndex && "block" }}
                key={i}
              >
                <ImageSliderImg
                  src={require("../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg")}
                />
              </ImageSlider>
            ))}
          </ImageSliderWrapper>

          <ImageSliderIndexCon className="flex aic jcfs w100 bsbb">
            <ImageSliderIndexText style={{ marginTop: "4px" }}>
              <CameraAlt sx={{ fontSize: "16px" }} />
            </ImageSliderIndexText>
            <ImageSliderIndexText>{slideIndex+1}/</ImageSliderIndexText>
            <ImageSliderIndexText>{image2.length}</ImageSliderIndexText>
          </ImageSliderIndexCon>
        </ImageSliderCon>
      ) : (
        <>
          <MobileBottom />
          <HeaderCon>
            <MobileHeader />
            <Header />
            {/* <Menu/> */}
          </HeaderCon>
          <Container>
            <Product_HomeSection
              makeanoffer={makeanoffer}
              setMakeanoffer={setMakeanoffer}
            />
            {/* <MakeOffer makeanoffer={makeanoffer} setMakeanoffer={setMakeanoffer} /> */}
            <ProductDSelection />
          </Container>
          <FooterCon>
            <Footer />
          </FooterCon>
        </>
      )}
    </ProductDCon>
  );
}

export default ProductD;
