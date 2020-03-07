import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
//import { ProductContext } from "../Context/ProductContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//  import ProductPrice from "../Components/ProductPrice"

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
    <>
      <div>
        <img src={rentals.ImagePath} />
        <p> {rentals.Title} </p>
        <h3>Price Per Day :{rentals.PricePerDay}</h3>
        <h3>Price Per Hour :{rentals.PricePerHour}</h3>
      </div>
      <div>Description :{rentals.Description}</div>
      <div>
        <h3>condition : {rentals.condition_id}</h3>
      </div>
      {/* <div><ProductPrice  price= {price}/></div> */}

      <button onClick={() => handleRental(rentals.id)}> Rent Now </button>
    </>
  );
};

export default ProductRent;
