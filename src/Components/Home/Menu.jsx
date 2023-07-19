import { AodOutlined, BorderColor, ChevronLeft, CopyrightOutlined, Diversity2Outlined, Edit, HealthAndSafetyOutlined, HelpCenter, InsertDriveFileOutlined, Logout, Translate } from "@mui/icons-material";
import styled from "styled-components";
import {Link} from 'react-router-dom'
const MenuContainer = styled.div`
  background-color: white;
  position: fixed;
  overflow-y:scroll;
  overflow-x:hidden;
  width: 70vw;
  right:0;
  z-index:300;
  height: 100vh;
  top: 0;
  color: #42597a;
  padding-bottom:30px;
`;
const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const MenuHeader = styled.div`
    padding:0 10px;
`;
const GreetingsTextHeader = styled.span`
  font-size: 16px;
  color: grey;
  font-weight: 500;
  box-sizing:border-box;
  padding: 4px 10px;
`;

const Components = styled.div`
  padding: 2px 0;
  width: 100%;
`;
const Child = styled.div`
  width:100%;
`

const ComponentsText = styled.span`
  font-size:13px;
  color: #42597a;
  margin:2px 0;
  cursor:pointer;
  width:100%;
  padding:5px 10px;
  box-sizing:border-box;
  white-space:nowrap;

  &:hover{
    background-color:#eee;
  }
`;

const AppLang = styled.span``

const MenuButton = styled.button`
  border: none;
  background: none;
  background: #42597a;
  padding:3px 9px;
  color: #42597a;
  color: white;
  cursor: pointer;
  font-weight: 700;
  margin:6px 0;
  border-radius:7px;
`;

const HrCon = styled.div``
const Hr = styled.hr`
  border:none;
  height:1px;
  width:90%;
  background-color:#eee;
`

function Menu({ setMenu }) {

  const links = [
    [
      {
        link: "Mercedes Benz",
      },
      {
        link: "Porsche",
      },
      {
        link: "Lamborghini",
      },
      {
        link: "Range Rover",
      },
      {
        link: "Lexus",
      },
      {
        link: "Tesla",
      },
      {
        link: "Bugatti",
      },
    ],
    [
      {
        link: "Electric",
      },
      {
        link: "Hybrid Electric",
      },
      {
        link: "Range",
      },
      {
        link: "Performance",
      },
    ],
  ];

  return (
    <MenuContainer className=" bsbb">
      <MenuWrapper>
        <MenuHeader className="flex bsbb aic jcfs bsbb">
          <MenuButton
            className="s flex bsbb aic jcc "
            onClick={() => {
              setMenu(false);
            }}
          >
            <ChevronLeft />
            Menu
          </MenuButton>
        </MenuHeader>
        <Components className="flex  aifs bsbb jcc fdc w100">
          <Child>
            <GreetingsTextHeader> Account</GreetingsTextHeader>
            <ComponentsText className="flex  aifs jcfs bsbb">
              <Logout
                sx={{ marginRight: "8px", fontWeight: 300, fontSize: "15px" }}
              />
              LOGOUT
            </ComponentsText>
            <ComponentsText className="flex  aic jcfs bsbb">
              <Edit
                sx={{ marginRight: "8px", fontWeight: 300, fontSize: "15px" }}
              />
              <Link to="/customer/address-book" className="link">
                Edit Profile
              </Link>
            </ComponentsText>
            <ComponentsText className="flex bsbb aic jcsb w100">
              <AppLang className="flex bsbb aifs jcc">
                <Translate
                  sx={{ marginRight: "8px", fontWeight: 300, fontSize: "15px" }}
                />
                App language
              </AppLang>
              <AppLang>English</AppLang>
            </ComponentsText>
          </Child>
          <HrCon className="flex bsbb aic jcc w100">
            <Hr />
          </HrCon>
          <Child className="flex bsbb aifs jcc fdc">
            <GreetingsTextHeader>BRANDS</GreetingsTextHeader>
            {links[0].map((item, i) => (
              <Link
                to={`/inventory?brands=${item.link}`}
                className="link flex aic jcc"
              >
                <ComponentsText>{item.link}</ComponentsText>
              </Link>
            ))}
          </Child>
          <HrCon className="flex bsbb aic jcc w100">
            <Hr />
          </HrCon>
          <Child className="flex bsbb aifs jcc fdc">
            <GreetingsTextHeader>Features</GreetingsTextHeader>
            {links[1].map((item, i) => (
              <Link
                to={`/inventory?brands=${item.link}`}
                className="link flex aic jcc"
              >
                <ComponentsText>{item.link}</ComponentsText>
              </Link>
            ))}
            {/* <ComponentsText></ComponentsText>
            <ComponentsText></ComponentsText> */}
          </Child>
          <HrCon className="flex bsbb aic jcc w100">
            <Hr />
          </HrCon>
          <Child>
            <GreetingsTextHeader>Support</GreetingsTextHeader>
            <ComponentsText className="flex aifs jcfs">
              <BorderColor
                sx={{ fontWeight: 300, fontSize: "15px", marginRight: "8px" }}
              />{" "}
              Report a Problem
            </ComponentsText>
            <ComponentsText className="flex aifs jcfs">
              {" "}
              <HelpCenter
                sx={{ fontWeight: 300, fontSize: "15px", marginRight: "8px" }}
              />{" "}
              Help Center
            </ComponentsText>
            <ComponentsText className="flex aifs jcfs">
              {" "}
              <HealthAndSafetyOutlined
                sx={{ fontWeight: 300, fontSize: "15px", marginRight: "8px" }}
              />{" "}
              Safety Center
            </ComponentsText>
          </Child>
          <HrCon className="flex bsbb aic jcc w100">
            <Hr />
          </HrCon>
          <Child>
            <GreetingsTextHeader>ABOUT</GreetingsTextHeader>
            <ComponentsText className="flex aifs jcfs">
              {" "}
              <Diversity2Outlined
                sx={{ marginRight: "8px", fontWeight: 300, fontSize: "15px" }}
              />{" "}
              Community Guidelines
            </ComponentsText>
            <ComponentsText className="flex aifs jcfs">
              {" "}
              <AodOutlined
                sx={{ marginRight: "8px", fontWeight: 300, fontSize: "15px" }}
              />{" "}
              Terms of Service
            </ComponentsText>
            <ComponentsText className="flex aifs jcfs">
              {" "}
              <InsertDriveFileOutlined
                sx={{ marginRight: "8px", fontWeight: 300, fontSize: "15px" }}
              />{" "}
              Privacy Policy
            </ComponentsText>
            <ComponentsText className="flex aifs jcfs">
              {" "}
              <CopyrightOutlined
                sx={{ marginRight: "8px", fontWeight: 300, fontSize: "15px" }}
              />{" "}
              Copyright Policy
            </ComponentsText>
          </Child>
        </Components>
      </MenuWrapper>
    </MenuContainer>
  );
}

export default Menu;
