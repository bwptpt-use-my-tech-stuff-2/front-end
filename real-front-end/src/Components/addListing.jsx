import React, { Component } from 'react';

class AddListing extends Component {
	constructor() {
		super();
		this.state = {
			listing: [
				{
					title: '',
					description: '',
					category: '',
					date: '',
					pricePerHour: '',
					pricePerDay: ''
				}
			]
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const {
			title,
			description,
			category,
			date,
			pricePerDay,
			pricePerHour
		} = this.state.listing;
		return (
			<div className='addlisting-component'>
				<div className='top-section'>
					<h1>New Listing</h1>
					<img />
				</div>
				<div className='bottom-section'>
					<form>
						<label>Title</label>
						<input
							id='title'
							type='text'
							name='title'
							value={title}
							onChange={this.handleChange}
						/>
						<label>Description</label>
						<input
							id='description'
							type='text'
							name='description'
							value={description}
							onChange={this.handleChange}
						/>
						<label>Category</label>
						<input
							id='category'
							type='text'
							name='category'
							value={category}
							onChange={this.handleChange}
						/>
						<label>Select Date</label>
						<input
							id='date'
							type='text'
							name='date'
							value={date}
							onChange={this.handleChange}
						/>
						<label>Price per hour</label>
						<input
							id='pricePerHour'
							type='text'
							name='pricePerHour'
							value={pricePerHour}
							onChange={this.handleChange}
						/>
						<label>Price per day</label>
						<input
							id='pricePerDay'
							type='text'
							name='pricePerDay'
							value={pricePerDay}
							onChange={this.handleChange}
						/>
						<button onClick='#'>Add listing</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddListing;
