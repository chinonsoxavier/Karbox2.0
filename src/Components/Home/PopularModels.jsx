import { ArrowRightAlt } from "@mui/icons-material";
import styled from "styled-components";
import img from "../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg";
import { mobile } from "../../responsive";

const Container = styled.div``
const Wrapper = styled.div``
const Header = styled.div``
const HeaderText = styled.p`
   font-weight:500;
  ${mobile({fontSize:"9px"})}
;
`
const PopularModelCon = styled.div``
const PopularModel = styled.div`
   position:relative;
   margin:5px;
`
const PopularModelTextCon = styled.div`
  background-color: grey;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 5px 5px;
  ${mobile({ padding:'0' })}
`;
const ModelImage = styled.img`
   max-width:100%;
   flex:1;
`
const ModelText = styled.span`
  font-size: 23px;
  ${mobile({ fontSize: "8px" })}
`;


function PopularModels() {
  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcc w100">
          <HeaderText>Popular MODELS</HeaderText>
        </Header>
        <PopularModelCon className="flex aic jcc w100">
          <PopularModel>
            <ModelImage src={img} alt="" />
            <PopularModelTextCon className="flex aic jcsb bsbb" >
            <ModelText >
              Electric 
            </ModelText>
              <ArrowRightAlt sx={{fontSize:'30px'}} id='PPM_ic' />
            </PopularModelTextCon>
          </PopularModel>
          <PopularModel>
            <ModelImage src={img} alt="" />
            <PopularModelTextCon className="flex aic jcsb bsbb" >
            <ModelText >
              Rare 
            </ModelText>
              <ArrowRightAlt sx={{fontSize:'30px'}} id='PPM_ic'  />
            </PopularModelTextCon>
          </PopularModel>
          <PopularModel>
            <ModelImage src={img} alt="" />
            <PopularModelTextCon className="flex aic jcsb bsbb" >
            <ModelText >
              Hybrid 
            </ModelText>
              <ArrowRightAlt sx={{fontSize:'30px'}} id='PPM_ic'  />
            </PopularModelTextCon>
          </PopularModel>
          <PopularModel>
            <ModelImage src={img} alt="" />
            <PopularModelTextCon className="flex aic jcsb bsbb" >
            <ModelText >
              Luxury cars 
            </ModelText>
              <ArrowRightAlt sx={{fontSize:'30px'}} id='PPM_ic'  />
            </PopularModelTextCon>
          </PopularModel>
        </PopularModelCon>
      </Wrapper>
    </Container>
  );
}

export default PopularModels;
