import { AccountBalanceWallet, ArrowBack, Edit } from "@mui/icons-material";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CustomerBreakpoint, lmobile, tablet } from '../../responsive'
const Container = styled.div`
   box-sizzing:border-box;
  ${lmobile({display:'none'})}
`
const Wrapper = styled.div`
`
const Header = styled.div`
   box-sizing:border-box;
   padding:7px 10px;
`
const Hr = styled.hr`
   border:none;
   background-color:#eee;
   height:whitesmoke;
   flex:1;
   width:100%;
   margin:8px 0;
   height:1px;
`

const HeaderText = styled.p`
   font-weight:500;
`
const AccountComponents = styled.div`
  padding: 0 10px;
  ${CustomerBreakpoint({flexDirection:'column'})}
`;
const Components = styled.div`
  background-color: white;
  border: 1px solid whitesmoke;
  flex: 1;
  min-height:150px;
  min-width:300px;
  width:100%;
  margin:5px 5px;
`;
const ComponentsHeader = styled.div`
  border-bottom: 1px solid whitesmoke;
  margin:10px 0;
  width:100%;
  padding:6px 0;
`;
const ComponentsText = styled.p`
  margin-left:10px;
  font-size: 15px;
  font-weight: 500;
`;
const ComponentsDetails = styled.div`
  padding: 6px 10px;
`;
const ComponentsDetailsText = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-left: 10px;
  color:${props=>props.cl}
`;
const ComponentsDetailsTxt = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: gray;
  margin-left: 10px;
  max-width:200px;
`;


function Account({user}) {
  return (
    <Container className='flex aifs jcfs fdc' >
      <Wrapper className="bsbb">
        <Link to="/" className="link">
          <Header>
            <HeaderText className="flex aic jcfs">
              <ArrowBack sx={{ fontSize: "18px" }} />
              Account Overview
            </HeaderText>
          </Header>
        </Link>
        <Hr />
        <AccountComponents className="flex aifs jcsb wrap">
          <Components className="flex aifs jcfs fdc bsbb">
            <ComponentsHeader className="flex aifs jcfs ">
              <ComponentsText>ACCOUNT DETAILS</ComponentsText>
            </ComponentsHeader>
            <ComponentsDetails className="flex aifs jcfs bsbb fdc w100">
              <ComponentsDetailsText>{user.username}</ComponentsDetailsText>
              <ComponentsDetailsTxt>{user.email}</ComponentsDetailsTxt>
            </ComponentsDetails>
          </Components>
          <Components className="flex aifs jcfs fdc bsbb">
            <ComponentsHeader className="flex aic jcsb w100 ">
              <ComponentsText>ADDRESS BOOK</ComponentsText>
              <Link to="/customer/address-book">
                <Edit sx={{ color: "orangered", cursor: "pointer" }} />
              </Link>
            </ComponentsHeader>
            <ComponentsDetails className="flex aifs jcfs bsbb fdc w100">
              <ComponentsDetailsText>
                Your default shipping address:
              </ComponentsDetailsText>
              <ComponentsDetailsTxt>{user.username}</ComponentsDetailsTxt>
              <ComponentsDetailsTxt>{user.address}</ComponentsDetailsTxt>
              <ComponentsDetailsTxt>{user.phonenumber}</ComponentsDetailsTxt>
            </ComponentsDetails>
          </Components>
          <Components className="flex aifs jcfs fdc bsbb">
            <ComponentsHeader className="flex aifs jcfs ">
              <ComponentsText>JUMIA CREDIT STORE</ComponentsText>
            </ComponentsHeader>
            <ComponentsDetails className="flex aifs jcfs bsbb fdc w100">
              <ComponentsDetailsText cl="#264996" className="flex aic jcc">
                <AccountBalanceWallet /> 0.00
              </ComponentsDetailsText>
            </ComponentsDetails>
          </Components>
          <Components className="flex aifc jcsb fdc bsbb">
            <ComponentsHeader className="flex aifs jcsb ">
              <ComponentsText>NEWSLETTER PREFRENCES</ComponentsText>
              <Link to="/customer/address-book">
                <Edit sx={{ color: "orangered", cursor: "pointer" }} />
              </Link>
            </ComponentsHeader>
            <ComponentsDetails className="flex aifs jcfs bsbb fdc w100">
              <ComponentsDetailsText>
                You are currently subcreibed to following newsletters:
              </ComponentsDetailsText>
              <ComponentsDetailsTxt>daily newsletter</ComponentsDetailsTxt>
            </ComponentsDetails>
          </Components>
        </AccountComponents>
      </Wrapper>
    </Container>
  );
}

export default Account