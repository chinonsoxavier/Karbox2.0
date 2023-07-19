import styled from 'styled-components'
import img from "../../images/auction-2.jpg";

const Container = styled.div`
   border:1px solid #eee;
   max-width:420px;
   margin:7px 0;
   padding:10px 0;
   cursor:pointer;
   transition: 1s all;

   &:hover{
    transform:scale(1.04);

   }
   `
   const ImgCon = styled.div`
  width:100%;
`
const Img = styled.img`
width:100%;
`
const Details = styled.div`
   box-sizing:border-box;
   padding:0 20px;
`
const DetailsNameText = styled.span`
   font-size:17px;
`
const DetailsPriceText = styled.span``

function Product() {
  return (
    <Container>
        <ImgCon>
        <Img src={img} />
        </ImgCon>
        <Details className='flex aifs jcc fdc' >
            <DetailsNameText>Lamborghini Aventador 305</DetailsNameText>
            <DetailsPriceText>$ 375,00</DetailsPriceText>
        </Details>
     </Container>
  )
}

export default Product