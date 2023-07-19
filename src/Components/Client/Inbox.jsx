import styled from "styled-components";
import Img from '../../images/inbox.png'
import { tablet } from "../../responsive";
const Container = styled.div`
   height:80vh;
`;
const Wrapper = styled.div``;
const Header = styled.div`
  padding:0 15px;
`;
const HeaderText = styled.span`
  font-weight: 500;
  padding: 13px 0;
  font-size: 18px;
  font-weight: 500;fvddd
`;

const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
  width: 100%;
  margin-top: ${(props) => props.mgt};
`;

const InboxImgWrapper = styled.div``
const InboxImgCon = styled.div`
   width:320px;
   height:320px;
   background-color:whitesmoke;
   border-radius:50%;
   ${tablet({width:'280px',height:'280px'})}
`
const InboxImg = styled.img`
  object-fit:contain;
  width:70%;
`

const InboxDefaultMessageCon = styled.div``
const InboxDefaultMessage = styled.span`
   margin:5px 0;
   font-weight:${props=>props.type==='bold' && 500};
   font-size:18px;
   text-align:center;
`

function Inbox() {

  const messages = [
    {
      id: 0,
      sender: "karbox",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis temporibus excepturi molestiae dolorem nostrum adipisci beatae dolore reprehenderit esse hic. Tempora harum ipsum eveniet doloremque doloribus ipsam, quis facilis repellat!",
    },
    {
      id: 0,
      sender: "karbox",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis temporibus excepturi molestiae dolorem nostrum adipisci beatae dolore reprehenderit esse hic. Tempora harum ipsum eveniet doloremque doloribus ipsam, quis facilis repellat!",
    },
    {
      id: 0,
      sender: "karbox",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis temporibus excepturi molestiae dolorem nostrum adipisci beatae dolore reprehenderit esse hic. Tempora harum ipsum eveniet doloremque doloribus ipsam, quis facilis repellat!",
    },
    {
      id: 0,
      sender: "karbox",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis temporibus excepturi molestiae dolorem nostrum adipisci beatae dolore reprehenderit esse hic. Tempora harum ipsum eveniet doloremque doloribus ipsam, quis facilis repellat!",
    },
  ];


  return (
    <Container>
      <Wrapper>
        <Header className='flex aic jcfs' >
          <HeaderText>Inbox Messages</HeaderText>
        </Header>
        <Hr/>
        <InboxImgWrapper className='flex aic jcc fdc w100'>
        <InboxImgCon className='flex aic jcc'>
          <InboxImg src={Img} alt='' />
        </InboxImgCon>
        <InboxDefaultMessageCon className='flex aic jcc fdc' >
          <InboxDefaultMessage type='bold' >You don`t have any messages</InboxDefaultMessage>
          <InboxDefaultMessage className='c' >Here you will be able to see all the messages that we send to you. Stay tuned</InboxDefaultMessage>
        </InboxDefaultMessageCon>
        </InboxImgWrapper>
      </Wrapper>
    </Container>
  );
}

export default Inbox;
