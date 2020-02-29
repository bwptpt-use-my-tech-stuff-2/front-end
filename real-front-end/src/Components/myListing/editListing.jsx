import React, { useState } from 'react';

const EditListing = () => {
	const [editListing, setEditListing] = useState({
		Title: '',
		Description: '',
		Category: '',
		SelectDate: '',
		PricePerHour: '',
		PricePerDay: ''

		// Image: ""
	});

	const handleChange = e => {
		e.preventDefault();
		setEditListing({ ...editListing, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		//post end point

		// setRentals(res.data)
	};

	return (
		<div className='container'>
			<div className='top-section'>
				<h2 className='header'>My listing</h2>
				<img src='#' className='img' alt='product' />
			</div>

			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input
					type='text'
					name='Title'
					//   value{setAddRentals.id}
					onChange={handleChange}
				/>

				<label>Description</label>
				<input
					type='text-area'
					name='Description'
					//   value{setAddRentals.Title}
					onChange={handleChange}
				/>

				<label>Category</label>
				<select name='Category'>
					<option value=''>Camera</option>
					<option value=''>TV</option>
					<option value=''>Instrument</option>
					<option value=''>Party</option>
					<option value=''>Other</option>
				</select>

				<label>Select Date</label>
				<input
					type='date'
					name='SelectDate'
					//   value{setAddRentals.PickupDate}
					onChange={handleChange}
				/>

				<label>Price per hour</label>
				<input
					type='number'
					name='PricePerHour'
					//   value{setAddRentals.LastName}
					onChange={handleChange}
				/>

				<label>Price per day</label>
				<input
					type='number'
					name='PricePerDay'
					//   value{setAddRentals.Term}
					onChange={handleChange}
				/>

				<button className='button' onClick={handleSubmit}>
					{' '}
					ADD LISTING
				</button>
			</form>
		</div>
	);
};

export default EditListing;
