import styled from "styled-components";
import {Add, Home, HomeOutlined, MessageOutlined, PersonOutlineOutlined, StoreMallDirectoryOutlined} from '@mui/icons-material'
import { lmobile } from "../../responsive";
import {Link} from 'react-router-dom'
const Container = styled.div`
  position: fixed;
  bottom:20px;
  display: none;
  background:transparent;
  align-items:Center;
  justify-content:center;
  z-index: 100;
  height: 7vh;
  width:100%;
  ${lmobile({ display: "flex" })};
`;
const Wrapper = styled.div`
  width: 80%;
  background: white;
  padding: 10px 5px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  transition:1s all;

  Link{
    &::hover{
      background:#eee;
    }
  }
`;
const LinkCon = styled.div`
   padding:0 10px;
   box-sizing:border-box;
   flex:1;
   height:100%;
   font-size:12px;
`

const LinkActive = styled.div`
  border-top:2px solid orangered;
  width:100%;
  display:none;
`;

const CreateProduct = styled.div`
   background:white;
   height:50px;
   width:50px;
   position:absolute;
   bottom:-10px;
   padding:8px;
   border-radius:50%;
   margin:0 8px;
`
const CreateProductIcon = styled.div`
  border-radius:50%;
  height:40px;
  width:40px;
  background:orangered;
  color:white;
`

function MobileBottom() {
  return (
    <Container className="v w100 bgw flex bgr aic jcc">
      <Wrapper className="flex aic jcsb aic jcsa w100">
        <Link className="link" to="/">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <HomeOutlined />
            Home
          </LinkCon>
        </Link>
        <Link className="link" to="/account">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <PersonOutlineOutlined />
            Profile
          </LinkCon>
        </Link>
        <Link style={{position:'relative',color:'black',margin:'0 10px'}} className="link flex aic jcc fdc">
          <CreateProduct className="flex aic jcc">
            <CreateProductIcon className="flex aic jcc">
              <Add />
            </CreateProductIcon>
          </CreateProduct>
          <span style={{color:'black',zIndex:100,top:'15px',position:'relative',fontSize:'12px'}} >
          Sell
          </span>
        </Link>
        <Link className="link" to="/inventory">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <StoreMallDirectoryOutlined />
            Inventory
          </LinkCon>
        </Link>
        <Link className="link" to="/models">
          <LinkCon className="flex aic jcc fdc">
            <LinkActive></LinkActive>
            <MessageOutlined />
            Messages
          </LinkCon>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default MobileBottom;
