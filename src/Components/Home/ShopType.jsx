import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { mmobile } from "../../responsive";

const Container = styled.div`
  width: 100%;
  ]min-height: 900px;
  color: white;
`;
const Wrapper = styled.div`width:100%;`;
const Header = styled.div``;
const HeaderText = styled.h3`
  font-size: 30px;
  ${mmobile({fontSize:'20px'})}
`;

const SlidesImg = styled.img` 
width:80%;
border-radius:10px;
`
const SlidesText = styled.span`
  color: white;
  height: 30px;
  ${mmobile({ fontSize: "13px" })}
`;

const ButtonCon = styled.div`
  font-weight: 500;
  margin:35px 0;
`;
const Button = styled.button`
  border-radius: 16px;
  border: none;
  padding: 8px 29px;
  background: white;
`;



function ShopType() {

const slide = [
  {
    img: require("../../images/sedan-bd04eaa11255c40e896689d7d1a768af.jpg"),
    name: "SEDAN",
  },
  {
    img: require("../../images/suv-54245a9fb995907f03c56af8af6783d1.jpg"),
    name: "SUV",
  },
  {
    img: require("../../images/wagon-52353d4782d2a89bafccf056189e9b7a.jpg"),
    name: "WAGON",
  },
  {
    img: require("../../images/van-6867d31f460af1419f5848f729831cf7.jpg"),
    name: "VAN",
  },
  {
    img: require("../../images/truck-88eb965e33291c6f272ab38f405b90cd.jpg"),
    name: "TRUCK",
  },
  {
    img: require("../../images/hatchback-a2845fd8c35ce0e22f6c85b5b5b46478.jpg"),
    name: "HATCHBACK",
  },
  {
    img: require("../../images/ev-84e7ab463b67b8b749d7d59499d5b5ea.jpg"),
    name: "EV",
  },
  {
    img: require("../../images/coupe-e635d95e912b948b71e5bd69f7a87dcc.jpg"),
    name: "COUPE",
  },
  {
    img: require("../../images/convertible-febfcdb572cf03cc8ab54bdd3068540b.jpg"),
    name: "CONVERTIBLE",
  },

];

  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcc w100">
          <HeaderText>Top-rated cars by type</HeaderText>
        </Header>
        <Swiper
          slidesPerView='auto'
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="shopType  flex aic jcc "
        >
          {slide.map((item, i) => (
            <SwiperSlide
              style={{
                maxWidth: "15%",
                width: "100%",
                minWidth: "70px",
              }}
              key={i}
              id="shopType"
              className="flex aic jcc fdc w100"
            >
              <Link className="link w100" to={`/inventory/?type=${item.name}`}>
                <SlidesImg src={item.img} />
                <SlidesText>{item.name}</SlidesText>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonCon className="flex aic jcc w100">
          <Button>See all</Button>
        </ButtonCon>
      </Wrapper>
    </Container>
  );
}

export default ShopType;
