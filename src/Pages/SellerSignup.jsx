import { ArrowRight } from '@mui/icons-material'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import Step1 from '../Components/Dealer/Step1'
import Header from '../Components/Home/Header'
import { tablet } from '../responsive';
// import Step1 from '../Components/Dealer/Step1'

const Container = styled.div`
  background: rgb(240, 235, 248);
  //    padding-bottom:80px;
`;
   const Wrapper = styled.div`
   padding:0 14vh;
//    margin-bottom:20px;
// //    padding-bottom:80px;
${tablet({ padding: "0 4vh" })}
`
const ProgressStepsCon = styled.div`
//    margin-top:15px;
`
const ProgressStepsText = styled.span``;
const ProgressSteps = styled.div``;
// const SmText = styled.span``


function SellerSignup({ route }) {
  const [step, setStep] = useState(route);
  const [newroute, setNewroute] = useState();

  useEffect(() => {
    setNewroute(step);
  }, [route])
  

  return (
    <Container>
      {/* <Wrapper> */}
      <Step1 />
      {/* </Wrapper> */}
    </Container>
  );
}

export default SellerSignup