import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
//import { ProductContext } from "../Context/ProductContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//  import ProductPrice from "../Components/ProductPrice"

//Styles
import styled from 'styled-components';

import {
  RentItemContainer,
  RentItemTextContainer,
  RentItemImg,
  RentItemH2,
  RentItemH3,
  RentItemDiv,
  RentNowButton,
} from './Styles';

const ProductRent = ({ match, history }) => {
 // const { products, setProducts } = useContext(ProductContext);
  const [rentals, setRentals] = useState({
    Title: "",
    Description: "",
    category_id: 1,
    // SelectDate:"",
    PricePerHour: "",
    PricePerDay: "",
    condition_id: "",
    ImagePath: "",
    Location: ""
  });

  console.log("This is match from Product rent", match.params.id);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff/${match.params.id}`
      )
      .then(res => {
        console.log("this is the data from product rent", res.data);
        setRentals(res.data);
      });
  }, []);

  const handleRental = id => {
    console.log("this is the rented item", match.params.id);
    history.push(`/product-price/${id}`);
  };

   console.log ("Rentals ID" ,match.params.id)
  return (
    <RentItemContainer className='rent-item'>
      <RentItemTextContainer>
        <RentItemImg src={rentals.ImagePath} />
        <RentItemH2> {rentals.Title} </RentItemH2>
        <RentItemH3>Price Per Day :{rentals.PricePerDay}</RentItemH3>
        <RentItemH3>Price Per Hour :{rentals.PricePerHour}</RentItemH3>
        <RentItemDiv>Description :{rentals.Description}</RentItemDiv>
      <div>
        <RentItemH3>condition : {rentals.condition_id}</RentItemH3>
      </div>
      {/* <div><ProductPrice  price= {price}/></div> */}
      </RentItemTextContainer>

      <RentNowButton onClick={() => handleRental(rentals.id)}> Rent Now </RentNowButton>
    </RentItemContainer>
  );
};

export default ProductRent;
