import styled from "styled-components";
import { CustomerBreakpoint } from "../../responsive";
import { ChevronLeft } from "@mui/icons-material";

const BrandsWrapper = styled.div`
  // position: relative;
  position: absolute;
  top: 0;
  width: 350px;
`;
const BrandsCon = styled.div`
  background: white;
  height: 470px;
  box-sizing: border-box;
  padding: 0 12px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  position: relative;
  overflow-x: scroll;
  width: 100%;
`;

const BrandsAlphCon = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  padding: 0 5px;
`;
const BrandsAlph = styled.div`
  margin: 0;
  cursor: pointer;
`;
const BrandsAlphText = styled.div`
  margin: 0;
  font-size: 12px;
`;
const BrandsHeader = styled.div``;
const BrandsHeaderTextCon = styled.div``;
const BrandsHeaderText = styled.span`
  font-weight: 500;
  ${CustomerBreakpoint({
    fontSize: "14px",
  })};
`;
const BrandsHeaderIcon = styled.div``;
const BrandsTrendCon = styled.div`
  margin-bottom: 10px;
`;
const BrandsTrendConsHeader = styled.div`
  padding: 10px 0;
  color: grey;
  font-weight: 600;
`;
const BrandsTrendConHeaderTextCon = styled.span`
  ${CustomerBreakpoint({
    fontSize: "17px",
  })};
`;
const BrandsTrend = styled.div`
  min-width: 80px;
  margin: 5px 0;
`;
const BrandsTrendImg = styled.img`
  max-width: 80%;
`;
const BrandsTrendText = styled.span`
  font-size: 13px;
  ${CustomerBreakpoint({
    fontSize: "11px",
  })};
`;
const BrandsNameCon = styled.div``;
const BrandsName = styled.div`
  // margin:6px 0;
`;
const BrandsNameHeading = styled.span`
  color: gray;
  font-size: 14px;
  margin: 6px 0;
  ${CustomerBreakpoint({
    fontSize: "10px",
  })};
`;
const BrandsNameText = styled.span`
  font-size: 14px;
  color: ${(props) => props.all && "orangered"};
  ${CustomerBreakpoint({
    fontSize: "10px",
  })};
`;

const Brand = () => {
     const data = [
       [
         {
           id: 0,
           text: "New listings",
         },
         {
           id: 0,
           text: "Lowest price",
         },
         {
           id: 0,
           text: "Highest price",
         },
         {
           id: 0,
           text: "Lowest mileage",
         },
         {
           id: 0,
           text: "Newest year",
         },
         {
           id: 0,
           text: "Oldest year",
         },
       ],
     ];
     const trendBrand = [
       {
         id: "",
       },
       {
         id: "",
       },
       {
         id: "",
       },
       {
         id: "",
       },
       {
         id: "",
       },
       {
         id: "",
       },
       {
         id: "",
       },
       {
         id: "",
       },
     ];
      const alpha = [
        {
          text: "#",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
        {
          text: "A",
        },
      ];
  return (
    <BrandsWrapper className="flex aife w100 jcfe">
      <BrandsCon className="">
        <BrandsAlphCon className="flex aic jcc fdc h100 ">
          {alpha.map((item, i) => (
            <BrandsAlph key={i}>
              <BrandsAlphText>{item.text}</BrandsAlphText>
            </BrandsAlph>
          ))}
        </BrandsAlphCon>
        <BrandsHeader className="flex aic jcsb">
          <BrandsHeaderIcon className="flex aifs jcfs flex1">
            <ChevronLeft />
          </BrandsHeaderIcon>
          <BrandsHeaderTextCon className="flex aifs jcfs flex2">
            <BrandsHeaderText>Car Brand</BrandsHeaderText>
          </BrandsHeaderTextCon>
        </BrandsHeader>
        <BrandsTrendConsHeader>
          <BrandsTrendConHeaderTextCon>Trend Brand</BrandsTrendConHeaderTextCon>
        </BrandsTrendConsHeader>
        <BrandsTrendCon className="flex aic jcsb wrap">
          {trendBrand.map((item, i) => (
            <BrandsTrend className="flex aic jcc fdc flex1" key={i}>
              <BrandsTrendImg src={require("../../images/Toyota.png")} />
              <BrandsTrendText>Toyota</BrandsTrendText>
            </BrandsTrend>
          ))}
        </BrandsTrendCon>
        <BrandsNameCon className="flex aifs jcc fdc w100">
          <BrandsName className="flex aifs jcc fdc w100">
            <BrandsNameHeading>All</BrandsNameHeading>
            <BrandsNameText all>Choose All</BrandsNameText>
          </BrandsName>
          {data[0].map((item, i) => (
            <BrandsName className="flex aifs jcc fdc w100" key={i}>
              <BrandsNameHeading>A</BrandsNameHeading>
              <BrandsNameText> Acura</BrandsNameText>
              <BrandsNameText> Acura</BrandsNameText>
              <BrandsNameText> Acura</BrandsNameText>
              <BrandsNameText> Acura</BrandsNameText>
              <BrandsNameText> Acura</BrandsNameText>
            </BrandsName>
          ))}
        </BrandsNameCon>
      </BrandsCon>
    </BrandsWrapper>
  );
};

export default Brand;
