import {VerifiedUserOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import img from "../../images/auction-2.jpg";
const Container = styled.div`   
   background:white;
   padding:0 14vh;
   padding-bottom:20px;
`
const Wrapper = styled.div``
const Heading = styled.div``
const HeadingTopBlank = styled.div`
   background:#ffbd79;
   width:100%;
   height:140px;
   padding:0 15px;
   box-sizing:border-box;
   
`
const HeadingTop = styled.div`
padding:0 25px;
box-sizing:border-box;
`
const MiddleDescCon = styled.div``

const HeadingTopImgCon = styled.div`
  width:230px;
   height:180px;
   background:white;
   margin-top:-90px;
   box-shadow: -1.04px 4.891px 8px 0px rgb(69 49 103 / 27%);
`
const HeadingTopImg = styled.img`
   width:100%;
`
const HeadingTopImgDesc = styled.div`
   width:100%;
   box-sizing:border-box;
   padding:15px;
`
const HeadingTopImgDescBT = styled.span`
   font-size:28px;
   font-weight:500;
   padding:4px 0;
`
const HeadingTopImgST = styled.span`
   font-size:14px;
   opacity:0.7;
   padding:4px 0;
`
const DescriptionWrapper = styled.div`
padding:20px 25px;
box-sizing:border-box;
border:1px solid #eee;
margin-top:20px;
`
const DescriptionCon = styled.div`
   border:1px solid #eee;
   width:200px;
   padding:13px;
   box-sizing:border-box;
`
const Description = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:flex-start;
   flex-direction:column;
   margin:10px 0;
`
const DescriptionKey = styled.span`
   font-size:16px;
   font-weight:400;
`
const DescriptionValue = styled.span`
   color:orangered;
   font-size:23px;
   font-weight:500;
`
const Contact = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:center;
   flex-direction:column;
   border:1px solid #eee;
   flex:1;
   padding:10px 30px;
   box-sizing:border-box;
`
const ContactHeader = styled.span`
   font-size:29px;
   font-weight:500;
`
const ContactText = styled.span`
   font-size:17px;
   margin:6px 0;
`

function HomeSection() {
  return (
    <Container>
        <Wrapper>
          <Heading>
            <HeadingTopBlank></HeadingTopBlank>
             <HeadingTop>
                <MiddleDescCon className='flex aifs jcfs' >
                <HeadingTopImgCon className='flex aic jcc' >
                    <HeadingTopImg src={img} />
                </HeadingTopImgCon>
                     <HeadingTopImgDesc className='flex aifs jcfs w100 fdc' >
                        <HeadingTopImgDescBT className='flex aic jcc' >
                            Spokeo,inc. <VerifiedUserOutlined/>
                        </HeadingTopImgDescBT>
                        <HeadingTopImgST className='flex aic jcc' >
                            787 Off Ikeja Alausa Lagos Nigeria,199 Lagos island Lagos Nigeria
                        </HeadingTopImgST>
                     </HeadingTopImgDesc>
                </MiddleDescCon>
             </HeadingTop>
          </Heading>
          <DescriptionWrapper className='flex aifs jcsb' >
          <DescriptionCon>
          <Description>
           <DescriptionKey>
            Seller Score
           </DescriptionKey>
           <DescriptionValue>
            Excellent
           </DescriptionValue>
          </Description>
          <Description>
           <DescriptionKey>
            Followers
           </DescriptionKey>
           <DescriptionValue>
            0
           </DescriptionValue>
          </Description>
          </DescriptionCon>
          <Contact>
            <ContactHeader>Contacts</ContactHeader>
            <ContactText>Manager : Jeremy Brad</ContactText>
            <ContactText>info@gmail.com</ContactText>
            <ContactText>0201 555-0100,0201 555-0100</ContactText>
          </Contact>
          <Contact>
            <ContactHeader>Address </ContactHeader>
            <ContactText> Country :Nigeria </ContactText>
            <ContactText>Address: :787 Off Ikeja Alausa Lagos Nigeria</ContactText>
            <ContactText>Postal code :62059</ContactText>
          </Contact>
          </DescriptionWrapper>
        </Wrapper>
    </Container>
  )
}

export default HomeSection