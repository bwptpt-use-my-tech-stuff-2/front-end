import React, { useState, useContext } from 'react';

import { RenterContext } from '../Context/RenterContext';

const RenterForm = () => {
	// const { rentals} = useContext(RenterContext);

	const [addRentals, setAddRentals] = useState({
		id: '',
		Title: '',
		Description: '',
		Location: '',
		PickupDate: '',
		ReturnDate: '',
		Term: '',
		Paid: '',
		Returned: '',
		RentalTotalCost: ''

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
				type='number'
				name='id'
				placeholder='Enter an id'
				//   value{setAddRentals.id}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='Title'
				placeholder='Add a title'
				//   value{setAddRentals.Title}
				onChange={handleChange}
			/>
			<input
				type='textarea'
				name='Description'
				placeholder='Add a description'
				//   value{setAddRentals.Description}
				onChange={handleChange}
			/>
			<input
				type='date'
				name='PickUpDate'
				placeholder='Pick up date '
				//   value{setAddRentals.PickupDate}
				onChange={handleChange}
			/>
			<input
				type='date'
				name='ReturnDate'
				placeholder='Return date'
				//   value{setAddRentals.LastName}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='Term'
				placeholder='Term'
				//   value{setAddRentals.Term}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='Paid'
				placeholder='paid'
				//   value{setAddRentals.Paid}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='Returned'
				placeholder='returned'
				//   value{setAddRentals.Returned}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='RentalTotalCost'
				placeholder='total cost'
				//   value{setAddRentals.RentalTotalCost}
				onChange={handleChange}
			/>

			<button onClick={handleSubmit}></button>
		</form>
	);
};

export default RenterForm;
