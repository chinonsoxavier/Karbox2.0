import { NotificationsOutlined, Search, Settings } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import img from '../../images/team4.png'

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  z-index:100;
`;
const Wrapper = styled.div`
`

const HeaderText = styled.span`
   font-size:27px;
   font-weight:500;
   padding:0 10px;
`
    const WrapperLeft = styled.div`
       flex:3;
    `
    const WrapperRight = styled.div`
       flex:1;
    `
const InputCon = styled.div`
   background:white;
   color:grey;
   width:100%;
   flex:5;
   margin:0 7px;
   `
   const Input = styled.input`
   padding:6px 0;
   border:none;
   outline:none;
   background:transparent;
   width:100%;

   &::placeholder{
    font-size:16px;
   }
`
const InputButtonCon = styled.button`
   border:none;
   padding:10px 17px;
   background:orangered;
   color:white;
   flex:1;
   margin:0 7px;
   cursor:pointer;
`
const InputIconCon = styled.div`
   padding:6px 6px;
   background:orangered;
   height:100%;
`
const IconCon = styled.div`
   margin:0 20px;
`
const ImgCon = styled.div`
   border-radius:50%;
   display:inline-block;
   margin:0 20px;
`
const Img = styled.img`
   width:100%;
   border-radius:50%;
   width:30px;
   height:30px;
   display:inline-block;
`
function Header({route}) {
 const Route = route.toString().replace('-',' ')
const CapRoute =
  Route.charAt(0).toUpperCase() +
  Route.slice(1);
CapRoute.replace('/-/g',' ')
console.log(route)

  return (
    <Container>
      <Wrapper className="flex aic jcsb w100">
        <WrapperLeft className="flex aic jcsb">
          <HeaderText>{CapRoute}</HeaderText>
        </WrapperLeft>
        <WrapperRight className="flex aic jcc ">
          <IconCon className="flex aic jcsb ">
            <Tooltip title="Inbox">
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
            </Tooltip>
          </IconCon>
          <IconCon className="flex aic jcsb ">
            <Tooltip title="Edit Account">
              <IconButton>
                <Settings />
              </IconButton>
            </Tooltip>
          </IconCon>
          <ImgCon className="flex aic jcc">
            <Img src={img} alt="" />
          </ImgCon>
        </WrapperRight>
      </Wrapper>
    </Container>
  );
}

export default Header