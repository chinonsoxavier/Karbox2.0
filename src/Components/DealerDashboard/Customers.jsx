import styled from "styled-components";
import img from "../../images/auction-2.jpg";
import Header from "./Header";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DataGrid } from "@mui/x-data-grid";
import {
  ChevronRight,
  LanguageOutlined,
  MoreHoriz,
  Search,
  Straight,
} from "@mui/icons-material";
import { userData } from "../../dummyData";
import { Rating } from "@mui/material";
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

const SortCon = styled.div`
  background: white;
  width: 100%;
  padding: 25px 10px;
  box-sizing: border-box;
  margin:20px 0;
`;

const SelectCon = styled.div`
  margin: 0 10px;
`;
const Select = styled.select`
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 7px;
`;
const Option = styled.option``;
const InputCon = styled.div`
  border: 1px solid grey;
  width: 50%; 
  border-radius: 2px;
`;
const Input = styled.input`
  padding: 10px 0;
  border:none;
  outline:none;
  width:100%;
`;

const SearchCon = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   color:grey;
  padding-left:7px;
`

const Chart = styled.div`
  width: 100%;
  flex: 4;
  height: 100%;
`;
const CustomerConStatistics = styled.div`
`;
const CustomerRating = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  flex: 2;
  padding: 25px;
  box-sizing: border-box;
  margin-left: 10px;
`;
const CustomerRatingHeader = styled.div``;
const CustomerRatingText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
const CustomerRatings = styled.span`
  font-size: 25px;
  font-weight: 500;
  padding: 10px 0;
`;
const CustomerRatingStats = styled.div``;
const CustomerRatingStatsTxtCon = styled.div`
  padding: 10px 0;
`;
const CustomerRatingStatsTxt = styled.span`
  margin: 0 5px;
  color: ${(props) => props.cl};
`;

const Stats = styled.div``;
const Img = styled.img`
  object-fit: contain;
  width: 70px;
`;

const TableButton = styled.button`
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 19px;
`;

function Customers({route}) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Photo",
      headerName: "Photo",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <Img src={params.row.Photo} alt="customer photo" />
          </div>
        );
      },
    },

    {
      field: "FullName",
      headerName: "FullName",
      width: 230,
    },
    { field: "Country", headerName: "Country", width: 130 },
    { field: "Date", headerName: "Date", width: 130 },
    {
      field: "Status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        return (
          <TableButton className={"Status" + params.row.Status}>
            {params.row.Status}
          </TableButton>
        );
      },
    },
    {
      field: "Email",
      headerName: "Email",
      width: 230,
    },
  ];

  const rows = [
    {
      id: 1,
      Photo: img,
      FullName: "Jon",
      Date: "8/4/2023",
      Status: "Passive",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 2,
      Photo: img,
      FullName: "Cersei",
      Date: "8/4/2023",
      Status: "Active",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 3,
      Photo: img,
      FullName: "Jaime",
      Date: "8/4/2023",
      Status: "InActive",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 4,
      Photo: img,
      FullName: "Arya",
      Date: "8/4/2023",
      Status: "Active",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 5,
      Photo: img,
      FullName: "Daenerys",
      Date: "8/4/2023",
      Status: "Active",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 6,
      Photo: img,
      FullName: null,
      Date: "8/4/2023",
      Status: "Active",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 7,
      Photo: img,
      FullName: "Ferrara",
      Date: "8/4/2023",
      Status: "Active",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 8,
      Photo: img,
      FullName: "Rossini",
      Date: "8/4/2023",
      Status: "Active",
      Email: "Chinonsoxavier26.com",
      Country: "Nigeria",
    },
    {
      id: 9,
      Photo: img,
      FullName: "Harvey",
      Date: "8/4/2023",
      Status: "Active",
      Email: "Chinonsoxavier26.com",
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
          <HeaderText>Customers</HeaderText>
        </HeaderTextCon>
        <CustomerConStatistics className="flex aic jcsb">
          <Chart className="chart">
            <h3 className="chartTitle">New Customers</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={userData}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                <Tooltip />
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </Chart>
          <CustomerRating>
            <CustomerRatingHeader className="flex aic jcsb ">
              <CustomerRatingText>Customer Ratings</CustomerRatingText>
              <MoreHoriz sx={{ color: "black" }} />
            </CustomerRatingHeader>
            <CustomerRatings className="v flex aic jcc">3.0</CustomerRatings>
            <CustomerRatingStats className="flex aic jcc w100">
              <Rating
                sx={{ color: "orangered", margin: "0 7px" }}
                name="read-only"
                value={4}
                readOnly
              />
              (34)
            </CustomerRatingStats>
            <CustomerRatingStatsTxtCon className="flex aic jcc">
              <CustomerRatingStatsTxt cl="green" className="flex aic jcc">
                <Straight sx={{ fontSize: "17px", fontWeight: 500 }} />
                +35
              </CustomerRatingStatsTxt>
              <CustomerRatingStatsTxt>
                Point from last month
              </CustomerRatingStatsTxt>
            </CustomerRatingStatsTxtCon>
            <Stats>
              <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={userData}>
                 <Line
                    dataKey="Active User"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Stats>
          </CustomerRating>
        </CustomerConStatistics>
        <SortCon className="flex aifs jcfs">
          <SelectCon>
            <Select>
              <Option>sort by:</Option>
              <Option>Name (asc)</Option>
              <Option>Name(desc)</Option>
              <Option>Newest</Option>
            </Select>
          </SelectCon>
          <SelectCon>
            <Select>
              <Option>10</Option>
              <Option>30</Option>
              <Option>50</Option>
              <Option>100</Option>
            </Select>
          </SelectCon>
          <InputCon className="flex aic jcc">
            <SearchCon>
              <Search />
            </SearchCon>
            <Input placeholder="search..." />
          </InputCon>
        </SortCon>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            sx={{ gap: "10px" }}
          />
        </div>
      </Wrapper>
    </Container>
  );
}

export default Customers;
