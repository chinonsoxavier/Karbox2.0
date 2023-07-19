import styled from "styled-components";
import Header from "../Components/Home/Header";
import img from "../images/team1.png";
import { AddAPhotoOutlined, Print } from "@mui/icons-material";
import General from "../Components/Profile/General";
import Inbox from "../Components/Profile/Inbox";
import Chat from "../Components/Profile/Chat";
import { Link } from "react-router-dom";
import { CustomerBreakpoint, lmobile, tablet } from "../responsive";
import MobileBottom from "../Components/Home/MobileBottom";
import MobileHeader from "../Components/Home/MobileHeader";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #fff7f3;
`;
const Wrapper = styled.div`
  padding: 0 10vh;
  ${tablet({ padding: "0 4vh" })};
  ${CustomerBreakpoint({padding:'0'})}
  box-sizing: border-box;
`;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: black;
  padding: 0 10vh;
  ${tablet({ padding: "0 4vh" })};
  ${lmobile({ padding: "0 1vh" })};
`;

const SideMenuCon = styled.div`
  flex: 1;
  display: none;
`;
const SideMenu = styled.div`
  background: white;
  margin-right: 10px;
  height: 100%;
  box-shadow: 2px 6px 15px -8px rgba(0, 0, 0, 0.75);
`;
const SideMenuHeader = styled.div`
  margin: 10px 0;
`;
const SideMenuHeaderText = styled.span`
  font-size: 34px;
  font-weight: 500;
`;

const SideMenuTextCon = styled.div`
  width: 100%;
  padding: 7px 10px;
  box-sizing: border-box;
  &:hover {
    background: #eee;
  }
`;
const SideMenuText = styled.span`
  ${tablet({ fontSize: ".3rem" })}
`;
const ProfileRoutes = styled.div`
  flex: 3;
`;

const LinksCon = styled.div`
  background: #ffe8e4;
  // margin: -7px;
`;
const LinksTextCon = styled.div`
  margin: 0 20px;
  ${tablet({ margin: "0 10px" })}
  padding: 10px;
  // background: #ffe8e4;
  // color: #ff9584;
  // max-width:100px;
`;
const LinksText = styled.span`
  ${tablet({ fontSize: ".7rem" })};
  white-space: nowrap;
`;

function Profile({ route }) {
  const Links = [
    {
      link: "general",
    },
    {
      link: "inbox",
    },
    {
      link: "chats",
    },
    {
      link: "close account",
    },
  ];

  return (
    <Container className="s">
      <HeaderCon>
        {/* <MobileBottom /> */}
        <MobileHeader />
        <Header route={route} />
      </HeaderCon>
      <LinksCon className="flex aic jcc w100">
        {Links.map((item, i) => (
          <Link
            key={i}
            to={`/my-account/${item.link}`}
            className="link"
            style={{
              borderBottom: route === item.link && "2px solid orangered",
            }}
          >
            <LinksTextCon
              style={
                {
                  // color: route === item.link && "#ff9584",
                  // background: route === item.link && "#ffe8e4",
                  // boxShadow:
                  //   route === item.link &&
                  //   "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
                }
              }
            >
              <LinksText>{item.link}</LinksText>
            </LinksTextCon>
          </Link>
        ))}
      </LinksCon>
      <Wrapper className="flex aifs jcc w100 ">
        <SideMenuCon>
          <SideMenuHeader>
            <SideMenuHeaderText>Profile settings</SideMenuHeaderText>
          </SideMenuHeader>
          <SideMenu>
            <SideMenuTextCon>
              <SideMenuText>General</SideMenuText>
            </SideMenuTextCon>
            <SideMenuTextCon>
              <SideMenuText>Inbox</SideMenuText>
            </SideMenuTextCon>
            <SideMenuTextCon>
              <SideMenuText>Chats</SideMenuText>
            </SideMenuTextCon>
            <SideMenuTextCon>
              <SideMenuText>Close Account</SideMenuText>
            </SideMenuTextCon>
          </SideMenu>
        </SideMenuCon>
      </Wrapper>
        <ProfileRoutes className="w100 ">
          {route === "general" && <General />}
          {route === "inbox" && <Inbox />}
          {route === "chats" && <Chat />}
        </ProfileRoutes>
    </Container>
  );
}

export default Profile;
