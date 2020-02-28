import axios from 'axios';

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: 'https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api',
		headers: {
			authorization: sessionStorage.getItem('token')
		}
	});
};
