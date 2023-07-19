import { useEffect, useState } from "react";
import styled from "styled-components";
import tab1 from "../../images/tab1.png";
import tab2 from "../../images/tab2.png";
import tab3 from "../../images/tab3.png";
import tab4 from "../../images/tab4.png";
import ProductDescription from "./ProductDescription";
import ProductDeliveryOptions from "./ProductDeliveryOptions";
import { mmobile, tablet } from "../../responsive";

const ProductDSelectionCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: white;
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 27%);
`;
const PoliciesLink = styled.a`
  text-decoration: underline;
  color: lightpurple;
`;

const ProductDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const ProductInfo_Wrapper = styled.div`
background-color: #ebf2ff;
display:flex;
  // flex-wrap: wrap;
align-items:center;
justify-content:space-between;
width:80%;
flex:1;
margin-top: 80px;
box-sizing:border-box;
padding:10px 20px;
margin:bottom:80px;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #e0e0f1;
  padding: 10px 30px;
  flex: 1;
  margin: 8px;
  cursor: pointer;
  ${tablet({padding:'2px 6px'})};
  ${mmobile({margin:'2px'})};
`;
const Details_ImgCon = styled.div`
  ${mmobile({display:'none'})}
`;
const DetailsImg = styled.img`
  max-width: 90%;
  width:100%;
  width:40px;
  margin: 5px;
`;
const DetailsTxt = styled.p`
  font-weight: 400;
  margin:0 8px;
  white-space:nowrap;
  ${tablet({fontSize:'12px'})}
`;

const SetProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin-top: 30px;
`;
const Container = styled.div``;

function ProductDSelection() {
  const [active, SetActive] = useState("ProductDetails");
  return (
    <ProductDSelectionCon>
      <ProductInfo_Wrapper>
        <Details
          className="Description"
          onClick={() => {
            SetActive("ProductDetails");
          }}
          style={
            active === "ProductDetails" ? { backgroundColor: "white" } : {}
          }
        >
          <Details_ImgCon>
            <DetailsImg src={tab1} alt="tab1" />
          </Details_ImgCon>
          <DetailsTxt>ProductDetails</DetailsTxt>
        </Details>
        <Details
          className="Delivery_Options"
          onClick={() => {
            SetActive("Delivery_Option");
          }}
          style={
            active === "Delivery_Option" ? { backgroundColor: "white" } : {}
          }
        >
          <Details_ImgCon>
            <DetailsImg src={tab2} alt="tab2" />
          </Details_ImgCon>
          <DetailsTxt>Delivery Options</DetailsTxt>
        </Details>
      </ProductInfo_Wrapper>
      <SetProductDetails>
        {active === "ProductDetails" && <ProductDescription />}
        {active === "Delivery_Option" && <ProductDeliveryOptions />}
      </SetProductDetails>
    </ProductDSelectionCon>
  );
}

export default ProductDSelection;
