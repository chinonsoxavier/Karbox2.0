import Menu1 from './Menu'
import {Laptop, lmobile, mmobile, mobile,} from '../../responsive'
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import {  Menu, Search } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
const Container = styled.div`
  color: white;
  top: 0;
  background-color: ${props=>props.bgt==='scrollTrasparent' ? 'transparent':props.onscroll};
  display: none;
  width: 100%;
  padding-left: 2vh;
  padding-right: 2vh;
  padding-top:20px;
  box-sizing:border-box;
  ${mobile({padding:'0 2vh'})};
  ${lmobile({ display: "block" })};

`;
  const Wrapper = styled.div`
    position: sticky;
    top: 0;    
  `;
  
const Logo = styled.span`
   flex:1;
`;
const LogoTxt = styled.h3`
  color: ${(props) => props.cl};
  max-width: ${(props) => props.wd};
  font-weight: 700;
  ${Laptop({ fontSize:'20px' })}
`;


const InputCon = styled.div`   
background:white;
border-radius:16px;
height:35px;
padding-left:7px;
padding-right:7px;
width:200px;
flex:2;
`
const Input = styled.input`
   border:none;
   outline:none;
    width:100%;
   &::placeholder{
    color:grey;
   }
`

function MobileHeader({bgt,onscroll}) {
const location = useLocation();
   const route = location.pathname.split("/")[0];
   const [menu, setMenu] = useState(false);
   const [color,setColor]= useState()

   useEffect(() => {
    setMenu(false)
   }, [route]);

useEffect(() => {
  window.addEventListener("scroll", () => {
    const height = window.pageYOffset;
    if (height > 400) {
      setColor(onscroll);
    }
  });
}, [color, onscroll]);



  return (
    <Container className=" " id='contactUs' bgt={bgt} onscroll={onscroll} >
      <Wrapper className="flex aic jcsb">
        <Logo className="flex aifs jcfs">
          <LogoTxt className="s" cl="white">
            KAR
          </LogoTxt>
          <LogoTxt className="s" cl="orangered">
            BOX
          </LogoTxt>
        </Logo>
        <InputCon className="flex aic jcsb">
          <Search sx={{color:'grey',fontSize:'20px'}} />
          <Input placeholder='search make,model, or type.....' />
          <LogoTxt
            className="s flex jcfe"
            cl="white"
            wd='40px'
            onClick={() => {
              setMenu(true);
            }}
          >
            <Menu sx={{ color: "black", fontSize: "30px" }} />
          </LogoTxt>
        </InputCon>
      </Wrapper>
            {menu && <Menu1 setMenu={setMenu} />}
    </Container>
  );
}

export default MobileHeader;
