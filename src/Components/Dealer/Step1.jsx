import { InfoOutlined } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: black;
  height: 100%;
  width: 100%;
  background: rgb(240, 235, 248);
  //  padding-bottom:60px;
  padding-top: 10px;
`;

const DoStepWrapper = styled.div`
  width: 50%;
`;
const DoStepCon = styled.div`
  background: white;
  width: 100%;
  padding: 20px 0;
  border-radius: 10px;
  border: 1px solid gray;
  flex-direction: column;
  display: flex;
  border-top: ${(props) => props.bt && "10px solid purple"};
  margin: 15px 0;
`;
const DoStepTextCon = styled.div`
  padding: 0 15px;
`;
const DoStepBgText = styled.span`
  font-weight: light;
  font-size: 26px;
  margin-bottom: 8px;
`;
const DoStepSmText = styled.span`
  font-size: 13px;
  font-weight: 400;
`;
const DoStepHr = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
  margin: 8px 0;
`;
const DoStepName = styled.span`
  font-weight: ${(props) => (props.important ? 600 : 400)};
  font-size: 15px;
`;
const DoSteps = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const DoStepInputCon = styled.div`
  width: 50%;
  height: 30px;
`;
const DoStepInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  transistion: 1.5s all ease-in-out;

  &::focus {
    border-bottom: 1px solid orangered;
  }
`;

const DoStepInputErr = styled.div`
   display:none;
`;

function Step1() {
  const shopNameRef = useRef();
  const [answers, setAnswers] = useState();
  const inputs = document.querySelectorAll("inputs");
  inputs.forEach(function (item) {
    alert(item);
  });
  const [BusinessEntity, setBusinessEntity] = useState();
  const handleInputFocus = (current) => {
    const getInputs = document.getElementById(current)
    getInputs.style.borderBottom = "1px solid blue";
  };
  const handleBEC = (e) => {
    setBusinessEntity(e.target.value);
  };
  const handleRemoveFocus = (current,currentCon,err) => {
     const getInputs = document.getElementById(current);
     const getInputsCon = document.getElementById(currentCon);
     const getInputsErr = document.getElementById(err);
     if(getInputs.value===''){
getInputs.style.borderBottom='1px solid red';
getInputsCon.style.border='1px solid red';
getInputsErr.style.display = "flex";
     }else{
getInputs.style.borderBottom='1px solid gray';
getInputsCon.style.border = "1px solid gray";
getInputsErr.style.display = "none";
     }

  };

  return (
    <Container className="flex aic jcc s">
      {/* <Wrapper>
        <Header>
          <HeaderText>Add Seller Account Information</HeaderText>
        </Header>
      </Wrapper> */}
      {/* <InputWrapper>
        <InputCon className="flex aifs jcfs fdc">
          <InputLabel>Dealer Name*</InputLabel>
          <Input />
          <InputLabelSml>
            Choose a unique name for your online shop this is the name that will
            appear on the Karbox marketplace! It is forbidden to use a
            registered trademark in your shop name without the brand
            authorization.
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabelText>
            Please select if you`re an individual or Business Entity/Company
          </InputLabelText>
          <Select>
            <Option>-Choose an option</Option>
            <Option>Individual</Option>
            <Option>Registered</Option>
            <Option>Company</Option>
          </Select>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Account Manager First and Last Name*</InputLabel>
          <Input />
          <InputLabelSml>
            Your name or the name of the person in your team who will manage
            your account.This is the contact we will primarly use to contact you
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel fw="light">Account Manager phone number*</InputLabel>
          <Input />
          <InputLabelSml>
            When we need to contact you urgently,this is the number we will
            call.
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel fw="light">Additional Phone number</InputLabel>
          <Input />
          <InputLabelSml>Another number we can reach you</InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Email Address*</InputLabel>
          <Input />
          <InputLabelSml>
            Your account will be linked to this email address and we will use it
            to send all our communications.
          </InputLabelSml>
          <InputLabelSml></InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Retype Email Adress*</InputLabel>
          <Input />
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Password*</InputLabel>
          <Input />
          <InputLabelSml>
            At least 8 characters containing a capital letter and a numeric
            character
          </InputLabelSml>
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>Retype Password*</InputLabel>
          <Input />
        </InputCon>
        <InputCon className="flex aifs jcc fdc">
          <InputLabel>E-Contract Karbox Nigeria*</InputLabel>
          <InputLabel fw="light">
            <Input type="checkbox" style={{margin:'0 5px',cursor:'pointer'}} />I have read and accepted the{" "}
            <InputLabel fw="light" style={{ color: "#4c6ebe" ,fontSize:'13px'}}>
              E-Contract Karbox Nigeria
            </InputLabel>
          </InputLabel>
        </InputCon>
      </InputWrapper> */}
      {/* <ButtonCon className='flex aic jcc' >
        <Link className="flex aic jcc link">
           <Button variant='contained' >Start Selling</Button>
        </Link>
      </ButtonCon> */}
      <DoStepWrapper>
        <DoStepCon bt>
          <DoStepTextCon className="flex aifs jcc fdc">
            <DoStepBgText>Seller Account Information</DoStepBgText>
            <DoStepSmText>Add Seller Account Information</DoStepSmText>
          </DoStepTextCon>
          <DoStepHr />
          <DoStepTextCon>
            <DoStepSmText>
              <DoStepSmText style={{ color: "blue", marginRight: "3px" }}>
                Sign in to Google
              </DoStepSmText>
              to save your progress.
              <DoStepSmText style={{ color: "blue", marginLeft: "3px" }}>
                Learn more
              </DoStepSmText>
            </DoStepSmText>
          </DoStepTextCon>
          <DoStepHr />
          <DoStepTextCon>
            <DoStepSmText style={{ color: "red" }}>
              * Indicates required selection
            </DoStepSmText>
          </DoStepTextCon>
        </DoStepCon>
        <DoStepCon id="nameCon">
          <DoSteps>
            <DoStepName important>Shop Name *</DoStepName>
            <DoStepInputCon>
              <DoStepInput
                id="name"
                ref={shopNameRef}
                onFocus={() => handleInputFocus("name")}
                onBlur={() => handleRemoveFocus("name", "nameCon", "nameErr")}
                placeholder="Your answer"
                name="name"
              />
            </DoStepInputCon>
            <DoStepInputErr
              className="flex aic jcc"
              style={{ marginTop: "16px" }}
              id="nameErr"
            >
              <InfoOutlined sx={{ color: "red", fontSize: 18 }} />
              <span
                style={{ color: "red", fontSize: "12px", marginLeft: "7px" }}
              >
                This is a required question
              </span>
            </DoStepInputErr>
          </DoSteps>
        </DoStepCon>
        <DoStepCon>
          <DoSteps>
            <DoStepName>
              Please select if you're an Individual or Business Entity/Company
            </DoStepName>
            <Box sx={{ maxWidth: "50%", width: "100%", marginTop: "12px" }}>
              <FormControl fullWidth>
                <InputLabel>Choose</InputLabel>
                <Select
                  label="choose"
                  onChange={handleBEC}
                  value={BusinessEntity}
                >
                  <MenuItem value="individual">Individual</MenuItem>
                  <MenuItem value="Registered Business Name">
                    Registered Business Name
                  </MenuItem>
                  <MenuItem value="Company">Company</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DoSteps>
        </DoStepCon>
        <DoStepCon id="AccManCon">
          <DoSteps>
            <DoStepName important>Account Manager Phone Number *</DoStepName>
            <DoStepInputCon>
              <DoStepInput
                id="AccMan"
                ref={shopNameRef}
                onFocus={() => handleInputFocus("AccMan")}
                onBlur={() =>
                  handleRemoveFocus("AccMan", "AccManCon", "AccManErr")
                }
                placeholder="Your answer"
                name="manager Number"
              />
            </DoStepInputCon>
            <DoStepInputErr
              className="flex aic jcc"
              style={{ marginTop: "16px" }}
              id="AccManErr"
            >
              <InfoOutlined sx={{ color: "red", fontSize: 18 }} />
              <span
                style={{ color: "red", fontSize: "12px", marginLeft: "7px" }}
              >
                This is a required question
              </span>
            </DoStepInputErr>
          </DoSteps>
        </DoStepCon>{" "}
        <DoStepCon >
          <DoSteps>
            <DoStepName>Additional phone number</DoStepName>
            <DoStepInputCon>
              <DoStepInput
                className="inputs"
                ref={shopNameRef}
                onFocus={handleInputFocus}
                placeholder="Your answer"
              />
            </DoStepInputCon>
          </DoSteps>
        </DoStepCon>{" "}
        <DoStepCon id="EmailCon">
          <DoSteps>
            <DoStepName important>Email Address *</DoStepName>
            <DoStepInputCon>
              <DoStepInput
                id="Email"
                className="inputs"
                ref={shopNameRef}
                onFocus={() => handleInputFocus("Email")}
                onBlur={() =>
                  handleRemoveFocus("Email", "EmailCon", "EmailErr")
                }
                placeholder="Your answer"
              />
            </DoStepInputCon>
            <DoStepInputErr
              className="flex aic jcc"
              style={{ marginTop: "16px" }}
              id="EmailErr"
            >
              <InfoOutlined sx={{ color: "red", fontSize: 18 }} />
              <span
                style={{ color: "red", fontSize: "12px", marginLeft: "7px" }}
              >
                This is a required question
              </span>
            </DoStepInputErr>
          </DoSteps>
        </DoStepCon>
        <DoStepCon id="EmailRetypeCon">
          <DoSteps>
            <DoStepName important>Retype Email Address *</DoStepName>
            <DoStepInputCon>
              <DoStepInput
                id="EmailRetype"
                className="inputs"
                ref={shopNameRef}
                onFocus={() => handleInputFocus("EmailRetype")}
                onBlur={() =>
                  handleRemoveFocus(
                    "EmailRetype",
                    "EmailRetypeCon",
                    "EmailRetypeErr"
                  )
                }
                placeholder="Your answer"
              />
            </DoStepInputCon>
            <DoStepInputErr
              id="EmailRetypeErr"
              className="flex aic jcc"
              style={{ marginTop: "16px" }}
            >
              <InfoOutlined sx={{ color: "red", fontSize: 18 }} />
              <span
                style={{ color: "red", fontSize: "12px", marginLeft: "7px" }}
              >
                This is a required question
              </span>
            </DoStepInputErr>
          </DoSteps>
        </DoStepCon>
      </DoStepWrapper>
    </Container>
  );
}

export default Step1;
