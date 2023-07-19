import { Publish } from "@mui/icons-material";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import './user.css'

const Container = styled.div``;
const Wrapper = styled.div``;
const LeftCon = styled.div`
  flex: 3;
  position: sticky;
  top: 0;
`;

const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
`;


function EditProduct({route}) {
    const [fuel, setFuel] = useState();
    const [condition, setCondition] = useState();
    const [setNegotiable, setsetNegotiable] = useState();

    const extraFeatures = [
      { label: "Air Conditioning" },
      { label: "Airbags" },
      { label: "Station Wagon" },
      { label: "Alloy Wheel" },
      { label: "AM/FM Radio" },
      { label: "CD Player" },
      { label: "Andriod Auto" },
      { label: "Anti-Lock Brakes" },
      { label: "Armrests" },
      { label: "Bullbar" },
      { label: "CarPlay" },
      { label: "Cruise Control" },
      { label: "Cup Holders" },
      { label: "Electric Mirrors" },
      { label: "Electric Windows" },
      { label: "Front Fog Lamps" },
      { label: "Leather Seats" },
      { label: "LED Headlights" },
      { label: "Parking Assist" },
      { label: "Parking Sensors" },
      { label: "Roof Rack" },
      { label: "Sidesteps" },
      { label: "Spotlight" },
      { label: "Sunroof" },
      { label: "Traction Control" },
      { label: "Winch" },
      { label: "Xenon Lights" },
    ];
    const BodyOptions = [
      { label: "Muscle" },
      { label: "SUV" },
      { label: "Station Wagon" },
      { label: "Sedan" },
      { label: "Roadster" },
      { label: "Luxurios" },
      { label: "Pickup" },
      { label: "Panel Van" },
      { label: "Mini Van" },
      { label: "Hatchback" },
      { label: "Cross Over" },
      { label: "Coupe" },
      { label: "Convertible Coupe" },
      { label: "Convertible" },
      { label: "" },
    ];

  return (
    <Container>
      <HeaderCon>
        <Header route={route} />
      </HeaderCon>
      <Wrapper className="flex aifs jcc ">
        <div className="user">
          <div className="userTitleContainer">
            <Link to="/seller-profile/create-product/kdvchdschdsd">
              <button className="userAddButton">Create</button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Name: Lexus 350</span>
                  <span className="userShowUserTitle"> Brand: Lexus</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Product Details</span>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Short Desc</b> : Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Veritatis, exercitationem.{" "}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Description</b>: Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Earum harum aliquam sapiente maiores culpa
                    impedit repellat necessitatibus praesentium quis
                    voluptatibus.
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Stock</b> : 20
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Year of Manufacture</b>:2003
                  </span>
                </div>

                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Body</b> : SUV
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Extra features</b>:Air Conditioning,Air bags,Electric
                    Mirrors,
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Fuel</b>:Hybrid
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Condition</b>:Brand New
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Negotiable</b>:Yes
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">
                    <b>Price</b>:10 00.00
                  </span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Name</label>
                    <input
                      type="text"
                      defaultValue="Lexus 350"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Brand</label>
                    <input
                      type="text"
                      defaultValue="Lexus"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Short Decription</label>
                    <input
                      type="text"
                      defaultValue="Short Decription"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label> Decription</label>
                    <input
                      type="text"
                      defaultValue="+1 123 456 67"
                      className="Decription"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Stock</label>
                    <input
                      type="text"
                      defaultValue="Stock"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="addProductItem">
                    <Autocomplete
                      fullWidth
                      disablePortal
                      id="combo-box-demo"
                      options={BodyOptions}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField
                          placeholder="Body"
                          fullWidth
                          sx={{ width: "100%" }}
                          {...params}
                        />
                      )}
                    />
                  </div>
                  <div className="addProductItem">
                    <Autocomplete
                      fullWidth
                      disablePortal
                      id="combo-box-demo"
                      options={extraFeatures}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField
                          placeholder="extra feautures"
                          fullWidth
                          sx={{ width: "100%" }}
                          {...params}
                        />
                      )}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Fuel</label>
                    <input
                      type="text"
                      defaultValue="Hybrid"
                      className="userUpdateInput"
                    />
                  </div>{" "}
                  <div className="userUpdateItem">
                    <label>Condition</label>
                    <input
                      type="text"
                      defaultValue="Brand New"
                      className="userUpdateInput"
                    />
                  </div>{" "}
                  <div className="userUpdateItem">
                    <label>Negotiable</label>
                    <input
                      type="text"
                      defaultValue="Yes"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Price</label>
                    <input
                      type="text"
                      defaultValue="10"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default EditProduct;
