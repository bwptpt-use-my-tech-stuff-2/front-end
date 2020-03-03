import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

// Utils
import PrivateRoute from './utils/privateRoute';

// Components
import SignUp from './Components/signUp';
import Login from './Components/login';
import AddItem from './Components/AddItem';
import ItemsListed from './Components/ItemsListed';
import ProfilePage from './Components/ProfilePage';
import MyListing from './Components/myListing/MyListing';
import EditListing from './Components/myListing/editListing';
import ListingOptions from './Components/myListing/listingOptions';
import ProductRent from './Components/ProductRent';
import ProductPrice from './Components/ProductPrice';
import ProductDate from './Components/ProductDate';
import ProductThankYou from './Components/ProductThankYou';
import Users from './utils/users';
import Navbar from './Components/navbar';
import LandingPage from './Components/landingPage';
import SignUpOptions from './Components/signUpOptions';

function App() {
	const [owner, setOwner] = useState([]);
	const [rentals, setRentals] = useState([]);

	return (
		// <div className='App'>
		// 	<h1> UseMyTech</h1>
		// 	<RenterContext.provider value={{ rentals, setRentals }}>
		// 		<UserContext.provider value={{ owner, setOwner }}>
		// 			<UserForm />
		// 			<RenterForm />
		// 		</UserContext.provider>
		// 	</RenterContext.provider>
		// </div>

		// <RenterContext.provider value={{ rentals, setRentals }}>
		// <UserContext.provider value={{ owner, setOwner }}>
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/sign-up' component={SignUpOptions} />
					<Route path='/register' component={SignUp} />

					<Route path='/edit-listing' component={EditListing} />
					<Route path='/login' component={Login} />
					<Route path='/listing-options' component={ListingOptions} />
					<Route path='/product-date' component={ProductDate} />
					<Route path='/product-price' component={ProductPrice} />
					<Route path='/product-thank-you' component={ProductThankYou} />

					<PrivateRoute>
						<Route exact path='/secure' component={ProfilePage} />
						<Route path='/secure/items-list' component={ItemsListed} />
						<Route path='/secure/add-item' component={AddItem} />
						<Route path='/secure/profile-page' component={ProfilePage} />
						<Route path='/secure/admin' component={Users} />
					</PrivateRoute>
				</Switch>
				<Navbar />
			</Router>
		</div>
	);
}

export default App;
