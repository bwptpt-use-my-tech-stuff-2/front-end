import React from 'react';

const ListingOptions = () => {
	return (
		<div className='container'>
			<div className='title-container'>
				<h2 className='title'>Lisiting Name</h2>
			</div>
			<div className='listing-options'>
				<div className='option'>Edit listing</div>
				<div className='option'>View listing</div>
				<div className='option'>Delete listing</div>
			</div>
		</div>
	);
};

export default ListingOptions;
