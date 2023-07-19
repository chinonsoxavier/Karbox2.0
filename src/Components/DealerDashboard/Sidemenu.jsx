import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { lmobile } from "../../responsive";
import {
  AccountBalance,
  ChatBubbleOutlineOutlined,
  Dashboard,
  Diversity1Outlined,
  KeyboardTabOutlined,
  LocalPostOfficeOutlined,
  LocalShippingOutlined,
  LogoutOutlined,
  MenuOpen,
  ForumOutlined,
  ModeEditOutlineOutlined,
  SettingsOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";

const Container = styled.div`
  // max-width: 320px;
  // min-width:0px;
  width:100%;
  padding: 0 20px;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const LogoCon = styled.span`
  width: 100%;
  padding: 0;

  margin-bottom: 10px;
`;
const Logo = styled.span``;

const LogoTxt = styled.span`
  color: ${(props) => props.cl};
  font-weight: 700;
  font-size: 24px;
  ${lmobile({ fontSize: "20px" })}
`;

const LogoIcon = styled.div``;
const Routes = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
const Animation = keyframes`
   0% {transform:scale(0.9)}
   100% {transform:scale(1)}
`;

const RouteOptions = styled.div`
  display: flex;
  align-items: flex-startq;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 30px;
`;
const RouteOptionsText = styled.span`
  color: grey;
  font-size: 17px;
  font-weight: 500;
  padding: 5px 5px;

  &:hover {
    background: skyblue;
  }
`;
const RouteCon = styled.div`
  cursor: pointer;
  width: 100%;
`;
const Route = styled.div`
  color: grey;
  padding: 15px 8px;
  box-sizing:border-box;

  &:hover {
    animation-name: ${Animation};
    animation-duration: 0.5s;
    background: skyblue;
  }
  width: 100%;
`;
const RouteIcon = styled.div`
  margin-right: 7px;
`;
const RouteText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const Hr = styled.p`
  margin: 15px 0;
  font-size: 17px;
  font-weight: 400;
  color: gray;
`;

function Sidemenu() {
  const Links = [
    [
      {
        id: 0,
        icon: "Dashboard",
        link: "Dashboard",
        iconColor: "#4d4bbe",
        Link: "dashboard",
      },
      {
        id: 1,
        icon: "LocalShippingOutlined",
        link: "Products",
        iconColor: "#238446",
        tab: "true",
        options: [
          {
            id: 10,
            option: "Create Product",
            Link: "create-product",
          },
          {
            id: 11,
            option: "Product List",
            Link: "product-list",
          },
          {
            id: 22,
            option: "Edit Product",
            Link: "edit-product",
          },
        ],
      },
      {
        id: 2,
        icon: "ShoppingCart",
        link: "Orders",
        iconColor: "#4d4bbe",
        Link: "orders",
      },
      {
        id: 49,
        icon: "Diversity1Outlined",
        link: "Customers",
        iconColor: "#fb4476",
        Link: "customers",
      },
      {
        id: 4,
        icon: "ForumOutlined",
        link: "Reviews",
        iconColor: "#fb4476",
        Link: "reviews",
      },
    ],
    [
      {
        id: 0,
        link: "Chat",
        icon: "ChatBubbleOutlineOutlined",
        iconColor: "#fb8648",
        Link: "chat",
      },
      {
        id: 1,
        link: "Email",
        icon: "LocalPostOfficeOutlined",
        iconColor: "#c63901",
        Link: "inbox",
      },
    ],
    [
      {
        id: 10,
        icon: "ModeEditOutlineOutlined",
        link: "Appearance",
        iconColor: "#f27200",
        tab: "true",
        options: [
          {
            id: 0,
            option: "Dark theme",
          },
          {
            id: 8,
            option: "Light theme",
          },
        ],
      },
      {
        id: 671,
        icon: "SettingsOutlined",
        link: "Settings",
        iconColor: "#6f52cd",
        Link: "profile",
      },
      {
        id: 231,
        icon: "LogoutOutlined",
        link: "Log out",
        iconColor: "#a9a900",
      },
    ],
  ];

  const [collapsed, setcollapsed] = useState(false);
  const [toggle, settoggle] = useState(false);

  const handleClick = (item) => {
    if (toggle === item) {
      settoggle(false);
    } else {
      settoggle(item);
    }

    console.log(toggle);
  };

  const handleCollapse = () => {
    setcollapsed(current => !current);
  };

  return (
    <Container style={{ width: collapsed && "20px", marginRight: "60px" }}>
      <Wrapper className=" ">
        <LogoCon className="flex aic jcsb">
          <Logo className="flex aic jcc">
            {!collapsed ? (
              <>
                <LogoTxt className="s">KAR</LogoTxt>
                <LogoTxt className="s" cl="orangered">
                  BOX
                </LogoTxt>
              </>
            ) : (
              <>
                <LogoTxt className="s">K</LogoTxt>
                <LogoTxt className="s" cl="orangered">
                  B
                </LogoTxt>
              </>
            )}
          </Logo>
          <LogoIcon className="flex aic jcc">
            <Tooltip
              style={{ margin: collapsed && "0 18px" }}
              title="collapse sidemenu"
            >
              <IconButton>
                <MenuOpen
                  onClick={handleCollapse}
                />
              </IconButton>
            </Tooltip>
          </LogoIcon>
        </LogoCon>
        <Routes>
          {Links[0].map((item) => (
            <RouteCon key={item.id}>
              <Route
                className="flex aifs jcfs"
                item={item.tab}
                onClick={() => {
                  item.tab && handleClick(item.link);
                }}
              >
                <RouteIcon className="flex aic jcc">
                  {item.icon === "Dashboard" && (
                    <Dashboard sx={{ color: `${item.iconColor}` }} />
                  )}
                  {item.icon === "LocalShippingOutlined" && (
                    <LocalShippingOutlined
                      sx={{ color: `${item.iconColor}` }}
                    />
                  )}
                  {item.icon === "ShoppingCart" && (
                    <ShoppingCart sx={{ color: `${item.iconColor}` }} />
                  )}
                  {item.icon === "AccountBalance" && (
                    <AccountBalance sx={{ color: `${item.iconColor}` }} />
                  )}
                  {item.icon === "Diversity1Outlined" && (
                    <Diversity1Outlined sx={{ color: `${item.iconColor}` }} />
                  )}
                  {item.icon === "ForumOutlined" && (
                    <ForumOutlined sx={{ color: `${item.iconColor}` }} />
                  )}
                </RouteIcon>
                {!collapsed && (
                  <>
                    {item.Link ? (
                      <Link
                        className="link w100 flex aifs jcfs"
                        to={`/seller-profile/${item.Link}/hgacvsga `}
                      >
                        <RouteText className="flex aic jcc">
                          {item.link}
                          {item.tab && (
                            <KeyboardTabOutlined sx={{ margin: "0 8px" }} />
                          )}
                        </RouteText>
                      </Link>
                    ) : (
                      <RouteText className="flex aic jcc">
                        {item.link}
                        {item.tab && (
                          <KeyboardTabOutlined sx={{ margin: "0 8px" }} />
                        )}
                      </RouteText>
                    )}
                  </>
                )}
              </Route>
              {toggle === item.link && item.tab && (
                <RouteOptions>
                  {item.options.map((item) => (
                    <Link
                      id="dashboardMenuLink"
                      className="w100 dashboardMenuLink"
                      to={`/seller-profile/${item.Link}/kdvchdschdsd`}
                    >
                      <RouteOptionsText key={item.id}>
                        {item.option}
                      </RouteOptionsText>
                    </Link>
                  ))}
                </RouteOptions>
              )}
            </RouteCon>
          ))}
          <Hr style={{ fontSize: collapsed && "13px" }}>Apps</Hr>
          {Links[1].map((item) => (
            <RouteCon
              key={item.id}
              onClick={() => {
                item.tab &&
                  settoggle(item.link ? item.link : false);
              }}
            >
              <Route className="flex aifs jcfs">
                <RouteIcon className="flex aic jcc">
                  {item.icon === "ChatBubbleOutlineOutlined" && (
                    <ChatBubbleOutlineOutlined
                      sx={{ color: `${item.iconColor}` }}
                    />
                  )}
                  {item.icon === "LocalPostOfficeOutlined" && (
                    <LocalPostOfficeOutlined
                      sx={{ color: `${item.iconColor}` }}
                    />
                  )}
                </RouteIcon>
                {!collapsed && (
                  <Link
                    className="link w100 aifs jcc"
                    to={`/seller-profile/${item.Link}/jhdzbvhjdh`}
                  >
                    <RouteText>{item.link}</RouteText>
                  </Link>
                )}
              </Route>
            </RouteCon>
          ))}
          <Hr style={{ fontSize: collapsed && "13px" }}>interface</Hr>
          {Links[2].map((item) => (
            <RouteCon key={item.id}>
              <Route
                className="flex aifs jcfs"
                item={item.tab}
                onClick={() => {
                  item.tab && handleClick(item.link);
                }}
              >
                <RouteIcon className="flex aic jcc">
                  {item.icon === "ModeEditOutlineOutlined" && (
                    <ModeEditOutlineOutlined
                      sx={{ color: `${item.iconColor}` }}
                    />
                  )}
                  {item.icon === "SettingsOutlined" && (
                    <SettingsOutlined sx={{ color: `${item.iconColor}` }} />
                  )}
                  {item.icon === "LogoutOutlined" && (
                    <LogoutOutlined sx={{ color: `${item.iconColor}` }} />
                  )}
                </RouteIcon>
                {!collapsed && (
                  <>
                    {item.Link ? (
                      <Link
                        className="link w100 flex aifs jcfs"
                        to={`/seller-profile/${item.Link}/hgacvsga `}
                      >
                        <RouteText className="flex aic jcc">
                          {item.link}
                          {item.tab && (
                            <KeyboardTabOutlined sx={{ margin: "0 8px" }} />
                          )}
                        </RouteText>
                      </Link>
                    ) : (
                      <RouteText className="flex aic jcc">
                        {item.link}
                        {item.tab && (
                          <KeyboardTabOutlined sx={{ margin: "0 8px" }} />
                        )}
                      </RouteText>
                    )}
                  </>
                )}
              </Route>
              <>
                {toggle === item.link && item.tab && (
                  <RouteOptions>
                    {item.options.map((item) => (
                      <RouteOptionsText key={item.id}>
                        {item.option}
                      </RouteOptionsText>
                    ))}
                  </RouteOptions>
                )}
              </>
            </RouteCon>
          ))}
                  </Routes>
      </Wrapper>
    </Container>
  );
}

export default Sidemenu;
