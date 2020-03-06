import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { LandingStyledContainer, UniversalH1, UniversalH2, UniversalH3, UniversalP, LandingSignUpButton, LandingSignInButton, LandingButtonDiv, MissionStatementContainer } from './Styles';

const LandingPage = () => {
	return (
		<LandingStyledContainer>
			<div className='title'>
				<UniversalH1>Use My Tech Stuff</UniversalH1>
			</div>
			<div className='mission-statement'>
				<MissionStatementContainer>
					<UniversalH2>Let your tech make you money</UniversalH2> 
					<UniversalH3>or save money by renting locally</UniversalH3>
				</MissionStatementContainer>
			</div>
			<div className='container'>
				<UniversalH3 className='sub-heading'>Why you'll love us &#10084;</UniversalH3>
				<UniversalP className='text'>We help you save money by renting tech equipment locally.</UniversalP>
				<UniversalP className='text'>We offer safe and secure handling.</UniversalP>
				<UniversalP className='text'>You get to choose the day and time that works for you.</UniversalP>
			</div>
			<LandingButtonDiv className='links-container'>
				<Link to='/sign-up'>
					<LandingSignUpButton className='link'>Sign up</LandingSignUpButton>
				</Link>
				<Link to='/login'>
					<LandingSignInButton className='link'>Sign in</LandingSignInButton>
				</Link>
			</LandingButtonDiv>
		</LandingStyledContainer>
	);
};

export default LandingPage;
