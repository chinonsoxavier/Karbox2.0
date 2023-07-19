import styled from "styled-components";
import Chat from "../Components/DealerDashboard/Chat";
import CreateProduct from "../Components/DealerDashboard/CreateProduct";
import Customers from "../Components/DealerDashboard/Customers";
import Dashboard from "../Components/DealerDashboard/Dashboard";
import Inbox from "../Components/DealerDashboard/Inbox";
import OrderDetails from "../Components/DealerDashboard/OrderDetails";
import Orders from "../Components/DealerDashboard/Orders";
import Product from "../Components/DealerDashboard/Product";
import Profile from "../Components/DealerDashboard/Profile";
import Sidemenu from "../Components/DealerDashboard/Sidemenu";
import Footer from "../Components/Home/Footer";
const Container = styled.div`
  background: #fff7f3;
  padding-top: 30px;
`;
const Wrapper = styled.div`
  //  padding-right: 6vh;
`;
const WrapperLeft = styled.div`
   flex:1;
  position: sticky;
  top: 0;
   margin-right:25px;
`;
const WrapperRight = styled.div`
  flex: 4;
`;
function DealerDashboard({ route }) {
  return (
    <Container>
      <Wrapper className="flex aifs jcsb w100 bsbb">
        <WrapperLeft>
          <Sidemenu />
        </WrapperLeft>
        <WrapperRight>
          {route === "dashboard" && <Dashboard route={route} />}
          {route === "product-list" && <Product route={route} />}
          {route === "edit-product" && <Product route={route} />}
          {route === "create-product" && <Product route={route} />}
          {route === "orders" && <Orders route={route} />}
          {route === "order-details" && <OrderDetails route={route} />}
          {route === "customers" && <Customers route={route} />}
          {route === "reviews" && <Dashboard route={route} />}
          {route === "chat" && <Chat route={route} />}
          {route === "inbox" && <Inbox route={route} />}
          {route === "profile" && <Profile route={route} />}
          <Product />
        </WrapperRight>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default DealerDashboard;
