import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
    <>
      <div>
        <img src={products.ImagePath} />
        <p> {products.Title} </p>
        <h3>Price Per Day :{products.PricePerDay}</h3>
        <h3>Price Per Hour :{products.PricePerHour}</h3>
      </div>
      <div>Description :{products.Description}</div>
      <div>
        <h3>condition : {filterCondition(products.Description)} </h3>
      </div>

      <button onClick={() => handleRental(products.id)}> Rent Now </button>
    </>
  );
};

export default ProductRent;
