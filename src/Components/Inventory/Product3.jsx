import { PlaceOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import img2 from '../../images/Lexus-LCert_WSE-Homepage-Tile-750x750.jpeg'
import { Link } from 'react-router-dom'
import { CustomerBreakpoint, InventoryBreakpoint, lmobile } from '../../responsive';

const Container = styled.div`
  border: 1px solid #eee;
  flex: 1;
  max-width: calc(100% / 5);
  ${CustomerBreakpoint({
    maxWidth: "130px",
  })};
  ${InventoryBreakpoint({
    maxWidth: "170px",
  })};
  max-width: 100%;
  min-width: 100px;
 max-width: 250px;
  margin: 7px 0;
  //   background:black;
  padding: 10px 0;
  cursor: pointer;
  transition: 1s all;

  &:hover {
    transform: scale(1.04);
  }
`;
   const ImgCon = styled.div`
//    width:200px;
//   max-width
`
const Img = styled.img`
width:100%;
`
const Details = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  color: black;
`;
const DetailsNameText = styled.span`
  font-size: 17px;
  margin: 5px 0;
  color: black;
  ${CustomerBreakpoint({
    fontSize: "9px",
  })};
`;
const DetailsPriceText = styled.span`
  margin: 5px 0;
  font-size: 17px;
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
  ${CustomerBreakpoint({
    fontSize: "9px",
  })};
`;

function Product3() {
  return (
    <Link to='/vehicle/d' >
    <Container>
        <ImgCon>
        <Img src={img2} />
        </ImgCon>
        <Details className='flex aifs jcc fdc' >
            <DetailsNameText>Lamborghini Aventador 305</DetailsNameText>
            <DetailsPriceText>$ 375,00</DetailsPriceText>
            <DetailsPriceText type='condition' className='flex aifs jcfs' >
                <PlaceOutlined id='FooterIcons'/>
                Nigeria,Lagos
            </DetailsPriceText>
            <Condition className='flex aic jcc'>
                <ConditionText>
                    Brand New
                </ConditionText>
            </Condition>
        </Details>
     </Container>
     </Link>
  )
}

export default Product3