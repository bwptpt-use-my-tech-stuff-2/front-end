import React, { useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { ProductContext } from "../Context/ProductContext";
import home from "../Images/home.svg";
import {Link} from "react-router-dom"
 
const ProductThankYou = ({ match, history }) => {
  const { products, setProducts } = useContext(ProductContext);

 

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff/${match.params.id}`
      )
      .then(res => {
        console.log("this is the data from product thankyou", res.data);
        setProducts(res.data);
      });
  }, []);

  
    
  

  return (
    <div className="thankyou-message">
      <h1> Your item has been added to your cart </h1>
      <p> Back to Home</p>
      <Link to ="/secure/items-list">Home</Link>
      <img src={home} />
    </div>
  );
};

export default ProductThankYou;
