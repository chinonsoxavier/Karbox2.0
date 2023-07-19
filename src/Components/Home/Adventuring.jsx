// import { ArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import img2 from "../../images/20230215_200642.png";
import model from "../../images/rx500h-1.png";
import adventure from "../../images/7684374.png";
import { tablet } from "../../responsive";
// import img from "../../images/Homepage-VS-Suvs-Background_LEX-BKG-CY14-0003_1204x800 (26).jpg";

const Container = styled.div`
  margin: 70px 0;
//   background: url(./hero-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  //   background-color: ${(props) => props.bg};
  //   background:red;
  height: 100vh;
  ${tablet({display:'none'})};
  //   background: url(./Homepage-VS-Suvs-Background_LEX-BKG-CY14-0003_1204x800(26).jpg);
`;
const Wrapper = styled.div`
    background: url(./hero-bg.jpg);
`;
const MainImg = styled.div`
  position: absolute;
  z-index:-1;
`;
const Header = styled.div``;
const HeaderText = styled.h3`
  color: white;
`;

const SelectCarsWrapper = styled.div``
const SelectCarsCon = styled.div`
   padding:15px 0;
   z-index:2;
   width:90%;
`
const SelectCars = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
`
const SelectCarsImg = styled.img`
   max-width:60%;
`
const SelectCarsText = styled.p``

// const Img = styled.img`
//   width: 100%;
//   height: 600px;
//   object-fit: cover;
// `;

const Product = styled.div`
   padding-top:70px;
   margin-top:-50px;
`;
const ProductLeft = styled.div`
  margin-right: -160px;
  padding-left:60px;
position:relative;
z-index:1;
`;
// const ProductDetails = styled.div`
//   color: white;
//   padding-left: 10px;
//   border-left: 1px solid orangered;
// `;

const ProductText = styled.p`
  white-space:nowrap;
  position:relative;
  font-size:${(props) => props.fz};
  margin-top:${(props) => props.mgt};
  top:${(props) => props.tp};
  bottom:${(props) => props.bt};
  font-weight:${(props) => props.fw};
  color:${(props) => props.cl};
  width:${(props) => props.wd};
  letter-spacing:${(props) => props.ls}
  line-height:${(props) => props.lh}
//   left:50px;
//   margin-right:-90px;
`;
// const PriceCon = styled.div``;

// const Price = styled.p`
//   color: white;
//   font-size: ${(props) => props.fz};
//   margin-top: ${(props) => props.mgt};
//   font-weight: ${(props) => props.fw};
//   color: ${(props) => props.cl};
// `;

// const Button = styled.button`
//   padding: 6px;
//   margin: ${(props) => props.mgt};
//   cursor: pointer;
//   font-weight: ${(props) => props.type === "filled" && 700};
//   border: ${(props) => (props.type === "filled" ? "none" : "1px solid grey")};
//   background-color: ${(props) => (props.type === "filled" ? "white" : "black")};
//   color: ${(props) => (props.type === "filled" ? "black" : "white")};
// `;

const ProductRight = styled.div`
  //    background-color:red;
  z-index:2;
`;
const ProductImage = styled.img`
  width: 85%;
`;

const EngineDetailsCon = styled.div`
  margin-top: 90px;
  background:grey;
`;
// const Div = styled.div`
//   border-right: 2px solid white;
//   height: 19px;
// `;

const EngineDetails = styled.div`
  color: white;
  margin: 10px 30px;
`;

const EngineDetailsImg =styled.img`
   max-width:40%;
`

// const EngineDetailsBigText = styled.p`
//   font-weight: 600;
// `;
const EngineDetailsSmallText = styled.p`
  color: white;
//   margin-top: -7px;
  font-size: 13px;
`;

function Adventuring() {
  return (
    <Container className="w100">
      <Header className="flex aic jcc w100">
        <HeaderText>
          Find your perfect companion for an outdoor Adventure{" "}
        </HeaderText>
      </Header>
      <SelectCarsWrapper className='flex aic jcc w100' >
        <SelectCarsCon className="flex aic jcc bgw ">
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
          <SelectCars>
            <SelectCarsImg src={model} alt="" />
            <SelectCarsText>Electric</SelectCarsText>
          </SelectCars>
        </SelectCarsCon>
      </SelectCarsWrapper>
      <Wrapper>
        <MainImg>{/* <Img src={img} alt="" /> */}</MainImg>
        <Product className="flex aic jcc w100">
          <ProductLeft className="">
           <ProductText cl='white' fz='39px' bt='1px' mgt='' fw={500} >Lexus OffRoad</ProductText>
           <ProductText cl='white' fz='39px' mgt='' fw={300} >2023</ProductText>
            {/* <ProductDetails>
              <ProductText
                className="s"
                mgt="0"
                fz="12px"
                fw={600}
                cl="orangered"
              >
                MUSCLE CAR
              </ProductText>
              <ProductText className="v wsn" mgt="-7px" fz="31px" fw={600}>
                MAUNG SPORT-GT
              </ProductText>
              <ProductText
                mgt="-25px"
                ls="1px"
                lh="14px"
                cl="gray"
                fz="13px"
                wd="280px"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti molestias doloribus, eaque nostrum voluptatem ex earum
                a consequuntur. Eveniet, vitae!
              </ProductText>
            </ProductDetails>
            <PriceCon>
              <Button mgt="10px 0">Current Price</Button>
              <Price fz="27px" mgt="-10px">
                $ 599.99
              </Price>
              <Button className="s flex aic jcc " type="filled">
                DISCOVER MORE
                <ArrowRight />
              </Button>
            </PriceCon> */}
          </ProductLeft>
          <ProductRight className="w100 flex aic jcc ">
            <ProductImage src={img2} alt="" />
          </ProductRight>
        </Product>
        <EngineDetailsCon className="flex aic jcc w100">
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsImg src={adventure} alt=''/>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
          {/* <Div /> */}
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsImg src={adventure} alt=''/>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
          {/* <Div /> */}
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsImg src={adventure} alt=''/>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsImg src={adventure} alt=''/>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
          {/* <Div /> */}
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsImg src={adventure} alt=''/>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
          {/* <Div /> */}
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsImg src={adventure} alt=''/>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
        </EngineDetailsCon>
      </Wrapper>
    </Container>
  );
}

export default Adventuring;
