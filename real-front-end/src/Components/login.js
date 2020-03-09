import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import styled from 'styled-components';

import {
	StyledContainer,
	SignInSignInButton,
	StyledInput,
	SignInH1,
	StyledLabelDiv
} from './Styles';

const Login = props => {
	// const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
	const [credentials, setCredentials] = useState({ Email: '', Password: '' });
	const { user, setUser } = useContext(UserContext);

	const handleChange = e => {
		e.preventDefault();
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			// 'https://cors-anywhere.herokuapp.com/https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api // For COARS

			.post('/auth/login', credentials)
			.then(res => {
				sessionStorage.setItem('token', res.data.token);
				console.log(res);
				setUser(res.data.id);
				props.history.push('/secure/items-list');
			})
			.catch(err => {
				console.error(err);
			});
	};

	const { Email, Password } = credentials;

	return (
		<StyledContainer className='signInForm'>
			<SignInH1>Sign in</SignInH1>
			<form onSubmit={handleSubmit}>
				<StyledLabelDiv>
					<label>Email Address</label>
				</StyledLabelDiv>
					<StyledInput
						type='email'
						name='Email'
						value={Email}
						required
						onChange={handleChange}
					/>
				<StyledLabelDiv>
					<label>Password</label>
				</StyledLabelDiv>
					<StyledInput
						required
						type='password'
						name='Password'
						value={Password}
						onChange={handleChange}
					/>
				<SignInSignInButton onClick={handleSubmit}>Sign In</SignInSignInButton>
			</form>
		</StyledContainer>
	);
};

export default Login;
