import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
	NavContainer,
	NavCard,
	StyledIcon,
	StyledNavLink
} from './Styles';

const Navbar = () => {
	return (
		<div className='container'>
			<NavContainer className='nav-link'>
				<NavCard className='link'>
					<StyledIcon>
						<i className='fa fa-home fa-lg' aria-hidden='true'></i>
					</StyledIcon>
					<StyledNavLink>
						<Link to='/secure/items-list' style={{ textDecoration: 'none' }}>Home</Link>
					</StyledNavLink>
				</NavCard>
				<NavCard className='link'>
					<StyledIcon>
						<i className='fa fa-plus fa-lg' aria-hidden='true'></i>
					</StyledIcon>
					<Link to='/secure/add-item' style={{ textDecoration: 'none' }}> Add Item</Link>
				</NavCard>
				<NavCard className='link'>
					<StyledIcon>	
						<i className='fa fa-search fa-lg' aria-hidden='true'></i>
					</StyledIcon>
					<Link to='/' style={{ textDecoration: 'none' }}> Search Item</Link>
				</NavCard>
				<NavCard className='link'>
					<StyledIcon>
						<i className='fa fa-user-o fa-lg' aria-hidden='true'></i>
					</StyledIcon>
					<Link to='/secure/profile-page' style={{ textDecoration: 'none' }}> Profile</Link>
				</NavCard>
			</NavContainer>
		</div>
	);
};

export default Navbar;
