import { ChevronRight, LanguageOutlined, Search } from "@mui/icons-material";
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
const SortsCon = styled.div`
  padding: 13px 10px;
  margin: 15px 0;
  box-sizing: border-box;
  border-radius: 9px;
`;
const SortsLeft = styled.div`
  flex: 1;
`;
const SortsMiddle = styled.div`
  flex: 2;
  box-sizing: border-box;
  padding: 0 15px;
  //   background:blue;
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
  // background:black;
  // color:white;
  flex: 1;
`;
const SortsRight = styled.div`
  flex: 1;
`;
const SortsText = styled.span`
  font-size: 17px;
  font-weight: 500;
  padding: 10px;
  white-space: nowrap;
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
const TableCon = styled.div``;
const TableRows = styled.div``;
const TableColumnEntries = styled.div`
  // width: 170px;
  background:white;
  padding:15px 17px;
  height:60px;
  box-sizing:border-box;
  margin:8px 0;
  flex:${props=>props.select ? 1 : 4};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  color:${props=>props.cl}
`;
const TableColumnEntriesButton = styled.button`
   padding:8px;
   border:none;
   color:white;
   width:80%;
   border-radius:19px;
`

const TableColumn = styled.div``;
const TableRowsEntries = styled.div`
  padding: 0 17px;
  box-sizing: border-box;
  // width: 170px;
  // background:white;
  flex: ${props=>props.select ? 1 : 4};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

`;

const Input = styled.input`
   margin:0 9px;
`

function Orders({route}) {

  const rows = [
    {
      id: 1,
      Name: "Jon",
      Date: "8/4/2023",
      Status: "Shipped",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 2,
      Name: "Cersei",
      Date: "8/4/2023",
      Status: "Canceled",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 3,
      Name: "Jaime",
      Date: "8/4/2023",
      Status: "Processing",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 4,
      Name: "Arya",
      Date: "8/4/2023",
      Status: "Delivered",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 5,
      Name: "Daenerys",
      Date: "8/4/2023",
      Status: "Active",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 6,
      Name: "dhb jchdn a",
      Date: "8/4/2023",
      Status: "Active",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 7,
      Name: "Ferrara",
      Date: "8/4/2023",
      Status: "Active",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 8,
      Name: "Rossini",
      Date: "8/4/2023",
      Status: "Active",
      Total: 3900,
      Country: "Nigeria",
    },
    {
      id: 9,
      Name: "Harvey",
      Date: "8/4/2023",
      Status: "Active",
      Total: 3900,
      Country: "Nigeria",
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
            {" "}
            <LanguageOutlined
              sx={{ fontSize: "17px", margin: "0 3px", color: "orangered" }}
            />{" "}
            DashBoard
            <ChevronRight sx={{ fontSize: "15px", color: "black" }} />
          </HeaderText>
          <HeaderText>Orders</HeaderText>
        </HeaderTextCon>
        <SortsCon className="flex aic jcsb bgw">
          <SortsLeft className="flex aic jcc ">
            <SortsText>All Orders</SortsText>
            <SortsSelect>
              <SortsOption>Sort</SortsOption>
              <SortsOption>Date(New First)</SortsOption>
              <SortsOption>Date(Old First)</SortsOption>
              <SortsOption>Popularity</SortsOption>
            </SortsSelect>
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
          <SortsRight className="flex aic jcfe"></SortsRight>
        </SortsCon>
        <TableCon>
          <TableRows className="flex aifs jcsb w100">
            <TableRowsEntries select>
              <Input type="checkbox" />
            </TableRowsEntries>
            <TableRowsEntries className="flex aic jcc">ID</TableRowsEntries>
            <TableRowsEntries>NAME</TableRowsEntries>
            <TableRowsEntries>DATE</TableRowsEntries>
            <TableRowsEntries>TOTAL</TableRowsEntries>
            <TableRowsEntries>STATUS</TableRowsEntries>
          </TableRows>
          {rows.map((item) => (
            <TableColumn className="flex aifs jcsb w100">
              <TableColumnEntries select>
                <Input type="checkbox" />
              </TableColumnEntries>
              <TableColumnEntries className="flex aic jcc" cl="orangered">
                {item.id}
              </TableColumnEntries>
              <TableColumnEntries>{item.Name}</TableColumnEntries>
              <TableColumnEntries>{item.Date}</TableColumnEntries>
              <TableColumnEntries>{item.Total}</TableColumnEntries>
              <TableColumnEntries>
                <TableColumnEntriesButton
                  className={"orderStatus" + item.Status}
                >
                  {item.Status}
                </TableColumnEntriesButton>
              </TableColumnEntries>
            </TableColumn>
          ))}
        </TableCon>
      </Wrapper>
    </Container>
  );
}

export default Orders;
