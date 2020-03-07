import React, { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
// Components
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Navbar from './navbar';

// Context
import { ProductContext } from '../Context/ProductContext';

const AddItem = props => {
	const { products, setProducts } = useContext(ProductContext);
	let categoryName = '',
		conditionName = '';
	const [newListing, setNewListing] = useState({
		Title: '',
		Description: '',
		category_id: 1,
		AddDate: Date.now(),
		PricePerHour: '',
		PricePerDay: '',
		condition_id: 1,
		ImagePath: ''
	});

	const handleChange = event => {
		event.preventDefault();
		setNewListing({ ...newListing, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		//post end point
		axiosWithAuth()
			.post('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff', newListing)
			.then(res => {
				console.log('User response', res.data);
				//  setNewListing(res.data)
				setProducts([...products, res.data]);
				props.history.push('/secure/items-list');
			});
	};

	const filterCategory = () => {
		if (newListing.category_id === 1) return (categoryName = 'Camera');
		if (newListing.category_id === 2) return (categoryName = 'Projector');
		if (newListing.category_id === 3) return (categoryName = 'TV');
		if (newListing.category_id === 4) return (categoryName = 'Instrument');
		if (newListing.category_id === 5) return (categoryName = 'Party');
		if (newListing.category_id === 6) return (categoryName = 'Other');
	};
	const filterCondition = () => {
		if (newListing.condition_id === 1) return (conditionName = 'Mint');
		if (newListing.condition_id === 2) return (conditionName = 'New');
		if (newListing.condition_id === 3) return (conditionName = 'Good');
		if (newListing.condition_id === 4) return (conditionName = 'Fair');
		if (newListing.condition_id === 5) return (conditionName = 'Damaged');
		if (newListing.condition_id === 6) return (conditionName = 'Broken');
	};
	filterCategory();
	filterCondition();

	return (
		<div className='container'>
			<div className='title-container'>
				<h1>New Listing</h1>
			</div>
			<div className='img-container'>
				<img
					src={newListing.ImagePath}
					onError={e => {
						// e.target.onerror = null;
						e.target.src = 'https://static.thenounproject.com/png/187803-200.png';
					}}
					alt='tech product'
				/>
				<p>Add Image</p>
			</div>
			<div className='form'>
				<div className='form-input'>
					<h2>Image URL</h2>
					<input
						type='url'
						name='ImagePath'
						value={newListing.ImagePath}
						onChange={handleChange}
					/>
				</div>
				<div className='form-input'>
					<h2>Title</h2>
					<input
						type='text'
						name='Title'
						value={newListing.Title}
						onChange={handleChange}
					/>
				</div>
				<div className='form-input'>
					<h2>Description</h2>
					<textarea
						name='Description'
						value={newListing.Description}
						onChange={handleChange}
					></textarea>
				</div>

				<div className='form-input'>
					<h2>Category</h2>
					<Popup
						modal
						trigger={
							<button onChange={handleChange} className='select-category'>
								{categoryName}
							</button>
						}
					>
						{close => (
							<div className='modal'>
								<div className='heading'>
									<h1>New listing</h1>
								</div>
								<div className='sub-heading'>
									<h2>Choose Category</h2>
								</div>
								<div className='category-list'>
									<div className='category'>
										<button
											name='category_id'
											value='1'
											onClick={() => {
												setNewListing({ ...newListing, category_id: 1 });
												close();
											}}
										>
											Camera
										</button>
									</div>
									<div className='category'>
										<button
											name='category_id'
											value='2'
											onClick={() => {
												setNewListing({ ...newListing, category_id: 2 });
												close();
											}}
										>
											Projector
										</button>
									</div>
									<div className='category'>
										<button
											name='category_id'
											value='3'
											onClick={() => {
												setNewListing({ ...newListing, category_id: 3 });
												close();
											}}
										>
											TV
										</button>
									</div>
									<div className='category'>
										<button
											name='category_id'
											value='4'
											onClick={() => {
												setNewListing({ ...newListing, category_id: 4 });
												close();
											}}
										>
											Instrument
										</button>
									</div>
									<div className='category'>
										<button
											name='category_id'
											value='5'
											onClick={() => {
												setNewListing({ ...newListing, category_id: 5 });
												close();
											}}
										>
											Party
										</button>
									</div>
									<div className='category'>
										<button
											name='category_id'
											value='6'
											onClick={() => {
												setNewListing({ ...newListing, category_id: 6 });
												close();
											}}
										>
											Other
										</button>
									</div>
								</div>
							</div>
						)}
					</Popup>
				</div>

				{/* <input
				type='date'
				name='SelectDate'
				placeholder='Select Date'
				 value={setNewListing.PickupDate}
				onChange={handleChange}
			/> */}
				<div className='form-input'>
					<h2>Price per hour</h2>
					<input
						type='text'
						name='PricePerHour'
						value={newListing.PricePerHour}
						onChange={handleChange}
					/>
				</div>
				<div className='form-input'>
					<h2>Price per day</h2>
					<input
						type='text'
						name='PricePerDay'
						value={newListing.PricePerDay}
						onChange={handleChange}
					/>
				</div>

				{/* <label>
					Condition
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
				</label> */}
				<div className='form-input'>
					<h2>Condition</h2>
					<Popup
						modal
						trigger={
							<button onChange={handleChange} className='select-condition'>
								{conditionName}
							</button>
						}
					>
						{close => (
							<div className='modal'>
								<div className='heading'>
									<h1>New listing</h1>
								</div>
								<div className='sub-heading'>
									<h2>Choose Condition</h2>
								</div>
								<div className='condition-list'>
									<div className='condition'>
										<button
											name='condtion_id'
											value='1'
											onClick={() => {
												setNewListing({ ...newListing, condition_id: 1 });
												close();
											}}
										>
											Mint
										</button>
									</div>
									<div className='condition'>
										<button
											name='condtion_id'
											value='2'
											onClick={() => {
												setNewListing({ ...newListing, condition_id: 2 });
												close();
											}}
										>
											New
										</button>
									</div>
									<div className='condition'>
										<button
											name='condtion_id'
											value='3'
											onClick={() => {
												setNewListing({ ...newListing, condition_id: 3 });
												close();
											}}
										>
											Good
										</button>
									</div>
									<div className='condition'>
										<button
											name='condtion_id'
											value='4'
											onClick={() => {
												setNewListing({ ...newListing, condition_id: 4 });
												close();
											}}
										>
											Fair
										</button>
									</div>
									<div className='condition'>
										<button
											name='condtion_id'
											value='5'
											onClick={() => {
												setNewListing({ ...newListing, condition_id: 5 });
												close();
											}}
										>
											Damaged
										</button>
									</div>
									<div className='condition'>
										<button
											name='condtion_id'
											value='6'
											onClick={() => {
												setNewListing({ ...newListing, condition_id: 6 });
												close();
											}}
										>
											Broken
										</button>
									</div>
								</div>
							</div>
						)}
					</Popup>
				</div>

				<button className='button' onClick={handleSubmit}>
					{' '}
					Add listing
				</button>
			</div>
			<Navbar />
		</div>
	);
};

export default AddItem;
