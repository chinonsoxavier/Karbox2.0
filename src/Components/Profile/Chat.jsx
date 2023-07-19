import styled from "styled-components";
import img from "../../images/mail5.png";
import { ArrowBack, AttachmentOutlined, Call, CameraAlt, Mic, MoodOutlined, MoreVert, Search, Videocam } from "@mui/icons-material";
import img3 from "../../images/download (13).png";
import img4 from "../../images/download (15).png";
import { useRef, useState } from "react";
import { CustomerBreakpoint, lmobile, tablet } from "../../responsive";
import { useEffect } from "react";

const Container = styled.div`
  padding: 0 10vh;
  ${tablet({ padding: "0 4vh" })};
  ${CustomerBreakpoint({ padding: "0 " })};
`;
const Wrapper = styled.div`
  height: 80vh;
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
  position:relative;
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
  ${CustomerBreakpoint({fontSize:'.7rem'})}
`;
const EmptyChat2Time = styled.span`
  font-size: 10px;
  color: grey;
`;
const EmptyChat = styled.div``;
const EmptyChatImgCon = styled.div``;
const EmptyChatImg = styled.img`
  width: 100%;
  width:300px;
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
    ${CustomerBreakpoint({height:'30px',width:'30px'})};

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
    ${CustomerBreakpoint({fontSize:'12px'})};
    white-space:nowrap;

`;

const MobileHeaderCon = styled.div`
  height: 50px;
  display:none;
  // margin-top:10px;
  ${CustomerBreakpoint({display:'flex'})}
  position: sticky;
  top: 0;
  background: #ffe8e4;
`;
const MobileHeaderIcon = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 color:grey;
 font-size:10px;
 margin:${props=>props.mg ? '0 6px' : '0'}
//  margin:0 6px;
`
const MobileHeaderImg = styled.img`
width:13%;
object=fitr:contain;
margin:0 3px;
`
const MobileHeaderText = styled.div``
const MobileHeaderLeft = styled.div``
const MobileHeaderRight = styled.div``

const SendMessageCon = styled.div`
  height:10%;
  width:100%;
  position:sticky;
  bottom:0;
  // padding:0 5px;
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
  // margin: 0 12px;
  margin-right:10px;
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
  font-size:.9rem;
  ${tablet({fontSize:'.7rem'})}
`;

const SendMessageVoiceCon = styled.div``
const SendMessageVoice = styled.div`
 background:orangered;
 color:white;
 padding:5px;
 border-radius:50%;
height:30px;
width:30px;
`

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
   display:none;
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
  const [tabletMode,setTabletMode]=useState(false)

  const Mails = ({item,i})=>{

    const last = [];
    msg.map((item) =>
      last.push(item.messages[item.messages.length - 1])
    );

    return (
      <>
        <MailCon
          style={{
            border: message.messages === item.name && "1px solid orangered",
          }}
          className="flex aifs jcsb bgr w100"
          id="MailCon"
          onClick={() => setmessage({ isActive:true,messages: item.name })}
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
            <MailText time>yesterday</MailText>
          </MailRight>
        </MailCon>
      </>
    );
  }

  const [message, setmessage] = useState({
    isOpen: false,
    isActive:false,
    messages: "",
  });
  const [activeChatPage, setactiveChatPage] = useState('chats');
  const openChatRef = useRef()
  const selectChatRef = useRef()


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
const handleResize = () =>{
    var width = window.innerWidth;
    const OpenChat = openChatRef.current ||
      document.getElementById("SetChatsWrapper") 
      const SelectChat = selectChatRef.current ||
        document.getElementById("selectChatRef") 
    // c openChatRef.current;
    // const mailCon = document.getElementById("MailCon") || selectChatRef.current ;
    if (width <= 650) {
      if (message.isActive) {
       SelectChat.style.display = "none";
       OpenChat.style.display = "block";
        console.log(openChatRef.current, "openChatRef");
        console.log("less than");
      } else {
        console.log(selectChatRef.current, "selectChatRef");
       OpenChat.style.display = "none";
       SelectChat.style.display = "block";
      }
    } else {
     SelectChat.style.display = "block";
     OpenChat.style.display = "block";
    }
    console.log(width);
    console.log(message);

}
    useEffect(() => {
      handleResize();
      window.addEventListener("resize", () => {
        handleResize();
        console.log(tabletMode);
      });
    }, );

  return (
    <Container id="ChatDasboard">
      <Wrapper>
        <ChatHeader className="none aic jcfs">
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
              <Chats ref={selectChatRef} id="selectChatRef">
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
              <SetChatsWrapper
                className="flex aic jcsb fdc w100 "
                id="SetChatsWrapper"
                ref={openChatRef}
              >
                <SetChatsCon id="SetChatsCon">
                  {!message.isActive && (
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
                  )}
                  <EmptyChat2Wrapper>
                    {message.isActive && (
                      <>
                        <MobileHeaderCon className="flex aic jcsb w100">
                          <MobileHeaderLeft className="flex aic jcfs">
                            <MobileHeaderIcon>
                              <ArrowBack />
                            </MobileHeaderIcon>
                            <MobileHeaderImg
                              src={require("../../images/01 (3).png")}
                            />
                            <MobileHeaderText>Chinonso Xavier</MobileHeaderText>
                          </MobileHeaderLeft>
                          <MobileHeaderRight className="flex aic jcfe">
                            <MobileHeaderIcon mg>
                              <Videocam/>
                            </MobileHeaderIcon>
                            <MobileHeaderIcon mg>
                            <Call/>
                            </MobileHeaderIcon>
                            <MobileHeaderIcon mg>
                              <MoreVert/>
                            </MobileHeaderIcon>
                          </MobileHeaderRight>
                        </MobileHeaderCon>
                        <EmptyChat2Con>
                          {msg
                            .filter((item) => item.name === message.messages)
                            .map((item, i) =>
                              item.messages.map((item, i) => (
                                <EmptyChat2 key={i} type={item.type}>
                                  <EmptyChat2Text type={item.type}>
                                    {item.message}
                                  </EmptyChat2Text>
                                  <EmptyChat2Time>2.00 PM</EmptyChat2Time>
                                </EmptyChat2>
                              ))
                            )}
                        </EmptyChat2Con>
                      </>
                    )}
                  </EmptyChat2Wrapper>
                </SetChatsCon>
                <SendMessageCon className="flex aic jcsb bsbb">
                  {/* <SendMessageLoadingCon className="flex aic jcsb">
                    <SendMessageLoader />
                    <SendMessageLoader />
                    <SendMessageLoader />
                  </SendMessageLoadingCon> */}
                  <SendMessageInputCon className="flex aic jcsb">
                    <MoodOutlined sx={{ margin: "0 7px" }} />
                    <SendMessageConInput placeholder="write your message" />
                    <AttachmentOutlined sx={{ margin: "0 4px" }} />
                    <CameraAlt sx={{ margin: "0 4px" }} />
                  </SendMessageInputCon>
                  {/* <SendMessageButtonCon className="flex aic jcc cp v">
                    Send
                  </SendMessageButtonCon> */}
                  <SendMessageVoiceCon>
                    <SendMessageVoice className="flex aic jcc">
                      <Mic />
                    </SendMessageVoice>
                  </SendMessageVoiceCon>
                </SendMessageCon>
              </SetChatsWrapper>
            </ViewChats>
            <Footer className="none aic  w100">
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
