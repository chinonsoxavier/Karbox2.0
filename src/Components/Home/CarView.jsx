import { StarRateOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Mainimg from "../../images/20230217_215912.png";
import img from "../../images/02 (5).png";
import image from '../../images/20230218_142203.png'
import PopularModels from "./PopularModels";
import { Laptop, mobile, smobile, tablet, ltablet,metablet } from "../../responsive";
const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`;
box-sizing:border-box;
padding:0 20px;
`;
const Header = styled.div``;
const HeaderBigText = styled.p`
  font-weight: 600;
  font-size: 19px;
  max-width:450px;
  text-align:center;
  ${mobile({fontSize:'9px'})}
`;
const HeaderText = styled.p`
  color: grey;
  font-size: 11px;
  max-width: 450px;
  text-align: center;
  ${mobile({ fontSize: "6px" })}
`;

const Desc = styled.div`
   `;
const DescLeft = styled.div`
  padding: 10px 0;
  ${mobile({ marginLeft: "40px" })};
`;
const DescMiddle = styled.div``;
const DescRight = styled.div`
  padding: 10px 0;
  ${mobile({marginRight:'40px'})}
  
`;
const DescImagesCon = styled.div`
  margin-top: 80px;
  margin-left: ${(props) => props.mgl};
  margin-right: ${(props) => props.mgr};
  ${mobile({margin:'0'})};
`;
const DescImagesWrapper = styled.div`
  border-radius: 50%;
  border: 1px dotted black;
  height: 50px;
  width: 50px;
  padding: 4px;
  ${mobile({width:"20px",height:'20px',border:' 1px dotted grey'})}
`;

const DescImage=styled.img`
   ${mobile({maxWidth:'10px'})}
   max-width:60%;
`

const DescImagesText = styled.span`
  white-space: ${(props) => props.ws};
  width: ${(props) => props.w};
   ${mobile({ fontSize:'5px' })};
`;
const DescLeftMainImage = styled.img`
  max-width: 500px;
  z-index:2;
  min-width:90;
  ${Laptop({maxWidth:'320px'})}
  ${tablet({maxWidth:'200px'})}
  ${ltablet({maxWidth:'250px'})}
  ${metablet({maxWidth:'200px'})}
  ${mobile({maxWidth:'110px'})}
  ${smobile({maxWidth:'90px'})}
`;
const DescBottom = styled.div`
  padding:0 90px;
`;

const BottomImagesText = styled.span`
  white-space: ${(props) => props.ws};
  width: ${(props) => props.w};
  margin: 6px 0;
  ${mobile({ fontSize: "5px" })}
`;

const Circle = styled.div`
  border-radius: 50%;
  border: 15px solid purple;
  position: absolute;
  height: 220px;
  width: 220px;
  z-index: 1;
  ${tablet({display:'none'})}
  // ${mobile({ width: "70px",height:'70px',  border: '5px solid purple'
 })};
`;

const WhyChooseUs = styled.div`
   margin-top:50px;
`
const WhyChooseUsHeader = styled.div``
const WhyChooseUsHeaderText = styled.h3`
   ${mobile({fontSize:'12px'})}
`
const ChildCon = styled.div``
const Child = styled.div`
   width:250px
`
const ChildImg = styled.img`
  max-width: 40%;
  margin-top: 20px;
  ${mobile({ maxWidth:'25%' })}
`;
const ChildBigText = styled.p`
   font-weight:500;
   ${mobile({fontSize:'9px'})};
   ${smobile({fontSize:'7px'})};
   `
const ChildSmallText = styled.p`
  font-size: 13px;
  color: grey;
  ${mobile({ fontSize: "6px" })};
  ${smobile({ fontSize: "4px" })};
`;

function CarView() {
  return (
    <Container className="bgw">
      <Wrapper className="w100">
        <Header className="w100 flex aic jcc fdc ">
          <HeaderBigText w="200px" className='flex aic jcc' >
            No Worries.We got you covered.Good Cars Good People Guarantee
          </HeaderBigText>
          <HeaderText w="200px" className='flex aic jcc' >
            Every car goes through a extensive 150 point inspection,one of the
            highest in the industry and a Free 60 Day Limited Warranty
            Guarantee.To give you the peace of mind you deserve
          </HeaderText>
        </Header>
        <Desc className="flex aifs jcsb w100 bsbb ">
          <DescLeft className="flex aifs fdc jcc bsbb">
            <DescImagesCon mgl="90px" className="flex aifs jcc bsbb fdc">
              <DescImagesWrapper className="flex aic jcc bsbb">
                <DescImage src={image}alt=''/>
              
              </DescImagesWrapper>
              <DescImagesText ws="nowrap">150 point inspection</DescImagesText>
            </DescImagesCon>
            <DescImagesCon className="flex aifs jcc bsbb fdc">
              <DescImagesWrapper className="flex aic jcc bsbb">
                <DescImage src={image}alt=''/>
              </DescImagesWrapper>
              <DescImagesText ws="nowrap">150 point inspection</DescImagesText>
            </DescImagesCon>
          </DescLeft>
          <DescMiddle className="flex aic jcc">
            <DescLeftMainImage src={Mainimg} alt="" />
          </DescMiddle>
          <DescRight className="flex aife fdc jcc bsbb">
            <DescImagesCon mgr="90px" className="flex aife jcc bsbb fdc">
              <DescImagesWrapper className="flex aic jcc bsbb">
                <DescImage src={image}alt=''/>
              </DescImagesWrapper>
              <DescImagesText ws="nowrap">150 point inspection</DescImagesText>
            </DescImagesCon>
            <DescImagesCon className="flex aife jcc bsbb fdc">
              <DescImagesWrapper className="flex aic jcc bsbb">
                <DescImage src={image}alt=''/>
              </DescImagesWrapper>
              <DescImagesText ws="nowrap">150 point inspection</DescImagesText>
            </DescImagesCon>
          </DescRight>
        </Desc>
        <DescBottom className="flex aic jcsb bsbb">
          <DescImagesCon className="flex aic jcc bsbb fdc">
            <DescImagesWrapper className="flex aic jcc bsbb">
              <DescImage src={image}alt=''/>
            </DescImagesWrapper>
            <BottomImagesText ws="">150 point inspection</BottomImagesText>
          </DescImagesCon>
          <DescImagesCon className="flex aic jcc bsbb fdc">
            <DescImagesWrapper className="flex aic jcc bsbb">
              <DescImage src={image}alt=''/>
            </DescImagesWrapper>
            <BottomImagesText ws="">150 point inspection</BottomImagesText>
          </DescImagesCon>
          <DescImagesCon className="flex aic jcc bsbb fdc">
            <DescImagesWrapper className="flex aic jcc bsbb">
              <DescImage src={image}alt=''/>
            </DescImagesWrapper>
            <BottomImagesText ws="">150 point inspection</BottomImagesText>
          </DescImagesCon>
          <DescImagesCon className="flex aic jcc bsbb fdc">
            <DescImagesWrapper className="flex aic jcc bsbb">
              <DescImage src={image}alt=''/>
            </DescImagesWrapper>
            <BottomImagesText ws="">150 point inspection</BottomImagesText>
          </DescImagesCon>
          <DescImagesCon className="flex aic jcc bsbb fdc">
            <DescImagesWrapper className="flex aic jcc bsbb">
              <DescImage src={image}alt=''/>
            </DescImagesWrapper>
            <BottomImagesText ws="">150 point inspection</BottomImagesText>
          </DescImagesCon>
        </DescBottom>
        <PopularModels/>
        <WhyChooseUs>
          <WhyChooseUsHeader className='flex aic jcc w100' >
            <WhyChooseUsHeaderText>
              Why Choose KarBox
            </WhyChooseUsHeaderText>
            </WhyChooseUsHeader>
            <ChildCon className='flex aic jcsa w80 ' >
              <Child className='flex aic jcc fdc' >
                <ChildImg src={img} alt=''/>
                <ChildBigText>Fast & Easy Booking</ChildBigText>
                <ChildSmallText>Fast & Easy Booking</ChildSmallText>
              </Child>
              <Child className='flex aic jcc fdc' >
                <ChildImg src={img} alt=''/>
                <ChildBigText>Fast & Easy Booking</ChildBigText>
                <ChildSmallText>Fast & Easy Booking</ChildSmallText>
              </Child>
              <Child className='flex aic jcc fdc' >
                <ChildImg src={img} alt=''/>
                <ChildBigText>Fast & Easy Booking</ChildBigText>
                <ChildSmallText>Fast & Easy Booking</ChildSmallText>
              </Child>
            </ChildCon>
        </WhyChooseUs>
      </Wrapper>
    </Container>
  );
}

export default CarView;
