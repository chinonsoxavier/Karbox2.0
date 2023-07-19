import styled from "styled-components";
import kellyLogo from "../../images/20230216_082410.png";
import CarLogo from "../../images/06.png";
import FaradayLogo from "../../images/20230216_090744.png";
import SpokeoLogo from "../../images/20230216_082234.png";

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  //    color:white;
  width: 500px;
  //   background-color:red;
  margin: 3px;
  flex-direction: ${(props) => props.fdc};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  padding-top: ${(props) => props.pt};
  //   line-height: ${(props) => props.lh};
`;
const ContainerText = styled.p`
  //   color: white;
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  width: ${(props) => props.wd};
  margin-top: ${(props) => props.mgt};
`;
const KellyLogo = styled.img`
  object-fit: contain;
  max-width: 40%;
  margin-bottom: -40px;
  z-index: 1;
`;
const CarImage = styled.img``;
const Logos = styled.div``;
const Logo = styled.img`
  width: ${(props) => props.wd};
`;

const SpokeoLogoCon = styled.div`
  background-color: skyblue;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: block;
`;
// const Circle = styled.div`
//   border-radius: 50%;
//   width: 100px;
//   height: 100px;
//   background-color: red;
// `;

function Advert() {
  return (
    <Container className="flex jcsb wrap">
      <Wrapper
        className="flex "
        jc="center"
        pt=""
        ai="fs"
        fdc="column"
        lh="12px"
      >
        <ContainerText className="s" mgt="0px" fz="18" fw={400}>
          We Believe in Pure Transparency
        </ContainerText>
        <ContainerText className="s" mgt="0px" fz="25px" fw={700}>
          What`s fair price? What`s the History? Questions Answered.
        </ContainerText>
        <ContainerText className="s" mgt="0px" fz="16px" fw={300}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          id sequi quidem deleniti explicabo, voluptatum distinctio odit aut
          ullam quam reprehenderit excepturi! Provident, dolores mollitia.
        </ContainerText>
        {/* <ContainerText>Read More <ArrowForward/> </ContainerText> */}
      </Wrapper>
      <Wrapper className="flex " fdc="column">
        <KellyLogo src={kellyLogo} alt="" />
        <CarImage src={CarLogo} alt="" />
      </Wrapper>
      <Wrapper className=" ">
        <Logos>
          <Logo src={FaradayLogo} wd="20%" alt="" />
        </Logos>
        <SpokeoLogoCon className="flex aic jcc">
          <Logo src={SpokeoLogo} wd="70%" alt="" />
        </SpokeoLogoCon>
        {/* <Circle></Circle> */}
      </Wrapper>
      <Wrapper className="flex ">f</Wrapper>
    </Container>
  );
}

export default Advert;
