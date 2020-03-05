import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const User = () => {
	useEffect(() => {
		// if (loggedIn !== false) {
		axiosWithAuth()
			.get('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/users')
			.then(res => {
				console.log('response', res);
			});
		// }
	}, []);
	return <div></div>;
};

export default User;
