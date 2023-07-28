import styled from "styled-components";
import { CustomerBreakpoint, lmobile } from "../../responsive";

const PriceCon = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background: blue;
  max-width: 430px;
`;
const PriceWrapper = styled.div`
  width: 100%;
  background: white;
  padding-bottom: 20px;
  box-sizing: border-box;
  ${lmobile({ padding: "12px 15px" })}
`;
const PricesWrapper = styled.div`
  ${lmobile({ display: "none" })}
`;
const Prices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  padding: 6px 9px;
  width: 170px;
  margin: 6px;
  border-radius: 6px;
`;
const PricesText = styled.span`
  font-size: 12px;
  ${CustomerBreakpoint({
    fontSize: "14px",
  })};
`;
const PriceCustom = styled.div`
  padding: 20px;
  box-sizing: border-box;
  ${lmobile({ padding: "0" })}
`;
const PriceCustomHeader = styled.div`
  margin: 7px 0;
  ${lmobile({ marginBottom: "6px " })}
`;
const PriceCustomHeaderText = styled.span``;
const PriceCustomInputWrapper = styled.div`
  ${lmobile({ flexDirection: "column", alignItems: "flex-start" })}
`;
const PriceCustomInputCon = styled.div``;
const PriceCustomInput = styled.input`
  border: none;
  padding: 8px 4px;
  box-sizing: border-box;
  background: #eee;
  outline: none;

  &::placeholder {
    font-size: 12px;
    opacity: 0.4;
  }
`;
const PriceCustomText = styled.div`
  margin: 10px;
`;
const PriceCustomButtonCon = styled.div`
  // padding: 0 20px;
  ${lmobile({ marginTop: "10px" })}
`;
const PriceCustomButton = styled.button`
  border: none;
  background: orangered;
  color: white;
  padding: 8px;
  min-width: 100%;
  border-radius: 4px;
`;

const Price = () => {
  return (
    <PriceCon className="flex aife jcfe">
      <PriceWrapper>
        <PricesWrapper className="flex aic jcc wrap">
          <Prices>
            <PricesText>Less $ 1,000,000</PricesText>
          </Prices>
          <Prices>
            <PricesText> $1,000,000 - $2,000,000</PricesText>
          </Prices>
          <Prices>
            <PricesText> $2,000,000- $3,000,000</PricesText>
          </Prices>
          <Prices>
            <PricesText> $3,000,000-$5,000,000</PricesText>
          </Prices>
          <Prices>
            <PricesText> $5,000,000-$8,000,000</PricesText>
          </Prices>
          <Prices>
            <PricesText>Above $8,000,000</PricesText>
          </Prices>
        </PricesWrapper>
        <PriceCustom>
          <PriceCustomHeader>
            <PriceCustomHeaderText>Custom Price($)</PriceCustomHeaderText>
          </PriceCustomHeader>
          <PriceCustomInputWrapper className="flex aic jcsb wrap">
            <PriceCustomInputCon>
              <PriceCustomInput placeholder="Min" />
            </PriceCustomInputCon>
            <PriceCustomText>to</PriceCustomText>
            <PriceCustomInputCon>
              <PriceCustomInput placeholder="Max" />
            </PriceCustomInputCon>
          </PriceCustomInputWrapper>
        </PriceCustom>
        <PriceCustomButtonCon className="flex aic jcc bsbb w100">
          <PriceCustomButton>Apply</PriceCustomButton>
        </PriceCustomButtonCon>
      </PriceWrapper>
    </PriceCon>
  );
};

export default Price;
