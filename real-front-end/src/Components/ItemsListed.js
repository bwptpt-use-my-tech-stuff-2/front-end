import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from'styled-components';

const StyledImg = styled.img`
	width: 200px;
	border-radius: 8px 8px 0px 0px;
`;

// const 

export default function ItemsListed() {
  const [itemInfo, setItemInfo] = useState([]);
  const [camera, setCamera] = useState([]); // Category ID #1
  const [tv, setTv] = useState([]); // Category ID #2
  const [instruments, setInstruments] = useState([]); // Category ID #3
  const [party, setParty] = useState([]); // Category ID #4
  const [other, setOther] = useState([]); // Category ID #5

  useEffect(() => {
    axiosWithAuth()
      .get("https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff")
      .then(response => {
        setItemInfo(response.data);
        // console.log(itemInfo);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].category_id === 1) {
            setCamera(...camera, [response.data[i]]);
            // console.log('camera', camera)
          }
          if (response.data[i].category_id === 2) {
            setTv(...tv, [response.data[i]]); // console.log('tv', tv)
          }
          if (response.data[i].category_id === 3) {
            setInstruments(...instruments, [response.data[i]]); // console.log('instrument', instrument)
          }
          if (response.data[i].category_id === 4) {
            setParty(...party, [response.data[i]]); // console.log('party', party)
          }
          if (response.data[i].category_id === 5) {
            setOther(...other, [response.data[i]]); // console.log('other', other)
          }
        }
      })
      .catch(error => {
        console.log("Error!", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="title-container">
        <h1>Discover Products</h1>
      </div>

      <div className="content-container">

        <div className="camera-content">
          <div className="camera-title">
            <h2>Cameras</h2>
          </div>

          {camera.map(item => {
            return (
              <div className="camera-card">
                  <StyledImg src={item.ImagePath} alt="camera"></StyledImg>
                  <h3>{item.Title}</h3>
				  <p>${item.PricePerHour}/hr</p>
                  {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>

		<div className="tv-content">
          <div className="tv-title">
            <h2>Tv's</h2>
          </div>

          {tv.map(item => {
            return (
              <div className="tv-card">
                  <StyledImg src={item.ImagePath} alt="tv"></StyledImg>
                  <h3>{item.Title}</h3>
				  <p>${item.PricePerHour}/hr</p>
                  {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>

		<div className="instruments-content">
          <div className="instruments-title">
            <h2>Instruments</h2>
          </div>

          {instruments.map(item => {
            return (
              <div className="instruments-card">
                  <StyledImg src={item.ImagePath} alt="instruments"></StyledImg>
                  <h3>{item.Title}</h3>
				  <p>${item.PricePerHour}/hr</p>
                  {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>

		<div className="party-content">
          <div className="party-title">
            <h2>Party</h2>
          </div>

          {party.map(item => {
            return (
              <div className="party-card">
                  <StyledImg src={item.ImagePath} alt="party"></StyledImg>
                  <h3>{item.Title}</h3>
				  <p>${item.PricePerHour}/hr</p>
                  {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>

		<div className="other-content">
          <div className="other-title">
            <h2>Other</h2>
          </div>

          {other.map(item => {
            return (
              <div className="other-card">
                  <StyledImg src={item.ImagePath} alt="other"></StyledImg>
                  <h3>{item.Title}</h3>
				  <p>${item.PricePerHour}/hr</p>
                  {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
