import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='container'>
			<div className='nav-link'>
				<div className='link'>
					<i className='fa fa-home' aria-hidden='true'></i>
					<Link to='/secure/items-list'>Home</Link>
				</div>
				<div className='link'>
					<i class='fa fa-plus' aria-hidden='true'></i>
					<Link to='/secure/add-item'> AddItem</Link>
				</div>
				<div className='link'>
					<i class='fa fa-search' aria-hidden='true'></i>
					<Link to='/'> Search Item</Link>
				</div>
				<div className='link'>
					<i class='fa fa-user-o' aria-hidden='true'></i>
					<Link to='/secure/profile-page'> Profile</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
