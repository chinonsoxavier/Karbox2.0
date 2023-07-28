import styled from "styled-components";
import Header from "../Components/Home/Header";
import MobileBottom from "../Components/Home/MobileBottom";
import MobileHeader from "../Components/Home/MobileHeader";
import Products from "../Components/Inventory/Products";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowUp,
  PlaceOutlined,
  Search,
  Tune,
} from "@mui/icons-material";
import Footer from "../Components/Home/Footer";
import {
  CustomerBreakpoint,
  Laptop,
  lmobile,
  ltablet,
  metablet,
  mmobile,
  mobile,
  tablet,
} from "../responsive";
import { Checkbox, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  height: 100%;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  background: black;
  padding: 0 14vh;
  ${tablet({ padding: "0 4vh" })}
  ${Laptop({ padding: "0 4vh" })}
    ${mobile({ padding: "0 4vh" })}
    box-sizing:border-box;
`;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  // background:black;
  // padding: 0 14vh;
  box-sizing: border-box;
`;
const MobileHeaderCon = styled.div`
  // z-index: 200;
  position: sticky;
  top: 0;
`;

const BackgroundCon = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
`;

const SortsCon = styled.div`
  padding: 0 10px;
  padding-top: 15px;
  // margin: 10px 0;
  box-sizing: border-box;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  position: sticky;
  top: 0;
  width: 100%;
  ${metablet({ flexDirection: "column" })}
  ${mmobile({ padding: "10px 3px" })}
`;
const SortsLeft = styled.div`
  flex: 3;
  // min-width:200px;
  width: 100%;
`;
const SortsLeftIcon = styled.div`
  flex: 1;
`;

const SortsInputCon = styled.div`
  color: grey;
  padding: 0 8px;
  width: 100%;
  background: #eee;
`;
const SortsInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 11px 0;
  flex: 1;
  background: transparent;
  ${mmobile({ padding: "8px 0" })};

  &::placeholder {
    font-weight: 600;
    font-size: 18px;
    ${mmobile({ fontSize: "10px" })}
  }
`;
const SortsLeftButton = styled.button`
  background: orangered;
  color: white;
  border: none;
  box-sizing: border-box;
  padding: 11px;
  height: 100%;
  margin: 0 15px;
  ${mmobile({ fontSize: "12px", padding: "8px" })}
`;
const SortsRight = styled.div`
  flex: 2;
  width: 100%;
  margin-top: 2px;
  justify-content: space-around;
  ${CustomerBreakpoint({
    marginTop: "5px",
    overflowX: "scroll",
  })};
  ${metablet({
    justifyContent: "center",
    margin:'8px 0'
  })}
`;
const SortsRightSelect = styled.div`
  padding: 11px 10px;
  border-radius: 7px;
  border: 1px solid rgb(233, 231, 231);
  margin: 0 5px;
  max-height:10px;
  ${CustomerBreakpoint({ padding: "6px 9px", fontSize: "11px" })};
`;
const SortsRightSelectText = styled.span`
  white-space: nowrap;
`;
const SortsRightSelectIcon = styled.div`
  margin-left: 5px;
  ${CustomerBreakpoint({ marginLeft: 0 })};
`;

const Filter = styled.div`
  padding: 11px 10px;
  border-radius: 7px;
  max-height: 10px;
  border: 1px solid rgb(233, 231, 231);
  ${CustomerBreakpoint({ padding: "6px 9px", fontSize: "11px" })};
`;
const FilterText = styled.span``;

const FiltersWrapper = styled.div`
  position: relative;
  top: 0;
  z-index: 100;
  background: blue;
`;
const FiltersCon = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  // padding: 15px;
  z-index: 2;
  top: 0;
`;
const SortCon = styled.div`
  // height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  right: 0;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const SortWrapper = styled.div`
  background: white;
  width: 100%;
  box-sizing: border-box;
`;
const SortsTextCon = styled.div`
  padding: 6px 16px;

  &:hover {
    background: whitesmoke;
  }
`;
const SortsText = styled.span`
  ${CustomerBreakpoint({
    fontSize: "11px",
  })};
`;
const BrandsWrapper = styled.div`
  // position: relative;
  //  position:fixed;
  // top:0;
  width: 100%;
  height: ${(props) => props.MobileEnabled ? '100vh' : '80vh'};
`;
const BrandsCon = styled.div`
  background: white;
  height: 470px;
  height: 100vh;
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
const BrandsAlphText = styled.p`
  margin: 0;
  font-size: 10px;
  line-height: 15px;
`;
const BrandsHeader = styled.div``;
const BrandsHeaderTextCon = styled.div`
  padding: 10px 0;
`;
const BrandsHeaderText = styled.span`
  font-weight: 500;
  ${CustomerBreakpoint({
    fontSize: "14px",
  })};
`;
const BrandsHeaderIcon = styled.div``;
const BrandsTrendCon = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const BrandsTrendConsHeader = styled.div`
  padding: 10px 0;
  color: grey;
  font-weight: 600;
`;
const BrandsTrendConHeaderTextCon = styled.span`
  font-weight: 300;
  ${CustomerBreakpoint({
    fontSize: "15px",
  })};
`;
const BrandsTrend = styled.div`
  min-width: 50px;
  // width:80px;
  // margin: 5px 0;
  // flex:1;
`;
const BrandsTrendImg = styled.img`
  width: 100%;
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

const PriceCon = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background: blue;
  max-width: 430px;
`;
const PriceWrapper = styled.div`
  width: 100%;
  background: white;
  padding-bottom: 20px;
  box-sizing: border-box;
  ${lmobile({ padding: "12px 15px" })}
`;
const PricesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;
const Prices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  padding: 6px 9px;
  // width: 170px;
  // margin: 6px;
  border-radius: 6px;
`;
const PricesText = styled.span`
  font-size: 9px;
  white-space: nowrap;
  ${CustomerBreakpoint({
    fontSize: "10px",
  })};
`;
const PriceCustom = styled.div`
  padding: 20px;
  box-sizing: border-box;
  ${lmobile({ padding: "0" })}
`;
const PriceCustomHeader = styled.div`
  margin: 10px 0;
  ${lmobile({ marginBottom: "6px " })}
`;
const PriceCustomHeaderText = styled.span`
  font-size: 13px;
`;
const PriceCustomInputWrapper = styled.div`
  ${lmobile({ flexDirection: "row", alignItems: "flex-start" })}
`;
const PriceCustomInputCon = styled.div`
  flex: 1;
`;
const PriceCustomInput = styled.input`
  border: none;
  padding: 8px 4px;
  box-sizing: border-box;
  background: #eee;
  outline: none;
  width: 100%;

  &::placeholder {
    font-size: 12px;
    opacity: 0.4;
  }
`;
const PriceCustomText = styled.div`
  margin: 10px;
`;
const PriceCustomButtonCon = styled.div`
  // padding: 0 20px;
  ${lmobile({ marginTop: "10px" })}
`;
const PriceCustomButton = styled.button`
  border: none;
  background: orangered;
  color: white;
  padding: 8px;
  min-width: 100%;
  border-radius: 4px;
`;

const FilterCon = styled.div`
  // position:relative;
`;
const FilterWrapper = styled.div`
  max-width: 380px;
  min-width: 300px;
  position: absolute;
  top: 0;

  background: white;
  box-sizing: border-box;
  padding: 0 10px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const FilterHeader = styled.div``;
const FilterHeaderIcon = styled.div``;
const FilterHeaderTextCon = styled.div``;
const FilterHeaderText = styled.span`
  font-weight: 500;
`;
const FilterLocationCon = styled.div`
  border-bottom: 1px solid whitesmoke;
  margin: 10px 0;
`;
const FilterLocation = styled.div`
  padding: 10px 0;
`;
const FilterLocationText = styled.span`
  color: orangered;
  margin: 0 4px;
`;
const FilterLocationIcon = styled.div``;
const FilterConditionWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 15px;
`;
const FilterConditionCon = styled.div`
  background: whitesmoke;
  border-radius: 16px;
  padding: 6px;
`;
const FilterCondition = styled.div`
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2px 0;
`;
const FilterConditionText = styled.span``;
const FilterOptionsCon = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 5px 0;
`;
const FilterOptionsHeader = styled.div`
  padding: 6px 0;
`;
const FilterOptionsHeaderIcon = styled.div``;
const FilterOptionsHeaderText = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: grey;
`;
const FilterOptions = styled.div``;
const FilterOptionsLabel = styled.div`
  margin: 0;
`;
const FilterOptionsText = styled.div``;
const FilterOptionsTextCon = styled.div``;
const FilterOptionsTextSwitch = styled.div``;

const ProductsCon = styled.div``;
function Inventory({ route }) {
  const [filter, setFilter] = useState();
  const [transmission, setTransmission] = useState("any");
  const [features, setFeatures] = useState("any");
  const [sortOpen,setSortopen]=useState(false)
  const [PriceOpen,setPriceopen]=useState(false)
  console.log(transmission);

  // useEffect(() => {
  //   if (filter === !"") {
  //     setFilter({ show: false });
  //   }
  // }, [filter]);

const BrandsFilterCon = () => (
  <BrandsWrapper MobileEnabled={MobileEnabled} className="flex aife w100 jcfe">
    <BrandsCon className="">
      <BrandsAlphCon className="flex aic jcc fdc h100 ">
        {alpha.map((item, i) => (
          <BrandsAlph key={i}>
            <BrandsAlphText>{item.text}</BrandsAlphText>
          </BrandsAlph>
        ))}
      </BrandsAlphCon>
      <BrandsHeader className="flex aic jcsb">
        <BrandsHeaderIcon
          className="flex aifs jcfs flex1"
          onClick={() => (setRoute("home"), setFilter({ filter: "" }))}
        >
          <ChevronLeft />
        </BrandsHeaderIcon>
        <BrandsHeaderTextCon className="flex aifs jcfs flex2">
          <BrandsHeaderText>Car Brand</BrandsHeaderText>
        </BrandsHeaderTextCon>
      </BrandsHeader>
      <BrandsTrendConsHeader>
        <BrandsTrendConHeaderTextCon>Trend Brand</BrandsTrendConHeaderTextCon>
      </BrandsTrendConsHeader>
      {/* <BrandsTrendCon className="flex aic jcsb wrap"> */}
      <BrandsTrendCon>
        {trendBrand.map((item, i) => (
          <BrandsTrend className="flex aic jcc fdc flex1" key={i}>
            <BrandsTrendImg src={require("../images/Toyota.png")} />
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

const FilterComponent = () => (
  <FilterCon className="flex aife jcfe w100">
    <FilterWrapper>
      <FilterHeader className=" flex aic jcsb">
        <FilterHeaderIcon className="flex1 flex aifs jcfs ">
          <ChevronLeft />
        </FilterHeaderIcon>
        <FilterHeaderTextCon className="flex1 flex aifs jcfs">
          <FilterHeaderText>Filter</FilterHeaderText>
        </FilterHeaderTextCon>
      </FilterHeader>
      <FilterLocationCon className="flex aic jcsb w100">
        <FilterLocation className="flex aic jcc">
          <PlaceOutlined sx={{ color: "grayText", fontSize: "19px" }} />
          <FilterLocationText>Nigeria</FilterLocationText>
        </FilterLocation>
        <FilterLocationIcon>
          <ChevronRight sx={{ color: "GrayText" }} />
        </FilterLocationIcon>
      </FilterLocationCon>
      <FilterConditionWrapper className="flex bsbb aic jcc w100">
        <FilterConditionCon className="flex aic jcsb w100">
          <FilterCondition
            onClick={() => setCondition("New")}
            style={{
              background: condition === "New" && "black",
              color: condition === "New" && "white",
            }}
          >
            <FilterConditionText>New</FilterConditionText>
          </FilterCondition>
          <FilterCondition
            onClick={() => setCondition("Used")}
            style={{
              background: condition === "Used" && "black",
              color: condition === "Used" && "white",
            }}
          >
            <FilterConditionText>Used</FilterConditionText>
          </FilterCondition>
        </FilterConditionCon>
      </FilterConditionWrapper>
      <FormGroup>
        {filterOptions.map((item, i) => (
          <FilterOptionsCon>
            <FilterOptionsHeader
              onClick={() =>
                setShow(show === item.Headername ? "" : item.Headername)
              }
              className="flex aic jcsb"
            >
              <FilterOptionsHeaderText>
                {item.Headername}
              </FilterOptionsHeaderText>
              <FilterOptionsHeaderIcon className="flex aic jcc">
                {show === item.Headername ? (
                  <KeyboardArrowUp sx={{ fontSize: "17px" }} />
                ) : (
                  <KeyboardArrowDown sx={{ fontSize: "17px" }} />
                )}
              </FilterOptionsHeaderIcon>
            </FilterOptionsHeader>
            {show === item.Headername && (
              <FilterOptions>
                <FilterOptionsTextCon className="flex aic jcsb w100">
                  <FilterOptionsText>
                    {`All  ${item.Headername + "s"} `}
                  </FilterOptionsText>
                  <FilterOptionsTextSwitch>
                    <Switch />
                  </FilterOptionsTextSwitch>
                </FilterOptionsTextCon>
                <FilterOptionsLabel className="flex aifs jcc fdc">
                  {item.options.map((item, i) => (
                    <FormControlLabel
                      onClick={() => setTransmission(item)}
                      sx={{
                        height: "30px",
                        fontSize: "1px",
                      }}
                      control={<Checkbox />}
                      label={item}
                    />
                  ))}
                </FilterOptionsLabel>
              </FilterOptions>
            )}
          </FilterOptionsCon>
        ))}
      </FormGroup>
    </FilterWrapper>
  </FilterCon>
);

  const ShowFilter = (sort) => {
    setSort(sort);
    setTimeout(() => {
      setFilter("");
    }, 0);
  };

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

  const filterOptions = [
    {
      Headername: "Transmission",
      options: ["All", "Automatic", "Manual"],
    },
    {
      Headername: "Extra Features",
      options: [
        "Air Conditioning",
        "Airbags",
        "Station Wagon",
        "Alloy Wheel",
        "CD Player",
        "Anti-Lock Brakes",
        "Armrests",
        "Bullbar",
        "Cruise Control",
        "Electric Mirrors",
        "Electric Windows",
        "Leather Seats",
        "LED Headlights",
        "Parking Assist",
        "Parking Sensors",
        "Spotlight",
        "Sunroof",
        "Xenon Lights",
      ],
    },
    {
      Headername: "Body Option",
      options: [
        "Muscle",
        "SUV",
        "Station Wagon",
        "Sedan",
        "Roadster",
        "Luxurios",
        "Pickup",
        "Panel Van",
        "Mini Van",
        "Hatchback",
        "Cross Over",
        "Coupe",
        "Convertible Coupe",
        "Convertible",
      ],
    },
    {
      Headername: "Engine",
      options: ["4 Cylinder", "Hybrid", "Unkwown"],
    },
    {
      Headername: "Fuel Type",
      options: ["Gas", "Hybrid", "Diesel", "Electric"],
    },
  ];

  const [Route, setRoute] = useState("home");
  const [sort, setSort] = useState("Sort");
  const [showFilterSelect, setShowFilterSelect] = useState("");
  const [show, setShow] = useState("Transmision");
  const [brand, setBrand] = useState("Brand");
  const [price, setPrice] = useState("Price");
  const [condition, setCondition] = useState("New");

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
const [width,setWidth]=useState(window.innerWidth);
var MobileEnabled = false;
useEffect(() => {
    if(width<=350){
MobileEnabled= true;
    }else{
      MobileEnabled=false;
    }
}, [width])


  const handleClick = (prop) => {
    if(!MobileEnabled){
    if(prop==='Sort'){
      setFilter( sortOpen ? '' : prop ) ;
      setSortopen((current)=>!current)
    }else if(prop==='Price'){
            setFilter( sortOpen ? '' : prop ) ;
      setPriceopen((current)=>!current)
    }
    }else{
handleClick(prop)
    }
  }
  // const width = window.innerWidth;
  // alert(width)


  return (
    <Container className="">
      {Route === "Brands" && <BrandsFilterCon />}
      {Route === "Filters" && <FilterComponent />}
      {Route === "home" && (
        <>
          <MobileHeaderCon>
            <MobileHeader bgt="scrollTrasparent" onscroll="blue" />
          </MobileHeaderCon>
          <>
            <HeaderWrapper>
              <Header route={route} bg="black" header={true} />
            </HeaderWrapper>
            <>
              <HeaderCon className="flex aic jcc fdc w100">
                <SortsCon className="flex aic wrap jcsb w100 bgw">
                  <SortsLeft id="SortsLeft" className="flex aic jcc ">
                    <SortsLeftIcon className="flex aic jcc cp">
                      <KeyboardArrowLeft
                        id="InventoryIconCaret"
                        sx={{ fontSize: "35px", fontWeight: 600 }}
                      />
                    </SortsLeftIcon>
                    <SortsInputCon className="flex aic jcfe">
                      <Search
                        id="InventoryIcon"
                        className="flex aic jcc"
                        sx={{ fontSize: "29px", margin: "0 6px" }}
                      />
                      <SortsInput
                        className="flex aic jcc s"
                        placeholder="Search For Cars You Like...."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </SortsInputCon>
                    <SortsLeftButton className="flex aic jcc">
                      <Link
                        to={`/inventory/search=${searchQuery}`}
                        className="link flex aic jcc w100"
                      >
                        Search
                      </Link>
                      {/* <Search/> */}
                    </SortsLeftButton>
                  </SortsLeft>
                  <SortsRight id="inventoryFilters" className="flex aic w100">
                    <SortsRightSelect
                      onClick={() => handleClick("Sort")}
                      className="flex aic jcsb"
                    >
                      <SortsRightSelectText>{sort}</SortsRightSelectText>
                      <SortsRightSelectIcon className="flex aic jcc">
                        <ArrowDropDown />
                      </SortsRightSelectIcon>
                    </SortsRightSelect>
                    <SortsRightSelect
                      onClick={() => setRoute("Brands")}
                      className="flex aic jcc"
                    >
                      <SortsRightSelectText>{brand}</SortsRightSelectText>
                      <SortsRightSelectIcon className="flex aic jcc">
                        <ArrowDropDown />
                      </SortsRightSelectIcon>
                    </SortsRightSelect>
                    <SortsRightSelect
                      onClick={() => handleClick("Price")}
                      className="flex aic jcc"
                    >
                      <SortsRightSelectText>{price}</SortsRightSelectText>
                      <SortsRightSelectIcon className="flex aic jcc">
                        <ArrowDropDown />
                      </SortsRightSelectIcon>
                    </SortsRightSelect>
                    <Filter
                      className="flex aic jcc"
                      onClick={() => setRoute("Filters")}
                    >
                      <FilterText className="flex aic jcc">
                        <Tune sx={{ fontSize: "18px", marginRight: "7px" }} />
                        Filters
                      </FilterText>
                    </Filter>
                  </SortsRight>
                </SortsCon>
              </HeaderCon>
              <Wrapper className=" aifs jcfs fdc">
                <FiltersWrapper>
                  {/* {filter.show && ( */}
                  <FiltersCon className="flex aic jcfe w100 ">
                    {filter === "Sort" && (
                      <SortCon className="flex aife jcfe fdc v">
                        <SortWrapper>
                          {data[0].map((item) => (
                            <SortsTextCon onClick={() => ShowFilter(item.text)}>
                              <SortsText>{item.text}</SortsText>
                            </SortsTextCon>
                          ))}
                        </SortWrapper>
                      </SortCon>
                    )}

                    {filter === "Price" && (
                      <PriceCon className="flex aife jcfe">
                        <PriceWrapper>
                          <PricesWrapper className=" aic jcc wrap">
                            <Prices>
                              <PricesText>Less $ 1,000,000</PricesText>
                            </Prices>
                            <Prices>
                              <PricesText> $1,000,000 - $2,000,000</PricesText>
                            </Prices>
                            <Prices>
                              <PricesText> $2,000,000- $3,000,000</PricesText>
                            </Prices>
                            <Prices>
                              <PricesText> $3,000,000-$5,000,000</PricesText>
                            </Prices>
                            <Prices>
                              <PricesText> $5,000,000-$8,000,000</PricesText>
                            </Prices>
                            <Prices>
                              <PricesText>Above $8,000,000</PricesText>
                            </Prices>
                          </PricesWrapper>
                          <PriceCustom>
                            <PriceCustomHeader>
                              <PriceCustomHeaderText>
                                Custom Price($)
                              </PriceCustomHeaderText>
                            </PriceCustomHeader>
                            <PriceCustomInputWrapper className="flex aic jcsb ">
                              <PriceCustomInputCon>
                                <PriceCustomInput placeholder="Min" />
                              </PriceCustomInputCon>
                              <PriceCustomText>to</PriceCustomText>
                              <PriceCustomInputCon>
                                <PriceCustomInput placeholder="Max" />
                              </PriceCustomInputCon>
                            </PriceCustomInputWrapper>
                          </PriceCustom>
                          <PriceCustomButtonCon className="flex aic jcc bsbb w100">
                            <PriceCustomButton>Apply</PriceCustomButton>
                          </PriceCustomButtonCon>
                        </PriceWrapper>
                      </PriceCon>
                    )}
                    {filter === "Brands" && <BrandsFilterCon />}
                    {filter === "Filters" && (
                      <FilterComponent/>
                    )}
                  </FiltersCon>
                  {/* )} */}
                </FiltersWrapper>

                <ProductsCon>
                  <Products backdrop={filter} />
                </ProductsCon>
              </Wrapper>
            </>
          </>
          <Footer />
        </>
      )}
    </Container>
  );
}

export default Inventory;
