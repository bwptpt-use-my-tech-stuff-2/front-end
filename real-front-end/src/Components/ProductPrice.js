import React , {useState, useEffect, useContext}from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ProductThankYou from "../Components/ProductThankYou";
import { ProductContext } from "../Context/ProductContext";



const ProductPrice =({history, match})=>{
  const { products, setProducts } = useContext(ProductContext);
  //   const [price, setPrice]=useState(
  //       [] )
  //  console.log("Price",price)



    
    useEffect(() => {
        axiosWithAuth()
          .get(
            `https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff/${match.params.id}`
          )
          .then(res => {
            console.log("this is the data from product price", res.data);
            setProducts(res.data);
          });
      }, []);

      


    const handlePricePerHour = price=>{
        console.log("PriceperHour", price)
        history.push("/product-thank-you")
    }
    return(
        <>
        
        {/* {"id":1,"category_id":1,"Title":"Canon EOS M5 Mirrorless Digital Camera","Description":"24.2MP APS-C CMOS Sensor\nDIGIC 7 Image Processor\n2.36m-Dot EVF, Touch and Drag AF Control\n3.2\" 1.62m-Dot Tilting Touchscreen LCD","condition_id":3,"AddDate":"2020-02-29 21:30:59","PricePerHour":30,"PricePerDay":150,"Available":1,"ImagePath":"https://i.pcmag.com/imagery/reviews/03iFcrjLxMoN78LEuDRnCfd-16.fit_scale.size_1028x578.v_1569473622.jpg"} */}
        
            <div>
        <img src= {products.ImagePath}/>
        
        </div>
        <div>
        <p>Title {products.Title}</p>
        <p> Description : {products.Description}</p>
        </div>
        <div>
        <h1> Choose</h1>
        </div>
        <div>
        {/* <ProductThankYou price ={price}/> */}
        
        <button onClick ={()=> handlePricePerHour()}> Price per Hour (${products.PricePerHour})</button>
               OR
        <button onClick ={()=> handlePricePerHour()}> Price per Day (${products.PricePerDay})</button>
    
        </div>
        </>
           
 
        
        
        
    )
}
export default ProductPrice;
