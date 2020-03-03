import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='container'>
			<div className='nav-link'>
				<Link to='/secure/items-list'> Home </Link>

				<Link to='/secure/add-item'> AddItem</Link>

				<Link to='/'> Search Item</Link>

				<Link to='/secure/profile-page'> Profile</Link>
			</div>
		</div>
	);
};

export default Navbar;
