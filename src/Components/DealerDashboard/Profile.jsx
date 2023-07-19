import styled from "styled-components";
import Header from "./Header";
import img from '../../images/team1.png'
import { AddAPhotoOutlined, Print } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #fff7f3;
`;
const Wrapper = styled.div`
  background: #fff7f3;
  white
`;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
`;

const MainIntro = styled.div`
`;
const MainIntroLeft = styled.div`
  margin-right: 40px;
`;
const MainIntroLeftImg = styled.img`
   border-radius:50%;
   width:110px;
   height:110px;
`
const MainIntroRight = styled.div`
  background: #fff7f3;
`;
const MainIntroRightText = styled.span`
   font-size:32px;
   font-weight:500;
`
const MainIntroRightButton = styled.button`
   background:${props=>props.filled ? 'orangered' : 'none'};
   border:${props=>props.filled ? 'none' : '1px solid orangered'};
   color:${props=>props.filled ? 'white' : 'orangered'};
   margin:${props=>props.filled && '10px '};
   padding:10px;
   border-radius:4px;
   display:flex;
   align-items:Center;
   justify-content:center;
`
const DetailsConLeft = styled.div`
  background: white;
  flex:4;
  box-sizing:border-box;
  border-radius:3px;
  box-sizing:border-box;
  padding:10px;
  margin-right:20px;
`;

const DetailsCon = styled.div`
`;
const Details = styled.div`
max-width:100%;
width:45%;
  padding:10px 0;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction:column;
  margin:0 15px;
`
const DetailsInput = styled.input`
  width: 100%;
  padding: 12px 7px;
  border: 1px solid grey;
  outline: none;
  margin: 5px 0;
  &::onfocus {
    border: none;
  }
`;
const DetailsLabel = styled.label`
   margin:8px 0;
`
const ButtonCon = styled.div`
   border:none
   background-color:orangered;
   padding:10px;
   color:white;
`
const AccountCon = styled.div``
const Account = styled.div`
   flex:1;
   margin-right:${props=>props.mg};
   background:#eee;
   padding:10px;
`
const AccountLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction:column;
`;
const AccountText = styled.span`
  font-weight:500;
  margin:8px 0;
`;
const AccountTextSm = styled.span`
   font-size:12px;
   font-weight:200;
   line-height:20px;
`
   const AccountRight = styled.div`
      font-size:16px;
   `
   const AccountRightButton = styled.button`
   cursor:pointer;
      background:white;
      color:${props=>props.cl};
      padding:5px;
      border:none;
      font-weight:500;
   `

function Profile({ route }) {
  return (
    <Container>
      <Wrapper>
        <HeaderCon>
          <Header route={route} />
        </HeaderCon>
        <MainIntro className="flex aifs jcfs">
          <MainIntroLeft>
            <MainIntroLeftImg src={img} alt="" />
          </MainIntroLeft>
          <MainIntroRight className="flex aifs jcsb fdc">
            <MainIntroRightText>Chinonso Xavier</MainIntroRightText>
            <MainIntroRightText className="flex aic jcc">
              <MainIntroRightButton filled className="flex aic jcc">
                Change Avatar{" "}
                <AddAPhotoOutlined sx={{ fontSize: 22, margin: "0 5px" }} />{" "}
              </MainIntroRightButton>
              <MainIntroRightButton>
                <Print />
              </MainIntroRightButton>
            </MainIntroRightText>
          </MainIntroRight>
        </MainIntro>
        <DetailsCon className="flex aicfsjcsb w100">
          <DetailsConLeft className="flex aifs jcc wrap ">
            <Details className="flex aifs jcc fdc">
              <DetailsLabel for="name label"> Name</DetailsLabel>
              <DetailsInput name="name lebel" defaultValue="chinonso " />
            </Details>
            <Details>
              <DetailsLabel for="LastName label">Last name</DetailsLabel>
              <DetailsInput name="LastName lebel" defaultValue=" xavier" />
            </Details>
            <Details>
              <DetailsLabel for="Email label">Email</DetailsLabel>
              <DetailsInput
                name="Email lebel"
                defaultValue="chinonsoxavier26@gmail.com"
              />
            </Details>
            <Details>
              <DetailsLabel for="Price label">Address</DetailsLabel>
              <DetailsInput
                name="Price lebel"
                defaultValue="76 Adekeye Street "
              />
            </Details>
            <Details>
              <DetailsLabel for="name label">
                Account Manager FullName
              </DetailsLabel>
              <DetailsInput name="name lebel" defaultValue="chinonso xavier" />
            </Details>
            <Details>
              <DetailsLabel for="Phonenumber label">Phone Number</DetailsLabel>
              <DetailsInput
                name="Phonenumber lebel"
                defaultValue="08129785638"
              />
            </Details>
            <ButtonCon className='aifs jcfs w100 ' >
                <MainIntroRightButton filled>SAVE CHANGES</MainIntroRightButton>
            </ButtonCon>
          </DetailsConLeft>
          {/* <DetailsConRight>
            <RightMenuCon>
              <RightMenu className="flex aifs jcfs">
                <PermIdentityOutlined />
                <RightMenuText>Profile</RightMenuText>
              </RightMenu>
              <RightMenu className="flex aifs jcfs">
                <PermIdentityOutlined />
                <RightMenuText>Password</RightMenuText>
              </RightMenu>
              <RightMenu className="flex aifs jcfs">
                <PermIdentityOutlined />
                <RightMenuText>Notification</RightMenuText>
              </RightMenu>
            </RightMenuCon>
          </DetailsConRight> */}
        </DetailsCon>

        <AccountCon className='flex aic jcsb' >
            <Account className='flex aifs jcc' mg='20px' >
              <AccountLeft>
           <AccountText>
            Password
           </AccountText>
           <AccountTextSm >
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis iusto sequi quidem nobis aperiam excepturi molestias. Ipsa?
           </AccountTextSm>
              </AccountLeft>
              <AccountRight>
                <AccountRightButton cl='black' >Change</AccountRightButton>
              </AccountRight>
            </Account>
            <Account className='flex aifs jcc' >
              <AccountLeft>
           <AccountText  >
            Remove account
           </AccountText>
           <AccountTextSm >
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis iusto sequi quidem nobis aperiam excepturi molestias. Ipsa?
           </AccountTextSm>
              </AccountLeft>
              <AccountRight>
                <AccountRightButton cl='orangered' >Deactivate</AccountRightButton>
              </AccountRight>
            </Account>
        </AccountCon>
      </Wrapper>
    </Container>
  );
}

export default Profile;
