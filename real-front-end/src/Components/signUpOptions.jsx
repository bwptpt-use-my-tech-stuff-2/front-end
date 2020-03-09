import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
	SignUpH1,
	SignUpWithButtonContainer,
	SignUpWithFacebookButton,
	SignUpWithFacebookButtonImg,
	FacebookButtonFormat,
	SignUpWithGoogleButton,
	SignUpWithGoogleButtonImg,
	SignUpWithEmailButton,
	SignUpWithEmailButtonImg
} from './Styles';

const SignUpOptions = () => {
	return (
		<div>
			<div className='title'>
				<SignUpH1>Use My Tech Stuff</SignUpH1>
			</div>
			<SignUpWithButtonContainer className='links-container'>
				<Link to=''>
					<SignUpWithFacebookButton className='link'><SignUpWithFacebookButtonImg src='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19751.png' />Sign up with Facebook</SignUpWithFacebookButton>
				</Link>
				<Link to=''>
					<SignUpWithGoogleButton className='link'><SignUpWithGoogleButtonImg src='https://pluspng.com/img-png/google-logo-png-open-2000.png' />Sign up with Google</SignUpWithGoogleButton>
				</Link>
				<Link to='/register'>
					<SignUpWithEmailButton className='link'><SignUpWithEmailButtonImg src='https://pluspng.com/img-png/email-icon-png-email-icon-2048.png' />Sign up with Email</SignUpWithEmailButton>
				</Link>
			</SignUpWithButtonContainer>
		</div>
	);
};

export default SignUpOptions;
