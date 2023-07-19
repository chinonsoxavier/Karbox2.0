import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import styled from "styled-components";
import Header from "./Header";
import "./chart.css";
import "./widgetLg.css";
import {userData} from '../../dummyData'
import { Link } from "react-router-dom";
import "./product.css";
import "./featuredInfo.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Container = styled.div`
   width:100%;

`
const Wrapper = styled.div`

`
const HeaderText = styled.h3`

`
const DealerDashboardInfoCon = styled.div`
   width:100%;
`

const FeaturedItem = styled.div`
  flex: 1;
  padding: 30px;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin:${props=>props.mg==='middle' && '0 30px' }
`;

function Dashboard({grid,route}) {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };

  return (
    <Container>
      <Header route={route} />
      <HeaderText>Overview</HeaderText>
      <Wrapper>
        <DealerDashboardInfoCon className="flex aic jcsb w100">
          <div className="featured">
            <FeaturedItem className="featuredItem">
              <span className="featuredTitle">Revanue</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                  -11.4 <ArrowDownward className="featuredIcon negative" />
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </FeaturedItem>
            <FeaturedItem mg='middle' className="featuredItem">
              <span className="featuredTitle">Sales</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">
                  -1.4 <ArrowDownward className="featuredIcon negative" />
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </FeaturedItem>
            <FeaturedItem className="featuredItem">
              <span className="featuredTitle">Cost</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">
                  +2.4 <ArrowUpward className="featuredIcon" />
                </span>
              </div>
              <span className="featuredSub">Compared to last month</span>
            </FeaturedItem>
          </div>
        </DealerDashboardInfoCon>
      <div className="chart">
          <h3 className="chartTitle">Order Analytics</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={userData}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transactions</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Declined" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
          </table>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Dashboard