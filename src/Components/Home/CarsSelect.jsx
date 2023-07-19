import styled from "styled-components";
import { ArrowRightAltTwoTone } from "@mui/icons-material";

import img from "../../images/Lamborghini-Huracan-Evo-c134108-141.jpg";
import { mobile, tablet } from "../../responsive";

const Container = styled.div`
  margin-top: 50px;
  color: white;
  z-index:-1;
`;
const Wrapper = styled.div``;
const Header = styled.div`
  width: 100%;
`;
const HeaderText = styled.span`
  color: white;
  font-size: 19px;
  ${mobile({fontSize:"9px"})}
`;
const HeaderTextActive = styled.div`
  width: 25px;
  border-top: 2px solid orangered;
  margin: 5px 0;
`;

const Button = styled.button`
  border: 1px solid white;
  padding: 8px;
  color: white;
  background-color: black;
  cursor: pointer;
  ${mobile({ fontSize: "6px",padding:'4px' })}
`;

const SelectCarsCon = styled.div``;
const SelectCars = styled.div`
  display:flex;
   ${tablet({display:'none'})}
`;
const SelectCarsText = styled.p`
  color: gray;
`;
const SelectCarsImageCon = styled.div`
   ${tablet({maxWidth:"780px",flex:1})}
`;
const SelectCarsImage = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  ${tablet({ height:'200px' })}
  ${mobile({ height:'150px' })}
`;
const SelectCarsImgCon = styled.div``;
const SelectCarsTextWrapper = styled.div``;
const SelectCarsTextCon = styled.div`
  background-color: grey;
  padding-top: 15px;
  padding-bottom: 10px;
  top: -30px;
  width: 100%;
  z-index:1;
  position: relative;
`;
const SelectCarsImageBigText = styled.p`
  font-size: 19px;
  font-weight: ${(props) => props.fw};
   margin-top: -5px;
  margin-left: 20px;
`;
const SelectCarsImageText = styled.p`
  font-size: 13px;
  ${mobile({ fontSize: "8px" })};

  margin-top: -5px;
  margin-left: 20px;
  font-weight: ${(props) => props.fw};
  width: ${(props) => props.wd};
`;
const ViewButton = styled.button`
  border: none;
  padding: 8px;
  background-color: orangered;
  color:white;
  cursor:pointer;
 
`;

function CarsSelect() {
  return (
    <Container>
      <Wrapper>

        <Header className="flex aic jcsb ">
          <HeaderText className="s">
            Get all Luxurios Cars
            <HeaderTextActive></HeaderTextActive>
          </HeaderText>
          <Button>VIEW ALL</Button>
        </Header>
        <SelectCarsCon className="flex aifs jcsb">
          <SelectCars className=" aifs jcc fdc flex1">
            <SelectCarsText>Lamborghini</SelectCarsText>
            <SelectCarsText>Porsche</SelectCarsText>
            <SelectCarsText>BMW</SelectCarsText>
            <SelectCarsText>Land Rover</SelectCarsText>
            <SelectCarsText>Mercedes</SelectCarsText>
            <SelectCarsText>Nissan</SelectCarsText>
            <SelectCarsText>Rolls Royce</SelectCarsText>
            <SelectCarsText>Bugatti</SelectCarsText>
          </SelectCars>
          <SelectCarsImageCon className="flex5 ">
            <SelectCarsImgCon>
              <SelectCarsImage src={img} alt="" />
            </SelectCarsImgCon>
            <SelectCarsTextCon className="flex aic jcsb">
              <SelectCarsTextWrapper>
                <SelectCarsImageBigText fz="19px" mfz='9px' fw={300}>
                  Lamborghini Avenbador{" "}
                </SelectCarsImageBigText>
                <SelectCarsImageText fz="13px" mfz='8' fw={300} >
                  Packed with power normaly reserved for track,M generates
                  performance unlike anything else.And after four decades
                </SelectCarsImageText>
              </SelectCarsTextWrapper>
            <ViewButton className="flex aic jcc">
              <ArrowRightAltTwoTone />
            </ViewButton>
            </SelectCarsTextCon>
          </SelectCarsImageCon>
        </SelectCarsCon>
      </Wrapper>
    </Container>
  );
}

export default CarsSelect;
