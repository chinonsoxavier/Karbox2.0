import styled from "styled-components";
import {mmobile, mobile} from "../responsive";
// import JumiaStar from ".././images/jumia_star.png";
import { Link } from "react-router-dom";
import bg from ".././images/download-2 (3).jpg";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.bg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  // background:url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: 100vh 1oovh;
  `;
  
  const Wrapper = styled.div`
  ${mmobile({width:'80%'})}
  width: 40%;
  height:50%;
  padding:40px 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

const Text = styled.p`
`
const Title = styled.p`
font-wieght:${props=>props.fw};
font-size:${props=>props.fz};
margin:2px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 100%;
  // margin: 20px 10px 0px 0px;
  margin: 20px 0;
  padding: 10px;
  box-sizing: border-box;
  outline:none;
  border:1px solid #eee;

  &:focus{
    border:1px solid orangered;
  }
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

const A = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color:purple;
`;

const Agreement = styled.span`
  font-size: 10px;
  margin: 20px 0px;
  min-width: 20%;
  display: flex;
  align-items: center;
`;

const Login = () => {
  return (
    <Container bg={bg} >
      <Wrapper>
        {/* <JumiaStar_Img src={JumiaStar} alt="" /> */}
        <Title fz="19px" fw={600}>
          Welcome back!
        </Title>
        <Title fz="13px" fw={200}>
          log in to your karbox account{" "}
        </Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <A>Forgot your password?</A>
          <Link className="link" to="/sign-up">
            <A>CREATE A NEW ACCOUNT</A>
          </Link>
          <Agreement>
            For further support you may visit our help center or contact or
            customer service team. 
          </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
