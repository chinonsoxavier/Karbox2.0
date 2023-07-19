import { MoreHoriz, Star, StarBorder } from '@mui/icons-material';
import img from "../../images/team4.png";
import { useState } from "react";
import styled from "styled-components";
import { IconButton, Tooltip } from '@mui/material';
const MailCon = styled.div`
  background: white;
  padding: 15px 0;
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
  margin: 0 7px;
`;
const MailLeftImgCon = styled.div`
  margin: 0 5px;
`;
const MailLeftImg = styled.img`
  width: 100%;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
const MailMiddle = styled.div`
  flex: 6;
`;
const MailRight = styled.div`
  flex: 1;
`;
const MailTextCon = styled.div``;
const MailText = styled.span`
  font-size: 15px;
  margin:2px 0;
  font-weight: ${(props) => (props.name ? 500 : 300)};
  color: ${(props) => (props.name ? "orangered" : "black")};
`;


function Mail() {
      const handleClick = () => {
        setstarred((current) => !current);
      };


        const [starred, setstarred] = useState(true);

  return (
    <MailCon className="flex aifs jcsb w100">
      <MailLeft className="flex aic jcc">
        <input type="checkbox" />
        <MailLeftIcon className="flex aic jcc cp">
          {starred ? (
            <StarBorder onClick={handleClick} />
          ) : (
            <Star onClick={handleClick} />
          )}
        </MailLeftIcon>
      </MailLeft>
      <MailMiddle className="flex aifs jcfs s ">
        <MailLeftImgCon>
          <MailLeftImg src={img} alt="" />
        </MailLeftImgCon>
        <MailTextCon className="flex aifs jcc fdc">
          <MailText name>Chinonso xavier</MailText>
          <MailText>
            Lorem ipsum dolor sit csacdscdwasvdwe refsefewsfwe trfefe amet
            consectetur adipisi
          </MailText>
        </MailTextCon>
      </MailMiddle>
      <MailRight className="flex aifs jcsa">
        <MailText>15 July</MailText>
        <Tooltip title="more actions">
          <IconButton>
            <MoreHoriz sx={{ color: "black" }} />
          </IconButton>
        </Tooltip>
      </MailRight>
    </MailCon>
  );
}

export default Mail