import React, { useState, useContext } from 'react';
import Styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { UserContext } from '../Context/UserContext';
import { RenterContext } from '../Context/RenterContext';

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
					props.history.push('/login');
					alert('You are now signed up, Login below');
				})
				.catch(err => {
					console.error(err);
				});
		} else alert('Passwords do not match!!');
	};

	// Styled Components
	const Title = Styled.h1`
		position: absolute;
		left: 0%;
		right: 0%;
		top: 0%;
		bottom: 5.26%;
		font-family: SF Pro Text;
		font-style: normal;
		font-weight: bold;
		font-size: 30px;
		line-height: 36px;
	`;

	// Destructuring
	const { FirstName, LastName, Email, Password } = credentials;
	const { ConfirmPassword } = confirmPassword;

	return (
		<div>
			<h1 className='title'>Sign up with email</h1>
			<form onSubmit={handleSubmit}>
				<label>First name</label>
				<input
					type='text'
					name='FirstName'
					value={FirstName}
					onChange={handleChange}
					required
				/>
				<label>Last name</label>
				<input
					type='text'
					name='LastName'
					value={LastName}
					onChange={handleChange}
					required
				/>
				<label>Email</label>
				<input type='email' name='Email' value={Email} onChange={handleChange} required />
				<label>Password</label>
				<input
					type='password'
					name='Password'
					value={Password}
					onChange={handleChange}
					required
				/>
				<label>Confirm Password</label>
				<input
					type='password'
					name='ConfirmPassword'
					value={ConfirmPassword}
					onChange={handleChangePassword}
					required
				/>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
};

export default SignUp;
