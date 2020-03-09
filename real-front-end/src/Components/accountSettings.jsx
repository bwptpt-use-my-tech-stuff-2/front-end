import React, { useContext, useState, useEffect } from 'react';
import Navbar from './navbar';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { UserContext } from '../Context/UserContext';

const AccountSettings = props => {
	const { user, setUser } = useContext(UserContext);

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

	useEffect(() => {
		// if (loggedIn !== false) {
		axiosWithAuth()
			.get(`https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/users/${user}`)
			.then(res => {
				console.log(res);
				setCredentials({
					Email: res.data.Email,
					FirstName: res.data.FirstName,
					LastName: res.data.LastName,
					Location: res.data.Location
				});
			})
			.catch(err => {
				console.error(err);
			});
		// }
	}, []);

	const handleChange = e => {
		e.preventDefault();
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleChangePassword = e => {
		e.preventDefault();
		setConfirmPassword({ ...confirmPassword, [e.target.name]: e.target.value });
	};

	// const handleGetUsers = () => {
	// 	axiosWithAuth()
	// 		.get('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/users')
	// 		.then(res => {
	// 			console.log(res);
	// 		})
	// 		.catch(err => {
	// 			console.error(err);
	// 		});
	// };

	const handleSubmit = e => {
		e.preventDefault();
		if (credentials.Password === confirmPassword.ConfirmPassword) {
			axiosWithAuth()
				.put(
					`https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/users/${user}`,
					credentials
				)
				.then(res => {
					console.log(res);
					props.history.push('/login');
					alert('Changes saved, Login below');
				})
				.catch(err => {
					console.error(err);
				});
		} else alert('Passwords do not match!!');
	};

	const handleDeleteUser = id => {
		axiosWithAuth()
			.delete(`https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/users/${user}`)
			.then(res => {
				sessionStorage.removeItem('token');
				props.history.push('/login');
			})
			.catch(err => {
				console.log(err);
			});
	};

	// Destructuring
	const { FirstName, LastName, Email, Password, Location } = credentials;
	const { ConfirmPassword } = confirmPassword;

	return (
		<div>
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
				<label>Location</label>
				<input
					type='text'
					name='Location'
					value={Location}
					placeholder='ex. Atlanta, GA'
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
				<button onClick={handleSubmit}>Save Changes</button>
			</form>
			<button onClick={handleDeleteUser}>Delete Account</button>
			{/* <button onClick={handleGetUsers}>Get Users</button> */}
			<Navbar />
		</div>
	);
};

export default AccountSettings;
