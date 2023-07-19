import { AddAPhotoRounded } from "@mui/icons-material";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Header from "./Header";
import styled from "styled-components";

import "./CreateProduct.css";
import { useState } from "react";
const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff7f3;
  z-index: 100;
`;
export default function CreateProduct({ route }) {
  const [fuel, setFuel] = useState();
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
  ];

  return (
    <div className="newProduct">
      <HeaderCon>
        <Header route={route} />
      </HeaderCon>
      <form className="addProductForm">
        <div className="addProductItem" id="inputFile">
          <label
            htmlFor="file"
            className="flex aic jcc"
            style={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              background: "#eee",
            }}
          >
            <AddAPhotoRounded className="userUpdateIcon" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <div className="addProductItem">
          <label>Product Name</label>
          <TextField
            id="Outlined-basic"
            type="text"
            placeholder="eg : Lexus 350"
          />
        </div>
        <div className="addProductItem">
          <label> Short Description</label>
          <TextField
            id="Outlined-basic"
            type="text"
            placeholder="Short Description"
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Description"
          />
          width
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <TextField id="Outlined-basic" type="text" placeholder="1" />
        </div>
        <div className="addProductItem">
          <label>Brand</label>
          <TextField id="Outlined-basic" type="text" placeholder="Mercedes" />
        </div>
        <div className="addProductItem">
          <label>Year of manufacture</label>
          <TextField id="Outlined-basic" type="text" placeholder="2023" />
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
          <FormControl>
            <InputLabel>Fuel</InputLabel>

            <Select
              placeholder="Fuel"
              value={fuel}
              onChange={(e) => () => setFuel(e.target.value)}
            >
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="Electric">Electric</MenuItem>
              <MenuItem value="Diesel">Diesel</MenuItem>
              <MenuItem value="Gas">Gas</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="addProductItem">
          <FormControl className="CreateProducts_Input">
            <InputLabel>Condition</InputLabel>

            <Select
              placeholder="Condition"
              value={fuel}
              onChange={(e) => () => setsetNegotiable(e.target.value)}
            >
              <MenuItem value="Abroad Used">Abroad Used</MenuItem>
              <MenuItem value="Nigerian Used">Nigerian Used</MenuItem>
              <MenuItem value="Brand New">Brand New</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="addProductItem">
          <FormControl>
            <InputLabel>Negotiable</InputLabel>
            <Select
              placeholder="Negotiable"
              label="Negotiable"
              value={fuel}
              onChange={(e) => () => setFuel(e.target.value)}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </div>{" "}
        <div className=" flex aic jcc">
          <div className="addProductItem">
            <label>Price</label>
            <TextField
              id="Outlined-basic"
              type="text"
              placeholder="eg : Lexus 350"
            />
          </div>
        </div>
        <button className="addProductButton">Submit Item</button>
      </form>
    </div>
  );
}
