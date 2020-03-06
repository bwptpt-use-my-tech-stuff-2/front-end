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
					<Link to='/secure/add-item'> AddItem</Link>
				</div>

				<Link to='/'> Search Item</Link>

				<Link to='/secure/profile-page'> Profile</Link>
			</div>
		</div>
	);
};

export default Navbar;
