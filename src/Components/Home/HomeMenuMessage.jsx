import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { lmobile, mmobile, mobile } from '../../responsive';
const Container = styled.div`
  width: 100%;
  color:white;
`;
const Wrapper = styled.div`
  width:100%;
  background: linear-gradient(.25turn,#D355AB,50%,#9373D9);
`;
const BigText = styled.p`
  font-size: 25px;
  ${lmobile({ fontSize: "18px" })};
`;
const Text = styled.p`
  max-width: 80%;
  margin-top: -15px;
  ${lmobile({ fontSize: "10px" })};
`;

const WhyChooseUsCon = styled.div``
const WhyChooseUs = styled.div``
const WhyChooseUsHeader = styled.div``
const WhyChooseUsHeaderText = styled.p`
   font-size:33px;
   font-weight:600;
   ${mmobile({fontSize:'23px'})}
`

const WhyChooseUsOption = styled.div`
  max-width: 270px;
  ${lmobile({ maxWidth: "200px" })};
  margin: 20px 0;
  padding: 20px 25px;
  border-radius: 9px;
  animation-duration: 1s;
  transition: 2s ease in out;
`;
const WhyChooseUsOptionImg = styled.img`
  width: 80%;
  ${lmobile({ width: "60%" })};
`;
const WhyChooseUsOptionText = styled.p`
  font-size: 18px;
  ${lmobile({ fontSize: "15px" })};
`;
const WhyChooseUsHeaderSmText = styled.p`
  font-size: 12px;
  ${lmobile({ fontSize: "10px" })};
  text-align: center;
`;

const ButtonCon = styled.div`
margin-top:20px;
`
const Button = styled.button`
border-radius:16px;
font-weight:500;
padding:8px 30px;
color:black;
background-color:white;
border:none;
`

function HomeMenuMessage() {

const data = [
  {
    id:0,
    img:require('../../images/feb.png'),
    name:'Fast & Easy Booking',
    text:'Book Your car online or offline.Follow the easy process to book your car online. Or just call us any time from anywhere',
  },
  {
    id:0,
    img:require('../../images/mpl.png'),
    name:'Many Pickup Locations ' ,
    text:'We have an extensive number of cars that will be available to pick you up from any locations throughout the country'
  },
  {
    id:0,
    img:require('../../images/sfc.png'),
    name:'Satisfied Customers',
    text:'We have 70,000+ happy customers and it`s increasing.View our review sections to get their feedback about our service'
  }
]

const [hovered,setHovered]=useState()

  return (
    <Container>
      <Wrapper className="flex aic jcc fdc">
        <BigText>
          WELCOME TO <b>KARBOX</b>
        </BigText>
        <Text>
          Lorem ipsum, dolor sitr? Neque eveniet corrupti illum quam totam
          laboriosam amet adipisci sapiente! Hic quod ipsa fugit explicabo,
          reprehenderit rem in perspiciatis ea quaerat eos harum quis veniam
          deserunt consectetur, dicta quod ipsa.
        </Text>
      </Wrapper>
      <WhyChooseUsCon>
        <WhyChooseUsHeader className="flex aic jcc">
          <WhyChooseUsHeaderText>Why Choose Karbox</WhyChooseUsHeaderText>
        </WhyChooseUsHeader>
        <WhyChooseUs className="flex aic jcsa wrap">
          {data.map((item, i) => (
            <WhyChooseUsOption
            key={i}
              onMouseOver={() => setHovered(i)}
              onMouseLeave={() => setHovered("")}
              className={`${i === hovered && "whyChooseUs"} flex aic jcc fdc`}
            >
              <WhyChooseUsOptionImg src={item.img} />
              <WhyChooseUsOptionText>{item.name}</WhyChooseUsOptionText>
              <WhyChooseUsHeaderSmText>{item.text}</WhyChooseUsHeaderSmText>
            </WhyChooseUsOption>
          ))}
        </WhyChooseUs>
      </WhyChooseUsCon>
      <ButtonCon className="flex aic jcc">
        <Link className="link" to="/welcome-back">
          <Button>Sign Up</Button>
        </Link>
      </ButtonCon>
    </Container>
  );
}

export default HomeMenuMessage