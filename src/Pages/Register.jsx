import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import bg from ".././images/download-2 (3).jpg";
import { Link } from "react-router-dom";

// import JumiaStar from '.././images/jumia_star.png'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${props=>props.bg})
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${tablet({ width: "60%" })};
  ${mobile({ width: "80%" })};
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fz};
  margin:5px 0;
  text-align:center;
`;

const Form = styled.form`
  display: flex;
  // flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 100%;
  // margin: 20px 10px 0px 0px;
  margin: 20px 0;
  padding: 10px;
  box-sizing: border-box;
  border:1px solid gray;

  &:focus {
    border: 1px solid orangered;
  }
`;

const TextCon = styled.div`
margin:10px 0;
`
const Text = styled.span`
font-size:.8rem;
font-weight:500;
margin-left:10px;
`
const Agreement = styled.span`
  font-size: 10px;
  margin: 20px 0px;
  min-width:20%;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  border: none;
  padding: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {
  return (
    <Container bg={bg} >
      <Wrapper>
        {/* <JumiaStar_Img src={JumiaStar} alt=''/> */}
        <Title  fz='15px' fw={500}>Create your account</Title>
        <Title  fz='13px' fw={300}>Let`s get started by creating your account</Title>
        <Title  fz='13px' fw={300}>To keep your account safe, we need a safe password</Title>
        <Form>
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your email" />
          <Input placeholder="Create password" />
          <Input placeholder="Confirm password" />
          <TextCon className="flex aic jcfs w100" >
          <input type="checkbox" name="agreement" id="" />
          <Text for="agreement">I accept all terms & condition</Text>
          </TextCon>
          <Button>Continue</Button>
          <Agreement>
           For further support you may visit our help center or contact or customer service team  <b>PRIVACY POLICY</b>
          </Agreement>
          {/* <Button>Sign Up as Seller</Button> */}
          <Text className="flex aic jcc" >Already have an account ?  <Link to='./log-in' className="" style={{color:'purple',fontSize:'13px',fontWeight:500}} >Log in</Link> </Text>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
