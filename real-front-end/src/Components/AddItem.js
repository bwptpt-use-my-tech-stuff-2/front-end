import React, { useState, useContext } from 'react';


const AddItem = () => {
	// const { rentals} = useContext(RenterContext);

	const [newListing, setnewListing] = useState({
		Title:"",
		Description:"",
		Category:"",
		SelectDate:"",
		PricePerHour:"",
		PricePerDay:""

		// Image: ""
	});

	const handleChange = event => {
		event.preventDefault();
		// setAddRentals({...addRentals, [e.target.name]:e.target.value})
	};

	const handleSubmit = event => {
		event.preventDefault();
		//post end point

		// setRentals(res.data)
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='Title'
				placeholder='Title'
				//   value{setAddRentals.id}
				onChange={handleChange}
			/>
			<input
				type='text-area'
				name='Description'
				placeholder='Description'
				//   value{setAddRentals.Title}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='Category'
				placeholder='Category'
				//   value{setAddRentals.Description}
				onChange={handleChange}
			/>
			<input
				type='date'
				name='SelectDate'
				placeholder='Select Date'
				//   value{setAddRentals.PickupDate}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='PricePerHour'
				placeholder='Price'
				//   value{setAddRentals.LastName}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='PricePerDay'
				placeholder='Price Per Day'
				//   value{setAddRentals.Term}
				onChange={handleChange}
			/>
			

			<button className="button" onClick={handleSubmit}> ADD LISTING</button>
		</form>
	);
};

export default AddItem;
