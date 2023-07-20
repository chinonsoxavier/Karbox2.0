import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  AcUnit,
  AccountCircleOutlined,
  LocalGasStationOutlined,
  SettingsSuggestOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Rating } from "@mui/material";
import { lmobile } from "../../responsive";
const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div``;
const Header = styled.div``;
const HeaderText = styled.h3`color:white`;
const ProductsCon = styled.div``;

const buttonDisplayAnimation = keyframes`
0%{
    opacity:0.25
  },
  50%{
    opacity:0.5
  },
  75%{
    opacity:0.75
  },
  100%{
    opacity:1
},
`;
const ButtonCon = styled.div`
  padding-bottom: 10px;
  animation-name: ${buttonDisplayAnimation};
  animation-duration: 3s;
`;
const Products = styled.div`
  box-sizing: border-box;
  padding: 0 8px;
  border-radius: 16px;
  // height:350px;
`;

const ProductsName = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
const ProductsImg = styled.img`
  width: 100%;
  ${lmobile({width:'50px'})}
`;

const ProductInfo = styled.div``;
const ProductInfoTop = styled.div``;
const ProductInfoTopText = styled.span`
  width:100%;
  font-weight: ${props=>props.lt ? 300 : 600};
  font-size: ${props=>props.lt && '16px'};
`;
const ProductInfoTopTextCon = styled.div`
padding:4px;
`;
const ProductInfoBottom = styled.div`
  // padding-bottom:40px;
`;
const ProductInfoBottomOptions = styled.div`
  display: flex;
  align-items: Center;
  justify-content: center;
  flex-direction: column;
`;
const ProductInfoBottomOptionsIcon = styled.div`
  padding: 6px 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 220, 208);
  color: orangered;
`;
const ProductInfoBottomOptionsText = styled.p`
  font-size: 12px;
`;


const Button = styled.button`
  font-size: 14px;
  border: none;
  margin: 5px 0;
  background: orangered;
  color: white;
  padding: 7px 10px;
  border-radius: 4px;
  cursor:pointer;
  width:100%;
`;

const Find = () => {


  const slides = [
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
  ];
  const [hovered, setHovered] = useState();

  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderText>Find Your Suitable Car with Trusted Dealers</HeaderText>
        </Header>
        <ProductsCon>
          <Swiper
            style={{ height: "max-content" }}
            // slidesPerView={4}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className="FindProducts"
            slidesPerView="auto"
          >
            {slides.map((item, i) => (
              <SwiperSlide
                key={i}
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  minWidth: "250px",
                  border: i === hovered && "1px solid orangered",
                  maxWidth: "25%",
                }}
                id="FindProducts"
                onMouseOver={() => setHovered(i)}
                onMouseLeave={() => setHovered("")}
              >
                <Products className="FindProducts flex aic jcc fdc">
                  <ProductsName>Honda Jazz</ProductsName>
                  <ProductsImg
                    src={require("../../images/auction-2.jpg")}
                    alt=""
                  />
                  <ProductInfo className="w100">
                    <ProductInfoTop className="flex aifs w100 jcfs fdc">
                      <ProductInfoTopTextCon>
                        <ProductInfoTopText>$ 2,000.00</ProductInfoTopText>
                      </ProductInfoTopTextCon>
                      <ProductInfoTopTextCon className="flex aic jcc">
                        <Rating name="read-only" value={4} readOnly />
                        <ProductInfoTopText lt>23 Reviews</ProductInfoTopText>
                      </ProductInfoTopTextCon>
                    </ProductInfoTop>
                    <ProductInfoBottom className="flex aic jcsa w100">
                      <ProductInfoBottomOptions>
                        <ProductInfoBottomOptionsIcon>
                          <AccountCircleOutlined />
                        </ProductInfoBottomOptionsIcon>
                        <ProductInfoBottomOptionsText>
                          4 seats
                        </ProductInfoBottomOptionsText>
                      </ProductInfoBottomOptions>
                      <ProductInfoBottomOptions>
                        <ProductInfoBottomOptionsIcon>
                          <AcUnit />
                        </ProductInfoBottomOptionsIcon>
                        <ProductInfoBottomOptionsText>
                          AC
                        </ProductInfoBottomOptionsText>
                      </ProductInfoBottomOptions>
                      <ProductInfoBottomOptions>
                        <ProductInfoBottomOptionsIcon>
                          <SettingsSuggestOutlined />
                        </ProductInfoBottomOptionsIcon>
                        <ProductInfoBottomOptionsText>
                          Auto
                        </ProductInfoBottomOptionsText>
                      </ProductInfoBottomOptions>
                      <ProductInfoBottomOptions>
                        <ProductInfoBottomOptionsIcon>
                          <LocalGasStationOutlined />
                        </ProductInfoBottomOptionsIcon>
                        <ProductInfoBottomOptionsText>
                          Petrol
                        </ProductInfoBottomOptionsText>
                      </ProductInfoBottomOptions>
                    </ProductInfoBottom>
                  </ProductInfo>
                  {i === hovered && (
                    <ButtonCon className={`flex aic jcc w100`}>
                      <Button>Contact Dealer</Button>
                    </ButtonCon>
                  )}
                </Products>
              </SwiperSlide>
            ))}
          </Swiper>
        </ProductsCon>
      </Wrapper>
    </Container>
  );
};

export default Find;
