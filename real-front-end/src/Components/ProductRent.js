import React from "react";
import {Link} from "react-router-dom"

const ProductRent = () => {
  return (
    <>
      <div>
        <p>Image goes here </p>
        <p> Title goes here </p>
        <p> price goes here </p>
      </div>
      <div>
        <h1> Description</h1>
      </div>
      <div>
        <h3>condition :</h3>
      </div>
      <div>
        <h4>Located :</h4>
      </div>
      
      <Link to ="/ProductPrice"> <button > Rent Now </button> </Link>
     
     
      

      
    </>
  );
};

export default ProductRent;
