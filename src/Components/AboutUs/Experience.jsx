import styled from "styled-components";
import about from '../../images/about.png'
import award from "../../images/01 (5).png";
import affilations from "../../images/02 (5).png";
import { mobile, tablet } from "../../responsive";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:100%;
  // padding: 0 5vh;
  // background-color: white;
`;
const ExperienceTop_Con = styled.div`
  background-color: white;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({justifyContent:'center',padding:'20px 5vh',height:'max-content'})}
  padding: 0 5vh;
  border-radius:15px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 6%);
`;
const ExperienceTopText_Con = styled.div`
  ${tablet({ display: "flex", alignItems: "center",flexDirection:'column', justifyContent: "center" })}
`;
const Top_ConImage = styled.img`
  width: 50%;
  ${tablet({ display: "none" })}
`;
const ExperienceTopText = styled.span`
  font-size: 18px;
  ${tablet({fontSize:'14px'})};
  text-align: center;
`;
const ExperienceTopBigText = styled.span`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.cl};
  margin-top: 10px;
  text-align: center;
  ${tablet({ marginTop: "0",fontSize:'30px' })}
  ${mobile({ marginTop: "0" })}
`;

const Award_AffilateCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:15px 0;
`;
const Award_AffilateImg = styled.img`
  ${tablet({maxWidth:'30%'})}
`;
const Award_Affilate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin:0 6px;
`;


const ExperienceBottom_Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
  width:100%;
  margin-top:30px;
`;
const InfoCon = styled.div`
  flex: 1;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 50px;
  margin-right: ${(props) => props.mr};
  ${tablet({margin:'10px 0'})}
`;
const InfoText = styled.span`
white-space:nowrap;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  color:white;
`;

function Experience() {
  return (
    <Container>
      <ExperienceTop_Con>
        <ExperienceTopText_Con>
          <ExperienceTopBigText fz="40px" fw={500}>
            ABOUT US
          </ExperienceTopBigText>
          <ExperienceTopBigText fz="40px" fw={600} cl="red">
            OVER 60
          </ExperienceTopBigText>
          <ExperienceTopBigText fz="40px" fw={600}>
            YEARS EXPERIENCE
          </ExperienceTopBigText>
          <ExperienceTopText fz="18px">
            Innovation have made us leaders in Car Selling platform
          </ExperienceTopText>
          <Award_AffilateCon>
            <Award_Affilate>
              <Award_AffilateImg src={award} />
              <ExperienceTopText>AWARD-WINNING TEAM</ExperienceTopText>
            </Award_Affilate>
            <Award_Affilate>
              <Award_AffilateImg src={affilations} />
              <ExperienceTopText>AWARD-WINNING TEAM</ExperienceTopText>
            </Award_Affilate>
          </Award_AffilateCon>
        </ExperienceTopText_Con>
        <Top_ConImage src={about} />
      </ExperienceTop_Con>
      <ExperienceBottom_Con>
        <InfoCon mr="5vh">
          <InfoText fz="40px" fw={500}>
            62M
          </InfoText>
          <InfoText fw={300}>ITEMS SOLD</InfoText>
        </InfoCon>
        <InfoCon mr="5vh">
          <InfoText fz="40px" fw={500}>
            $887M
          </InfoText>
          <InfoText fw={300}>IN SATISFIED CLIENTS</InfoText>
        </InfoCon>
        <InfoCon mr='5vh'>
          <InfoText fz="40px" fw={500}>
            63M
          </InfoText>
          <InfoText fw={300}>ITEMS FIXED</InfoText>
        </InfoCon>
        <InfoCon mr="5vh">
          <InfoText fz="40px" fw={500}>
            05K
          </InfoText>
          <InfoText fw={300}>TRADING EXPERTS</InfoText>
        </InfoCon>
      </ExperienceBottom_Con>
    </Container>
  );
}

export default Experience