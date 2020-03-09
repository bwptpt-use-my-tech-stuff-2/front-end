import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
  const { products, setProducts } = useContext(ProductContext);

  console.log("This is match from Product rent", match.params.id);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff/${match.params.id}`
      )
      .then(res => {
        console.log("this is the data from product rent", res.data);
        // setRentals(res.data);
        setProducts(res.data);
      });
  }, []);
  const filterCondition = () => {
    if (products.condition_id === 1) return 'Mint';
    if (products.condition_id === 2) return ('New');
    if (products.condition_id === 3) return 'Good';
    if (products.condition_id === 4) return ('Fair');
    if (products.condition_id === 5) return ('Damaged');
    if (products.condition_id === 6) return ('Broken');
  };

  




  const handleRental = id => {
    console.log("this is the rented item", match.params.id);
    history.push(`/product-price/${id}`);
  };

  console.log("Rentals ID", match.params.id);
  return (

    <RentItemContainer className='rent-item'>
      <RentItemTextContainer>
        <RentItemImg src={products.ImagePath} />
        <RentItemH2> {products.Title} </RentItemH2>
        <RentItemH3>Price Per Day :{products.PricePerDay}</RentItemH3>
        <RentItemH3>Price Per Hour :{products.PricePerHour}</RentItemH3>
        <RentItemDiv>Description :{products.Description}</RentItemDiv>
      <div>
        <RentItemH3>condition : {filterCondition(products.condition_id)}</RentItemH3>
      </div>
      {/* <div><ProductPrice  price= {price}/></div> */}
      </RentItemTextContainer>

      <RentNowButton onClick={() => handleRental(products.id)}> Rent Now </RentNowButton>
    </RentItemContainer>

  );
};

export default ProductRent;
