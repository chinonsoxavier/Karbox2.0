import {
  CheckCircle,
  CloseOutlined,
  QuickreplyOutlined,
  SmsOutlined,
  TroubleshootRounded,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../../images/01 (3).png";
import MakeOffer from "./MakeOffer";
import { mmobile } from "../../responsive";
const Container = styled.div`
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 27%);
  padding: 20px 30px;
padding:30px;
    width:100%;
    position:relative;
  flex: 1;
  ${mmobile({padding:'15px'})}
`;
const Wrapper = styled.div``;
const VendorDetailsText = styled.span`
  font-size: 10px;
  font-weight: 400;
`;
const VendorDetailsBigText = styled.span`
  font-size: 19px;
  font-weight: 500;
`;
const VendorImageCon = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
const VendorImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
const VendorLeft = styled.div`
  margin-right: 7px;
`;
const VendorRight = styled.div``;
const VendorTextCon = styled.div`
  margin: 5px 0;
  background: #eee;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ButtonCon = styled.div``;
const Button = styled.button`
  padding: 10px 40px;
  border: ${(props) =>
    props.type === "filled" ? "1px solid orangered" : "1px solid orangered"};
  //   border: 1px solid orangered;
  background: none;
  background: ${(props) => (props.type === "filled" ? "orangered" : "none")};
  color: ${(props) => (props.type === "filled" ? "white" : "orangered")};
  font-size: 14px;
  cursor: pointer;
  //   margin-top: 20px;
  width: 100%;
  margin: 5px 0;

  ${mmobile({margin:'2px 0',padding:'3px 20px'})}
`;

const SendChatCon = styled.div``;
const SendChat = styled.div``;
const SendChatHeader = styled.div`
  margin: 10px 0;
`;
const SendChatText = styled.span`
  font-size: 12px;
`;
const SendDefaultMessageWrapper = styled.div`
  margin: 20px 0;
`;
const SendDefaultMessageCon = styled.div`
  padding: 1px 4px;
  border: 1px solid orangered;
  margin: 0 4px;
`;
const SendDefaultMessage = styled.span`
  color: orangered;
  font-size: 12px;
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
const Textarea = styled.textarea`
  width: 100%;
  height: auto;
//   max-width:500px;
  outline: 1px solid black;
  border: none;
  resize: none;
  color: black;
  margin-top:10px;

  &:focus {
    border: 1px solid orangered;
  }
`;

const Label = styled.label`
  color: black;
  font-weight: 300;
  margin-bottom: 25px;
`;

function VendorDetails() {
  const [value, setvalue] = useState();
  const [defaultvalue, setdefaultvalue] = useState("");
  const [startChart, setstartChart] = useState(false);
  const [makeoffer, setmakeoffer] = useState(false);
  const [valid, setvalid] = useState(false);
  const [Offer, setOffer] = useState(value );

  useEffect(() => {
    value === "" ? setvalid(false) : setvalid(true);
    setOffer(value)
    // alert(value)
    }, [value]);

  return (
    <Container className="bgw bsbb">
      <Wrapper className="flex aifs jcfs ">
        <VendorLeft>
          <VendorImageCon>
            <VendorImage src={Img} alt="" />
          </VendorImageCon>
        </VendorLeft>
        <VendorRight>
          {/* <VendorTextCon> */}
          <VendorDetailsBigText>Chinonso xavier</VendorDetailsBigText>
          {/* </VendorTextCon> */}
          <VendorTextCon>
            <VendorDetailsText className="flex aic jcc">
              <QuickreplyOutlined
                sx={{ fontSize: "12px", marginRight: "2px", color: "oangered" }}
              />
              Typically replies in a few hours
            </VendorDetailsText>
          </VendorTextCon>
          <VendorTextCon>
            <VendorDetailsText className="flex aic jcc">
              <CheckCircle sx={{ fontSize: "12px", marginRight: "2px" }} /> 7y
              3m on karbox
            </VendorDetailsText>
          </VendorTextCon>
        </VendorRight>
      </Wrapper>
      <ButtonCon className="flex aifs jcc fdc">
        <Button type="filled">08129785638</Button>
        {!startChart && (
          <Button className="flex aic jcc" onClick={() => setstartChart(true)}>
            {" "}
            <SmsOutlined sx={{ marginRight: "5px" }} /> Start Chat
          </Button>
        )}
      </ButtonCon>
      {startChart && (
        <SendChatCon>
          <SendChat>
            <SendChatHeader className="flex aifs jcsb w100">
              <SendChatText>Your message</SendChatText>
              <CloseOutlined
              className="vendorDetailsChatIcon"
                sx={{ fontSize: "15px", cursor: "pointer" }}
                onClick={() => setstartChart(false)}
              />
            </SendChatHeader>
            <SendDefaultMessageWrapper className="flex aic jcc w100">
              <SendDefaultMessageCon onClick={() => setmakeoffer(true)}>
                <SendDefaultMessage>Make an offer</SendDefaultMessage>
              </SendDefaultMessageCon>
              <SendDefaultMessageCon
                onClick={() => setvalue("Is this still available?")}
              >
                <SendDefaultMessage>
                  Is this still available?
                </SendDefaultMessage>
              </SendDefaultMessageCon>
              <SendDefaultMessageCon onClick={() => setvalue("Last Price?")}>
                <SendDefaultMessage>Last price?</SendDefaultMessage>
              </SendDefaultMessageCon>
            </SendDefaultMessageWrapper>
            {makeoffer && (
              <MakeOffer makeoffer={makeoffer} setmakeoffer={setmakeoffer} />
            )}
            {/* <TextField
              onChange={(event) => setvalue(event.target.value)}
              id="vendor_messageInput"
              label="Type a message"
              fullWidth
              value={value}
              //   defaultValue={defaultvalue}
            //   defaultValue={Offer}
            /> */}
            <InputCon>
              <Label for="textarea">Enter your message below</Label>
              <Textarea
                // contentEditable
                onChange={(event) => setvalue(event.target.value)}
                // type="text"
                name="textarea"
                role="textbox"
                class="textarea"
                placeholder="Enter Your Message"
                value={Offer}
                defaultValue={Offer}

                // name="message"
                // rows="12"
              ></Textarea>
            </InputCon>
          </SendChat>

          <Button
            type="filled"
            style={!valid ? { opacity: 0.5 } : { opacity: 1 }}
          >
            Start Chat
          </Button>
        </SendChatCon>
      )}
    </Container>
  );
}

export default VendorDetails;
