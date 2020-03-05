import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Navbar from './navbar';
import {ProductContext} from "../Context/ProductContext"

const AddItem = (props) => {
	  const {products, setProducts}=useContext(ProductContext)
	 
	const [newListing, setNewListing] = useState({
		Title: '',
		Description: '',
		category_id: 1,
		// SelectDate:"",
		PricePerHour: '',
		PricePerDay: '',
		condition_id: 1,
		ImagePath:""
	});

	const handleChange = event => {
		event.preventDefault();
		setNewListing({ ...newListing, [event.target.name]: event.target.value });
	};

	const handleSelectChange = event => {
		event.preventDefault();
		setNewListing({ ...newListing, category_id: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		//post end point
		axiosWithAuth()
			.post('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff', newListing)
			.then(res => {
				console.log('User response', res.data);
		//  setNewListing(res.data)
			setProducts([...products,res.data])
			 props.history.push("/secure/items-list")
			})
		
	};

	return (
		<div className='container'>
			<div className='title-container'>
				<h1>New Listing</h1>
			</div>
			<div className='img-container'></div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='Title'
					placeholder='Title'
					value={newListing.Title}
					onChange={handleChange}
				/>
				<input
					type='text-area'
					name='Description'
					placeholder='Description'
					value={newListing.Description}
					onChange={handleChange}
				/>
				{/* <input
				type='text'
				name='category_id'
				placeholder='Category'
			   value={newListing.category_id}
				onChange={handleChange}
			/> */}
				<select name='category_id' onChange={handleChange} value={newListing.category_id}>
					<option value='1'>Camera</option>
					<option value='2'>Projector</option>
					<option value='3'>TV</option>
					<option value='4'>Instruments</option>
					<option value='5'>Party</option>
					<option value='6'>Other</option>
				</select>
				{/* <input
				type='date'
				name='SelectDate'
				placeholder='Select Date'
				 value={setNewListing.PickupDate}
				onChange={handleChange}
			/> */}
				<input
					type='text'
					name='PricePerHour'
					placeholder='Price'
					value={newListing.PricePerHour}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='PricePerDay'
					placeholder='Price Per Day'
					value={newListing.PricePerDay}
					onChange={handleChange}
				/>
				{/* <input
				type='text'
				name='condition_id'
				placeholder='conditionid'
				value={newListing.condition_id}
				onChange={handleChange}
			/> */}
				<select
					name='condition_id'
					onChange={handleChange}
					value={newListing.condition_id}
				>
					<option value='1'>Mint</option>
					<option value='2'>New</option>
					<option value='3'>Good</option>
					<option value='4'>Fair</option>
					<option value='5'>Damaged</option>
					<option value='6'>Broken</option>
				</select>
                 <input
				  type ="url"
				  placeholder="Enter your image url"
				  name="ImagePath"
				  value={newListing.ImagePath}
				  onChange={handleChange}
				  />
				<button className='button' onClick={handleSubmit}>
					{' '}
					ADD LISTING
				</button>
			</form>
			<Navbar />
		</div>
	);
};

export default AddItem;
