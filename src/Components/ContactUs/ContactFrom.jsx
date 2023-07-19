import styled from "styled-components";
import { useState } from "react";
// import Button from "../Home/Button";
import {
  BackspaceTwoTone,
  DisabledByDefaultTwoTone,
  Search,
} from "@mui/icons-material";

const Container = styled.div`
  padding: 0 35px;
  padding-bottom: 15px;
  flex: 1;
  width: 480px;
  height: 440px;
  position: absolute;
  //   margin-left:10px;
`;

const Header = styled.div``;
const CloseButtonCon = styled.div`
  height: 100%;
`;
const CloseButton = styled.div`
  height: 100%;
  color: black;
  border: none;
  background-color: orangered;
  padding: 8px;
  width: 100%;
`;
const HeaderText = styled.p`
  color: black;
`;
const Form = styled.div`
  width: 100%;
`;
const InputCon = styled.div`
  width: 100%;
  flex: 1;
  margin: 15px 0;
`;
const Input = styled.input`
  border-bottom: 1px solid #eee;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding-bottom: 6px;
  &:focus {
    border-bottom: 1px solid grey;
  }
`;
const Textarea = styled.div`
  width: 100%;
  height: auto;
  outline: 1px solid #eee;
  border: none;
  resize: none;
  color: black;

  &:focus {
    border-bottom: 1px solid #eee;
  }
`;

const Label = styled.label`
  color: black;
  font-weight: 300;
  margin-bottom: 7px;
`;

const ButtonCon = styled.div``;
const Button = styled.button`
   color:orangered;
   font-weight:500;
   border:1px solid orangered;
   background-color:transparent;
   padding:8px;
   margin:10px 0;
   width:200px;
`;

// export const newFormState = false
function ContactFrom() {
  const [Form, setForm] = useState();

    const handleClick = () => {
    //   setForm(false);
    console.log(Form)
    };

  return (
    <Container
      className={`bgw flex aic jcc fdc`}
    //   style={Form ? { display: "flex" } : { display: "none" }}
    >
      <CloseButtonCon className="w100 flex aifs  jcfe">
           onClick={()=>setForm(false)}
        {/* <CloseButton> */}
        {/* close */}
        {/* <DisabledByDefaultTwoTone
          sx={{ color: "black", cursor: "pointer", fontSize: "30px" }}
        /> */}
        {/* </CloseButton> */}
      </CloseButtonCon>
      <Header>
        <HeaderText>Registration for a meeting </HeaderText>
      </Header>
      <Form className="flex aic jcc fdc bgw">
        <InputCon>
          <Input type="text" placeholder="Name" />
        </InputCon>
        <InputCon>
          <Input type="text" placeholder="Email" />
        </InputCon>
        <InputCon>
          <Input type="number" placeholder="Phone Number" />
        </InputCon>
        <InputCon>
          <Label for="textarea">Enter your message below</Label>
          <Textarea
            contentEditable
            // type="text"
            name="textarea"
            role="textbox"
            class="textarea"
            placeholder="Enter Your Message"
            // name="message"
            // rows="12"
          ></Textarea>
        </InputCon>
      </Form>
      <ButtonCon className="flex aic jcc w100">
        <Button
          color="orangered"
          fw={500}
          text="Submit"
          border="1px solid orangered"
          bg="transparent"
          padding="8px"
          margin="10px 0"
          wd="200px"
        >Send</Button>
      </ButtonCon>
    </Container>
  );
}

export default ContactFrom;
