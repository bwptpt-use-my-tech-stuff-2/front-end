import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
	UniversalH1,
	ProfileImg,
	ProfileButtonContainer,
	ProfilePageButton,
	ProfileP
} from './Styles';

const ProfilePage = () => {
	return (
		<div>
			<div className='icon-container'>
				<div className='nav-link'>
					<Link to='/secure/account-settings'> My Account Settings </Link>
					{/* <Link to='/secure/user'> get users </Link> */}
				</div>
			</div>
			<div className='title-container'>
				<UniversalH1 className='title'>Use My Tech Stuff</UniversalH1>
			</div>
			<div className='middle-content'>
				<div className='img-container'>
					<ProfileImg src='https://d8kaami2d2b7v.cloudfront.net/monthly_2019_08/Small_Color.thumb.jpg.320de9807fc78b159000712b6ad9b537.jpg' />
				</div>
				<div className='location'>
					<ProfileP className='location-text'>Location:</ProfileP>
				</div>
			</div>
			<ProfileButtonContainer className='btn-container'>
				<ProfilePageButton><i class="fas fa-tag"></i> Your listings</ProfilePageButton>
				<ProfilePageButton><i class="fas fa-history"></i> History</ProfilePageButton>
			</ProfileButtonContainer>
			<Navbar />
		</div>
	);
};

export default ProfilePage;
