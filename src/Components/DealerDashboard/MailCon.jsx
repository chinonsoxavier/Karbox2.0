import styled from "styled-components";
import { IconButton, Tooltip } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { useState } from "react";

const Mail = styled.div`
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

const MailCon = ({ item,msg }) => {
    // const 
    const [message, setmessage] = useState("chinonso xavier");
    const [activeChat, setactiveChat] = useState(false);
    // const last = [];
    //  const newMsg = msg.map(
    //    (item) =>
    //      // last.push(item.messages[item.messages.length - 1])
    //      (last = item.messages)
    //  );
    // msg.map(
    //     (item) => last.push(item.messages[item.messages.length - 1])
    //     );
    
    //     console.log(message)
    //     console.log(last)

        // console.log(msg.messages.last)
        const handlelast = (item) =>{
    var last = [];
    last=item
    console.log(last)
    //   msg.map(
    //   (item) =>
        // last.push(item.messages[item.messages.length - 1])
        // (last = item.messages.slice(-1))
    // );
    // return(
    //     <>{last.message}</>
    // )
    // return last.message
        // console.log(last.message.slice(-1))

        }

  return (
    <>
      {/* {inboxMsg.map((item) => ())} */}
      <Mail
        className="flex aifs jcsb bgr w100"
        onClick={() => setmessage(item.name)}
      >
        <MailMiddle className="flex aic jcfs s    ">
          <MailLeftImgCon>
            <MailLeftImg src={item.img} alt="" />
          </MailLeftImgCon>
          <MailTextCon className="flex aifs jcc fdc">
            <MailText name>{item.name}</MailText>
            <MailText index={item} >
                {handlelast(item)}
               
     {/* )} */}
                {/* {last.slice(-1)} */}
                {/* {last.map(item)=>()} */}
                {/* {last.map((item)=> item.name == message)} */}
                {/* {last.map((item))} */}
                {/* {last.filter((item)=>item.name == message).map((item)=>item.message)} */}
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
      </Mail>
      {/* ))} */}
    </>
  );
};

export default MailCon