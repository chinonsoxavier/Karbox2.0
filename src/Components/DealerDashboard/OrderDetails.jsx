import { CalendarToday, ChevronRight, LanguageOutlined, LocalShipping, Person, Place, Print } from "@mui/icons-material";
import img from "../../images/auction-2.jpg";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div``;
const Wrapper = styled.div``;
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
`;
const HeaderTextCon = styled.div``;
const HeaderText = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.cl};
`;

const OrderDetailsTop = styled.div`
   background:white;
   padding:18px 17px;
   box-sizing:border-box;
   margin-top:15px;
`
const OrderDetailsTopLeft = styled.div``
const OrderDetailsTopLeftTxtCon = styled.div`
   margin:0 3px;
`
const OrderDetailsTopLeftTxt = styled.span`
   font-weight:${props=>props.id ? 200:500};
   font-size:${props=>props.id ? '13px':'20px'};
   margin-bottom:3px ;
`
const OrderDetailsTopRight = styled.div``
const OrderDetailsTopRightSelect = styled.select`
   padding:8px;
   border:1px solid #eee;
   outline:none;
   font-weight:400;
   font-size:19px;
`
const OrderDetailsTopRightOption = styled.option``
const OrderDetailsTopRightButton = styled.button`
   border:1px solid #eee;
   padding:11px 20px;
   color:grey;
   background:none;
   margin:0 15px;
   cursor:pointer;
`
const OrderDetailsTopRightIcon = styled.div`
  color: white;
  background: grey;
  padding: 8px;
  cursor: pointer;
`;
const OrderDetailsMiddleCon = styled.div``;
const OrderDetailsMiddle = styled.div`
   padding:30px;
   flex:1;
   height:100px;
   margin:${props=>props.mg && '0 15px'};
`
const Hr = styled.hr`
   border:none;
   background:#eee;
   height:1px;
   width:100%;
`;
const OrderDetailsMiddleIcon = styled.div`
   background:#e9f0ff;
   color:#2a6ad4;
   border-radius:50%;
   height:40px;
   width:40px;
   margin-right:10px;
`;
const OrderDetailsMiddleDetails = styled.div``;
const OrderDetailsMiddleText = styled.div`
   font-weight:${props=>props.b ? 500 : 400};
`;
const OrderDetailsBottom = styled.div``;
const OrderDetailsBottomTable = styled.div`
  border: 1px solid #eee;
  margin: 50px 0;
`;
const OrderDetailsBottomTbRwsCon = styled.div`
   box-sizing:border-box;
   padding:0 25px;
`;
const OrderDetailsBottomTbRwsLg = styled.div`
   width:140px;
`
const OrderDetailsBottomTbRws = styled.div`
  width: 90px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:5px 0;
`;
const OrderDetailsBottomClmsLg = styled.div`
  width: 140px;
  //   white-space:nowrap;
  padding: 0 25px;
`;

const OrderDetailsBottomTbClms = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OrderDetailsBottomTbClmsCon = styled.div`
  box-sizing: border-box;
  padding: 5px 25px;
  border-bottom:1px solid #eee;
`;
const OrderDetailsBottomTbClmsImgCon = styled.div`
`
const OrderDetailsBottomTbClmsImg = styled.img`
   width:50px;
`;
const P = styled.span`
  width: 100%;
  white-space: nowrap;
  margin: 0 10px;
  color: #2a6ad4;
`;

const SubtotalWrapper = styled.div`
   width:100%;
   padding:0 25px;
   box-sizing:border-box;
`
const SubtotalCon = styled.div`
   width:30%;
   margin:15px 0;
`
const Subtotal = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   width:100%;
`
const SubtotalKey = styled.span`
   font-size:14px;
   color:grey;
`
const SubtotalValue = styled.span`
   font-size:20px;
   font-weight:500;
`
const SubtotalButton = styled.div`
  border-radius: 16px;
  font-weight: 600;
  background: #eefaea;
  color: #7bda95;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width:40%;
  margin:10px 0;
`;



function OrderDetails({route}) {
  return (
    <Container>
      <HeaderCon>
        <Header route={route} />
      </HeaderCon>
      <Wrapper>
        <HeaderTextCon className="flex aifs jcfs">
          <HeaderText className="flex aic jcc" cl="orangered">
            {" "}
            <LanguageOutlined
              sx={{ fontSize: "17px", margin: "0 3px", color: "orangered" }}
            />{" "}
            DashBoard
            <ChevronRight sx={{ fontSize: "15px", color: "black" }} />
          </HeaderText>
          <HeaderText className="flex aic jcc" cl="orangered">
            Order
            <ChevronRight sx={{ fontSize: "15px", color: "black" }} />
          </HeaderText>
          <HeaderText>Order details</HeaderText>
        </HeaderTextCon>
        <OrderDetailsTop className="flex aic jcsb w100">
          <OrderDetailsTopLeft className="flex aifs jcfs">
            <OrderDetailsTopLeftTxtCon className="flex aifs jcfs">
              <CalendarToday />
            </OrderDetailsTopLeftTxtCon>
            <OrderDetailsTopLeftTxtCon className="flex aifs jcfs fdc v">
              <OrderDetailsTopLeftTxt>
                Wed,Aug,2023,4:34 PM
              </OrderDetailsTopLeftTxt>
              <OrderDetailsTopLeftTxt id>#ID 4378369</OrderDetailsTopLeftTxt>
            </OrderDetailsTopLeftTxtCon>
          </OrderDetailsTopLeft>
          <OrderDetailsTopRight className="flex aic jcsb v">
            <OrderDetailsTopRightSelect className="c">
              <OrderDetailsTopRightOption disabled>
                Change status
              </OrderDetailsTopRightOption>
              <OrderDetailsTopRightOption>Pending</OrderDetailsTopRightOption>
              <OrderDetailsTopRightOption>Delivered</OrderDetailsTopRightOption>
              <OrderDetailsTopRightOption>
                Processing
              </OrderDetailsTopRightOption>
              <OrderDetailsTopRightOption>Shipped</OrderDetailsTopRightOption>
            </OrderDetailsTopRightSelect>
            {/* <Select value={select} id='orderDetailsSelect'>
              <MenuItem value="Pending">Change Status</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Shipped">Shipped</MenuItem>
            </Select> */}
            <OrderDetailsTopRightButton className="flex aic jcc">
              Save
            </OrderDetailsTopRightButton>
            <OrderDetailsTopRightIcon className="flex aic jcc">
              <Print />
            </OrderDetailsTopRightIcon>
          </OrderDetailsTopRight>
        </OrderDetailsTop>
        <Hr />
        <OrderDetailsMiddleCon className="flex aic jcc">
          {/* {OrderDetailsComponents.map((item) => ( */}
          <OrderDetailsMiddle className="flex aifs jcc bgw s">
            <OrderDetailsMiddleIcon className="flex aic jcc">
              <Person />
            </OrderDetailsMiddleIcon>
            <OrderDetailsMiddleDetails>
              <OrderDetailsMiddleText b>Customer</OrderDetailsMiddleText>
              <OrderDetailsMiddleText>chinonso Xavier</OrderDetailsMiddleText>
              <OrderDetailsMiddleText>
                chinonsoxavier26@gmail.com
              </OrderDetailsMiddleText>
              <OrderDetailsMiddleText>+999 992 22123456</OrderDetailsMiddleText>
            </OrderDetailsMiddleDetails>
          </OrderDetailsMiddle>
          <OrderDetailsMiddle mg className="flex aifs jcc bgw s">
            <OrderDetailsMiddleIcon className="flex aic jcc">
              <LocalShipping />
            </OrderDetailsMiddleIcon>
            <OrderDetailsMiddleDetails>
              <OrderDetailsMiddleText b>Customer</OrderDetailsMiddleText>
              <OrderDetailsMiddleText>
                Shipping: Karbox express
              </OrderDetailsMiddleText>
              <OrderDetailsMiddleText>
                Payment method: Card
              </OrderDetailsMiddleText>
              <OrderDetailsMiddleText>Status: Status</OrderDetailsMiddleText>
            </OrderDetailsMiddleDetails>
          </OrderDetailsMiddle>
          <OrderDetailsMiddle className="flex aifs jcc bgw s">
            <OrderDetailsMiddleIcon className="flex aic jcc">
              <Place />
            </OrderDetailsMiddleIcon>
            <OrderDetailsMiddleDetails>
              <OrderDetailsMiddleText b>Deliver to</OrderDetailsMiddleText>
              <OrderDetailsMiddleText>
                City: Lagos Nigeria
              </OrderDetailsMiddleText>
              <OrderDetailsMiddleText>
                Street: random street
              </OrderDetailsMiddleText>
              <OrderDetailsMiddleText>
                Address: Lorem ipsum dolor sit amet.
              </OrderDetailsMiddleText>
            </OrderDetailsMiddleDetails>
          </OrderDetailsMiddle>
          {/* ))} */}
        </OrderDetailsMiddleCon>
        <OrderDetailsBottom>
          <OrderDetailsBottomTable className="flex aic jcsb fdc">
            <OrderDetailsBottomTbRwsCon className="flex aic jcsb w100">
              <OrderDetailsBottomTbRwsLg>Product</OrderDetailsBottomTbRwsLg>
              <OrderDetailsBottomTbRws>Quantity</OrderDetailsBottomTbRws>
              <OrderDetailsBottomTbRws>Unit Price</OrderDetailsBottomTbRws>
              <OrderDetailsBottomTbRws>Total</OrderDetailsBottomTbRws>
            </OrderDetailsBottomTbRwsCon>
            <Hr />
            <OrderDetailsBottomTbClmsCon className="flex aic jcsb w100">
              <OrderDetailsBottomClmsLg className="flex aic jcc">
                <OrderDetailsBottomTbClmsImgCon>
                  <OrderDetailsBottomTbClmsImg src={img} alt="" />
                </OrderDetailsBottomTbClmsImgCon>
                <P>Lamborgini Aventador 909</P>
              </OrderDetailsBottomClmsLg>
              <OrderDetailsBottomTbClms>1</OrderDetailsBottomTbClms>
              <OrderDetailsBottomTbClms>$ 43.50</OrderDetailsBottomTbClms>
              <OrderDetailsBottomTbClms>$ 120.00</OrderDetailsBottomTbClms>
            </OrderDetailsBottomTbClmsCon>
            <OrderDetailsBottomTbClmsCon className="flex aic jcsb w100">
              <OrderDetailsBottomClmsLg className="flex aic jcc">
                <OrderDetailsBottomTbClmsImgCon>
                  <OrderDetailsBottomTbClmsImg src={img} alt="" />
                </OrderDetailsBottomTbClmsImgCon>
                <P>Lamborgini Aventador 909</P>
              </OrderDetailsBottomClmsLg>
              <OrderDetailsBottomTbClms>1</OrderDetailsBottomTbClms>
              <OrderDetailsBottomTbClms>$ 43.50</OrderDetailsBottomTbClms>
              <OrderDetailsBottomTbClms>$ 120.00</OrderDetailsBottomTbClms>
            </OrderDetailsBottomTbClmsCon>
            <OrderDetailsBottomTbClmsCon className="flex aic jcsb w100">
              <OrderDetailsBottomClmsLg className="flex aic jcc">
                <OrderDetailsBottomTbClmsImgCon>
                  <OrderDetailsBottomTbClmsImg src={img} alt="" />
                </OrderDetailsBottomTbClmsImgCon>
                <P>Lamborgini Aventador 909</P>
              </OrderDetailsBottomClmsLg>
              <OrderDetailsBottomTbClms>1</OrderDetailsBottomTbClms>
              <OrderDetailsBottomTbClms>$ 43.50</OrderDetailsBottomTbClms>
              <OrderDetailsBottomTbClms>$ 120.00</OrderDetailsBottomTbClms>
            </OrderDetailsBottomTbClmsCon>
            {/* <Hr/> */}
            <SubtotalWrapper className="flex aife jcfe">
              <SubtotalCon className="flex aife jcfe fdc">
                <Subtotal>
                  <SubtotalKey>Subtotal</SubtotalKey>
                  <SubtotalValue>$ 793.33</SubtotalValue>
                </Subtotal>
                <Subtotal>
                  <SubtotalKey>Shipping cost</SubtotalKey>
                  <SubtotalValue>$ 774.044</SubtotalValue>
                </Subtotal>
                <Subtotal>
                  <SubtotalKey>Subtotal</SubtotalKey>
                  <SubtotalValue>899.993</SubtotalValue>
                </Subtotal>
                <SubtotalButton>Payment made</SubtotalButton>
              </SubtotalCon>
            </SubtotalWrapper>
          </OrderDetailsBottomTable>
        </OrderDetailsBottom>
      </Wrapper>
    </Container>
  );
}

export default OrderDetails;
