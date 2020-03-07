import React, { useEffect, useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Navbar from './navbar';
import styled from 'styled-components';
import { ProductContext } from '../Context/ProductContext';

const StyledImg = styled.img`
	width: 200px;
	border-radius: 8px 8px 0px 0px;
`;

export default function ItemsListed({history}) {
	// const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
	useEffect(() => {
		// if (loggedIn !== false) {
		axiosWithAuth()
			.get('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff')
			.then(res => {
				console.log('response', res.data);
				setProducts(res.data);
			});
		// }
	}, []);
	// const [itemInfo, setItemInfo] = useState([]); // All items
	const { products, setProducts } = useContext(ProductContext);

 

  console.log("this is products",products)
	// Filtered Items
	const camera = products.filter(x => x.category_id === 1); // Category ID #1
	const projector = products.filter(x => x.category_id === 2); // Category ID #2
	const tv = products.filter(x => x.category_id === 3); // Category ID #3
	const instrument = products.filter(x => x.category_id === 4); // Category ID #4
	const party = products.filter(x => x.category_id === 5); // Category ID #5
	const other = products.filter(x => x.category_id === 6); // Category ID #6
	 
	const handleRentals =id=>{
     
		console.log("ID" ,id)
     history.push(`/product-rent/${id}`)
	}
	return (
		<div className='container'>
			<div className='title-container'>
				<h1>Discover Products</h1>
			</div>
			<div className='content-container'>
				{/* Camera Section */}
				<div className='camera-content'>
					<div className='camera-title'>
						<h2>Cameras</h2>
					</div>
					{camera.map(item => {
						return (
							<div className='camera-card'>
								<StyledImg src={item.ImagePath} alt='camera'></StyledImg>
								<h3>{item.Title}</h3>
								<p>${item.PricePerHour}/hr</p>
								{/* {console.log("item", item)} */}
								<button onClick ={()=>handleRentals(item.id)
								} >Rent Item</button>
							</div>
						);
					})}
				</div>

				{/* Projector Section */}
				<div className='projector-content'>
					<div className='projector-title'>
						<h2>Projectors</h2>
					</div>
					{projector.map(item => {
						return (
							<div className='projector-card'>
								<StyledImg src={item.ImagePath} alt='projector'></StyledImg>
								<h3>{item.Title}</h3>
								<p>${item.PricePerHour}/hr</p>
								{/* {console.log("item", item)} */}
								<button onClick ={()=>handleRentals(item.id)} >Rent Item</button>
							</div>
						);
					})}
				</div>

				{/* TV Section */}
				<div className='tv-content'>
					<div className='tv-title'>
						<h2>Tv's</h2>
					</div>
					{tv.map(item => {
						return (
							<div className='tv-card'>
								<StyledImg src={item.ImagePath} alt='tv'></StyledImg>
								<h3>{item.Title}</h3>
								<p>${item.PricePerHour}/hr</p>
								{/* {console.log("item", item)} */}
								<button onClick ={()=>handleRentals(item.id)} >Rent Item</button>
							</div>
						);
					})}
				</div>

				{/* Instruments Section */}
				<div className='instruments-content'>
					<div className='instruments-title'>
						<h2>Instruments</h2>
					</div>
					{instrument.map(item => {
						return (
							<div className='instruments-card'>
								<StyledImg src={item.ImagePath} alt='instruments'></StyledImg>
								<h3>{item.Title}</h3>
								<p>${item.PricePerHour}/hr</p>
								{/* {console.log("item", item)} */}
								<button onClick ={()=>handleRentals(item.id)} >Rent Item</button>
							</div>
						);
					})}
				</div>

				{/* Party Section */}
				<div className='party-content'>
					<div className='party-title'>
						<h2>Party</h2>
					</div>
					{party.map(item => {
						return (
							<div className='party-card'>
								<StyledImg src={item.ImagePath} alt='party equipment'></StyledImg>
								<h3>{item.Title}</h3>
								<p>${item.PricePerHour}/hr</p>
								{/* {console.log("item", item)} */}
								<button onClick ={()=>handleRentals(item.id)} >Rent Item</button>
							</div>
						);
					})}
				</div>

				{/* Other Section */}
				<div className='other-content'>
					<div className='other-title'>
						<h2>Other</h2>
					</div>
					{other.map(item => {
						return (
							<div className='other-card'>
								<StyledImg src={item.ImagePath} alt='tech equipment'></StyledImg>
								<h3>{item.Title}</h3>
								<p>${item.PricePerHour}/hr</p>
								{/* {console.log("item", item)} */}
								<button onClick ={()=>handleRentals(item.id)} >Rent Item</button>
							</div>
						);
					})}
				</div>
			</div>
			<Navbar />
		</div>
	);
}
