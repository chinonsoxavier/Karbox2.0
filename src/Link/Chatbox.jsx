import {
  Close,
  Person,
  Send,
  SmartToyOutlined,
  RemoveOutlined
} from "@mui/icons-material";
import { Alert, Skeleton } from "@mui/material";
import { useRef } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  // position: absolute;
  //   left: 80px;
  //   bottom: 50px;
  z-index: 100;
  color: white;
  width: 300px;
  border-radius: 9px;
  border: 1px solid white;
  background: whitesmoke;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  max-height:45vh;
  overflow-y:scroll;
  `;
  const Wrapper = styled.div`
  // padding-bottom:20px;
  //   padding-bottom: 40px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  width: 100%;
`;
// const HeaderCon = styled.div``
const Header = styled.div`
  //   border-radius-top: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding: 4px 6px;
  background: orangered;
  width: 100%;
  position: sticky;
  top: 0;
`;
const HeaderLeft = styled.div`
  flex: 1;
`;
const HeaderRight = styled.div`
  flex: 1;
`;
const HeaderText = styled.span`
  font-size: 17px;
`;
const LiveChatwrapper = styled.div`
   overflow-y:auto;
   height:45vh;
`
const LiveChatCon = styled.div`
  margin: 5px 0;
  padding-left: 5px;
  padding-right: 8px;
  padding-top: 5px;
  width: 100%;
  //   background:red;
  box-sizing: border-box;
  flex-direction: ${(props) => (props.type === "send" ? "row" : "row-reverse")};
`;
const LiveBotCon = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: white;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a1a1a1;
`;

const LiveChatMessageCon = styled.div`
  background: white;
  border-radius: 13px;
  padding: 14px 10px;
  margin: 0 7px;
`;
const LiveChatMessage = styled.span`
  font-weight: 500;
  color: black;
  font-size: 13px;
`;

const ReplyWrapper = styled.div`
   width:100%;
   position:relative;
`
const ReplyCon = styled.div`
  position: sticky;
  bottom: 0;
  background: white;
  width: 100%;
  color: orangered;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 6px 0;
  margin-top:50px;
`;
const ReplyInputCon = styled.div`
  border-radius: 16px;
`;
const ReplyInput = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid orangered;
  border-radius: 16px;
  outline: none;
  padding: 3px 6px;
`;
const P = styled.div`
  color: black;
`;
const AlertCon = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: red;
`;

const GetTimeCon = styled.div`
   margin:15px 0;
`
const GetTime = styled.span`
   font-size:14px;
   color:black;
`

function Chatbox({ msg, setmsg, setShowChatbox }) {
  // const [showIcon, setShowIcon] = useState(false);
  const [loading, setLoading] = useState();
  const [loaded, setLoaded] = useState();
  const [inputvalue, setinputvalue] = useState();
  const [value, setvalue] = useState();
  const [inputValid,setInputValid] = useState(false)
  // const [newMessage,setnewMessage]=useState(()=>{{

  // })

  const [newMessage,setnewMessage]=useState([{
    message:''
  }])
  useEffect(() => {
    localStorage.setItem('newMessage',JSON.stringify(newMessage))
  }, [newMessage]);



const currentTime = new Date();
    const time = currentTime.toLocaleTimeString('en-US',{
        hour:'2-digit',
         minute:'2-digit',
    })

    const inputRef = useRef();
  function handleSend() {
    const inputVal = inputRef.current || document.getElementById("inputRef").value;
    setvalue(inputvalue)
    setInputValid(true)
    console.log('new'+ inputvalue)
    const data = inputvalue;
    inputVal.value=''

    setnewMessage((old)=>[...old,{message:data}])

  };

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);
    setInterval(() => {
      setLoaded(true);
    }, 8000);
  }, []);
 let offsetX, offsetY;
 const moveWindow = (event) => {
   const eventTarget = event.target;
   eventTarget.style.left = `${event.pageX - offsetX}px`;
   eventTarget.style.top = `${event.pageY - offsetY}px`;
 };
 const addWindow = (event) => {
   const eventTarget = event.target;
   offsetX = event.clientX - eventTarget.getBoundingClientRect().left;
   offsetY = event.clientY - eventTarget.getBoundingClientRect().top;
   eventTarget.addEventListener("mousemove", moveWindow);
 };
 const removeWindow = (event) => {
   const eventTarget = event.target;
   eventTarget.removeEventListener("mousemove", moveWindow);
 };

const handleClose = ()=>{
  setShowChatbox(false);
  localStorage.removeItem(newMessage)
}

  return (
    <Container onMouseDown={addWindow} onMouseUp={removeWindow}>
      {/* {}
      <> */}
      {loading && (
        <AlertCon>
          <Alert sx={{ width: "100vw" }} severity="info">
            Live chat is Loading
          </Alert>
        </AlertCon>
      )}
      <Header className="flex aic jcsb w100 bsbb">
        <HeaderLeft className="flex aic jcfs ">
          <HeaderText className="flex aic jcc">Robot</HeaderText>
        </HeaderLeft>
        <HeaderRight className="flex aic jcfe">
          <RemoveOutlined
            sx={{ margin: "0 5px", fontSize: "19px" }}
            onClick={() => setShowChatbox("min")}
          />
          <Close
            sx={{ margin: "0 5px", fontSize: "19px" }}
            // onClick={() => setShowChatbox(false),clearStogage}
            onClick={handleClose}
          />
        </HeaderRight>
      </Header>
      <Wrapper className="flex aifs jcfs fdc">
        <GetTimeCon className="flex aicc jcc w100">
          <GetTime>Chat started at {time} </GetTime>
        </GetTimeCon>
        {/* <LiveChatwrapper> */}
        <LiveChatCon type="send" className="flex aic jcc ">
          {!loading ? (
            <LiveBotCon>
              <SmartToyOutlined />
            </LiveBotCon>
          ) : (
            <Skeleton
              sx={{ borderradius: "50%" }}
              width={30}
              height={30}
              borderradius={50}
              variant="rounded"
            />
          )}
          {!loading ? (
            <LiveChatMessageCon>
              <LiveChatMessage>
                Hello <br /> I am Karbox ROBOT, Your Virtual assitant.I am here
                to help you.
              </LiveChatMessage>
            </LiveChatMessageCon>
          ) : (
            <Skeleton
              variant="rectanglar"
              sx={{ height: "40px", margin: "0 7px", width: "100%" }}
            />
          )}
        </LiveChatCon>
        <LiveChatCon type="send" className="flex aic jcfs w100 ">
          {!loading ? (
            <LiveBotCon>
              <SmartToyOutlined />
            </LiveBotCon>
          ) : (
            <Skeleton
              sx={{ borderradius: "50%" }}
              width={30}
              height={30}
              borderradius={50}
              variant="rounded"
            />
          )}
          {!loading ? (
            <LiveChatMessageCon>
              <LiveChatMessage>Please select by clicking:</LiveChatMessage>
            </LiveChatMessageCon>
          ) : (
            <Skeleton
              variant="rectanglar"
              sx={{ height: "40px", margin: "0 7px", width: "100%" }}
            />
          )}
        </LiveChatCon>
        {newMessage.map((item, i) => (
          <>
            {item.message && (
              <LiveChatCon
                key={i}
                type="recieve"
                className="flex fdrr aic jcfs w100 "
              >
                {!loading ? (
                  <LiveBotCon>
                    <Person />
                  </LiveBotCon>
                ) : (
                  <Skeleton
                    sx={{ borderradius: "50%" }}
                    width={30}
                    height={30}
                    borderradius={50}
                    variant="rounded"
                  />
                )}
                {!loading ? (
                  <LiveChatMessageCon>
                    <LiveChatMessage>{item.message}</LiveChatMessage>
                  </LiveChatMessageCon>
                ) : (
                  <Skeleton
                    variant="rectanglar"
                    sx={{ height: "40px", margin: "0 7px", width: "100%" }}
                  />
                )}
              </LiveChatCon>
            )}
          </>
        ))}
        {/* </LiveChatwrapper> */}
        {/* <ReplyWrapper> */}
        <hr id="hr" />
        <ReplyCon className="flex aic jcsa">
          <ReplyInputCon>
            <ReplyInput
              id="inputRef"
              ref={inputRef}
              placeholder="enquiry"
              onChange={(e) => {
                setinputvalue(e.target.value);
              }}
            />
          </ReplyInputCon>
          <Send onClick={handleSend} sx={{ cursor: "pointer" }} />
        </ReplyCon>
        {/* </ReplyWrapper> */}
      </Wrapper>
      {/* </> */}
    </Container>
  );
}

export default Chatbox;
