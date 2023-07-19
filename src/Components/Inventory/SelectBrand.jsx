import styled from "styled-components";
import {Link} from 'react-router-dom'
import logo from "../../images/20230215_215935.png";
const Container = styled.div`
  width: 100%;
//   color: white;
  background-color:whitesmoke;
  border-radius:5px;
  padding:0 20px;
  box-sizing:border-box;
`;
const Wrapper = styled.div``;
const Header = styled.div``;
const HeaderText = styled.h3``;
const Price = styled.div`
   background-color:whitesmoke;
   width:100%;
   margin:10px 0;
`;
const PriceHeader = styled.div``;
const PriceHeaderText = styled.span`
    font-size: 16px;
  color: grey;
  font-weight: 500;
`;
const PriceWrapper = styled.div`
  width:100%;
`;
const PriceCon = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 4px 2px;
  margin:5px;
`;
const PriceText = styled.span`
  font-size: 13px;
  color: black;
  font-weight: 500;
`;
const Feature = styled.div`
  background-color: whitesmoke;
  width: 100%;
  margin: 10px 0;
`;
const FeatureHeader = styled.div``;
const FeatureHeaderText = styled.span`
    font-size: 16px;
  color: grey;
  font-weight: 500;
`;
const FeatureWrapper = styled.div`
  width: 100%;
`;
const FeatureCon = styled.div`
   background-color:white;
   border-radius:3px;
   padding:4px 3px;
   margin:5px;
`;
const FeatureText = styled.span`
  font-size: 13px;
  color: black;
  font-weight: 500;
`;
const Condition = styled.div`
  background-color: whitesmoke;
  width: 100%;
  margin: 10px 0;
`;
const ConditionHeader = styled.div``;
const ConditionHeaderText = styled.span`
    font-size: 16px;
  color: grey;
  font-weight: 500;
`;
const ConditionWrapper = styled.div`
  width: 100%;
`;
const ConditionCon = styled.div`
   background-color:white;
   border-radius:3px;
   padding:4px 3px;
   margin:5px;
`;
const ConditionText = styled.span`
  font-size: 13px;
  color: black;
  font-weight: 500;
`;
const BrandsHeader = styled.div``;
const BrandsHeaderText = styled.span`
  font-size: 16px;
  color: grey;
  font-weight: 500;
`;
const Brands = styled.div``;
const BrandsCon = styled.div``;
const BrandsImgCon = styled.div`
  background-color: white;
  //   flex: 1;
  width: 250px;
  border-radius: 4px;
  margin:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:5px;
`;
const BrandsImg = styled.img`
  width: 70%;
`;

const ButtonCon = styled.div`
   width:100%;
   margin:20px 0;
`
const Button = styled.button`
   width:40%;
   background:orangered;
   border:none;
   padding:9px;
`

function SelectBrand() {
  return (
    <Container>
      <Wrapper className="flex aifs jcc fdc w100">
        <Header className="flex aic jcc w100">
          <HeaderText>Find your dream car</HeaderText>
        </Header>
        <Price className="flex aic jcc fdc">
          <PriceHeader>
            <PriceHeaderText>Price</PriceHeaderText>
          </PriceHeader>
          <PriceWrapper className="flex aic jcc wrap">
            <PriceCon>
              <PriceText>3M - 6M </PriceText>
            </PriceCon>
            <PriceCon>
              <PriceText>6M- 10M</PriceText>
            </PriceCon>
            <PriceCon>
              <PriceText>10M - 15M</PriceText>
            </PriceCon>
            <PriceCon>
              <PriceText>Above 15M</PriceText>
            </PriceCon>
            <PriceCon>
              <PriceText>Under 3M</PriceText>
            </PriceCon>
          </PriceWrapper>
        </Price>
        <Feature className="flex aic jcc fdc">
          <FeatureHeader>
            <FeatureHeaderText>Features</FeatureHeaderText>
          </FeatureHeader>
          <FeatureWrapper className="flex aic jcc wrap">
            <FeatureCon>
              <FeatureText>Electric</FeatureText>
            </FeatureCon>
            <FeatureCon>
              <FeatureText>Hybrid</FeatureText>
            </FeatureCon>
            <FeatureCon>
              <FeatureText>Popular</FeatureText>
            </FeatureCon>
            <FeatureCon>
              <FeatureText>Performance</FeatureText>
            </FeatureCon>
            <FeatureCon>
              <FeatureText>Range</FeatureText>
            </FeatureCon>
          </FeatureWrapper>
        </Feature>
        <Condition className="flex aic jcc fdc">
          <ConditionHeader>
            <ConditionHeaderText>Condition</ConditionHeaderText>
          </ConditionHeader>
          <ConditionWrapper className="flex aic jcc wrap">
            <ConditionCon>
              <ConditionText>Brand New</ConditionText>
            </ConditionCon>
            <ConditionCon>
              <ConditionText>Used</ConditionText>
            </ConditionCon>
            <ConditionCon>
              <ConditionText>Refurbished</ConditionText>
            </ConditionCon>
          </ConditionWrapper>
        </Condition>
        <Brands className="flex aic jcc wrap fdc">
          <BrandsHeader className="flex aic jcc w100">
            <BrandsHeaderText>Select BRAND</BrandsHeaderText>
          </BrandsHeader>
          <BrandsCon className="flex aic jcc wrap ">
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
            <Link to='/brands/Lamborghini'>
            <BrandsImgCon>
              <BrandsImg src={logo} alt="" />
            </BrandsImgCon>
            </Link>
             </BrandsCon>
        </Brands>
        <ButtonCon className="flex aic jcc">
          <Button>Search</Button>
        </ButtonCon>
      </Wrapper>
    </Container>
  );
}

export default SelectBrand;
