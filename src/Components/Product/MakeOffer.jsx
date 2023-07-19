import styled from "styled-components";
import {useState} from 'react'
import { CloseOutlined } from "@mui/icons-material";
const MakeOfferWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //  height:100%;
  margin-top: 20px;
  position: fixed;
  top:30%;
  // background-color:green;
  `;
  const MakeOfferCon = styled.div`
  box-shadow: -1.04px 4.891px 20px 0px rgb(69 49 183 / 50%);
  width: 300px;
  //  height:150px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  // position:absolute;
`;
const MakeOfferClose = styled.div`
  color: grey;
`;
const MakeOfferConHeader = styled.div`
  margin-bottom: 20px;
`;
const MakeOfferConHeaderText = styled.span`
  font-weight: 500;
`;
const MakeOffersCon = styled.div``;
const MakeOffers = styled.div`
  font-size: 12px;
  border: 1px solid orangered;
  border-radius: 16px;
  padding: 6px;
  cursor:pointer;
`;
const MakeOfferInputCon = styled.div`
  border: 1px solid orangered;
  margin: 15px 0;
  height: auto;
`;
const MakeOfferInput = styled.input`
  border: none;
  width: 100%;
  height: 36px;
  outline: none;
  font-weight:500;
`;
const MakeOfferInputPrefix = styled.div`
  background: #eee;
  padding: 0 5px;
  width: 25px;
  height: 36px;
`;
const MakeOfferButtonCon = styled.div``;
const MakeOfferButton = styled.button`
  padding: 10px 40px;
  border: none;
  background: orangered;
  color: white;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`;



function MakeOffer({ setmakeoffer }) {
  const [Offer, setOffer] = useState("");

  return (
    <MakeOfferWrapper>
      <MakeOfferCon>
        <MakeOfferClose className="flex aic jcfe w100">
          <CloseOutlined onClick={() => setmakeoffer(false)} />
        </MakeOfferClose>
        <MakeOfferConHeader className="flex aic jcc w100">
          <MakeOfferConHeaderText>Make an offer</MakeOfferConHeaderText>
        </MakeOfferConHeader>
        <MakeOffersCon className="flex aic jcsb w100">
          <MakeOffers
            className="flex aic jcc"
            onClick={() => setOffer("57,000")}
          >
            5,700,00
          </MakeOffers>
          <MakeOffers
            className="flex aic jcc"
            onClick={() => setOffer("17,000")}
          >
            5,700,00
          </MakeOffers>
          <MakeOffers
            className="flex aic jcc"
            onClick={() => setOffer("69,000")}
          >
            5,700,00
          </MakeOffers>
          <MakeOffers
            className="flex aic jcc"
            onClick={() => setOffer("90,000")}
          >
            5,700,00
          </MakeOffers>
        </MakeOffersCon>
        <MakeOfferInputCon className="flex aic jcc">
          <MakeOfferInputPrefix className="flex aic jcc ">
            $
          </MakeOfferInputPrefix>
          <MakeOfferInput
            placeholder="Enter your price"
            onChange={(e) => setOffer(e.target.value)}
            // defaultValue={Offer}
            value={Offer}
          />
        </MakeOfferInputCon>
        <MakeOfferButtonCon className="flex aic jcc ww100">
          <MakeOfferButton>Send</MakeOfferButton>
        </MakeOfferButtonCon>
        {/* <TextField shrink InputAdornment='$' type='number' inputProps={{inputMode:'numeric',pattern:"[0-9]*"}} /> */}
      </MakeOfferCon>
    </MakeOfferWrapper>
  );
}

export default MakeOffer;
