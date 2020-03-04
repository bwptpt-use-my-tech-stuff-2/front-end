import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
	return (
		<div>
			<div className='icon-container'>
				<div className='nav-link'>
					<Link to='/secure/my-profile'> My profile </Link>
				</div>
			</div>
			<div className='title-container'>
				<h1 className='title'>Use My Tech Stuff</h1>
			</div>
			<div className='middle-content'>
				<div className='img-container'>
					<img src='https://d8kaami2d2b7v.cloudfront.net/monthly_2019_08/Small_Color.thumb.jpg.320de9807fc78b159000712b6ad9b537.jpg' />
				</div>
				<div className='location'>
					<p className='location-text'>Location:</p>
				</div>
			</div>
			<div className='btn-container'>
				<button>Your listings</button>
				<button>History</button>
			</div>
			<Navbar />
		</div>
	);
};

export default ProfilePage;
