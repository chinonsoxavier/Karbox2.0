import styled from "styled-components";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import MultiRangeSlider from "multi-range-slider-react";
import { Search } from "@mui/icons-material";
import { Rating } from "@mui/material";

const Container = styled.div`
    padding:  15px 0;  
  width:100%;
`;
const Wrapper = styled.div`
  //    padding:0 15px;
`;
const Header = styled.div`
  box-sizing: border-box;
  //   padding:0 10px;

  &:hover {
    background-color: ${(props) => props.bgc};
  }
`;
const Header_Text = styled.p`
  white-space: nowrap;
  font-weight: 500;
  margin: 4px 15px;
  height: 100%;
  color: black;
  font-size: 15px;
  width: 100%;
`;
const Category_Options = styled.div`
  //    color:grey;
  // gap:10px;
  font-size: 19px;
`;
const Category_Option = styled.p`
   color:black
//    margin:15px 0;
   font-size:19px;
   font-weight:300;
`;

const Hr = styled.hr`
  height: 1px;
  background-color: #eee;
  width: 100%;
  border: none;
  margin: 10px 0;
`;

const SearchBrand_Con = styled.div``;
const SearchBrand_InputCon = styled.div`
  border-radius: 14px;
  border: 1px solid grey;
  border-right: 1px solid grey;
  height: 30px;
`;
const SearchBrand_Input = styled.input`
  outline: none;
  border: none;
  //    padding-left:20px;
  box-sizing: border-box;
  //    padding:8px 6px;
`;
const SearchBrand_TxtCon = styled.div``;
const SearchBrand_Txt = styled.p`
  font-weight: 500;
  margin: 10px 0;
`;
const SelectBrandCon = styled.div`
  width: 100%;
  margin: 8px 0;
  height: 100px;
  overflow-y: scroll;
  scroll-width: thin;
`;
const SelectBrand = styled.div`
  width: 100%;
  padding-left: 15px;
  color:black;
  // margin:5px 0;
`;
const SelectBrand_Check = styled.input`
  margin-right: 7px;
  outline: none;

  &::checked {
    background-color: orange;
    color: red;
  }
`;

const Category_Button = styled.button`
  color: orange;
  font-size: 20px;
  font-weight: 600;
  border: none;
  background: transparent;
  padding: 9px;
`;
const Category_HeaderCon = styled.div`
  width: 100%;
`;
const DiscountPercentage_Con = styled.div`
  width: 100%;
  padding: 0 15px;
`;
const DiscountPercentageHeader_Con = styled.div`
  width: 100%;
  margin: 10px 0;
`;
const DiscountPercentageInput_Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const DiscountPercentageHeader = styled.p`
  font-weight: 500;
  font-size: 21px;
`;
const DiscountPercentageInput_Con = styled.div``;
const DiscountPercentageInput = styled.input`
  margin-right: 8px;
`;
const DiscountPercentageLabel = styled.span`
   font:weight:200;
   font-size:15px;
`;
const P = styled.span``;

function SortCategories({ Category }) {
  // function MultiRnage() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const cat_Option = [
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
    {
      id: 1,
      cat: "category1",
    },
  ];

  return (
    <Container className="flex1 aic jcfs bgw">
      {/* <Wrapper className='flex aic jcc fdc bgw'> */}
      <Header className="flex aifs jcc fdc">
        <Header_Text>CATEGORY</Header_Text>
        <Link to={`${Category}`} className="link categoriesLink">
          <Header_Text bgc="whitesmoke">{Category}</Header_Text>
        </Link>
      </Header>
      <Wrapper className=" bgw">
        <Category_Options className="flex aifs jcc fdc">
          {cat_Option.map((item, i) => (
            <Link to={`${item.cat}`} className="SortCategory link">
              <Category_Option>{item.cat}</Category_Option>
            </Link>
          ))}
        </Category_Options>
        <Hr />
        <SearchBrand_Con className="flex aic jcc fdc">
          {/* <SearchBrand> */}
          <SearchBrand_TxtCon className="flex aifs jcc">
            <SearchBrand_Txt>BRAND</SearchBrand_Txt>
          </SearchBrand_TxtCon>
          <SearchBrand_InputCon className="flex aic jcc">
            <Search
              sx={{
                position: "",
                color: "grey",
                fontSize: "20px",
                margin: "0 5px",
              }}
            />
            <SearchBrand_Input placeholder="Search" type="text" />
          </SearchBrand_InputCon>
          <SelectBrandCon className="flex aic jcc fdc bsbb" id="SelectBrandCon">
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
            <SelectBrand className="flex aic jcfs bsbb">
              <SelectBrand_Check type="checkbox" name="SelectBrand_Check1" />
              <P for="SelectBrand_Check1">
                Aboniki
              </P>
            </SelectBrand>
          </SelectBrandCon>
          {/* </SearchBrand> */}
        </SearchBrand_Con>
        <Hr />
        <Category_HeaderCon className="flex aic jcsb">
          <Category_Option>Price($) </Category_Option>
          <Category_Button>Apply </Category_Button>
        </Category_HeaderCon>
        {/* <div className="range">
          <MultiRangeSlider
            min={0}
            max={1000000}
            label="false"
            ruler="false"
            // step={5}
            minValue={minValue}
            maxValue={maxValue}
            // barInnerColor="rgb(19, 209, 187)"
            onInput={(e) => {
              handleInput(e);
            }}
          />
          <PriceValue_Con className="flex aic jcsb">
            <Category_Option>min: {minValue}</Category_Option>-
            <Category_Option>max: {maxValue}</Category_Option>
          </PriceValue_Con>
        </div> */}
        <Hr />
        <DiscountPercentage_Con className="bsbb">
          <DiscountPercentageHeader_Con className="">
            <DiscountPercentageHeader>
              Discount Percentage
            </DiscountPercentageHeader>
          </DiscountPercentageHeader_Con>
          <DiscountPercentageInput_Con className="flex aifs jcc fdc">
            <DiscountPercentageInput_Wrapper>
              <DiscountPercentageInput
                type="radio"
                name="discount_percentage"
                id="discountPercentage"
              />
              <DiscountPercentageLabel for="discount_percentage">
                50% or more
              </DiscountPercentageLabel>
            </DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput_Wrapper>
              <DiscountPercentageInput
                type="radio"
                name="discount_percentage"
                id="discountPercentage"
              />
              <DiscountPercentageLabel for="discount_percentage">
                50% or more
              </DiscountPercentageLabel>
            </DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput_Wrapper>
              <DiscountPercentageInput
                type="radio"
                name="discount_percentage"
                id="discountPercentage"
              />
              <DiscountPercentageLabel for="discount_percentage">
                50% or more
              </DiscountPercentageLabel>
            </DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput_Wrapper>
              <DiscountPercentageInput
                type="radio"
                name="discount_percentage"
                id="discountPercentage"
              />
              <DiscountPercentageLabel for="discount_percentage">
                50% or more
              </DiscountPercentageLabel>
            </DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput_Wrapper>
              <DiscountPercentageInput
                type="radio"
                name="discount_percentage"
                id="discountPercentage"
              />
              <DiscountPercentageLabel for="discount_percentage">
                50% or more
              </DiscountPercentageLabel>
            </DiscountPercentageInput_Wrapper>
          </DiscountPercentageInput_Con>
        </DiscountPercentage_Con>
        <Hr />
        <DiscountPercentage_Con>
          <DiscountPercentageHeader_Con>
            <DiscountPercentageHeader>PRODUCT RATING</DiscountPercentageHeader>
          </DiscountPercentageHeader_Con>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <Rating name="read-only" defaultValue={4} readOnly size="small" />
            <DiscountPercentageLabel> & above</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <Rating name="read-only" defaultValue={3} readOnly size="small" />
            <DiscountPercentageLabel> & above</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <Rating name="read-only" defaultValue={2} readOnly size="small" />
            <DiscountPercentageLabel> & above</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <Rating name="read-only" defaultValue={1} readOnly size="small" />
            <DiscountPercentageLabel> & above</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
        </DiscountPercentage_Con>
        <Hr />
        <DiscountPercentage_Con>
          <DiscountPercentageHeader_Con>
            <DiscountPercentageHeader>SELLER SCORE</DiscountPercentageHeader>
          </DiscountPercentageHeader_Con>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <DiscountPercentageLabel>80% or more</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <DiscountPercentageLabel>60% or more</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <DiscountPercentageLabel>40% or more</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="radio" />
            <DiscountPercentageLabel>20% or more</DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
        </DiscountPercentage_Con>
        <Hr />
        <DiscountPercentage_Con>
          <DiscountPercentageHeader_Con>
            <DiscountPercentageHeader>SHIPPED FROM</DiscountPercentageHeader>
          </DiscountPercentageHeader_Con>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput
              type="checkbox"
              name="shipped_from_abroad"
            />
            <DiscountPercentageLabel
              id="shipped_from_abroad"
              for="shipped from abroad"
            >
              shipped from abroad
            </DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput
              type="checkbox"
              name="shipped_from_Nigeria"
            />
            <DiscountPercentageLabel
              id="shipped_from_Nigeria"
              for="shipped from Nigeria"
            >
              shipped from Nigeria
            </DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
        </DiscountPercentage_Con>
        <Hr />
        <DiscountPercentage_Con>
          <DiscountPercentageHeader_Con>
            <DiscountPercentageHeader>
              EXPRESS DELIVERY
            </DiscountPercentageHeader>
          </DiscountPercentageHeader_Con>
          <DiscountPercentageInput_Wrapper>
            <DiscountPercentageInput type="checkbox" name="jumia_express" />
            <DiscountPercentageLabel for="jumia_express">
              Jumia Express
            </DiscountPercentageLabel>
          </DiscountPercentageInput_Wrapper>
        </DiscountPercentage_Con>
      </Wrapper>
    </Container>
  );
}

export default SortCategories;
