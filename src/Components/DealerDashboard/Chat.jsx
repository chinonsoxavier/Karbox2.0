import styled from "styled-components";
import Header from "./Header";
import img from "../../images/mail5.png";
import { IconButton, Tooltip } from "@mui/material";
import { MoreHoriz, Search } from "@mui/icons-material";
import img3 from "../../images/download (13).png";
import img4 from "../../images/download (15).png";
import { useState } from "react";

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
  padding: 10px 15px;
  cursor:pointer;
  margin: ${(props) => props.middle && "0 10px"};
`;
const ChatText = styled.div`
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
  margin-top:20px;
  z-index:100;
  max-height:40px;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 7px 0;
  box-sizing:border-box;
  flex: 1;
`;

const ViewChats = styled.div`
height:100%;
`;
const Chats = styled.div`
  height: 100%;
  flex: 2;
  position:relative;
`;
const ChatsCon = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
const SetChatsWrapper = styled.div`
  flex: 3;
  height: 100%;
`;
const SetChatsCon = styled.div`
  flex: 3;
  width:100%;
  height: 100%;
  overflow-y: scroll;
`;
const EmptyChat2Wrapper = styled.div`
width:100%;
`;
const EmptyChat2Con = styled.div`
 width:100%;
`;
const EmptyChat2 = styled.div`
  display: flex;
  align-items: Center;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.type === "send" ? "row-reverse" : "row")};
  width:100%;
`;
const EmptyChat2Text = styled.span`
  word-wrap: break-word;
  padding: 20px;
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
  margin: 5px 0;
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
  margin: 2px 0;
  font-weight: ${(props) => (props.name ? 500 : 300)};
  font-size: ${(props) => (props.name ? "18px" : "14px")};
  color: ${(props) => (props.name ? "black" : "grey")};
`;

const SendMessageCon = styled.div`
  height:10%;
  width:100%;
  padding:0 5px;
`;
const SendMessageLoadingCon = styled.div`
  flex: 1;
  height:17px;
  padding: 11px;
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
   padding-bottom:15px ;
`
const FooterLeft = styled.div``
const FooterRight = styled.div``
const FooterText = styled.span`
   color:${props=>props.cl};
   margin:  5px 10px;
`
const FooterTextCl = styled.span`
   color:${props=>props.cl};
   font-size:18px;
`

const CallsContactsCon = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
   width:100%;
`
const ImgCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
   width:40%;
`
const TextCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span`
   font-size:19px;
`

const Chat = ({route}) => {

  const Mails = ({item,i})=>{

    const last = [];
    msg.map((item) =>
      last.push(item.messages[item.messages.length - 1])
    );

    return (
      <>
        <MailCon
          style={{border : message===item.name && '1px solid orangered'}}
          className="flex aifs jcsb bgr w100"
          onClick={() => setmessage(item.name)}
        >
          <MailMiddle className="flex aic jcfs s    ">
            <MailLeftImgCon>
              <MailLeftImg src={item.img} alt="" />
            </MailLeftImgCon>
            <MailTextCon className="flex aifs jcc fdc">
              <MailText name>{item.name}</MailText>
              <MailText>{last[i].message}</MailText>
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
      </>
    );
  }

  const [message, setmessage] = useState(false);
  const [activeChatPage, setactiveChatPage] = useState('chats');



  const msg = [
    {
      id: 0,
     name:'chinonso xavier',
     img:img,
      messages:[
        {
        id:0,
        type:'send',
        message:'helefsddlo'
        },
        {
        id:0,
        type:'recieve',
        message:'hello'
        },
        {
        id:0,
        type:'send',
        message:'hello'
        },
        {
        id:0,
        type:'send',
        message:'hello'
        },
      ]
    },
    {
      id: 0,
     name:'chinonso xavier2',
     img:img,
      messages:[
        {
        id:0,
        type:'send',
        message:'helefsddlo222'
        },
        {
        id:0,
        type:'recieve',
        message:'hello2'
        },
        {
        id:0,
        type:'send',
        message:'hello2'
        },
        {
        id:0,
        type:'send',
        message:'hello2'
        },
      ]
    },
    {
      id: 0,
     name:'chinonso xavier',
     img:img,
      messages:[
        {
        id:0,
        type:'send',
        message:'helefsddlo'
        },
        {
        id:0,
        type:'recieve',
        message:'hello'
        },
        {
        id:0,
        type:'send',
        message:'hello'
        },
        {
        id:0,
        type:'send',
        message:'hello'
        },
      ]
    },
    {
      id: 0,
     name:'chinonso xavier2',
     img:img,
      messages:[
        {
        id:0,
        type:'send',
        message:'helefsddlo222'
        },
        {
        id:0,
        type:'recieve',
        message:'hello2'
        },
        {
        id:0,
        type:'send',
        message:'hello2'
        },
        {
        id:0,
        type:'send',
        message:'hello2'
        },
      ]
    },
    {
      id: 0,
     name:'chinonso xavier',
     img:img,
      messages:[
        {
        id:0,
        type:'send',
        message:'helefsddlo'
        },
        {
        id:0,
        type:'recieve',
        message:'hello'
        },
        {
        id:0,
        type:'send',
        message:'hello'
        },
        {
        id:0,
        type:'send',
        message:'hello'
        },
      ]
    },
    {
      id: 0,
     name:'chinonso xavier2',
     img:img,
      messages:[
        {
        id:0,
        type:'send',
        message:'helefsddlo222'
        },
        {
        id:0,
        type:'recieve',
        message:'hello2'
        },
        {
        id:0,
        type:'send',
        message:'hello2'
        },
        {
        id:0,
        type:'send',
        message:'hello2'
        },
      ]
    },
    ];
  return (
    <Container id="ChatDasboard">
      <HeaderCon>
        <Header route={route} />
      </HeaderCon>
      <Wrapper>
        <ChatHeader className="flex aic jcfs">
          <ChatTextCon
            className="flex aic jcc"
            onClick={() => setactiveChatPage("chats")}
            style={{ background: activeChatPage === "chats" && "#ffe8e4" }}
          >
            <ChatText
              style={{ color: activeChatPage === "chats" && "#ff9584" }}
            >
              All Chats
            </ChatText>
          </ChatTextCon>
          <ChatTextCon
            middle
            className="flex aic jcc"
            onClick={() => setactiveChatPage("calls")}
            style={{ background: activeChatPage === "calls" && "#ffe8e4" }}
          >
            <ChatText
              style={{ color: activeChatPage === "calls" && "#ff9584" }}
            >
              Calls
            </ChatText>
          </ChatTextCon>
          <ChatTextCon
            className="flex aic jcc"
            onClick={() => setactiveChatPage("contacts")}
            style={{ background: activeChatPage === "contacts" && "#ffe8e4" }}
          >
            <ChatText
              style={{ color: activeChatPage === "contacts" && "#ff9584" }}
            >
              Contacts
            </ChatText>
          </ChatTextCon>
        </ChatHeader>
        {activeChatPage === "chats" && (
          <>
            <ViewChats className="flex aifs jcc">
              <Chats>
                <ChatsCon className="flex aic jcfs fdc " id="ChatDasboard">
                  <InputCon className="flex aic jcc">
                    <Search />
                    <Input placeholder="search ...." />
                  </InputCon>
                 
                  {msg.map((item, i) => (
                    <Mails i={i} item={item} key={i} />
                  ))}
                </ChatsCon>
              </Chats>
              <SetChatsWrapper className="flex aic jcsb fdc w100 ">
                <SetChatsCon id="SetChatsCon">
                  {!message ? (
                    <EmptyChat>
                      <EmptyChatImgCon className="flex aic jcc w100">
                        <EmptyChatImg src={img} />
                      </EmptyChatImgCon>
                      <EmptyChatTextCon className="flex aic jcc w100 v">
                        <EmptyChatText>
                          Select chat to view messages
                        </EmptyChatText>
                      </EmptyChatTextCon>
                    </EmptyChat>
                  ) : (
                    <EmptyChat2Wrapper>
                      <EmptyChat2Con>
                        {msg
                          .filter((item) => item.name === message)
                          .map((item,i) =>
                            item.messages.map((item) => (
                              <EmptyChat2 key={i} type={item.type}>
                                <EmptyChat2Text type={item.type}>
                                  {item.message}
                                </EmptyChat2Text>
                                <EmptyChat2Time>2.00 PM</EmptyChat2Time>
                              </EmptyChat2>
                            ))
                          )}
                      </EmptyChat2Con>
                    </EmptyChat2Wrapper>
                  )}
                </SetChatsCon>
                <SendMessageCon className="flex aic jcsa bsbb">
                  <SendMessageLoadingCon className="flex aic jcsb">
                    <SendMessageLoader />
                    <SendMessageLoader />
                    <SendMessageLoader />
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
                  2023 Verta -
                  <FooterTextCl cl="orangered">Labarasyan</FooterTextCl>
                </FooterText>
              </FooterLeft>
              <FooterRight className="flex aic jcfe flex1">
                <FooterText>Licenses</FooterText>
                <FooterText>Change Log</FooterText>
                <FooterText>Get Help</FooterText>
              </FooterRight>
            </Footer>
          </>
        )}
        {activeChatPage === "calls" && (
          <CallsContactsCon>
            <ImgCon>
              <Img src={img3} alt="" />
            </ImgCon>
            <TextCon>
              <Text>Your calls will appear here</Text>
            </TextCon>
          </CallsContactsCon>
        )}
        {activeChatPage === "contacts" && (
          <CallsContactsCon>
            <ImgCon>
              <Img src={img4} alt="" />
            </ImgCon>
            <TextCon>
              <Text>Your Karbox contacts will appear here</Text>
            </TextCon>
          </CallsContactsCon>
        )}
      </Wrapper>
    </Container>
  );
};

export default Chat;
