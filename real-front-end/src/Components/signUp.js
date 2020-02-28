import React, { useState, useContext } from 'react';
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

	const handleChange = e => {
		e.preventDefault();
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/auth/register', credentials)
			.then(res => {
				console.log(res);
				props.history.push('/itemList');
			})
			.catch(err => {
				console.error(err);
			});
	};

	const { FirstName, LastName, Email, Password } = credentials;

	return (
		<div>
			<h2>Sign up with email</h2>
			<form onSubmit={handleSubmit}>
				<label>First name</label>
				<input type='text' name='FirstName' value={FirstName} onChange={handleChange} />
				<label>Last name</label>
				<input type='text' name='LastName' value={LastName} onChange={handleChange} />
				<label>Email</label>
				<input type='email' name='Email' value={Email} onChange={handleChange} />
				<label>Password</label>
				<input type='password' name='Password' value={Password} onChange={handleChange} />
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
};

export default SignUp;
