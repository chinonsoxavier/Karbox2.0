import styled from "styled-components";
import {Home,Phone,Send,MaiilOutlined} from '@mui/icons-material'
import background from "../../images/Homepage-VS-Suvs-Background_LEX-BKG-CY14-0003_1204x800 (26).jpg";
import img1 from "../../images/lexus-homepage-tile-750x750-LEX-GXG-MY22-0073.jpeg";
import img2 from "../../images/nx-phev.png";

const Container = styled.div`
  max-width: 380px;
  ${CustomerBreakpoint({
    maxWidth: "100px",
  })};
  margin: 5px 1px;
  background-color: whitesmoke;
  background-color: #063970;
  color: white;
  padding-bottom: 20px;
  //   flex:1;

  &:hover {
    transform: scale(1.01);
  }
`;
  const ImageCon = styled.div`
    background: url(./hero-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  `;
const Image = styled.img`
   width:100%;
`;

const Details = styled.div`
   background-color:#063970;
   color:white;
`
const NameCon = styled.div``
const Name = styled.span`
  color: white;
`;
const ConditionCon = styled.div`
  background-color: #154c79;
  padding:3px;
  margin:3px;
`;
const Condition = styled.span`
  color: orangered;
  font-size:10px;
`;

const TextCon = styled.div`
  background-color: #063970;
  padding: 10px 10px;
`;
const Text = styled.span``
const Vr = styled.div`
   background:white;
   border-left:1px solid white;
   height:15px;
   color:white;
`

const PriceWrapper = styled.div`
  padding:10px 10px;
`
const PriceCon = styled.div`
   padding:10px 10px;
   flex:1;
   border:1px solid #154c79;
   box-sizing:border-box;
`
const Price = styled.span`
   font-size:17px;
   color:white;
   font-weight:400;
`
const ButtonsCon = styled.div``
const ButtonFilled = styled.button`
  color: white;
  flex: ${(props) => props.flex};
  margin: 0 8px;
  background: orangered;
  background-color: #154c79;
  //   background-color:${(props) =>
    props.type === "filled" ? "#063970" : "transparent"}
  border: none;
  padding: 10px;
  width: 100%;
  flex: 3;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;
const Button = styled.button`
  color: white;
  flex: ${(props) => props.flex};
  margin: 0 8px;
  background: transparent;
  //   background-color: #154c79;
  //   background-color:${(props) =>
    props.type === "filled" ? "#063970" : "transparent"}
  border: 1px solid #154c79;
  padding: 5px;
  flex: 1;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

function ProductCard() {
  return (
    <Container>
      <ImageCon bg={background}>
        <Image src={img1} alt="" />
      </ImageCon>
      <Details className="flex aic jcc w100 bsbb">
        <ConditionCon>
          <Condition>Brand New</Condition>
        </ConditionCon>
        <Name>Lexus Rc 33400</Name>
        {/* <NameCon className='flex aic jcc w100' > */}
        {/* </NameCon> */}
      </Details>
      <TextCon className="flex aic jcsb w100 bsbb">
        <Text>33500 mi</Text>
        <Vr />
        <Text>33500 mi</Text>
        <Vr />
        <Text>33500 mi</Text>
        <Vr />
        <Text>33500 mi</Text>
        <Vr />
        <Text>33500 mi</Text>
      </TextCon>
      <PriceWrapper className='bsbb w100 flex aic jcc' >
      <PriceCon className="flex aic jcc w100">
        <Price> $ 26,500</Price>
      </PriceCon>
      </PriceWrapper>
      <ButtonsCon className="flex aic jcc w100">
        <Button className="flex aic jcc w100">
          <Home />
        </Button>
        <Button className="flex aic jcc w100">
          <Phone />
        </Button>
        <ButtonFilled type="filled" className="flex aic jcc w100">
          {/* <Send /> */}
          Contact Dealer
        </ButtonFilled>
      </ButtonsCon>
    </Container>
  );
}

export default ProductCard;
