import { ChevronLeft, ChevronRight, KeyboardArrowDown, KeyboardArrowUp, PlaceOutlined } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
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


const Filters = () => {
      const [transmission, setTransmission] = useState("any");
  const [condition, setCondition] = useState("New");
  const [show, setShow] = useState("Transmision");

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
  return (
    <FilterCon className="flex aife jcfe w100">
      <FilterWrapper>
        <FilterHeader className=" flex aic jcsb">
          <FilterHeaderIcon className="flex1 flex aifs jcfs">
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
                        sx={{ height: "30px", fontSize: "1px" }}
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
}

export default Filters