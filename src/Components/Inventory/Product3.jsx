import { PlaceOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import img2 from '../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg'
import { Link } from 'react-router-dom'
import { CustomerBreakpoint, InventoryBreakpoint, lmobile, mmobile, tablet } from '../../responsive';

const Container = styled.div`
  border: 1px solid #eee;
  // flex: 1;
  ${CustomerBreakpoint({
    // maxWidth: "130px",
  })};
  ${InventoryBreakpoint({
    // maxWidth: "170px",
  })};
  // max-width: 100%;
  // min-width: 100px;
  //   background:black;
  padding: 10px 0;
  cursor: pointer;
  display:grid;
  grid-template-column:50% 50%;
  flex-direction:row;
  ${lmobile({flexDirection:'column'})};
  width:100%;
  `;
  
  const Wrapper = styled.div`
    transition: 1s all;
    width: 100%;
    // margin:5px;

    &:hover {
      transform: scale(1.02);
    }
  `;
    
    const ImgCon = styled.div`
      //    width:200px;
      //   max-width
      height: 100%;
      width: 100%;
      min-width:auto;
    `;
    const Img = styled.img`
width:100%;
height:100%;
object-fit:contain;
`
const Details = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  color: black;
  flex:1;
`;
const DetailsNameText = styled.span`
  font-size: 13px;
  // white-space:nowrap;
  text-overflow:ellipsis;
  margin: 5px 0;
  color: black;
  ${CustomerBreakpoint({
    fontSize: "9px",
  })};
`;
const DetailsPriceText = styled.span`
  margin: 5px 0;
  font-size: 15px;
  ${lmobile({fontSize:'10px'})}

  color: ${(props) => props.type === "condition" && "grey"};
  ${CustomerBreakpoint({
    fontSize: "11px",
  })};
`;
const Condition = styled.div`
  background: #eee;
  border-radius: 3px;
  padding: 10px;
  ${CustomerBreakpoint({padding:'5px'})}
`;
const ConditionText = styled.span`
  margin: 5px 0;
  font-size:10px;
  ${CustomerBreakpoint({
    fontSize: "7px",
  })};
`;

const YearCon = styled.div`
padding:7px;
border:1px solid grey;
`
const YearText = styled.span``

function Product3({odd}) {
  return (
    <Wrapper odd={odd}>
      <Link to="/vehicle/dbb" className="">
        <Container className="" odd={odd}>
          <ImgCon>
            <Img src={img2} />
          </ImgCon>
          <Details className="flex aifs jcc fdc">
            <YearCon className="">
              <YearText>2017</YearText>
            </YearCon>
            <DetailsNameText className="v">
              Lamborghini Aventador 305
            </DetailsNameText>
            <DetailsPriceText>$ 375,00</DetailsPriceText>
            <DetailsPriceText type="condition" className="flex aifs jcfs">
              <PlaceOutlined id="FooterIcons" />
              Nigeria,Lagos
            </DetailsPriceText>
            <Condition className="flex aic jcc">
              <ConditionText>Brand New</ConditionText>
            </Condition>
          </Details>
        </Container>
      </Link>
    </Wrapper>
  );
}

export default Product3