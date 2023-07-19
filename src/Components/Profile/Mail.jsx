import { LabelImportant, LabelOutlined, MoreHoriz, Star, StarBorder } from '@mui/icons-material';
import img from "../../images/team4.png";
import { useState } from "react";
import styled from "styled-components";
import { IconButton, Tooltip } from '@mui/material';
import { CustomerBreakpoint } from '../../responsive';
const MailCon = styled.div`
  background: white;
  padding: 15px 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
const MailLeft = styled.div`
  flex: 1;
  margin-top: 20px;
  height: 100%;
`;
const MailLeftIcon = styled.div`
  color: orangered;
  margin: 0 3px;
`;
const MailLeftImgCon = styled.div`
  margin: 0 5px;
`;
const MailLeftImg = styled.img`
  width: 100%;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  ${CustomerBreakpoint({height:'30px',width:'30px'})};
`;
const MailMiddle = styled.div`
  flex: 6;
`;
const MailRight = styled.div`
  flex: 1;
`;
const MailTextCon = styled.div``;
const MailText = styled.span`
  font-size: .8rem;
  margin:2px 0;
  font-weight: ${(props) => (props.name ? 500 : 400)};
  color: ${(props) => (props.name ? "orangered" : "black")};
  ${CustomerBreakpoint({fontSize:'.7rem'})}
`;


function Mail() {
      const handleClick = (type) => {
        if(type==='starred'){
          setstarred((current) => !current);
        }else{
          setImportant((current)=>!current)
        }
      };


        const [starred, setstarred] = useState(true);
        const [Important, setImportant] = useState(false);

  return (
    <MailCon className="flex aifs jcsb w100">
      <MailLeft className="flex aic jcc">
        <input type="checkbox" style={{ marginRight: "3px" }} />
        <MailLeftIcon className="flex aic jcc cp">
          {starred ? (
            <StarBorder onClick={() => handleClick("starred")} />
          ) : (
            <Star onClick={() => handleClick("starred")} />
          )}
        </MailLeftIcon>
        <MailLeftIcon className="flex aic jcc">
          {Important ? (
            <LabelImportant onClick={() => handleClick("important")} />
          ) : (
            <LabelOutlined onClick={() => handleClick("important")} />
          )}
        </MailLeftIcon>
      </MailLeft>
      <MailMiddle className="flex aifs jcfs s ">
        <MailLeftImgCon>
          <MailLeftImg src={img} alt="" />
        </MailLeftImgCon>
        <MailTextCon className="flex aifs jcc fdc">
          <MailText name>Chinonso </MailText>
          <MailText>
            Lorem ipsum dolor sit csacdscdwasvdwe refsefewsfwe trfefe amet
            consectetur adipisi
          </MailText>
        </MailTextCon>
      </MailMiddle>
      <MailRight className="flex aifs jcsa">
        <MailText>15 July</MailText>
        
      </MailRight>
    </MailCon>
  );
}

export default Mail