import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import Styled from 'styled-components';

const Login = props => {
	const [credentials, setCredentials] = useState({ Email: '', Password: '' });

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
			.post('/auth/login', credentials)
			.then(res => {
				sessionStorage.setItem('token', res.data.payload);
				props.history.push('/secure');
			})
			.catch(err => {
				console.error(err);
			});
	};

	const { Email, Password } = credentials;

	return (
		<div className='signInForm'>
			<form onSubmit={handleSubmit}>
				<label>
					Email Address
					<input
						type='email'
						name='Email'
						value={Email}
						require
						onChange={handleChange}
					/>
				</label>
				<label>
					Password
					<input
						require
						type='password'
						name='Password'
						value={Password}
						onChange={handleChange}
					/>
				</label>
				<button onClick={handleSubmit}>Sign In</button>
			</form>
		</div>
	);
};

export default Login;
