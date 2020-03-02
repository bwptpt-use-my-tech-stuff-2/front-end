import React from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const Users = () => {
	const handleGetUsers = () => {
		axiosWithAuth()
			.get('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/users')
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.error(err);
			});
	};

	const handleDeleteUser = () => {
		axiosWithAuth()
			.delete('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/users/6')
			.then(res => {
				console.log('res', res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<button onClick={handleGetUsers}>Get Users</button>
			<button onClick={handleDeleteUser}>Delete User</button>
		</div>
	);
};

export default Users;
