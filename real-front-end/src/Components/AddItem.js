import React, { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
// Components
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Navbar from './navbar';

// Context
import { ProductContext } from '../Context/ProductContext';

const AddItem = props => {
	const { products, setProducts } = useContext(ProductContext);
	const { showModal, setShowModal } = useState({ open: false });
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

	const openModal = () => {
		setShowModal({ open: true });
	};

	const closeModal = () => {
		setShowModal({ open: false });
	};

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
			<form onSubmit={handleSubmit}>
				<label>
					Image URL
					<input
						type='url'
						name='ImagePath'
						value={newListing.ImagePath}
						onChange={handleChange}
					/>
				</label>
				<label>
					Title
					<input
						type='text'
						name='Title'
						value={newListing.Title}
						onChange={handleChange}
					/>
				</label>
				<label>
					Description
					{/* <input
						type='text-area'
						name='Description'
						value={newListing.Description}
						onChange={handleChange}
					/> */}
					<textarea
						name='Description'
						value={newListing.Description}
						onChange={handleChange}
					></textarea>
				</label>

				{/* <label>
					Category
					<select
						name='category_id'
						onChange={handleChange}
						value={newListing.category_id}
					>
						<option value='1'>Camera</option>
						<option value='2'>Projector</option>
						<option value='3'>TV</option>
						<option value='4'>Instruments</option>
						<option value='5'>Party</option>
						<option value='6'>Other</option>
					</select>
				</label> */}

				<label>
					Category
					<button
						type='button'
						onClick={() => {
							setShowModal({ open: 'true' });
						}}
					>
						{newListing.category_id}
					</button>
					<Popup open={showModal} onClose={closeModal} closeOnDocumentClick>
						<div className='modal-category'>
							<div className='title'>
								<h1>New listing</h1>
							</div>
							<div className='sub-title'>
								<h2>Choose Category</h2>
							</div>
							<div className='category-list'>
								<button
									type='button'
									className='category'
									name='category_id'
									value='1'
									onClick={() => {
										setNewListing({ ...newListing, category_id: 1 });
										closeModal();
									}}
								>
									Camera
								</button>
								<button
									type='button'
									className='category'
									name='category_id'
									value='2'
									onChange={handleChange}
									onClick={() => {
										setNewListing({ ...newListing, category_id: 2 });
										closeModal();
									}}
								>
									Projector
								</button>
								<button
									type='button'
									className='category'
									name='category_id'
									value='3'
									onClick={() => {
										setNewListing({ ...newListing, category_id: 2 });
										closeModal();
									}}
								>
									TV
								</button>
								<button
									type='button'
									className='category'
									name='category_id'
									value='4'
									onClick={() => {
										setNewListing({ ...newListing, category_id: 3 });
										closeModal();
									}}
								>
									Instruments
								</button>
								<button
									type='button'
									className='category'
									name='category_id'
									value='5'
									onClick={() => {
										setNewListing({ ...newListing, category_id: 5 });
										closeModal();
									}}
								>
									Party
								</button>
								<button
									type='button'
									className='category'
									name='category_id'
									value='6'
									onClick={() => {
										setNewListing({ ...newListing, category_id: 6 });
										closeModal();
									}}
								>
									Other
								</button>
							</div>
						</div>
					</Popup>
				</label>

				{/* <input
				type='date'
				name='SelectDate'
				placeholder='Select Date'
				 value={setNewListing.PickupDate}
				onChange={handleChange}
			/> */}
				<label>
					Price per hour
					<input
						type='text'
						name='PricePerHour'
						value={newListing.PricePerHour}
						onChange={handleChange}
					/>
				</label>
				<label>
					Price per day
					<input
						type='text'
						name='PricePerDay'
						value={newListing.PricePerDay}
						onChange={handleChange}
					/>
				</label>

				{/* <input
				type='text'
				name='condition_id'
				placeholder='conditionid'
				value={newListing.condition_id}
				onChange={handleChange}
			/> */}
				<label>
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
				</label>

				<button className='button' onClick={handleSubmit}>
					{' '}
					Add listing
				</button>
			</form>
			<Navbar />
		</div>
	);
};

export default AddItem;
