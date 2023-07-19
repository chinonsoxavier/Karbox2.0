import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { ManageMent_Team } from "../../data";
import { tablet } from "../../responsive";

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height:max-content;
  background-color: #f1f3fd;
  margin: 100px 0;
  padding: 30px 5vh;
  ${tablet({ padding: "15px 2.5vh" })};
  border-radius: 7px;
  box-sizing: border-box;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  margin-bottom:150px;
`;
const HeaderBigTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin: 5px 0;
  text-align:center;
  ${tablet({ fontSize: "23px" })};
`;
const HeaderTxt = styled.p`
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin: 5px 0;
  text-align: center;
  ${tablet({ fontSize: "13px" })};
`;

const TeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  height:max-content;
  // background:red;
  flex-wrap:wrap;

`;
const Team = styled.div`
  flex: 1;
  margin-right: ${(props) => props.mgr};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  height:max-content;
  max-width:280px;
  background:white;
  min-width:200px;
  width:100%;
  border-radius:15px;
  margin-top:90px;
  ${tablet({margin:'10px 6px',marginBottom:'90px',width:'220px'})}
`;
const TeamImgCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  background-color: white;
  z-index: 1;
  // margin-top:60px;
`;
const TeamImg = styled.img`
  margin-top: -60px;
  width: 140px;
  z-index: 1;
  ${tablet({})}
`;
const TeamName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
  color: black;
  border-radius: 15px;
`;
const TeamDetails = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: white;
  z-index: 0;
  ${tablet({ paddingTop: "50px", marginTop: "-50px" })};
`;
const TeamSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SocialIcon = styled.div`
font-size:15px;
font-weight:200;
margin:5px;
  &:hover {
    color: #EE4730;
  }
`;

function ManagementTeam() {
  return (
    <Container>
      <Header>
        <HeaderBigTxt fz="40px" fw={600}>
          Meet The Management Team
        </HeaderBigTxt>
        <HeaderTxt clr="grey">
          Our team consists of passionate and talented individuals invested in
          your success.
        </HeaderTxt>
      </Header>
      <TeamsContainer>
        {ManageMent_Team.map((item,i) => (
          <Team mgr="5vh" key={i} >
            <TeamImgCon>
              <TeamImg src={item.img} />
            </TeamImgCon>
            <TeamDetails>
              <TeamName>{item.name}</TeamName>
              <TeamSocial>
                <SocialIcon>
                  <FacebookRounded sx={{ fontWeight: 200, fontSize: "21px" }} />
                </SocialIcon>
                <SocialIcon>
                  <Twitter
                    sx={{ color: "#EE4730", fontWeight: 200, fontSize: "21px" }}
                  />
                </SocialIcon>
                <SocialIcon>
                  <Instagram sx={{ fontWeight: 200, fontSize: "21px" }} />
                </SocialIcon>
              </TeamSocial>
            </TeamDetails>
          </Team>
        ))}
      </TeamsContainer>
    </Container>
  );
}

export default ManagementTeam