import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='container'>
			<div className='nav-link'>
				<Link to='/'> Home </Link>

				<Link to='/addItem'> AddItem</Link>

				<Link to='/Search'> Search Item</Link>

				<Link to='/ProfilePage'> ProfilePage</Link>
			</div>
		</div>
	);
};

export default Navbar;
