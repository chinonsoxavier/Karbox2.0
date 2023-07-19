import {
    Close,
    FacebookRounded,
    InsertLink,
    Instagram,
    LinkedIn,
    Message,
    Person,
    Send,
    SmartToyOutlined,
    WhatsApp,
  } from "@mui/icons-material";
  import { Alert, Skeleton } from "@mui/material";
  import { useState, useEffect } from "react";
  import styled from "styled-components";
  import { ManageMent_Team } from "../data";
  const Container = styled.div`
    position: relative;
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
    height:40vh;
    // overflow-y:scroll;
    `;
    const Wrapper = styled.div`
    height:40vh;

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
  
  const SkeletonCon = styled.div``;
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
  
  const ReplyCon = styled.div`
    // position: sticky;
    bottom: 0;
    background: white;
    width: 100%;
    color: orangered;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 6px 0;
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
  `
  
  function Backup({ msg, setmsg, setShowChatbox }) {
    // const [showIcon, setShowIcon] = useState(false);
    const [loading, setLoading] = useState();
    const [loaded, setLoaded] = useState();
    const [inputvalue, setinputvalue] = useState();
    const [value, setvalue] = useState();
    const [inputValid,setInputValid] = useState(false)
    const [newMessage,setnewMessage]=useState([{
      message:value
    }]) 
  const currentTime = new Date();
      const time = currentTime.toLocaleTimeString('en-US',{
          hour:'2-digit',
           minute:'2-digit',
      })
  
    const handleSend = () => {
      setvalue(inputvalue)
      setInputValid(true)
      console.log('new'+ inputvalue)
      const data = inputvalue;

      setnewMessage((old)=>[...old,{message:data}])

    };
  
    const handleInput = ()=>{
      console.log('handleclick'+ inputvalue)
      setInputValid(true)
       return inputvalue
    }
  
    useEffect(() => {
      setInterval(() => {
        setLoading(false);
      }, 5000);
      setInterval(() => {
        setLoaded(true);
      }, 8000);
    }, []);
   
  useEffect(() => {
     
  }, [])
  
  
  //   const newMessage = [
  //     {
  //     id:0,
  //     message:value
  //   }
  // ]
  
    
  // console.log(newMessage.message)
  
    return (
      <Container>
        {loading && (
          <AlertCon>
            <Alert sx={{ width: "100vw" }} severity="info">
              Live chat is Loading
            </Alert>
          </AlertCon>
        )}
        <Wrapper className="flex aifs jcfs fdc">
          {/* <HeaderCon> */}
  
          <Header className="flex aic jcsb w100 bsbb">
            <HeaderLeft className="flex aic jcfs ">
              <HeaderText className="flex aic jcc">Robot</HeaderText>
            </HeaderLeft>
            <HeaderRight className="flex aic jcfe">
              <Close
                sx={{ margin: "0 5px", fontSize: "19px" }}
                onClick={() => setShowChatbox(false)}
              />
              <Close
              sx={{ margin: "0 5px", fontSize: "19px" }}
              onClick={() => setShowChatbox(false)}
            />
            </HeaderRight>
          </Header>
          {/* </HeaderCon> */}
        {/* </Wrapper> */}
        <GetTimeCon className="flex aicc jcc w100">
              <GetTime>Chat started at {time} </GetTime>
            </GetTimeCon>
        {/* <Wrapper className="flex aifs jcfs fdc"  > */}
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
          {/* end of greeting */}
           {/* {inputValid &&  (
            <> */}
            {newMessage.map((item)=>(
              // <LiveChatCon>
              //       <LiveChatMessageCon className="w100 flex aic jcc">
              //         <LiveChatMessage>{item.message}</LiveChatMessage>
              //       </LiveChatMessageCon>
              //   </LiveChatCon>
              <LiveChatCon type="recieve" className="flex aic jcfs w100 ">
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
                <LiveChatMessage>{item.message}</LiveChatMessage>
              </LiveChatMessageCon>
            ) : (
              <Skeleton
                variant="rectanglar"
                sx={{ height: "40px", margin: "0 7px", width: "100%" }}
              />
            )}
          </LiveChatCon>
              ))}
                {/* </>
              )} */}
        <ReplyCon className="flex aic jcsa">
          <ReplyInputCon>
            <ReplyInput
              placeholder="enquiry"
              onChange={(e) => {
                  setinputvalue(e.target.value);
              }}
              />
          </ReplyInputCon>
          <Send onClick={handleSend} />
        </ReplyCon>
              </Wrapper>
      </Container>
    );
  }
  
  export default Backup;
  