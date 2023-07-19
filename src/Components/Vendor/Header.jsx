import { Notifications, Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import img from '../../images/02 (3).png'

const Wrapper = styled.div``;
const LeftCon = styled.div`
  border: 1px solid #eee;
  position:relative;
  flex:1;
  width:100%;
`;
const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  height:35px;
  flex:1;
  padding-left:26px;
`;

const RightCon = styled.div`
   flex:1;
`
const LogoCon = styled.div`
   border-radius:50%;
   width:35px;
   height:35px;
`
const Logo= styled.img`
   object-fit:contain;
   width:100%;
   height:100%;
`

function Header() {
  return (
    <Container className="bsbb bgw flex aic jcc">
      <Wrapper className="flex aic jcc w100">
        <LeftCon className="flex aic jcc">
          <Input placeholder="search" />
          <Search sx={{ color: "grey", position: "absolute", left: 0 }} />
        </LeftCon>
        <RightCon className="flex aic jcfe">
          <Badge variant="dot" sx={{ color: "orangered" }}>
            <Notifications sx={{ color: "grey" }} />
          </Badge>
          <LogoCon>
            <Logo src={img} />
          </LogoCon>
        </RightCon>
      </Wrapper>
    </Container>
  );
}

export default Header;
