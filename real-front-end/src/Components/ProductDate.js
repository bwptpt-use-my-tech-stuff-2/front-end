import React from "react";
import {Link} from "react-router-dom";



const ProductDate = (props) => {

    const handleChange = event => {
		event.preventDefault();
		
	};
    const handleSubmit = event => {
        event.preventDefault();
        props.history.push("/ProductThankYou")
    }
  return (
    <div>
      <p> Price per day goes here </p>
      <form>
        <input type="date" placeholder="Pickup Date" onChange={handleChange} />

        <input type="date" placeholder="Pickup Date" onChange={handleChange} />
       
         <button onClick={handleSubmit}>Submit</button>  
      </form>
      
    </div>
  );

}

export default ProductDate;
