import { ArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import img from "../../images/20230215_200642.png";
import { tablet, Laptop, mobile, ltablet, smobile } from "../../responsive";
const Container = styled.div`
  color: black;
  height: 90vh;
  ${ltablet({height:'auto'})};
  ${mobile({height:'auto'})};
`;
const Wrapper = styled.div``;
const Product = styled.div`
  margin-top: 100px;
  ${tablet({ flexDirection: "column", alignItems: "flex-start" })};
  ${mobile({ alignItems: "flex-start" })};
`;
const ProductLeft = styled.div`
  margin-right: 60px;
`;
const ProductDetails = styled.div`
  color: white;
  padding-left: 10px;
  border-left: 1px solid orangered;
`;

const ProductText = styled.p`
  font-size: ${(props) => props.fz};
  margin-top: ${(props) => props.mgt};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.cl};
  width: ${(props) => props.wd};
  letter-spacing: ${(props) => props.ls};
  line-height: ${(props) => props.lh};
  ${tablet({ fontSize: "10px" })};
  ${Laptop({ fontSize: "12px" })};
  ${mobile({ fontSize: "6px" })};
`;

const ProductTextBigText = styled.p`
  font-size: ${(props) => props.fz};
  margin-top: ${(props) => props.mgt};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.cl};
  width: ${(props) => props.wd};
  letter-spacing: ${(props) => props.ls};
  line-height: ${(props) => props.lh};
  ${tablet({ fontSize: "20px" })};
  ${Laptop({ fontSize: "23px" })};
  ${mobile({ fontSize: "15px" })};
`;
const ProductTextSmallText = styled.p`
  font-size: ${(props) => props.fz};
  margin-top: ${(props) => props.mgt};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.cl};
  width: ${(props) => props.wd};
  letter-spacing: ${(props) => props.ls};
  line-height: ${(props) => props.lh};
  ${tablet({ fontSize: "10px" })}
  ${Laptop({ fontSize: "12px" })}
  ${mobile({ fontSize: "6px" })}
  ${tablet({ marginTop: "-10px" })}
`;

const PriceCon = styled.div``;

const Price = styled.p`
  color: white;
  font-size: ${(props) => props.fz};
  margin-top: ${(props) => props.mgt};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.cl};
  ${mobile({ fontSize: "13px" })}
`;

const Button = styled.button`
  padding: 6px;
  margin: ${(props) => props.mgt};
  cursor: pointer;
  font-weight: ${(props) => props.type === "filled" && 700};
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid grey")};
  background-color: ${(props) => (props.type === "filled" ? "white" : "black")};
  color: ${(props) => (props.type === "filled" ? "black" : "white")};
  ${tablet({ padding: "4px", fontSize: "10px" })}
  ${mobile({ padding: "2px", fontSize: "7px" })}
`;

const ProductRight = styled.div`
  margin-top:50px;
`;
const ProductImage = styled.img`
  width: 100%;
  max-width: 750px;
  ${mobile({ width: "200px" })}
`;

const EngineDetailsCon = styled.div`
  margin-top: 90px;
  ${mobile({ justifyContent: "flex-start" })}
`;
const Div = styled.div`
  border-right: 2px solid white;
  height: 19px;
  ${mobile({margin:'0 5px'})}
  `;
  
  const EngineDetails = styled.div`
  color: white;
  margin: 0 30px;
  ${tablet({ margin: "0 10px" })}
  ${mobile({ margin: "0", justifyContent: "flex-start" })}
`;
const EngineDetailsBigText = styled.p`
  font-weight: 600;
  ${tablet({ whiteSpace: "nowrap", fontSize: "10px" })}
  ${mobile({ fontSize: "7px" })}
  ${smobile({ fontSize: "5px" })}
`;
const EngineDetailsSmallText = styled.p`
  color: grey;
  margin-top: -7px;
  font-size: 13px;
  ${tablet({ whiteSpace: "nowrap", fontSize: "10px" })}
  ${mobile({ fontSize: "9px" })}
  ${smobile({ fontSize: "7px" })}
`;

function HomeMenu() {
  return (
    <Container className="black">
      <Wrapper>
        <Product className="flex aic jcsb  w100">
          <ProductLeft className="">
            <ProductDetails>
              <ProductText
                className="s"
                mgt="0"
                fz="12px"
                fw={600}
                cl="orangered"
              >
                MUSCLE CAR
              </ProductText>
              <ProductTextBigText
                className="v wsn"
                mgt="-7px"
                fz="31px"
                fw={600}
              >
                MAUNG SPORT-GT
              </ProductTextBigText>
              <ProductTextSmallText
                mgt="-25px"
                ls="1px"
                lh="14px"
                cl="gray"
                fz="13px"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti molestias doloribus, eaque nostrum voluptatem ex earum
                a consequuntur. Eveniet, vitae!
              </ProductTextSmallText>
            </ProductDetails>
            <PriceCon>
              <Button mgt="10px 0">Current Price</Button>
              <Price fz="27px" mgt="-10px">
                $ 599.99
              </Price>
              <Button className="s flex aic jcc " type="filled">
                DISCOVER MORE
                <ArrowRight id="dis_icon" />
              </Button>
            </PriceCon>
          </ProductLeft>
          <ProductRight className="w100 flex aic jcc ">
            <ProductImage src={img} alt="" />
          </ProductRight>
        </Product>
        <EngineDetailsCon className="flex aic jcfe w80">
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsBigText>2.4 sec</EngineDetailsBigText>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
          <Div />
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsBigText>2.4 sec</EngineDetailsBigText>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
          <Div />
          <EngineDetails className="flex aic jcc fdc">
            <EngineDetailsBigText>2.4 sec</EngineDetailsBigText>
            <EngineDetailsSmallText>From 0-60 mph</EngineDetailsSmallText>
          </EngineDetails>
        </EngineDetailsCon>
      </Wrapper>
    </Container>
  );
}

export default HomeMenu;
