import {
  Close,
  CommentBankOutlined,
  FacebookRounded,
  InsertLink,
  Instagram,
  LinkedIn,
  SupportAgent,
  WhatsApp,
} from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Chatbox from "./Chatbox";
import MinChatbox from "./MinChatbox";
import Backup from "./backup";
import { CustomerBreakpoint, mmobile } from "../responsive";
const Container = styled.div`
  position: fixed;
  right: 40px;
  bottom: 50px;
  z-index: 100;
`;
const Wrapper = styled.div``;
const IconCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => (props.cl === "black" ? "black" : "white")};
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.bg};
  margin: 2px 0;
  ${CustomerBreakpoint({ height: "40px", width: "40px" })};
  ${mmobile({ width: "30px", height: "30px" })};
`;
const AlertCon = styled.div`
   position:fixed;
   top:0;
   width:100%;
`

function Livechat() {
  const [showIcon, setShowIcon] = useState();
  const [showChatbox, setShowChatbox] = useState(false);
const [msg, setmsg] = useState([
    {id:0,
    type:'send',
     value:''
  }
]);

  return (
    <Container>
      {/* {showChatbox && <Alert severity='info'>Live chat is Loading</Alert> } */}
      {!showChatbox ? (
        <Wrapper className="flex aic jcc fdc">
          {showIcon && (
            <IconCon bg="orangered">
              <CommentBankOutlined id="FooterIcons" />
            </IconCon>
          )}
          {showIcon && (
            <IconCon bg="orangered">
              <SupportAgent
                id="FooterIcons"
                onClick={() => setShowChatbox(true)}
              />
            </IconCon>
          )}
          <IconCon bg="orangered" className="fdc" wd="">
            {showIcon ? (
              <Close id="FooterIcons" onClick={() => setShowIcon(false)} />
            ) : (
              <SupportAgent
                id="FooterIcons"
                onClick={() => setShowIcon(true)}
              />
            )}
          </IconCon>
        </Wrapper>
      ) : (
        <>
          {showChatbox == "min" ? (
            <MinChatbox setShowChatbox={setShowChatbox} />
          ) : (
            <Chatbox
              msg={msg}
              setmsg={setmsg}
              showChatbox={showChatbox}
              setShowChatbox={setShowChatbox}
            />
          )}
        </>
      )}
    </Container>
  );
}

export default Livechat;
