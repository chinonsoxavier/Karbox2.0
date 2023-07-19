import {
  AddCircleOutline, Star, InboxSharp, LabelImportant, Search, Send, WatchLater, Menu,

} from "@mui/icons-material";
import styled from "styled-components";
import Mail from "./Mail";
import { CustomerBreakpoint, lmobile, tablet } from "../../responsive";
import { useState } from "react";
import InboxSideMenu from "./InboxSideMenu";
// import { current } from "@reduxjs/toolkit";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 0 10vh;
  ${tablet({ padding: "0 4vh" })};
  ${lmobile({ padding: "0 1vh" })};
`;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
`;

const SortWrapper = styled.div`
// padding:0 30px;
// background:red;
margin:20px 0;
`;

const SortInputCon = styled.div`
  width: 100%;
  flex: 4;
  margin-left: 15px;
  color: gray;
  background: #ffe8e4;
`;
const SortInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  height:35px;
`;

const MenuCon = styled.div`
display:none;
${CustomerBreakpoint({display:'flex'})}
`

const SortCon = styled.div`
  background: white;
  padding: 10px;
  box-sizing:border-box;
  width: 100px;
  font-size: 21px;
  margin: 10px 0;
`;
const SortConSelect = styled.select`
  border: none;
  width: 130px;
  font-size: 16px;
`;
const SortConOption = styled.option``;
const SortButtonCon = styled.div`
flex:2;
${CustomerBreakpoint({display:'none'})};
`;
const SortButton = styled.div`
  background: orangered;
  color: white;
  border-radius: 9px;
  padding: 6px 13px;
  cursor: pointer;
`;
const MailCon = styled.div`
  flex: 4;
  margin-left: 15px;
  ${CustomerBreakpoint({margin:'0'})}
`;

const SideMenu = styled.div`
  flex: 2;
  ${CustomerBreakpoint({display:'none'})};
  ;
`;
const SideMenuTextCon = styled.div`
  color: gray;
  width: 100%;
  padding: 10px 0;
  margin: 2px 0;
  background: white;
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
function Inbox({ route }) {

  const [menuOpen,setMenuOpen]=useState(false)
//  const closeMenu = ()=>{
//   if(!menuOpen){
//      setMenuOpen((current) => !current);
//   }
//  }

const  handleClick = ()=>{
  setMenuOpen('open')
  console.log(menuOpen,'clicked');
}
  // window.addEventListener('click',closeMenu);

  const inboxMsg = [
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
  ];

  return (
    <Container>
      {/* {menuOpen==='open' && ( */}
        <InboxSideMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      {/* )} */}
      <Wrapper className="">
        <SortWrapper className="flex aic jcsb bdbb">
          <MenuCon onClick={handleClick} className="flex aic jcc">
            <Menu />
          </MenuCon>
          <SortButtonCon>
            <SortButton className="flex aic jcc">
              <AddCircleOutline sx={{ marginRight: "4px" }} />
              Compose Mail
            </SortButton>
          </SortButtonCon>
          <SortInputCon className="flex aic jcc">
            <Search sx={{ margin: "0 5px" }} />
            <SortInput placeholder="search mail" type="text" />
          </SortInputCon>
        </SortWrapper>
        <div className="flex aifs jcc">
          <SideMenu>
            <SideMenuTextCon
              className="flex aic jcfs"
              style={{ background: "#ffe8e4", color: "orangered" }}
            >
              <SideMenuTextIcon className="flex aifs jcc">
                <InboxSharp sx={{ fontSize: "21px" }} />
              </SideMenuTextIcon>
              <SideMenuText>Inbox</SideMenuText>
            </SideMenuTextCon>
            <SideMenuTextCon className="flex aic jcfs">
              <SideMenuTextIcon className="flex aifs jcc">
                <Star sx={{ fontSize: "21px" }} />
              </SideMenuTextIcon>
              <SideMenuText>Starred</SideMenuText>
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
          <MailCon>
            {inboxMsg.map((item, i) => (
              <Mail key={i} />
            ))}
          </MailCon>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Inbox;
