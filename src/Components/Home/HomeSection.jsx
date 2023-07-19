import styled from "styled-components";
import HomeVid from "../../images/MYCO_RZ_04_020723_REV_2.mp4";

const Container = styled.div`
   width:100%;
`
const Wrapper = styled.div`
`;

function HomeSection() {
  return <Container>
    <Wrapper
      <video src={HomeVid} autoPlay={true} loop  />
    </Wrapper>
  </Container>;
}

export default HomeSection;
