import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mmobile } from "../../responsive";
const Container = styled.div`
  width: 100%;
  ]min-height: 900px;
  color: white;
  //   background:#0e1111;
`;
const Wrapper = styled.div``;
const Header = styled.div``;
const HeaderText = styled.h3`
  font-size: 30px;
`;
const ProductsHeaderButtonCon = styled.div`
  margin-bottom: 20px;
`;
const ProductsHeaderButtonWrapper = styled.div`
  background: #eee;
  border-radius: 22px;
  border-collapse: collapse;
  // border:4px solid black;
  padding: 2px;
`;
const ProductsHeaderButton = styled.button`
  border-radius: 16px;
  padding: 10px 25px;
  border: none;
  height: 100%;
  background: transparent;
  font-weight: 500;

  ${mmobile({padding:'5px 12px',fontSize:'12px'})}
`;

const BrandsCon = styled.div`
  transition: 1.5s all;
`;
const Brand = styled.div`
  padding: 20px;
  // min-width: 130px;
  max-width:140px;
  width:130px;
  margin: 4px;
  flex:1;
  border: 1px solid #231f20;
  background: #231f20;
  transition: 1.5s all;
  //   box-shadow: -1.04px 4.891px 26px 1px #231f20;
  ${mmobile({maxWidth:'60px',width:'120px'})}
`;
const BrandsImg = styled.img`
  width: 100%;
`;
const BrandsText = styled.span`
  margin-top: 11px;
`;
const BrandssButtonCon = styled.div`
  margin: 26px 0;
`;
const BrandssButtonText = styled.div`
  font-weight: 500;
  ${mmobile({fontSize:'11px'})}
`;
const BrandssButton = styled.button`
  border-radius: 16px;
  border: none;
  padding: 8px 20px;
  background: white;
`;

const Brands = () => {
  const data = [
    {
      img: require("../../images/Acura.png"),
      name: "Acura",
    },
    {
      img: require("../../images/Alfa_Romeo.png"),
      name: "Alfa Romeo",
    },
    {
      img: require("../../images/Audi.png"),
      name: "Audi",
      popular: true,
    },
    {
      img: require("../../images/BMW.png"),
      name: "BMW",
      popular: true,
    },
    {
      img: require("../../images/Buick.png"),
      name: "Buick",
    },
    {
      img: require("../../images/Cadillac.png"),
      name: "Cadillac",
    },
    {
      img: require("../../images/Chevrolet.png"),
      name: "Chevrolet",
      popular: true,
    },
    {
      img: require("../../images/Chrysler.png"),
      name: "Chrysler",
    },
    {
      img: require("../../images/Dodge.png"),
      name: "Dodge",
    },
    {
      img: require("../../images/FIAT.png"),
      name: "FIAT",
    },
    {
      img: require("../../images/Ford.png"),
      name: "Ford",
      popular: true,
    },
    {
      img: require("../../images/Genesis.png"),
      name: "Genesis",
    },
    {
      img: require("../../images/GMC.png"),
      name: "GMC",
    },
    {
      img: require("../../images/Honda.png"),
      name: "Honda",
      popular: true,
    },
    {
      img: require("../../images/Hyundai.png"),
      name: "Hyundai",
    },
    {
      img: require("../../images/INFINITI.png"),
      name: "INFINITI",
    },
    {
      img: require("../../images/Jaguar.png"),
      name: "Jaguar",
    },
    {
      img: require("../../images/Jeep.png"),
      name: "Jeep",
    },
    {
      img: require("../../images/Kia.png"),
      name: "Kia",
    },
    {
      img: require("../../images/Land_Rover.png"),
      name: "Land Rover",
    },
    {
      img: require("../../images/Lexus.png"),
      name: "Lexus",
    },
    {
      img: require("../../images/Lincoln.png"),
      name: "Lincoln",
    },
    {
      img: require("../../images/Maserati.png"),
      name: "Maserati",
    },
    {
      img: require("../../images/Mazda.png"),
      name: "Mazda",
    },
    {
      img: require("../../images/Mercedes-Benz.png"),
      name: "Mercedes Benz",
    },
    {
      img: require("../../images/MINI.png"),
      name: "MINI",
    },
    {
      img: require("../../images/Mitsubishi.png"),
      name: "Mitsubishi",
    },
    {
      img: require("../../images/Nissan.png"),
      name: "Nissan",
    },
    {
      img: require("../../images/Porsche.png"),
      name: "Porsche",
    },
    {
      img: require("../../images/Ram.png"),
      name: "Ram",
    },
    {
      img: require("../../images/Subaru.png"),
      name: "Subaru",
    },
    {
      img: require("../../images/Toyota.png"),
      name: "Toyota",
      popular: true,
    },
    {
      img: require("../../images/Volkswagen.png"),
      name: "Volkswagen",
    },
    {
      img: require("../../images/Volvo.png"),
      name: "Volvo",
    },
  ];

  const [shopType, setshopType] = useState("new");
  const [show, setShow] = useState("less");

  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcc w100">
          <HeaderText>Shop your favorite brand</HeaderText>
        </Header>
        <ProductsHeaderButtonCon className="flex aic jcc w100">
          <ProductsHeaderButtonWrapper>
            <ProductsHeaderButton
              style={{
                color: shopType === "new" ? "white" : "black",
                background: shopType === "new" ? "black" : "transparent",
              }}
              onClick={() => setshopType("new")}
            >
              New Cars
            </ProductsHeaderButton>
            <ProductsHeaderButton
              style={{
                color: shopType === "used" ? "white" : "black",
                background: shopType === "used" ? "black" : "transparent",
              }}
              onClick={() => setshopType("used")}
            >
              Used Cars
            </ProductsHeaderButton>
          </ProductsHeaderButtonWrapper>
        </ProductsHeaderButtonCon>
        <BrandsCon className="flex aic w100 jcc w100 wrap">
          {data.map((item, i) => (
            <div key={i}>
              {show === "less" && item.popular && (
                <Brand key={i} className="flex aic  jcc fdc">
                  <Link
                    className="BrandsLink link flex aic jcc fdc"
                    to={`/inventory/?condition=${shopType}-listing=${item.name}`}
                  >
                    <BrandsImg src={item.img} />
                    <BrandsText>{item.name}</BrandsText>
                  </Link>
                </Brand>
              )}
              {show === "more" && (
                <Brand className="flex aic  jcc fdc" key={i}>
                  <Link
                    className="BrandsLink link flex aic jcc fdc"
                    to={`/inventory/?condition=${shopType}-listing=${item.name}`}
                  >
                    <BrandsImg src={item.img} />
                    <BrandsText>{item.name}</BrandsText>
                  </Link>
                </Brand>
              )}
            </div>
          ))}
          <BrandssButtonCon className="flex aic jcc w100">
            {show === "more" && (
              <BrandssButton
                className="flex aic v jcc"
                onClick={() => setShow("less")}
              >
                <BrandssButtonText>See less</BrandssButtonText>
                <KeyboardArrowUp sx={{ fontSize: "22px" }} />
              </BrandssButton>
            )}
            {show === "less" && (
              <BrandssButton
                className="flex aic v jcc"
                onClick={() => setShow("more")}
              >
                <BrandssButtonText>See More</BrandssButtonText>

                <KeyboardArrowDown sx={{ fontSize: "22px" }} />
              </BrandssButton>
            )}
          </BrandssButtonCon>
        </BrandsCon>
      </Wrapper>
    </Container>
  );
};

export default Brands;
