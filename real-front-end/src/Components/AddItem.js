import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddItem = () => {

	const [newListing, setNewListing] = useState({
		Title:"",
		Description:"",
		category_id:"",
		// SelectDate:"",
		PricePerHour:"",
		PricePerDay:"",
		condition_id:""

		// Image: ""
	});

	const handleChange = event => {
		event.preventDefault();
		 setNewListing({...newListing, [event.target.name]:event.target.value})
	};

	const handleSubmit = event => {
		event.preventDefault();
		//post end point
		axiosWithAuth()
		.post("https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff",newListing)
		.then(res=> console.log("User response", res.data))
		//  setNewListing(res.data)
	};

	return (
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
			<input
				type='text'
				name='category_id'
				placeholder='Category'
			   value={newListing.category_id}
				onChange={handleChange}
			/>
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
			<input
				type='text'
				name='condition_id'
				placeholder='conditionid'
				value={newListing.condition_id}
				onChange={handleChange}
			/>
			
			

			<button className="button" onClick={handleSubmit}> ADD LISTING</button>
		</form>
	);
};

export default AddItem;
