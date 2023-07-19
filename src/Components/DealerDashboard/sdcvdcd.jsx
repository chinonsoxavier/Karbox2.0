import styled from "styled-components";
import Header from "./Header";
import img from "../../images/mail5.png";
import { IconButton, Tooltip } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import img2 from "../../images/team4.png";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  height: 80vh;
`;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
`;
const ChatHeader = styled.div``;
const ChatTextCon = styled.div`
  background: #ffe8e4;
  padding: 10px 15px;
  margin: ${(props) => props.middle && "0 10px"};
`;
const ChatText = styled.div`
  color: #ff9584;
`;

const InputConWrapper = styled.div`
  position: relative;
  top: 10px;
  width: 100%;
  background: white;
`;
const InputCon = styled.div`
  border: 1px solid grey;
  color: grey;
  padding: 0 8px;
  margin: 16px 0;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  background: white;
  position: sticky;
  top: 0;
  margin-top: 20px;
  z-index: 100;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 7px 0;
  box-sizing: border-box;
  flex: 1;
`;

const ViewChats = styled.div`
  height: 100%;
`;
const Chats = styled.div`
  height: 100%;
  flex: 2;
  // padding:0 50px;
  // box-sizing:border-box;
  position: relative;
`;
const ChatsCon = styled.div`
  height: 100%;
  overflow-y: scroll;
  //   overflow-y: scroll;
`;
const SetChatsWrapper = styled.div`
  flex: 3;
  height: 100%;
  // overflow: visible;
  // background: blue;
`;
const SetChatsCon = styled.div`
  flex: 3;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  // background: blue;
`;
const EmptyChat2Wrapper = styled.div`
  width: 100%;
  // background:green;
`;
const EmptyChat2Con = styled.div`
  width: 100%;
`;
const EmptyChat2 = styled.div`
  display: flex;
  align-items: Center;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.type === "send" ? "row-reverse" : "row")};
  width: 100%;
`;
const EmptyChat2Text = styled.span`
  word-wrap: break-word;
  padding: 20px;
  // max-width: 100%;
  max-width: 550px;
  background: ${(props) => (props.type === "send" ? "#ffe8e4" : "white")};
  padding: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  margin: 10px;
`;
const EmptyChat2Time = styled.span`
  font-size: 10px;
  color: grey;
`;
const EmptyChat = styled.div``;
const EmptyChatImgCon = styled.div``;
const EmptyChatImg = styled.img`
  width: 60%;
`;
const EmptyChatTextCon = styled.div``;
const EmptyChatText = styled.span`
  font-weight: 500;
  font-size: 17px;
`;
const MailCon = styled.div`
  background: white;
  padding: 15px 6px;
  box-sizing: border-box;
  margin: 10px 0;
  border-radius: 15px;
  cursor: pointer;
`;
const MailLeftImgCon = styled.div`
  margin: 0 5px;
`;
const MailLeftImg = styled.img`
  width: 100%;
  border-radius: 50%;
  height: 52px;
  width: 52px;
`;
const MailMiddle = styled.div`
  flex: 6;
`;
const MailRight = styled.div`
  flex: 1;
  padding: 0 10px;
  box-sizing: border-box;
`;
const MailTextCon = styled.div``;
const MailText = styled.span`
  //   font-size: 18px;
  margin: 2px 0;
  font-weight: ${(props) => (props.name ? 500 : 300)};
  font-size: ${(props) => (props.name ? "18px" : "14px")};
  color: ${(props) => (props.name ? "black" : "grey")};
`;

const OpenChatCon = styled.div`
  // background: red;
  width: 100%;
  height: 80px;
`;
const OpenChat = styled.div`
  margin: 10px 0;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.type === "send" ? "row-reverse" : "row")};
`;
const OpenChateTxt = styled.p`
  padding: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  background: ${(props) => (props.type === "send" ? "#ffe8e4" : "white")};
  word-wrap: break-word;
  max-width: 100%;
  margin: 10px;
  clear: both;
  //   width:50px;
  //   max-width: 50%;
  //   height:100%
  display: block;
  //   align-items:center;
  //   justify-content:center;
  //   flex-wrap:wrap;
`;
const OpenChatTime = styled.span`
  font-size: 10px;
  color: grey;
`;

const SendMessageCon = styled.div`
  //  position:fixed;
  //  bottom:0;
  height: 10%;
  width: 100%;
  padding: 0 5px;
`;
const SendMessageLoadingCon = styled.div`
  flex: 1;
  height: 17px;
  padding: 11px;
  border-radius: 7px;
  background: orangered;
  // height:100%;
`;
const SendMessageLoading = styled.div`
  padding: 7px;
  flex: 1;
  border-radius: 7px;
  background: orangered;
`;
const SendMessageLoader = styled.div`
  background: white;
  border-radius: 50%;
  height: 10px;
  width: 10px;
`;
const SendMessageInputCon = styled.div`
  border: 1px solid grey;
  color: grey;
  padding: 0 8px;
  margin: 16px 0;
  flex: 1;
  background: white;
  top: 10px;
  flex: 12;
  margin: 0 12px;
  border-radius: 7px;
`;
const SendMessageConInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 9px 0;
  // background:black;
  // color:white;
  flex: 1;
`;
const SendMessageButtonCon = styled.div`
  flex: 2;
  background: orangered;
  padding: 9px;
  color: white;
  border-radius: 7px;
`;

const Footer = styled.div`
  padding: 15px 0;
`;
const FooterLeft = styled.div``;
const FooterRight = styled.div``;
const FooterText = styled.span`
  color: ${(props) => props.cl};
  margin: 5px 10px;
`;
const FooterTextCl = styled.span`
  color: ${(props) => props.cl};
`;

const Chat = () => {
  const Mails = ({ chat }) => {
    const [activeChat, setactiveChat] = useState(true);

    console.log(MSG);

    return (
      <>
        {/* {inboxMsg.map((item) => ( */}
        <MailCon
          style={{ border: chat && "1px solid red" }}
          className="flex aifs jcsb bgr w100"
          onClick={() => setMSG(chat)}
        >
          <MailMiddle className="flex aic jcfs s    ">
            <MailLeftImgCon>
              <MailLeftImg src={chat.img} alt="" />
            </MailLeftImgCon>
            <MailTextCon className="flex aifs jcc fdc">
              <MailText name>
                {/* {chat.name} */}
                {msg.map((item) => item.messages[item.messages.length - 1])}
              </MailText>
              <MailText>
                {/* {chat.messages.map((item)=>item[item.length-1])} */}
                {msg.map((item) => item.messages[item.messages.length - 1])}
              </MailText>
            </MailTextCon>
          </MailMiddle>
          <MailRight className="flex aifs jcsa fdc">
            <Tooltip title="more actions">
              <IconButton>
                <MoreHoriz sx={{ color: "black" }} />
              </IconButton>
            </Tooltip>
            <MailText time>yesterday</MailText>
            {/* <MoreHoriz sx={{ cursor: "pointer" }} /> */}
          </MailRight>
        </MailCon>
        {/* ))} */}
      </>
    );
  };

  // useEffect(() => {
  //   // MSG = message;
  //   // console.log(MSG);
  //   // console.log(message);
  // }, [message]);
  // const [activeChat, setactiveChat] = useState(false);

  const inboxMsg = [
    { id: "msg1" },
    { id: "msg2" },
    { id: "msg3" },
    { id: "0444" },
    { id: "0444" },
    { id: "5550" },
    { id: "077" },
    { id: "0666" },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
  ];

  const msg = [
    {
      id: 0,
      name: "chinonso xavier",
      img: img,
      messages: [
        { type: "send", message: "khbchdsvchjd gcbd" },
        "hello how are you gfbzjkdsbvfbu sdjujeigfbvuhejf ulicvgfuevgfbyjvbhjbesufidsvugladsvuidvsyiflhsvduilfsdvyufvsfugbvflsfvuidsf;vefgvbiudsyfilvehfilsdfviyesalfvesayilfcayilaWEdvyiwldvesytoday?",
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "recieve", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "recieve", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
      ],
    },
    {
      id: 0,
      name: "chinonso xavier",
      img: img,
      messages: [
        { type: "send", message: "khbchdsvchjd gcbd" },
        "hello how are you gfbzjkdsbvfbu sdjujeigfbvuhejf ulicvgfuevgfbyjvbhjbesufidsvugladsvuidvsyiflhsvduilfsdvyufvsfugbvflsfvuidsf;vefgvbiudsyfilvehfilsdfviyesalfvesayilfcayilaWEdvyiwldvesytoday?",
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "recieve", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "recieve", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
      ],
    },
    {
      id: 0,
      name: "chinonso xavier",
      img: img,
      messages: [
        { type: "send", message: "khbchdsvchjd gcbd" },
        "hello how are you gfbzjkdsbvfbu sdjujeigfbvuhejf ulicvgfuevgfbyjvbhjbesufidsvugladsvuidvsyiflhsvduilfsdvyufvsfugbvflsfvuidsf;vefgvbiudsyfilvehfilsdfviyesalfvesayilfcayilaWEdvyiwldvesytoday?",
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "recieve", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "recieve", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
        { type: "send", message: "khbchdsvchjd gcbd" },
      ],
    },
  ];

  const [message, setmessage] = useState(false);
  const last = [];
  const newMsg = msg.map((item) =>
    last.push(item.messages[item.messages.length - 1])
  );

  // const newmsg = msg.map((item)=>item.map((item)=>item))
  console.log(last);
  console.log(last.map((item) => item.message));
  // console.log(msg[msg.length - 1]);
  //  var lastmsg = msg.map((item)=>(
  //   item
  //  ))
  //  console.log(lastmsg)
  // const last = msg[msg.messages.length - 1];
  // console.log(last);
  // const Messages = message.map((item)=>(
  //   return item
  // ))
  // for (let i=0;i<msg.length;i++)
  // console.log(msg.map((item)=>item.messages.map((Item)=>Item[Item.length-1])))
  // console.log(msg.map((item) => item.messages[messages-length]));
  // console.log(msg.messages[msg.messages-1])
  // const amsg = msg.map((item)=>item.messages[0])
  // const try = [msg[]
  const [MSG, setMSG] = useState(msg);
  return (
    <Container id="ChatDasboard">
      <HeaderCon>
        <Header />
      </HeaderCon>
      <Wrapper>
        <ChatHeader className="flex aic jcfs">
          <ChatTextCon className="flex aic jcc">
            <ChatText>All Chats</ChatText>
          </ChatTextCon>
          <ChatTextCon middle className="flex aic jcc">
            <ChatText>Calls</ChatText>
          </ChatTextCon>
          <ChatTextCon className="flex aic jcc">
            <ChatText>Contacts</ChatText>
          </ChatTextCon>
        </ChatHeader>

        <ViewChats className="flex aifs jcc">
          <Chats>
            {/* <InputConWrapper> */}
            {/* </InputConWrapper> */}
            <ChatsCon className="flex aic jcsb fdc " id="ChatDasboard">
              {/* <InputCon className="flex aic jcc">
          <Search />
          <Input placeholder="search ...." />
        </InputCon> */}
              {/* {inboxMsg.map((item) => (
                <MailCon
                  className="flex aifs jcsb bgr w100"
                  onClick={() => setmessage("msg1")}
                >
                  <MailMiddle className="flex aic jcfs s    ">
                    <MailLeftImgCon>
                      <MailLeftImg src={img2} alt="" />
                    </MailLeftImgCon>
                    <MailTextCon className="flex aifs jcc fdc">
                      <MailText name>Chinonso xavier</MailText>
                      <MailText>Lorem ipsum dolor sit csacd</MailText>
                    </MailTextCon>
                  </MailMiddle>
                  <MailRight className="flex aifs jcsa fdc">
                    <Tooltip title="more actions">
                      <IconButton>
                        <MoreHoriz sx={{ color: "black" }} />
                      </IconButton>
                    </Tooltip>
                    <MailText time>yesterday</MailText>
                  </MailRight>
                </MailCon>
              ))} */}
              {msg.map((item) => (
                <MailCon
                  style={{ border: item && "1px solid red" }}
                  className="flex aifs jcsb bgr w100"
                  onClick={() => setMSG(item)}
                >
                  <MailMiddle className="flex aic jcfs s    ">
                    <MailLeftImgCon>
                      <MailLeftImg src={item.img} alt="" />
                    </MailLeftImgCon>
                    <MailTextCon className="flex aifs jcc fdc">
                      <MailText name>{item.name}</MailText>
                      <MailText>
                        {/* {item.messages[item.messages.length-1]} */}
                      </MailText>
                    </MailTextCon>
                  </MailMiddle>
                  <MailRight className="flex aifs jcsa fdc">
                    <Tooltip title="more actions">
                      <IconButton>
                        <MoreHoriz sx={{ color: "black" }} />
                      </IconButton>
                    </Tooltip>
                    <MailText time>yesterday</MailText>
                    {/* <MoreHoriz sx={{ cursor: "pointer" }} /> */}
                  </MailRight>
                </MailCon>
              ))}
            </ChatsCon>
          </Chats>
          <SetChatsWrapper className="flex aic jcsb fdc w100 ">
            <SetChatsCon id="SetChatsCon">
              {/* {!message ? ( */}
              {/* <EmptyChat>
                  <EmptyChatImgCon className="flex aic jcc w100">
                    <EmptyChatImg src={img} />
                  </EmptyChatImgCon>
                  <EmptyChatTextCon className="flex aic jcc w100 v">
                    <EmptyChatText>Select chat to view messages</EmptyChatText>
                  </EmptyChatTextCon>
                </EmptyChat> */}
              {/* // ) : ( */}
              <EmptyChat2Wrapper>
                <EmptyChat2Con>
                  {/* {Array.isArray(message) && */}
                  {msg.map((item) => (
                    <EmptyChat2 type={item.messages.message.type}>
                      <EmptyChat2Text type={item.name}>
                        {item.messages}
                      </EmptyChat2Text>
                      <EmptyChat2Time>2.00 PM</EmptyChat2Time>
                    </EmptyChat2>
                  ))}
                </EmptyChat2Con>
              </EmptyChat2Wrapper>
            </SetChatsCon>
            <SendMessageCon className="flex aic jcsa bsbb">
              <SendMessageLoadingCon className="flex aic jcsb">
                {/* <SendMessageLoading className="flex aic jcc "> */}
                <SendMessageLoader />
                <SendMessageLoader />
                <SendMessageLoader />
                {/* </SendMessageLoading> */}
              </SendMessageLoadingCon>
              <SendMessageInputCon>
                <SendMessageConInput placeholder="write your message" />
              </SendMessageInputCon>
              <SendMessageButtonCon className="flex aic jcc cp v">
                Send
              </SendMessageButtonCon>
            </SendMessageCon>
          </SetChatsWrapper>
        </ViewChats>
        <Footer className="flex aic  w100">
          <FooterLeft className="flex aifs jcsb flex1">
            <FooterText className="flex aic jcc ">
              2023 Verta -<FooterTextCl cl="orangered">Labarasyan</FooterTextCl>
            </FooterText>
          </FooterLeft>
          <FooterRight className="flex aic jcfe flex1">
            <FooterText>Licenses</FooterText>
            <FooterText>Change Log</FooterText>
            <FooterText>Get Help</FooterText>
          </FooterRight>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Chat;
