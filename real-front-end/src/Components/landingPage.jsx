import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div>
			<div className='title'>
				<h1>Use My Tech Stuff</h1>
			</div>
			<div className='mission-statement'>
				<h2>
					<span>Let your tech make you money</span> or save money by renting locally
				</h2>
			</div>
			<div className='container'>
				<h2 className='sub-heading'>Why you'll love us</h2>
				<p className='text'>We help you save money by renting tech equipment locally.</p>
				<p className='text'>We offer safe and secure handling.</p>
				<p className='text'>You get to choose the day and time that works for you.</p>
			</div>
			<div className='links-container'>
				<Link to='/register'>
					<button className='link'>Sign up</button>
				</Link>
				<Link to='/login'>
					<button className='link'>Sign in</button>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
