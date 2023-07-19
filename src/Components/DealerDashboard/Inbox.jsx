import {
  AddCircleOutline,
  Check,
  DeleteOutline,
  EditOutlined,
  Favorite,
  InboxSharp,
  InfoOutlined,
  LabelImportant,
  MailOutline,
  Send,
  StarBorderOutlined,
  WatchLater,
} from "@mui/icons-material";
import styled from "styled-components";
import Header from "./Header";
import Mail from "./Mail";

const Container = styled.div``;
const Wrapper = styled.div``;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
`;

const SortWrapper = styled.div`
  box-sizing: border-box;
  padding:0 2vh;
`;
const SortCon = styled.div`
  background: white;
  padding: 10px;
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
const SortButtonCon = styled.div``;
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
`;

const SideMenu = styled.div`
flex:2;
`
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
margin:0 6px;

`
const SideMenuText = styled.span`
font-size:1rem;
`

function Inbox({ route }) {

  

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
      <HeaderCon>
        <Header route={route} />
      </HeaderCon>
      <SortWrapper className="flex aic jcsb">
        <SortCon className="flex aic jcc">
          <SortConSelect>
            <SortConOption>Order by</SortConOption>
            <SortConOption>Order by</SortConOption>
            <SortConOption>Order by</SortConOption>
          </SortConSelect>
        </SortCon>
        <SortButtonCon>
          <SortButton className="flex aic jcc">
            <AddCircleOutline sx={{ marginRight: "4px" }} />
            Compose Mail
          </SortButton>
        </SortButtonCon>
      </SortWrapper>
      <Wrapper className="flex aifs jcfs">
        <SideMenu>
          <SideMenuTextCon
            className="flex aic jcfs"
            style={{ background: "#ffe8e4" ,color:'orangered'}}
          >
            <SideMenuTextIcon className="flex aifs jcc">
              <InboxSharp sx={{ fontSize: "21px" }} />
            </SideMenuTextIcon>
            <SideMenuText>Inbox</SideMenuText>
          </SideMenuTextCon>
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <Favorite sx={{ fontSize: "21px" }} />
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
              <LabelImportant sx={{ fontSize: "21px",color:'green' }} />
            </SideMenuTextIcon>
            <SideMenuText>Team</SideMenuText>
          </SideMenuTextCon>{" "}
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px",color:'yellow' }} />
            </SideMenuTextIcon>
            <SideMenuText>New Rep`s</SideMenuText>
          </SideMenuTextCon>{" "}
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px",color:'blue' }} />
            </SideMenuTextIcon>
            <SideMenuText>Projects</SideMenuText>
          </SideMenuTextCon>{" "}
          <SideMenuTextCon className="flex aic jcfs">
            <SideMenuTextIcon className="flex aifs jcc">
              <LabelImportant sx={{ fontSize: "21px",color:'orangered' }} />
            </SideMenuTextIcon>
            <SideMenuText>Personal</SideMenuText>
          </SideMenuTextCon>
        </SideMenu>
        <MailCon>
          {inboxMsg.map((item, i) => (
            <Mail key={i} />
          ))}
        </MailCon>
      </Wrapper>
    </Container>
  );
}

export default Inbox;
