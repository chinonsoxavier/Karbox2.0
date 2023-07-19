import { AccountBalanceWallet, ArrowBack, ChevronRight, Edit, FavoriteBorder, MailOutline, SupportAgentOutlined, Update } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomerBreakpoint, lmobile, tablet } from "../../responsive";

const Container = styled.div`
  display: none;
  ${lmobile({ display: "block" })};
  `;
  
  const MobileWrapper = styled.div`
  // padding:0 1vh;
  `;
const ComponentsDetailsText = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-left: 10px;
  color: ${(props) => props.cl};
`;

const MobileHeader = styled.div`
  width: 100%;
  padding: 15px 1vh;
  background: orangered;
  color: white;
`;
const MobileHeaderBigText = styled.span`
  font-weight: 400;
`;
const MobileHeaderText = styled.span`
  font-size: 13px;
  font-weight: 300;
`;

 const MyAccount = styled.div`
   width: 100%;
   background: #f5f5f5;
   color: #949498;
   padding: 6px 1vh;
   box-sizing: border-box;
 `;
 const MyAccountText = styled.span`
   font-weight:400;
 `
 const LinksCon = styled.div`
   font-weight: 300;
   width: 100%;
   font-size: 15px;
   padding: 10px 1vh;
   box-sizing: border-box;
 `;
 const LinksText = styled.span`
   font-weight: 400;
   font-size: 15px;
 `;

  const AccountDropDownButtonCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: ${(props) => props.pd};
    box-sizing: border-box;
    // padding:10px 0;
    height: 100%;
    margin-top:20px;
  `;

  const AccountDropDownButton = styled.button`
    color: ${(props) => props.cl};
    height: 100%;
    font-weight: 600;
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
function MobileAccount() {
  return (
    <Container>
      <MobileWrapper className="flex aifs jcfs fdc">
        <MobileHeader className="flex aifs jcfs fdc">
          <MobileHeaderBigText>Welcome,Chinonso</MobileHeaderBigText>
          <MobileHeaderText>chinonsoxavier26@gmail.com</MobileHeaderText>
        </MobileHeader>
        <ComponentsDetailsText cl="#264996" className="flex aic jcc">
          <AccountBalanceWallet /> 0.00
        </ComponentsDetailsText>
        <MyAccount className="flex aic jcfs">
          <MyAccountText>MY KARBOX ACCOUNT</MyAccountText>
        </MyAccount>
        <LinksCon>
          <Link
            to="/customer/inbox"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText className="flex aic jcc">
              <MailOutline sx={{ fontWeight: 300, margin: "0 8px" }} />
              Inbox
            </LinksText>
            <ChevronRight />
          </Link>
          <Link
            to="/customer/saved-items"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText className="flex aic jcc">
              <FavoriteBorder sx={{ fontWeight: 300, margin: "0 8px" }} />
              Saved Items
            </LinksText>
            <ChevronRight />
          </Link>
          <Link
            to="/customer/recently-viewed"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText className="flex aic jcc">
              <Update sx={{ fontWeight: 300, margin: "0 8px" }} />
              Recently Viewed
            </LinksText>
            <ChevronRight />
          </Link>
          <Link
            to="/customer/account-management"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText className="flex aic jcc">
              <SupportAgentOutlined sx={{ fontWeight: 300, margin: "0 8px" }} />
              Lived Help
            </LinksText>
            <ChevronRight />
          </Link>
          <MyAccount className="flex aic jcfs">
            <MyAccountText>ACCOUNT SETTINGS</MyAccountText>
          </MyAccount>
          <Link
            to="/customer/close-account"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText>Account Management</LinksText>
            <ChevronRight />
          </Link>
          <Link
            to="/customer/close-account"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText>Address Book</LinksText>
            <ChevronRight />
          </Link>
          <Link
            to="/customer/close-account"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText>Newsletter Prefrences</LinksText>
            <ChevronRight />
          </Link>
          <Link
            to="/customer/close-account"
            className="link flex aic jcsb w100 flex1 "
            id="MobileAccountLinks"
          >
            <LinksText>Close Account</LinksText>
            <ChevronRight />
          </Link>
          <AccountDropDownButtonCon>
            <AccountDropDownButton bg="transparent" cl="orangered">
              LOGOUT
            </AccountDropDownButton>
          </AccountDropDownButtonCon>
        </LinksCon>
      </MobileWrapper>
    </Container>
  );
}

export default MobileAccount;
