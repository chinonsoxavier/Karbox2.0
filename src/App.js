import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Inventory from "./Pages/Inventory";
import VehicleDetails from "./Pages/ProductD";
import MyAccount from "./Pages/MyAccount.jsx";
import Vendor from "./Pages/Vendor";
import Customer from "./Pages/Profile";
import Link from "./Link/Link";
import Livechat from "./Link/Livechat";
import SellerSignup from "./Pages/SellerSignup";
import DealerProfile from "./Pages/DealerProfile";
import Inventory2 from "./Pages/Inventory2";
import DealerDashboard from "./Pages/DealerDashboard";
import SearchPage from './Pages/SearchPage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { UserContext } from "./Components/UseContext/Context";
const Container = styled.div``;
const Wrapper = styled.div``;

function App() {
  const [form, setForm] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setForm((current) => !current);
  }, [form]);

const user = {
  username:'chinonso',
  address:'78 adekeya street',
  phoneNumber:'08129785638'
}

const [show,setShow]=useState(false)
const direction = window.scrollY

useEffect(() => {
  window.addEventListener('scroll', ()=>{
    
     if(direction < window.scrollY){
      setShow(true)
     } else{
      setShow(false)
     }
  })
}, [show,direction])
  var value = { type: "", brands: "", search: "" };
  const [searchQuery,setSearchQuery]=useState('')
  return (
    <UserContext.Provider value={value}>
      <Container className="App">
        <Wrapper>
          {show && <Link id="Link" />}
          {show && <Livechat />}
          <BrowserRouter className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/about-us"
                element={
                  <AboutUs menu={menu} setMenu={setMenu} route="about-us" />
                }
              />
              <Route
                path="/contact-us"
                element={<ContactUs form={form} route="contact-us" />}
              />
              <Route
                path={`/welcome-back`}
                element={<MyAccount />}
              />
              <Route
                path={`/log-in`}
                element={<Login />}
              />
              <Route
                path={`/sign-up`}
                element={<Register />}
              />
              <Route
                path={`/inventory`}
                element={<Inventory route={"inventory"} />}
              />
              <Route
                path={`/inventory/?condition`}
                element={<Inventory/>}
              />
              <Route
                path={`/inventory?brand`}
                element={<Inventory route={"inventory"} />}
              />
              <Route
                path={`/inventory?type`}
                element={<Inventory route={"inventory"} />}
              />
              <Route
                path={`/inventory/:search`}
                element={
                  <SearchPage
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                   
                  />
                }
              />
              <Route
                path="/inventory2"
                element={<Inventory2 route={"inventory2"} />}
              />
              <Route
                path="/seller-profile/dashboard/:id"
                element={<DealerDashboard route={"dashboard"} />}
              />
              <Route
                path="/seller-profile/product-list/:id"
                element={<DealerDashboard route={"product-list"} />}
              />
              <Route
                path="/seller-profile/edit-product/:id"
                element={<DealerDashboard route={"edit-product"} />}
              />
              <Route
                path="/seller-profile/create-product/:id"
                element={<DealerDashboard route={"create-product"} />}
              />
              <Route
                path="/seller-profile/orders/:id"
                element={<DealerDashboard route={"orders"} />}
              />
              <Route
                path="/seller-profile/order-details/:id"
                element={<DealerDashboard route={"order-details"} />}
              />
              <Route
                path="/seller-profile/customers/:id"
                element={<DealerDashboard route={"customers"} />}
              />
              <Route
                path="/seller-profiledd/reviews/:id"
                element={<DealerDashboard route={"reviews"} />}
              />
              <Route
                path="/seller-profile/chat/:id"
                element={<DealerDashboard route={"chat"} />}
              />
              <Route
                path="/seller-profile/inbox/:id"
                element={<DealerDashboard route={"inbox"} />}
              />
              <Route
                path="/seller-profile/profile/:id"
                element={<DealerDashboard route={"profile"} />}
              />
              <Route
                path="/dealercenter/user/signup/dostep/step1"
                element={<SellerSignup route="step1" />}
              />
              <Route path="/vehicle/:id" element={<VehicleDetails />} />
              <Route path="/dealer-profile/:id" element={<Vendor />} />
              <Route
                path="/my-account/general"
                element={<Customer user={user} route="general" />}
              />
              <Route
                path="/my-account/inbox"
                element={<Customer user={user} route="inbox" />}
              />
              <Route
                path="/my-account/chats"
                element={<Customer user={user} route="chats" />}
              />
              <Route
                path="/my-account/close-account"
                element={<Customer user={user} route="close-account" />}
              />
              <Route
                path="/customer/:id"
                element={<Customer route="orders" />}
              />
              <Route path="/dealer/:id" element={<DealerProfile />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </UserContext.Provider>
  );
}

export default App;
