import styled from "styled-components";
import { ChevronLeft, InboxSharp, LabelImportant, Send, Star, WatchLater } from "@mui/icons-material";
import { useRef } from "react";
const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
//   width: 0px;
  background: #ffe8e4;
  transition:1s all linear;
//   display:none;
div{
    // width:0;2
}
`;
const Wrapper = styled.div`
  transition:1s all;
`;

const Header = styled.div`
padding:10px 0;
 padding-left:10px;
`
const HeaderText = styled.span`
font-size:1.2rem;
font-weight:500;
`;

const Icon = styled.div`
  margin-right:20px;
  width:30px;
  height:30px;
  border-radius:50%;

  &:hover{
    background:#eee;
  }
`
const SideMenu = styled.div`
  flex: 2;
`;
const SideMenuTextCon = styled.div`
  color: gray;
  width: 100%;
  padding: 10px 0;
  padding-left:7px;
  margin: 2px 0;
  box-sizing:border-box;
//   background: white;
  // color: orangered;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const SideMenuTextIcon = styled.div`
  margin: 0 6px;
`;
const SideMenuText = styled.span`
  font-size: 1rem;
`;

const InboxSideMenu = ({ setMenuOpen, menuOpen }) => {
  const conRef = useRef();
  const WrapRef = useRef();

//   useEffect(() => {
    // if (menuOpen==='open') {
    //   console.log("yes");
    //   conRef.current.style.width='60vw'
    //   conRef.current.style.display='block'
    // }
    // if(menuOpen==='closed'){
    //     WrapRef.current.style.display='none'
    // }
//   }, [menuOpen]);

  return (
    <Container ref={conRef} style={{width:menuOpen==='open' ? '60vw':'0'}} >
      <Wrapper ref={WrapRef} style={{opacity:menuOpen==='open'? 1 : 0}} >
        <Header className="flex aic jcsb">
          <HeaderText>Inbox</HeaderText>
          <Icon className="flex aic jcc" onClick={() => setMenuOpen((current) => !current)}>
            <ChevronLeft />
          </Icon>
          {/* <Hr /> */}
        </Header>
        <SideMenu>
          <SideMenuTextCon
            className="flex aic jcfs"
            style={{
              background: "rgb(253, 196, 173)",
              color: "orangered",
              fontWeight: 600,
            }}
          >
            <SideMenuTextIcon className="flex aifs jcc">
              <InboxSharp sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Primary</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <Star sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Starred</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <Star sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Social</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <Star sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Promotions</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <WatchLater sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Snoozed</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Important</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <Send sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Sent</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px", color: "green" }} />
            </SideMenuTextIcon>
            <SideMenuText>Team</SideMenuText>
          </SideMenuTextCon>{" "}
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px", color: "yellow" }} />
            </SideMenuTextIcon>
            <SideMenuText>New Rep`s</SideMenuText>
          </SideMenuTextCon>{" "}
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px", color: "blue" }} />
            </SideMenuTextIcon>
            <SideMenuText>Projects</SideMenuText>
          </SideMenuTextCon>{" "}
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px", color: "orangered" }} />
            </SideMenuTextIcon>
            <SideMenuText>Personal</SideMenuText>
          </SideMenuTextCon>
        </SideMenu>
      </Wrapper>
    </Container>
  );
};

export default InboxSideMenu;
