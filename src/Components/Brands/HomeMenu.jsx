import Img from '../../images/01 (2).png'
import MainImage from "../../images/Lamborghini-Huracan-Evo-c134108-141.jpg";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  // height: 90vh;
  // background: url(./hero-bg.png);
  background: url(./koenigsegg_agera_rs_side_view_autumn_trees_107373_1024x768.jpg);
`;
const Wrapper = styled.div``;
const MainImgCon = styled.div`
position: relative;
top:0;
z-index:99;
`;
const MainImg = styled.img`
   width:100%;
   height:100vh;
   background-position:30px 20px;
   object-fit:cover;
`;

const Details = styled.div`
   margin-top:15vh;
   position:absolute;
   z-index:100;
`
const DetailsHr = styled.div`
   height:2px solid white;
   width:5px;
   border-top:2px solid white;
   color:white;
`
const DetailsBigText = styled.span`
   font-size:${props=>props.fz};
    margin:${props=>props.mg};
   color:white;
`
const DetailsText = styled.h5`
  color: white;
`;
const DetailsButton = styled.span`
   border-radius:16px;
   background:white;
   font-weight:${props=>props.fw};
   padding:10px;
   margin-top:7px;
   font-size:24px;
`

const ShownPrice = styled.div`
padding:0 14vh;
box-sizing:border-box;
// background-color:white;
  //  position:absolute;
  margin-top:-10vh;
  font-size:17px;
  width:100%;
  z-index:100;
  `
  const ShownPriceText = styled.p`
  color:grey;
  //  color:white;
  font-weight:500;
   width:90px;
   text-align:center;
`

const StartingPriceCon = styled.div`
  background-color: whitesmoke;
  box-sizing:border-box;
  padding:0 14vh;
  height:100%;
`;
const StartingPrice = styled.div`
   border-right:1px solid black;
  //  width:100%;
   height:10vh;
   background-color:whitesmoke;
   padding:30px 0;
   padding-right:20px;
`

const StartingPriceBigTxt = styled.span`
   font-weight:${props=>props.fw};
   font-size:${props=>props.fz};
   font-size:25px;
`
const StartingPriceSmTxt = styled.span`
  font-weight: ${(props) => props.fw};
  text-decoration: ${(props) => props.td};
`;

const Models = styled.div``
const ModelsProducts = styled.div``
const ProductsImg = styled.div``
const ProductsSmallTxt = styled.span``
const ProductsBigTxt = styled.span``


function HomeMenu({brand}) {
  return (
    <Container>
      <Wrapper className="flex aifs jcfs fdc">
        <MainImgCon className="flex aifs jcc">
          <MainImg src={MainImage} alt="" />
        </MainImgCon>
        <Details className="w100 flex aic jcc fdc">
          {/* <DetailsText className='flex aic jcc' >
                <DetailsHr/>
                Browse our
                <DetailsText>
                {'lamborghini'}
                </DetailsText>
                Brands
             </DetailsText>
            <DetailsBigText>
                {'lamborghini'}
                latest Products
            </DetailsBigText> */}
            <DetailsBigText className='flex aic jcc' >
          <DetailsBigText fz='45px' mg='0 10px' fw={600}>2023</DetailsBigText>
          <DetailsBigText fz='45px' mg='0' fw={700}>{"lamborghini"} </DetailsBigText>
          <DetailsBigText fw={700}>©</DetailsBigText>
            </DetailsBigText>

          <DetailsButton>Build & Price</DetailsButton>
        </Details>
        <ShownPrice>
          <ShownPriceText>As Shown Price</ShownPriceText>
        </ShownPrice>
        <StartingPriceCon className='w100 flex aifs jcfs' >
        <StartingPrice className='fdc flex aifs jcfs' >
          <StartingPriceSmTxt>Starting at</StartingPriceSmTxt>
          <StartingPriceBigTxt>$27,770</StartingPriceBigTxt>
          <StartingPriceSmTxt td='underline' >EcoBoost®Fastback</StartingPriceSmTxt>
        </StartingPrice>
        </StartingPriceCon>
        <Models>
          <ModelsProducts>
            {/* <Products> */}
            <ProductsImg src={Img} alt="" />
            <ProductsSmallTxt>2023</ProductsSmallTxt>
            <ProductsSmallTxt>2023</ProductsSmallTxt>
            <ProductsSmallTxt>Lamborgini® ®</ProductsSmallTxt>
            {/* </Products> */}
          </ModelsProducts>
        </Models>
      </Wrapper>
    </Container>
  );
}

export default HomeMenu;
