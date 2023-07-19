import {
  ChevronRight,
  DeleteOutlineOutlined,
  FormatListBulletedOutlined,
  GridOnOutlined,
  LanguageOutlined,
  Search,
} from "@mui/icons-material";
import styled from "styled-components";
import img from "../../images/auction-2.jpg";
import Header from "./Header";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { IconButton, Tooltip } from "@mui/material";


const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
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
const SortsCon = styled.div`
  padding: 13px 10px;
  margin: 15px 0;
  box-sizing: border-box;
  border-radius: 9px;
  position:sticky;
  top:0;
`;
const SortsLeft = styled.div`
  flex: 1;
`;
const SortsMiddle = styled.div`
  flex: 2;
  box-sizing: border-box;
  padding: 0 15px;
`;
const SortsInputCon = styled.div`
  border: 1px solid grey;
  color: grey;
  padding: 0 8px;
  flex: 1;
`;
const SortsInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 7px 0;
  flex: 1;
`;
const SortsRight = styled.div`
  flex: 1;
`;
const SortsText = styled.span`
  font-size: 17px;
  font-weight: 500;
  padding: 10px;
  white-space:nowrap;
`;
const SortsSelect = styled.select`
  outline: none;
  padding: 7px;
  margin: 10px;
  &:focus {
    border: 1px solid #eee;
  }
`;
const SortsOption = styled.option`
  margin: 5px 0;
`;
const SortsButton = styled.button`
  background: orangered;
  border: none;
  color: white;
  padding: 6px;
  border-radius: 4px;
`;

const ProductsCon = styled.div`
`;
const ProductsIconsCon = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductsIcons = styled.div`
  margin: 0 5px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  color:black;
`;
const Product = styled.div`
   background:white;
   border-radius:9px;
   margin:8px 5px;
   min-width:250px;
   width:100%;
   flex:1;
`;
const ProductImgCon = styled.div``;
const ProductImg = styled.img`
   width:100%;
`;
const ProductDetails = styled.div`
   box-sizing:border-box;
   padding:15px 16px;
`;
const ProductDetailsTop = styled.div`
   margin:8px 0;
`;
const ProductDetailsMiddle = styled.div`
  margin: 8px 0;
`;
const ProductDetailsBottom = styled.div`
  margin: 6px 0;
`;
const ProductDetailsBgTxt = styled.span`
   color:${props=>props.cl};
   font-weight:500;
`;
const ProductDetailsButton = styled.button`
   background:orangered;
   border:none;
   padding:8px;
   color:white;
   cursor:pointer;
   font-size:14px;
`;
const Img = styled.img`
  object-fit: contain;
  width: 70px;
`;

const TableCon = styled.div``;
const TableRows = styled.div``;
const TableColumnEntries = styled.div`
  background: white;
  padding: 15px 17px;
  height: 60px;
  box-sizing: border-box;
  margin: 8px 0;
  flex: ${(props) => (props.select && 1)};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  // background:;
  margin:2px;

  color: ${(props) => props.cl};
`;

const TableColumn = styled.div``;
const TableRowsEntries = styled.div`
  padding: 0 17px;
  box-sizing: border-box;
  flex: ${(props) => props.select && 1};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 2px;
  border-left:1px solid #eee;
`;
const Input = styled.input`
  margin: 0 9px;
`;
const Button = styled.button`
background:orangered;
padding:4px 12px;
color:white;
border:none;
cursor:pointer;
  margin: 0 9px;
`;

function ProductList({route}) {

  const [listView,setlistView] = useState(true)



  const rows = [
    {
      id: 1,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 2,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 3,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 4,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 5,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 6,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 7,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 8,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
    {
      id: 9,
      Photo: img,
      Name: "Lamborgini Aventador 900",
      Price:'10,00.00'
    },
  ];

  return (
    <Container>
      <HeaderCon>
        <Header route={route} />
      </HeaderCon>
      <Wrapper>
        <HeaderTextCon className="flex aifs jcfs">
          <HeaderText className="flex aic jcc" cl="orangered">
            <LanguageOutlined
              sx={{ fontSize: "17px", margin: "0 3px", color: "orangered" }}
            />
            DashBoard
            <ChevronRight sx={{ fontSize: "15px", color: "black" }} />
          </HeaderText>
          <HeaderText>ProductList</HeaderText>
        </HeaderTextCon>
        <SortsCon className="flex aic jcsb bgw">
          <SortsLeft className="flex aic jcc ">
            <SortsText>All Products</SortsText>
            <SortsSelect>
              <SortsOption>Sort</SortsOption>
              <SortsOption>Date(New First)</SortsOption>
              <SortsOption>Date(Old First)</SortsOption>
              <SortsOption>Popularity</SortsOption>
            </SortsSelect>
          </SortsLeft>
          <SortsMiddle>
            <SortsInputCon className="flex aic jcc">
              <Search />
              <SortsInput placeholder="search ...." />
            </SortsInputCon>
          </SortsMiddle>
          <SortsRight className="flex aic jcfs">
            <ProductsIconsCon>
              <ProductsIcons>
                <Tooltip
                  onClick={() => setlistView(true)}
                  style={{
                    background: listView && "orangered",
                    color: listView && "white",
                  }}
                  title="List view"
                >
                  <IconButton>
                    <FormatListBulletedOutlined />
                  </IconButton>
                </Tooltip>
              </ProductsIcons>
              <ProductsIcons>
                <Tooltip
                  onClick={() => setlistView(false)}
                  style={{
                    background: !listView && "orangered",
                    color: !listView && "white",
                  }}
                  title="Grid view"
                >
                  <IconButton>
                    <GridOnOutlined />
                  </IconButton>
                </Tooltip>
              </ProductsIcons>
            </ProductsIconsCon>
            <SortsButton className="flex aic jcc">
              CREATE
            </SortsButton>
          </SortsRight>
        </SortsCon>
        {listView ? (
          <TableCon>
            <TableRows className="flex aife jcsa w100">
              <TableRowsEntries select>
                <Input type="checkbox" />
              </TableRowsEntries>
              <TableRowsEntries className="flex aic flex1 jcc">
                ID
              </TableRowsEntries>
              <TableRowsEntries className="flex2">Img</TableRowsEntries>
              <TableRowsEntries className="flex4">NAME</TableRowsEntries>
              <TableRowsEntries className="flex4">Price</TableRowsEntries>
              <TableRowsEntries className="flex4">Edit </TableRowsEntries>
            </TableRows>
            {rows.map((item,i) => (
              <TableColumn key={i} className="flex aifs jcsb w100">
                <TableColumnEntries select>
                  <Input type="checkbox" />
                </TableColumnEntries>
                <TableColumnEntries
                  className="flex aic jcc flex1"
                  cl="orangered"
                >
                  {item.id}
                </TableColumnEntries>
                <TableColumnEntries className="flex2">
                  <Img src={item.Photo} alt="" />
                </TableColumnEntries>
                <TableColumnEntries className="flex4">
                  {item.Name}
                </TableColumnEntries>
                <TableColumnEntries className="flex4">
                  {item.Price}
                </TableColumnEntries>
                <TableColumnEntries className="flex4 flex aic jcc">
                  <Button>Edit</Button>
                  <DeleteOutlineOutlined sx={{ cursor: "pointer" }} />
                </TableColumnEntries>
              </TableColumn>
            ))}
          </TableCon>
        ) : (
          <ProductsCon className="flex aic jcfs w100 wrap">
            {rows.map((item) => (
              <Product>
                <ProductImgCon>
                  <ProductImg src={item.Photo} />
                </ProductImgCon>
                <ProductDetails>
                  <ProductDetailsTop>
                    <ProductDetailsBgTxt cl="orangered">
                      {item.Name}
                    </ProductDetailsBgTxt>
                  </ProductDetailsTop>
                  <ProductDetailsMiddle>
                    <ProductDetailsBgTxt>$ {item.Price}</ProductDetailsBgTxt>
                  </ProductDetailsMiddle>
                  <ProductDetailsBottom></ProductDetailsBottom>
                  <ProductDetailsButton className="flex aic jcc">
                    <Link
                      className="link"
                      to="/seller-profile/edit-product/kdvchdschdsd"
                    ></Link>
                    EDIT ITEM
                  </ProductDetailsButton>
                </ProductDetails>
              </Product>
            ))}
          </ProductsCon>
        )}
      </Wrapper>
    </Container>
  );
}

export default ProductList;
