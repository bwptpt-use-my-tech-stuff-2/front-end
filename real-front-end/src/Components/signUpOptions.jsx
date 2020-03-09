import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
	SignUpH1,
	SignUpWithButtonContainer,
	SignUpWithFacebookButton,
	SignUpWithGoogleButton,
	SignUpWithEmailButton
} from './Styles';

const SignUpOptions = () => {
	return (
		<div>
			<div className='title'>
				<SignUpH1>Use My Tech Stuff</SignUpH1>
			</div>
			<SignUpWithButtonContainer className='links-container'>
				<Link to=''>
					<SignUpWithFacebookButton className='link'>Sign up with Facebook</SignUpWithFacebookButton>
				</Link>
				<Link to=''>
					<SignUpWithGoogleButton className='link'>Sign up with Google</SignUpWithGoogleButton>
				</Link>
				<Link to='/register'>
					<SignUpWithEmailButton className='link'>Sign up with Email</SignUpWithEmailButton>
				</Link>
			</SignUpWithButtonContainer>
		</div>
	);
};

export default SignUpOptions;
