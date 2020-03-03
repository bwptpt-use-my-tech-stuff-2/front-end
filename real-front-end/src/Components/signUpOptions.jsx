import React from 'react';
import { Link } from 'react-router-dom';

const SignUpOptions = () => {
	return (
		<div>
			<div className='title'>
				<h1>Use My Tech Stuff</h1>
			</div>
			<div className='links-container'>
				<Link to=''>
					<button className='link'>Sign up with Facebook</button>
				</Link>
				<Link to=''>
					<button className='link'>Sign up with Google</button>
				</Link>
				<Link to='/register'>
					<button className='link'>Sign up with Email</button>
				</Link>
			</div>
		</div>
	);
};

export default SignUpOptions;
