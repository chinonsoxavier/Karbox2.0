import {
  FacebookOutlined,
  Instagram,
  Apps,
  Twitter,
  WhatsApp,
  WifiCalling3Outlined,
} from "@mui/icons-material";
import React, { useState } from "react";

import styled from "styled-components";
import img from "../../images/auction-2.jpg";
import img2 from "../../images/auction-2.jpg";
import img3 from "../../images/auction-2.jpg";
import img4 from "../../images/auction-2.jpg";
import MakeOffer from "./MakeOffer";
import {
  CustomerBreakpoint,
  InventoryBreakpoint,
  ltablet,
  mmobile,
  tablet,
} from "../../responsive";
import Gallery from "./Gallery";
import Negotiate from "./Negotiate";
import VendorDetails from "./VendorDetails";
import Gallery2 from "./Gallery2";

const Container = styled.div`width:100%;`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  ${InventoryBreakpoint({ flexDirection: "column" })};
  ${CustomerBreakpoint({ flexDirection: "column" })};
`;
const ProductHomeSectionCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  background:red;
  ${mmobile({padding:'0'})}
  margin-bottom: 30px;
  background: white;
  padding-bottom: 30px;
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 27%);
`;

const ProductInfoCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  // margin-top: 50px;
  ${mmobile({display:'none'})}
`;
const GalleryCon = styled.div`
  max-width: 500px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageGalleryCon = styled.div`
  //  height:900px;
  flex: 2;
`;
const ImageGallery = styled.div`
  // max-height:500px;
  position: relative;
  height: 100%;
  // flex:1;
  max-width: 400px;
  ${InventoryBreakpoint({ maxWidth: "300px" })}
`;
const ImageGalleryImageCon = styled.div`
  // & :nth-child(n-1){
  //   width:40px;
  // }
  width: 100%;
`;
const ImageGalleryImage = styled.img`
  max-width: 100%;
`;
const ImageGalleryButtonCon = styled.div`
  position: absolute;
  bottom: 24px;
`;
const ImageGalleryImageButton = styled.button`
  padding: 8px;
  border: none;
  background: white;
  border-radius: 4px;
`;

const ImageSliderCon = styled.div``;
const ImageSliderHeader = styled.div``;
const ImageSliderHeaderLeft = styled.div``;
const ImageSliderHeaderRight = styled.div``;
const ImageSliderHeaderIcon = styled.div`
  margin: 0 7px;
`;
const ImageSliderHeaderIconText = styled.span`
  text-decoloration: underline;
`;
const ImageSliderWrapper = styled.div`
  height: 100%;
  max-width: 500px;
  // min-width: 400px;
  ${InventoryBreakpoint({ maxWidth: "300px" })}
`;
const ImageSlider = styled.div`
  // flex:1;
  width: 100%;
  // width:290px;
  min-width: 550px;
  ${InventoryBreakpoint({ width: "20px" })}
`;
const ImageSliderImg = styled.img`
  max-width: 250px;
  width: auto;
`;

const ProductName = styled.span`
  white-space: nowrap;
  font-size: 42px;
  font-weight: 600;
  ${tablet({ fontSize: "32px" })}
`;
const ProductInfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;
const ListingId = styled.span`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
  ${tablet({ fontSize: "13px" })}
`;
const HR = styled.div`
  border-right: 2px solid gray;
  height: 15px;
  width: 2px;
  margin: 8px;
`;
const ItemId = styled.span`
  white-space: nowrap;
  color: grey;
  font-weight: 300;
  ${tablet({ fontSize: "13px" })};
`;

const ProductPriceCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #ebf2ff;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  ${tablet({ padding: "10px 10px" })}
  box-sizing: border-box;

  span:first-of-type {
    &::after {
      margin: 0 6px;
      content: ":";
    }
  }
`;

const ProductDetails = styled.div``;

const ProductPrice = styled.div`
  flex: 1;
  text-align: left;
  width: 100%;
`;

const ProductPriceLeftTxt = styled.span`
  text-align: left;
  font-size: 35px;
  font-weight: 500;
  color: ${(props) => props.cl};
  ${ltablet({ fontSize: "23px" })}
  ${mmobile({ fontSize: "18px" })}
`;

const AuctionTimeHr = styled.hr`
  border: none;
  background-color: #e0e0f1;
  width: ${(props) => props.wd};
  height: 1px;
  margin: 25px;
  ${mmobile({margin:'6px'})}
`;

const ShowContactButtonCon = styled.div``;
const ShowContactButton = styled.button`
  padding: 10px 40px;
  border: none;
  background: orangered;
  color: white;
  font-size: 14px;
  cursor: pointer;
  ${mmobile({padding:'5px 40px'})}
`;
const MakeAnOfferButton = styled.button`
  padding: 10px 40px;
  border: 1px solid orangered;
  background: none;
  color: orangered;
  font-size: 14px;
  cursor: pointer;

  ${mmobile({padding:'5px 20px'})}
`;

const SocialIconCon = styled.div``;
const SocialIcon = styled.div`
  background: ${(props) => props.bg};
  color: white;
  padding: 8px 15px;
  margin: 0 5px;
  ${mmobile({padding:'3px 7px'})}
`;

const DetailsCon = styled.div`
  margin-bottom: 40px;
  ${ltablet({ flexDirection: "column" })}
`;
const Details = styled.div`
  flex: 1;
  padding: 0 6px;
  box-sizing: border-box;
  width: 100%;
  min-width: 200px;
`;

const ProductHomeSection = ({ makeanoffer, setMakeanoffer }) => {
  const [makeoffer, setmakeoffer] = useState(false);
  const [showcontact, setshowcontact] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState({});
  const [slide, setSlide] = useState(0);

  const image = [
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
  return (
    <Container>
      {/* {show ? (
      
      ) : ( */}
      <ProductHomeSectionCon>
        <ProductInfoCon>
          {/* <ProductInfoLeftCon> */}
          <ProductInfo>
            <ProductInfoTop>
              <ProductName>The Breeze Zodiac IX</ProductName>
            </ProductInfoTop>

            <ProductInfoBottom>
              <ListingId>Listing ID: 14076242</ListingId>
              <HR />
              <ItemId>Item #: 7300-335686</ItemId>
            </ProductInfoBottom>
          </ProductInfo>
        </ProductInfoCon>
        <Wrapper className="w100  ProductDetails">
          <GalleryCon className="flex1 w100">
            <Gallery />
          </GalleryCon>

          <ProductDetails className="flex aifs jcc fdc w100 flex2">
            <ProductPrice>
              <ProductPriceCon>
                <ProductPriceLeftTxt fz="35px" mb="39px" mt="20px" fw={400}>
                  Current Price
                </ProductPriceLeftTxt>
                <ProductPriceLeftTxt
                  cl="#43B055"
                  fw={600}
                  fz="35px"
                  mb="20px"
                  mt="20px"
                >
                  US $700.00
                </ProductPriceLeftTxt>
              </ProductPriceCon>

              {/* <AuctionTimeHr/> */}
              {/* <ProductPriceRightTxtCon> */}

              {/* </ProductPriceRightTxtCon> */}
            </ProductPrice>
            <AuctionTimeHr mg="25px" wd="95%" />

            <ShowContactButtonCon>
              {showcontact ? (
                <ShowContactButton onClick={() => setshowcontact(false)}>
                  08129785638
                </ShowContactButton>
              ) : (
                <ShowContactButton
                  className="flex aic jcc"
                  onClick={() => setshowcontact(true)}
                >
                  {" "}
                  <WifiCalling3Outlined sx={{ marginRight: "5px" }} /> Show
                  contact
                </ShowContactButton>
              )}
            </ShowContactButtonCon>

            <AuctionTimeHr mg="25px" wd="100%" />
            <SocialIconCon className="flex aic jcfs">
              <SocialIcon className="flex aic jcc" bg="#3b589b">
                <FacebookOutlined />
              </SocialIcon>
              <SocialIcon className="flex aic jcc" bg="#f03c3d">
                <Instagram />
              </SocialIcon>
              <SocialIcon className="flex aic jcc" bg="#6aabde">
                <Twitter />
              </SocialIcon>
              <SocialIcon className="flex aic jcc" bg="#7ac87b">
                <WhatsApp />
              </SocialIcon>
            </SocialIconCon>
            <AuctionTimeHr mg="25px" wd="100%" />

            <ShowContactButtonCon>
              <MakeAnOfferButton onClick={() => setmakeoffer(true)}>
                Make an offer
              </MakeAnOfferButton>
            </ShowContactButtonCon>
            {makeoffer && <MakeOffer setmakeoffer={setmakeoffer} />}
            <DetailsCon className="flex aifs jcc w100 warp">
              <Details>
                <Negotiate />
              </Details>
              <Details>
                <VendorDetails />
              </Details>
            </DetailsCon>
          </ProductDetails>
        </Wrapper>
      </ProductHomeSectionCon>
      {/* )} */}
    </Container>
  );
};

export default ProductHomeSection;
