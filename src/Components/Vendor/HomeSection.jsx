import {
  Add,
  ArrowBack,
  Check,
  InfoOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "styled-components";
import VendorProducts from "./VendorProducts";
const Container = styled.div`
  box-sizing: border-box;
  padding: 0 14vh;
  background: #eee;
`;
const Wrapper = styled.div``;
const Header = styled.div`
  background: white;
  padding: 15px 1vh;
`;

const CaretCon = styled.div``;

const SellerHeader = styled.div``;
const SellerHeaderTop = styled.div``;
const SellerHeaderText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
const Hr = styled.hr`
  background-color: grey;
  height: 1px;
  border: none;
  width: 100%;
  margin-top: ${(props) => props.mgt};
  opacity: 0.5;
`;
const SellerHeaderBottom = styled.div``;
const SellerHeaderBottomText = styled.span`
  font-weight: 500;
`;
const SellerHeaderLeft = styled.div``;
const SellerHeaderRight = styled.div``;
const SellerHeaderButtonU = styled.button`
  background: orangered;
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SellerHeaderButtonF = styled.button`
  background: none;
  padding: 10px 20px;
  border: 1px solid orangered;
  color: orangered;
  cursor: pointer;
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Alert = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 5px;
  background: lightgreen;
  box-sizing: border-box;
  color: white;
`;

const AlertText = styled.span`
  font-weight: 500;
`;

const SellerInfoCon = styled.div``;
const SellerInfoHeaderCon = styled.div`
  margin: 7px 0;
  padding: 5px 0;
`;
const SellerInfoConText = styled.span`
  font-weight: 500;
  font-size: 17px;
  color: #949498;
`;
const SellerInfo = styled.div`
  background: white;
  padding: 15px 1vh;
  box-sizing: border-box;
`;
const SellerInfoTextCon = styled.div``;
const SellerInfoTextBold = styled.span`
   font-weight: 500;
  font-size: 13px;
  width: 110px;
  white-space:nowrap
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SellerInfoText = styled.span`
  font-weight: 400;
  font-size: 13px;
  width: 110px;
  white-space:nowrap
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SellerPerfomanceBoldText = styled.span`
   font-weight: 500;
  font-size: 13px;
  width: 150px;
  white-space:nowrap
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

function HomeSection() {
  const [DropDown, setDropDown] = useState(false);
  const [Alerts, setAlert] = useState(false);
  const [AlertDetails, setAlertDetails] = useState();
  const [Follow, setFollow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const handleClick = (condition) => {
    setLoading(true);
    {
      condition === "Follow" ? setFollow(false) : setFollow(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  };

  const handleAlerts = () => {
    setTimeout(() => {
      setAlert(true);
    }, 2000);
    setTimeout(() => {
      setAlert(false);
    }, 4500);
  };

  const handleAlert = (condition) => {
    {
      condition === "Follow"
        ? setAlertDetails("You are now following this seller")
        : setAlertDetails("Dealer successfully removed from follow list");
    }
    handleAlerts();
  };

  return (
    <Container>
      <Wrapper>
        {Alerts && (
          <Alert>
            <Check sx={{ marginRight: "8px" }} />
            <AlertText>{AlertDetails}</AlertText>
          </Alert>
        )}
        <Header>
          <SellerHeaderTop className="flex aic jcsb w100">
            <SellerHeader>
              <SellerHeaderText>Chinonso</SellerHeaderText>
            </SellerHeader>
            {!DropDown ? (
              <CaretCon onClick={() => setDropDown(true)}>
                <KeyboardArrowDown />
              </CaretCon>
            ) : (
              <CaretCon onClick={() => setDropDown(false)}>
                <KeyboardArrowUp />
              </CaretCon>
            )}
          </SellerHeaderTop>
          <Hr />
          <SellerHeaderBottom className="flex aic jcsb w100">
            <SellerHeaderLeft className="flex aifs jcfs fdc">
              <SellerHeaderBottomText>100% Seller Score</SellerHeaderBottomText>
              <SellerHeaderBottomText>221 Followers</SellerHeaderBottomText>
            </SellerHeaderLeft>
            <SellerHeaderRight>
              {Follow ? (
                <SellerHeaderButtonF
                  condition="Follow"
                  onClick={() => (handleClick("Follow"), handleAlert("Follow"))}
                >
                  {!Loading ? "Follow" : <CircularProgress size="20px" />}
                </SellerHeaderButtonF>
              ) : (
                <SellerHeaderButtonU
                  condition="Following"
                  onClick={() => (
                    handleClick("Following"), handleAlert("UnFollow")
                  )}
                >
                  {!Loading ? "Following" : <CircularProgress size="20px" />}
                </SellerHeaderButtonU>
              )}
            </SellerHeaderRight>
          </SellerHeaderBottom>
        </Header>
        {DropDown && (
          <>
            <SellerInfoCon>
              <SellerInfoHeaderCon>
                <SellerInfoConText>DEALER INFORMATION</SellerInfoConText>
              </SellerInfoHeaderCon>
              <SellerInfo className="flex aifs jcfs w100 fdc">
                <SellerInfoTextCon className="flex aife jcfe">
                  <SellerInfoText className="flex aife jcfe">
                    Selling on Karbox
                  </SellerInfoText>
                  <SellerInfoTextBold>
                    {" "}
                    <MoreVert
                      sx={{
                        marginRight: "5px",
                        marginTop: "8px",
                        opacity: 0.7,
                        fontSize: "14px",
                      }}
                    />{" "}
                    8 years
                  </SellerInfoTextBold>
                </SellerInfoTextCon>
                <SellerInfoTextCon className="flex aife jcfe">
                  <SellerInfoText className="flex aife jcfe">
                    Succesful Sales
                  </SellerInfoText>{" "}
                  <SellerInfoTextBold>
                    {" "}
                    <MoreVert
                      sx={{
                        marginRight: "5px",
                        marginTop: "8px",
                        opacity: 0.7,
                        fontSize: "14px",
                      }}
                    />{" "}
                    5000+
                  </SellerInfoTextBold>
                </SellerInfoTextCon>
                <SellerInfoTextCon className="flex aife jcfe">
                  <SellerInfoText className="flex aife jcfe">
                    Country of Origin{" "}
                  </SellerInfoText>
                  <SellerInfoTextBold>
                    {" "}
                    <MoreVert
                      sx={{
                        marginRight: "5px",
                        marginTop: "8px",
                        opacity: 0.7,
                        fontSize: "14px",
                      }}
                    />{" "}
                    Nigeria
                  </SellerInfoTextBold>
                </SellerInfoTextCon>
              </SellerInfo>
            </SellerInfoCon>
            <SellerInfoCon>
              <SellerInfoHeaderCon>
                <SellerInfoConText>SELLER SCORE</SellerInfoConText>
              </SellerInfoHeaderCon>
              <SellerInfo className="flex aifs jcfs w100 fdc">
                {/* <SellerInfoTextCon> */}
                <SellerPerfomanceBoldText className="flex aifs">
                  Seller Perfomance{" "}
                  <InfoOutlined
                    sx={{ color: "grey", fontSize: "18px", margin: "0 5px" }}
                  />
                </SellerPerfomanceBoldText>
                <SellerInfoTextCon className="flex aife jcfe">
                  <SellerInfoText className="flex aife jcfe">
                    Order Fufillment
                  </SellerInfoText>
                  <SellerInfoTextBold>
                    {" "}
                    <MoreVert
                      sx={{
                        marginRight: "5px",
                        marginTop: "8px",
                        opacity: 0.7,
                        fontSize: "14px",
                      }}
                    />{" "}
                    Excellent
                  </SellerInfoTextBold>
                </SellerInfoTextCon>
                <SellerInfoTextCon className="flex aife jcfe">
                  <SellerInfoText className="flex aife jcfe">
                    Quality Score
                  </SellerInfoText>
                  <SellerInfoTextBold>
                    {" "}
                    <MoreVert
                      sx={{
                        marginRight: "5px",
                        marginTop: "8px",
                        opacity: 0.7,
                        fontSize: "14px",
                      }}
                    />{" "}
                    Excellent
                  </SellerInfoTextBold>
                </SellerInfoTextCon>
              </SellerInfo>
            </SellerInfoCon>
          </>
        )}
        <VendorProducts />
      </Wrapper>
    </Container>
  );
}

export default HomeSection;
