import { useState } from 'react';
import styled from 'styled-components'
const Container = styled.div`
  background: white;
  padding-bottom: 15px;
`;
const Wrapper = styled.div``;
const Header = styled.div`
  padding: 13px 15px;
`;
const HeaderText = styled.span`
  padding: 13px 0;
  font-size: 18px;
  font-weight: 400;
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
  width: 100%;
  margin-top: ${(props) => props.mgt};
`;

const SubsribeCon = styled.div`
   padding:0 15px;
`
const Subsribe = styled.div`
  border :1px solid #EEE;
  padding:10px 15px;
  max-width:300px;
`
const SubsribeText = styled.span`
 font-weight:500;
 font-size:13px;
 `
const SubscribeInputCon = styled.div`
   margin:10px 0;
`
const SubscribeInput = styled.input`
   margin:8px;
   cursor:pointer;
`

const ButtonCon = styled.div`
   margin-top:15px;
   box-sizing:border-box;
   padding:0 15px;
`
const Button = styled.button`
  border:none;
  background:${(props) => (props.type === 'filled' ? "orangered" : "none")};
  color:${(props) => (props.type === "filled" ? "white" : "orangered")};
  padding:15px 20px;
  width:100%;
  margin:5px 0;
  cursor:pointer;
  border-radius:6px;
`;

function NewsletterPrefrences() {

  const [newsletterPrefrences, setnewsletterPrefrences] = useState(
    "daily newletter for him"
  );
  console.log(newsletterPrefrences);

  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderText>Newsletter Prefrences</HeaderText>
        </Header>
        <Hr />
        <SubsribeCon>
          <Subsribe>
            <SubsribeText className="v">SUBSCRIBE TO</SubsribeText>
            <Hr />
            <SubscribeInputCon className="flex aic jcfs">
              <SubscribeInput
                type="radio"
                name="Newsletter Prefrences"
                checked={newsletterPrefrences}
                onChange={() =>
                  setnewsletterPrefrences("daily newletter for her")
                }
              />
              daily newletter for her
            </SubscribeInputCon>
            <SubscribeInputCon className="flex aic jcfs">
              <SubscribeInput
                type="radio"
                name="Newsletter Prefrences"
                checked={newsletterPrefrences}
                onChange={() =>
                  setnewsletterPrefrences("daily newletter for him")
                }
              />
              daily newletter for him
            </SubscribeInputCon>
            <SubscribeInputCon className="flex aic jcfs">
              <SubscribeInput
                checked={newsletterPrefrences}
                type="radio"
                name="Newsletter Prefrences"
                onChange={() =>
                  setnewsletterPrefrences("daily newletter for her")
                }
              />
              I don`t want to recieve daily newletter
            </SubscribeInputCon>
          </Subsribe>
        </SubsribeCon>
        <ButtonCon>
          <Button type="filled">SAVE</Button>
          <Button>UNSUBSRIBE FROM ALL COMMUNICATIONS</Button>
        </ButtonCon>
      </Wrapper>
    </Container>
  );
}

export default NewsletterPrefrences