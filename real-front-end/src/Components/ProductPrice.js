import React from "react";
import {Link} from "react-router-dom";

const ProductPrice =()=>{
    return(
        <>
        <div>
        <p> Image</p>
        </div>
        <div>
        <p>Title</p>
        </div>
        <div>
        <h1> Choose</h1>
        </div>
        <div>
        <Link to ="/ProductDate">
        <button> Price per Hour</button>
               OR
        <button> Price per Day</button>
        </Link>
        </div>
        </>
    )
}
export default ProductPrice;
