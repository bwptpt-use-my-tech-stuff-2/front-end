import React, { useContext } from "react";

import { ProductContext } from "../Context/ProductContext";
import home from "../Images/home.svg";
import Navbar from "./navbar"
 
const ProductThankYou = ({ match, history }) => {
  const { products, setProducts } = useContext(ProductContext);

 

  

  
    
  

  return (
    <>
    <div className="thankyou-message">
      <h1> Your item has been added to your cart </h1>
      
     
      <img src={home} />
     
    </div>
    <div>
    <Navbar />
    </div>
    </>

  );
};

export default ProductThankYou;
