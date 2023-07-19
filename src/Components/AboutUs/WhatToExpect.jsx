import styled from "styled-components";
import overview from "../../images/overview-bg.png";
import RTA from "../../images/01 (4).png";
import SMC from "../../images/02 (4).png";
import SMC2 from "../../images/04 (5).png";
import WA from "../../images/03 (4).png";
import ATW from "../../images/06 (2).png";
import { tablet } from "../../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
  margin-bottom:150px;
  width: 100%;
  color: white;
`;
const LeftCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;
const LeftConHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`;
const LeftConHeaderBigText = styled.p`
  margin: 5px 0;
  font-size: ${(props) => props.fz};
  color: ${(props) => props.clr};
  font-weight: ${(props) => props.fw};
  ${tablet({fontSize:'23px'})}
`;
const LeftConHeaderText = styled.p`
  margin: 5px 0;
  ${tablet({fontSize:'12px'})}
  font-size: ${(props) => props.fz};
  color: ${(props) => props.clr};
  font-weight: ${(props) => props.fw};
`;
const WhatToExpectCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 40px;
  width: 150px;
  flex: 1;
`;
const WhatToExpectImg = styled.img`
  width: 30%;
  ${tablet({width:'16%'})}
`;
const WhatToExpectText = styled.p`
  font-weight: 500;
  font-size: 19px;
  margin-top: 15px;
  ${tablet({fontSize:'12px'})}
  white-space: nowrap;
`;
const RightCon = styled.div`
  flex: 1;
  width: 100%;
  background: url(./overview-bg.png);
  backgrounf:url(${props=>props.bg})
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  min-height: 500px;
  ${tablet({display:'none'})}
`;

function WhatToExpect() {
  return (
    <Container>
      <LeftCon>
        <LeftConHeader>
          <LeftConHeaderBigText fz="40px" fw={600}>
            What Can You Expect?
          </LeftConHeaderBigText>
          <LeftConHeaderText clr="grey">
            Voluptate aut blanditiis accusantium officiis expedita dolorem
            inventore odio reiciendis obcaecati quod nisi quae
          </LeftConHeaderText>
        </LeftConHeader>
        <WhatToExpectCon>
          <Div>
            <WhatToExpectImg src={RTA} />
            <WhatToExpectText>Real-Time Auction</WhatToExpectText>
          </Div>
          <Div>
            <WhatToExpectImg src={SMC} />
            <WhatToExpectText>Supports Multiple Currency</WhatToExpectText>
          </Div>
          <Div>
            <WhatToExpectImg src={WA} />
            <WhatToExpectText>Winner Announcement</WhatToExpectText>
          </Div>
          <Div>
            <WhatToExpectImg src={SMC2} />
            <WhatToExpectText>Real-Time Auction</WhatToExpectText>
          </Div>
          <Div>
            <WhatToExpectImg src={RTA} />
            <WhatToExpectText>Supports Multiple Currency</WhatToExpectText>
          </Div>
          <Div>
            <WhatToExpectImg src={ATW} />
            <WhatToExpectText>Add To Watchlist</WhatToExpectText>
          </Div>
        </WhatToExpectCon>
      </LeftCon>
      <RightCon bg={overview} ></RightCon>
    </Container>
  );
}

export default WhatToExpect;
