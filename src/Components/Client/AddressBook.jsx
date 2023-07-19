import { ArrowBack } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
const Container = styled.div`
  box-sizing: border-box;
  background:white;
  width:100%;
`;
const Wrapper = styled.div`
   box-sizing:border-box;
   padding:0 10px;
`;
const Header = styled.div`
  padding: 10px 5px;
  ${mobile({padding:'0'})}
`;
const Header_Text = styled.p`
  font-weight: 500;
  // margin-left: 10px;
  ${tablet({fontSize:'18'})}
`;

const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: whitesmoke;
  flex: 1;
  width: 100%;
  margin:${props=>props.mg};
  height: 1px;
`;

const Label = styled.label`
   font-size:14px;
`;
const Label_Prefix = styled.span`
  margin-right: 15px;
`;
const AddressInfo_Con = styled.div`height:100%;`;
const AddressInfoTop_Con = styled.div`
//   padding: 0 10px;
  box-sizing: border-box;
`;
const AddressInfoBottom_Con = styled.div`
  padding: 0 10px;
  box-sizing:border-box;
`;
const AddressRegionCon = styled.div``;
const ButtonCon = styled.div`
   padding-bottom:12px;
  //  padding:20px;
  // background:red;
`;
const Button = styled.button`
   border:none;
   padding:10px 15px;
   background:orangered;
   border-radius:5px;
   color:white;
   cursor:pointer;
  
`;

const AddressBook = ({ user }) => {
  console.log(user);
  const [userState, setuserState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [Region, setRegion] = useState();
  const [City, setCity] = useState();

  useEffect(() => {
    console.log(selectedCountry);
  }, [selectedCountry]);

  const handleChange = (event) => {
    setuserState(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/customer/account" className="link">
          <Header className="flex aic jcfs bsbb">
            <ArrowBack sx={{ fontSize: "18px" }} />
            <Header_Text>EDIT ADDRESS</Header_Text>
          </Header>
        </Link>
        <Hr mg="8px 0" />
        <AddressInfo_Con className="flex aic jcsb fdc">
          <AddressInfoTop_Con className="flex aic jcc bsbb wrap w100">
            <div className="flex aic jcc w100 wrap">
              <div className="flex aic jcsb   AddressBook_InputCon w100">
                <TextField
                  id="adressbookInput"
                  sx={{ margin: "8px 0", width: "100%" }}
                  type="text"
                  name="inputPhone_Number"
                  fullwidth
                  defaultValue={user.username}
                  label="First Name"
                />
              </div>
              <div className="flex aic jcsb w100  AddressBook_InputCon">
                <TextField
                  id="adressbookInput"
                  sx={{ margin: "8px 0", width: "100%" }}
                  type="text"
                  name="inputPhone_Number"
                  fullwidth
                  defaultValue={user.lastName}
                  label="Last Name"
                />
              </div>
            </div>
            <div className="flex aic jcc w100 wrap">
              <div className="flex aic jcsb w100  AddressBook_InputCon">
                <Label for="inputPhone_Number" className="flex aic jcc fdc">
                  Prefix
                  <Label_Prefix>+234</Label_Prefix>
                </Label>
                <TextField
                  id=""
                  sx={{ margin: "8px 0", width: "100%" }}
                  type="number"
                  name="inputPhone_Number"
                  fullwidth
                  defaultValue={user.phone_number}
                  label="Phone Number"
                />
              </div>
              <div className="flex aic jcsb w100 AddressBook_InputCon">
                <Label for="inputPhone_Number" className="flex aic jcc fdc">
                  Prefix
                  <Label_Prefix>+234</Label_Prefix>
                </Label>

                <TextField
                  id=""
                  sx={{ margin: "8px 0", width: "100%" }}
                  type="number"
                  name="inputPhone_Number"
                  placeholder="Enter your Additional Phone"
                  label="Additional Phone Number"
                />
              </div>
            </div>
          </AddressInfoTop_Con>
          <AddressInfoBottom_Con className="flex aic jcc wrap w100">
            <TextField
              id=""
              sx={{ margin: "8px 0", width: "100%" }}
              type="number"
              fullwidth
              defaultValue={user.address}
              label="Delivery Address"
            />{" "}
            <TextField
              id=""
              sx={{ margin: "8px 0", width: "100%" }}
              type="number"
              fullwidth
              label="Enter Additional information"
            />
            <AddressRegionCon className="addressBook_citySelect flex aic jcc wrap">
              <FormControl
                fullwidth
                className="citySelect w100 flex1"
                sx={{ marginRight: "5px" }}
              >
                <InputLabel>Region</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-label AddressBook_Textfield"
                  className="w100"
                  value={Region}
                  label="Age"
                  onChange={() => setRegion(Region)}
                >
                  <MenuItem value="Lagos">Lagos</MenuItem>
                  <MenuItem value="Imo">Imo</MenuItem>
                  <MenuItem value="Ogun">Ogun</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullwidth
                className="addressBook_citySelect flex1 w100 "
                sx={{ marginLeft: "5px" }}
              >
                <InputLabel>City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  className="w100"
                  id="demo-simple-select-label AddressBook_Textfield"
                  value={City}
                  label="Age"
                  onChange={() => setCity(City)}
                >
                  <MenuItem value="Apapa(Ajegunle)">Apapa(Ajegunle)</MenuItem>
                  <MenuItem value="Ikeja">Ikeja</MenuItem>
                  <MenuItem value="Badagry">Badagry</MenuItem>
                </Select>
              </FormControl>
            </AddressRegionCon>
          </AddressInfoBottom_Con>
        </AddressInfo_Con>
        <Hr mg="15px 0" />
        <ButtonCon className="flex aic jcfe w100">
          <Button>SAVE</Button>
        </ButtonCon>
      </Wrapper>
    </Container>
  );
};

export default AddressBook;
