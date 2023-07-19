import styled from 'styled-components';
import {useState} from 'react'
import img1 from "../../images/auction-2.jpg";
import background from "../../images/auction-2.jpg";
import { Favorite, FavoriteBorder, ShoppingBagRounded } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


const FeaturedAuctionsCard = styled.div`
  dsiplay: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #063970;
  flex-wrap: wrap;
  width: 100%;
  max-width: 410px;
  display: flex;
  gap: 30px;
  color: white;
  margin: 5px 1px;

  &:hover {
    transform: scale(1.01);
  }
`;

const FBottomCard = styled.div`
  flex: 1;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  background-color: #063970;
  padding: 13px;
  display: flex;
  flex-direction: column;
`;
const CardTop = styled.div`
  height: 275px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: white;
`;

const CardTopIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: linear-gradient(323deg, #b122e6 0%, #ff63de 100%);
  box-shadow: 0px 8px 8px 0px rgb(0 0 0 / 13%);
`;
const CardBottom = styled.div`
  height: 275px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 100%;
`;
const BottomTop = styled.div`
  width: 100%;
  padding: 15px 0;
  color: white;
`;
const BottomSpan = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: #171d1c;
  color: white;
`;

const ConditionCon = styled.div`
  background-color: #154c79;
  background-color: transparent;
  border:1px solid #154c79;
  border-radius:16px;
  padding: 3px;
  margin: 3px;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Condition = styled.span`
  padding:7px;
  font-size: 12px;
  font-weight:500;
`;

const BottomMiddle = styled.div`
  display: flex;
  width: 100%;
  border-top: 3px dotted #deddf5;
  border-bottom: 3px dotted #deddf5;
`;
const Middle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: ${(props) => props.w};
    left: 0;
    height: 100%;
    top: 15px;
    bottom: 15px;
    background: #bfbee8;
  }
`;
const MiddleCon = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;
const MiddleText = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.color};
`;
const MiddlePrice = styled.span`
  font-size: 22px;
  color: #171d1c;
  color: white;
  white-space:nowrap;
`;

const Hr = styled.div`
  max-height: 90px;
  height:80px;
  border-right: 3px dotted #deddf5;
`;

const MiddleLeft = styled.div`
  display: flex;
`;
const MiddleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
const BottomBottom = styled.div`
  width: 100%;
  padding: 3px 0;
  display: flex;
  flex-direction: column;
`;
const BBbottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;
const BBbottomBtn = styled.button`
  background: linear-gradient(2deg, #3da9f5 0%, #683df5 100%);
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  border: none;
  color: white;
  padding: 15px 70px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 22px;
  cursor: pointer;
`;

 const ImageCon = styled.div`
   background: url(./hero-bg.jpg);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 100%;
 `;
 const Image = styled.img`
   width: 100%;
 `;

function ProductCard2() {

    const [liked,setLiked]=useState(false)

  return (
      <FeaturedAuctionsCard className="flex aic jcc">
        <FBottomCard className="fBottom__card">
          <CardTop className="card__top">
            <Link to='/vehicle/hdjdvfhjdfvjhn'>

             <ImageCon bg={background}>
               <Image src={img1} alt="" />
             </ImageCon>
            </Link>
              <Typography component="legend"></Typography>
            <CardTopIcon className="card__topIcon flex aic jcc">
              {!liked ? (
                <FavoriteBorder
                  className="Favorite_Hover"
                  onClick={() => setLiked(true)}
                  sx={{ fontSize: 30, color: "white", cursor: "pointer" }}
                />
              ) : (
                <Favorite
                  className="Favorite_Hover"
                  sx={{ fontSize: 30, color: "white", cursor: "pointer" }}
                  onClick={() => setLiked(false)}
                />
              )}
            </CardTopIcon>
          </CardTop>
          <CardBottom className="card__bottom">
            <BottomTop className="bottom__top flex aic jcsb">
              <BottomSpan>mecedes B70 2023</BottomSpan>
              <ConditionCon>
                <Condition>Brand New</Condition>
              </ConditionCon>
            </BottomTop>
            <BottomMiddle className="bottom__middle flex aic  jcsb w100">
              <Middle className="middle flex aic jcsb w100">
                <MiddleCon className="middle__con flex aic  jcsb w100">
                  <MiddleLeft className="middle__left flex aic jcfs w100 ">
                    <MiddleRight className="middle__right">
                      <ShoppingBagRounded
                        sx={{ color: "#ee4730", fontSize: 40 }}
                      />
                      <MiddleText color="#ee4730">Buy Now</MiddleText>
                    </MiddleRight>
                    <MiddlePrice>$26,000</MiddlePrice>
                  </MiddleLeft>
                  <Hr />
                  <MiddleRight className="middle__right">
                    <MiddlePrice>20000 miles</MiddlePrice>
                  </MiddleRight>
                </MiddleCon>
              </Middle>
            </BottomMiddle>
            <BottomBottom className="bottom__bottom">
              <BBbottom className="bb__bottom">
                <BBbottomBtn className="bb__bottomBtn">
                  Contact Dealer
                </BBbottomBtn>
              </BBbottom>
            </BottomBottom>
          </CardBottom>
        </FBottomCard>
      </FeaturedAuctionsCard>
  );
}

export default ProductCard2