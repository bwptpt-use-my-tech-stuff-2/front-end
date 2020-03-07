import React , {useState, useEffect}from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ProductPrice from "../Components/ProductPrice"
const ProductThankYou =({match, price})=>{
    const [summary,setSummary]=useState([])



    useEffect(() => {
        axiosWithAuth()
          .get(
            `https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff/${match.params.id}`
          )
          .then(res => {
            console.log("this is the data from product thankyou", res.data);
            setSummary(res.data);
          });
      }, []);


    return (
        <div>
        <h1> Your item has been added to your cart  </h1>
        <p> Total Amount :{summary.PricePerHour} </p>
        <p> Pick up date :</p>
        <p> Pick up Amount :</p>
        </div>
        
    )
}

export default ProductThankYou;