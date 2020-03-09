import React, { useState, useContext } from 'react';
import Styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { UserContext } from '../Context/UserContext';
import { RenterContext } from '../Context/ProductContext';
import styled from 'styled-components';

import { StyledContainer, StyledInput, SignUpH1, SignUpSubmitButton, StyledLabelDiv } from './Styles';


const SignUp = props => {
	// const { owner } = useContext(UserContext);

	const [credentials, setCredentials] = useState({
		Email: '',
		Password: '',
		FirstName: '',
		LastName: '',
		Location: ''
	});
	const [confirmPassword, setConfirmPassword] = useState({
		ConfirmPassword: ''
	});

	// Functions
	const handleChange = e => {
		e.preventDefault();
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleChangePassword = e => {
		e.preventDefault();
		setConfirmPassword({ ...confirmPassword, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (credentials.Password === confirmPassword.ConfirmPassword) {
			axiosWithAuth()
				.post('/auth/register', credentials)
				.then(res => {
					console.log(res);
					console.log(res.status);
					props.history.push('/login');
					alert('You are now signed up, Login below');
				})
				.catch(err => {
					console.error(err);
				});
		} else alert('Passwords do not match!!');
	};

	// Destructuring
	const { FirstName, LastName, Email, Password, Location } = credentials;
	const { ConfirmPassword } = confirmPassword;

	return (
		<StyledContainer>
			<SignUpH1 className='title'>Sign up with email</SignUpH1>
			<form onSubmit={handleSubmit}>
				<StyledLabelDiv>
					<label>First name</label>
				</StyledLabelDiv>
					<StyledInput
						type='text'
						name='FirstName'
						value={FirstName}
						onChange={handleChange}
						required
					/>
				<StyledLabelDiv>
					<label>Last name</label>
				</StyledLabelDiv>
					<StyledInput
						type='text'
						name='LastName'
						value={LastName}
						onChange={handleChange}
						required
					/>
				<StyledLabelDiv>
					<label>Location</label>
				</StyledLabelDiv>
					<StyledInput
						type='text'
						name='Location'
						value={Location}
						placeholder='ex. Atlanta, GA'
						onChange={handleChange}
						required
					/>
				<StyledLabelDiv>
					<label>Email</label>
				</StyledLabelDiv>
				<StyledInput
						type='email' 
						name='Email' 
						value={Email} 
						onChange={handleChange} 
						required 
					/>
				<StyledLabelDiv>
					<label>Password</label>
				</StyledLabelDiv>
					<StyledInput
						type='password'
						name='Password'
						value={Password}
						onChange={handleChange}
						required
					/>
				<StyledLabelDiv>
					<label>Confirm Password</label>
				</StyledLabelDiv>
					<StyledInput
						type='password'
						name='ConfirmPassword'
						value={ConfirmPassword}
						onChange={handleChangePassword}
						required
					/>
				<SignUpSubmitButton onClick={handleSubmit}>Submit</SignUpSubmitButton>
			</form>
		</StyledContainer>
	);
};

export default SignUp;
