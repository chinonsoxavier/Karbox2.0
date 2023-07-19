import { FavoriteBorderOutlined, MailOutline, PermIdentityOutlined, SupportAgentOutlined, Update} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Laptop, lmobile, mobile, tablet } from "../../responsive";

const Container = styled.div`
   height:100%;
   min-width:230px;
   max-width:300px;
   ${lmobile({width:'300px',border:'1px solid grey'})}
`;
const Wrapper = styled.div`
height:100%;
`;
const SidebarText = styled.span`
   font-size:15px;
`;

const Hr = styled.hr`
   background-color:#eee;
   height:1px;
   border:none;
   width:100%;
   margin-top:${props=>props.mgt}
`
const AccountDropDownButtonCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${(props) => props.pd};
  box-sizing: border-box;
  // padding:10px 0;
  height:100%;
`;

const AccountDropDownButton = styled.button`
  color: ${(props) => props.cl};
  height:100%;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  corsor: pointer;
  background-color: ${(props) => props.bg};
  border: none;
  // padding: 14px 0;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
`;

function Sidemenu() {
  return (
    <Container className='bgw' >
      <Wrapper className="flex aic jcsb fdc">
        <Link to="/customer/account" className="link flex aic jcfs customerLinks ">
          <PermIdentityOutlined sx={{margin:'0 8px'}} />
          <SidebarText>My Karbox Account</SidebarText>
        </Link>
        <Hr mgt='0' />
        {/* <Link to="/customer/orders" className="link flex aic jcfs customerLinks ">
          <Person2Outlined sx={{margin:'0 8px'}} />
          <SidebarText>Orders</SidebarText>
        </Link> */}
        <Link to="/customer/inbox" className="link flex aic jcfs customerLinks ">
          <MailOutline sx={{margin:'0 8px'}} />
          <SidebarText>Inbox</SidebarText>
        </Link>
        {/* <Link
          to="/customer/pending-reviews"
          className="link flex aic jcfs customerLinks "
        >
          <Person2Outlined sx={{margin:'0 8px'}} />
          <SidebarText>Pending Reviews</SidebarText>
        </Link> */}
        <Link to="/customer/saved-items" className="link flex aic jcfs customerLinks ">
          <FavoriteBorderOutlined sx={{margin:'0 8px'}} />
          <SidebarText>Saved Items</SidebarText>
        </Link>
        <Link
          to="/customer/recently-viewed"
          className="link flex aic jcfs customerLinks "
        >
          <Update sx={{margin:'0 8px'}} />
          <SidebarText>Recently Viewed</SidebarText>
        </Link>
        <Link to="/customer/live-chat" className="link flex aic jcfs customerLinks ">
          <SupportAgentOutlined sx={{margin:'0 8px'}} />
          <SidebarText>Live Help</SidebarText>
        </Link>
        <Hr />
        <Link to="/customer/account-management" className="link flex aic jcfs customerLinks bsbb ">
          <SidebarText>Account Management</SidebarText>
        </Link>
        <Link to="/customer/address-book" className="link flex aic jcfs customerLinks bsbb ">
          <SidebarText>Address Book</SidebarText>
        </Link>
        <Link to="/customer/newsletter-prefrences" className="link flex aic jcfs customerLinks bsbb ">
          <SidebarText>Newsletter Prefrences</SidebarText>
        </Link>
        <Link to="/customer/close-account" className="link flex aic jcfs customerLinks bsbb ">
          <SidebarText>Close Account</SidebarText>
        </Link>
        <Hr />
        <AccountDropDownButtonCon>
          <AccountDropDownButton bg="transparent" cl="orangered">
            LOGOUT
          </AccountDropDownButton>
        </AccountDropDownButtonCon>
      </Wrapper>
    </Container>
  );
}

export default Sidemenu;
