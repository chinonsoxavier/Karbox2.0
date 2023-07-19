import { CloseOutlined } from "@mui/icons-material";
import {useState} from 'react'
import { TextField } from "@mui/material";
import styled from "styled-components";
import { mmobile } from "../../responsive";
const Container = styled.div`
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 27%);
    padding: 20px 30px;
  margin: 20px 0;
//   padding: 50px;
  width: 100%;
  ${mmobile({padding:'10px 13px',margin:'10px 0'})}
`;
const NegotiateCon = styled.div``;
const NegotiateText = styled.span`
  font-size: 28px;
  font-weight: 600;
  ${mmobile({fontSize:'20px'})}
`;
const NegotiateButton = styled.button`
  padding: 10px 40px;
  border: ${props=>props.type=='filled' ? 'none' : '1px solid orangered' };
  background: ${props=>props.type=='filled' ? 'orangered' : 'none' };
  color: ${props=>props.type=='filled' ? 'white' : 'orangered' };
  font-size: 14px;
  cursor: pointer;
  margin-top:10px;
  width:100%;
  ${mmobile({padding:'5px 20px'})}
`;

const CallBackCon = styled.div``
const CallBackHeader = styled.div`
   margin:15px 0;
`
const CallBackConHeaderText = styled.span`
  font-size: 12px;
`;

const CallBackInput = styled.div`
   margin:10px 0;
   width:100%;
`;

function Negotiate() {

    const [namevalue,setnamevalue]=useState()
    const [numbervalue,setnumbervalue]=useState()
    const [negotiate,setnegotiate]=useState(false)

  return (
    <Container className="bgw bsbb">
      <NegotiateCon className="flex aifs jcc fdc ">
        <NegotiateText>6,000,000, Negotiable</NegotiateText>
        {!negotiate && (
          <NegotiateButton onClick={() => setnegotiate(true)}>
            Request call back
          </NegotiateButton>
        )}
      </NegotiateCon>
      {negotiate && (
        <CallBackCon className="w100">
          <CallBackHeader className="flex aifs jcsb ">
            <CallBackConHeaderText>
              Your name & phone number
            </CallBackConHeaderText>
            <CloseOutlined
              onClick={() => setnegotiate(false)}
              sx={{ fontSize: "15px", cursor: "pointer" }}
            />
          </CallBackHeader>
          <CallBackInput>
            <TextField
              label="your name*"
              id="negotiate_messageInput1"
              fullWidth
              value={namevalue}
              defaultValue="chinonso"
              onChange={(e) => setnamevalue(e.target.value)}
            />
          </CallBackInput>
          <CallBackInput>
            <TextField
              label="your phone number*"
              id="negotiate_messageInput2"
              fullWidth
              value={numbervalue}
              defaultValue="08129785638"
              onChange={(e) => setnumbervalue(e.target.value)}
            />
          </CallBackInput>
          <NegotiateButton type='filled'>Request call back</NegotiateButton>
        </CallBackCon>
      )}
    </Container>
  );
}

export default Negotiate;
