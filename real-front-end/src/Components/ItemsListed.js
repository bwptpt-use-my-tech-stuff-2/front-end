import React, { useEffect, useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Navbar from './navbar';
import styled from 'styled-components';
import { ProductContext } from '../Context/ProductContext';

import {
	ItemsListedH1,
	ItemsListedH2,
	ItemsListedH3,
	ItemsListedP,
	ContentCard,
	ItemListRentButton,
	StyledImg
} from './Styles';

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
				<ItemsListedH1>Discover Products</ItemsListedH1>
			</div>
			<div className='content-container'>
				<div className='camera-title'>
					<ItemsListedH2>Cameras</ItemsListedH2>
				</div>
				{/* Camera Section */}
				<ContentCard className='camera-content'>
					{camera.map(item => {
						return (
							<div className='camera-card'>
								<StyledImg src={item.ImagePath} alt='camera'></StyledImg>
								<ItemsListedH3>{item.Title}</ItemsListedH3>
								<ItemsListedP>${item.PricePerHour}/hr</ItemsListedP>
								{/* {console.log("item", item)} */}
								<ItemListRentButton onClick ={()=>handleRentals(item.id)
								} >Rent Item</ItemListRentButton>
							</div>
						);
					})}
				</ContentCard>

				{/* Projector Section */}
				<div className='projector-title'>
					<ItemsListedH2>Projectors</ItemsListedH2>
				</div>
				<ContentCard className='projector-content'>
					{projector.map(item => {
						return (
							<div className='projector-card'>
								<StyledImg src={item.ImagePath} alt='projector'></StyledImg>
								<ItemsListedH3>{item.Title}</ItemsListedH3>
								<ItemsListedP>${item.PricePerHour}/hr</ItemsListedP>
								{/* {console.log("item", item)} */}
								<ItemListRentButton onClick ={()=>handleRentals(item.id)} >Rent Item</ItemListRentButton>
							</div>
						);
					})}
				</ContentCard>

				{/* TV Section */}
				<div className='tv-title'>
					<ItemsListedH2>Tv's</ItemsListedH2>
				</div>
				<ContentCard className='tv-content'>
					{tv.map(item => {
						return (
							<div className='tv-card'>
								<StyledImg src={item.ImagePath} alt='tv'></StyledImg>
								<ItemsListedH3>{item.Title}</ItemsListedH3>
								<ItemsListedP>${item.PricePerHour}/hr</ItemsListedP>
								{/* {console.log("item", item)} */}
								<ItemListRentButton onClick ={()=>handleRentals(item.id)} >Rent Item</ItemListRentButton>
							</div>
						);
					})}
				</ContentCard>

				{/* Instruments Section */}
				<div className='instruments-title'>
					<ItemsListedH2>Instruments</ItemsListedH2>
				</div>
				<ContentCard className='instruments-content'>
					{instrument.map(item => {
						return (
							<div className='instruments-card'>
								<StyledImg src={item.ImagePath} alt='instruments'></StyledImg>
								<ItemsListedH3>{item.Title}</ItemsListedH3>
								<ItemsListedP>${item.PricePerHour}/hr</ItemsListedP>
								{/* {console.log("item", item)} */}
								<ItemListRentButton onClick ={()=>handleRentals(item.id)} >Rent Item</ItemListRentButton>
							</div>
						);
					})}
				</ContentCard>

				{/* Party Section */}
				<div className='party-title'>
					<ItemsListedH2>Party</ItemsListedH2>
				</div>
				<ContentCard className='party-content'>
					{party.map(item => {
						return (
							<div className='party-card'>
								<StyledImg src={item.ImagePath} alt='party equipment'></StyledImg>
								<ItemsListedH3>{item.Title}</ItemsListedH3>
								<ItemsListedP>${item.PricePerHour}/hr</ItemsListedP>
								{/* {console.log("item", item)} */}
								<ItemListRentButton onClick ={()=>handleRentals(item.id)} >Rent Item</ItemListRentButton>
							</div>
						);
					})}
				</ContentCard>

				{/* Other Section */}
				<div className='other-title'>
					<ItemsListedH2>Other</ItemsListedH2>
				</div>
				<ContentCard className='other-content'>
					{other.map(item => {
						return (
							<div className='other-card'>
								<StyledImg src={item.ImagePath} alt='tech equipment'></StyledImg>
								<ItemsListedH3>{item.Title}</ItemsListedH3>
								<ItemsListedP>${item.PricePerHour}/hr</ItemsListedP>
								{/* {console.log("item", item)} */}
								<ItemListRentButton onClick ={()=>handleRentals(item.id)} >Rent Item</ItemListRentButton>
							</div>
						);
					})}
				</ContentCard>
			</div>
			<Navbar />
		</div>
	);
}
