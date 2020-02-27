import React, { useState } from 'react';
// import Styled from 'styled-components';

const SignInForm = () => {

const [user, setUser] = useState({username: '', password: ''});

const handleNameChange = event => {
    setUser({ ...user, userName: event.target.value });
};

const handlePasswordChange = event => {
    setUser({ ...user, password: event.target.value })
};

const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
};

return (
    <div className='signInForm'>
        <form onSubmit={event => handleSubmit(event)}>
            <label>
                Email Address
                    <input 
                        type='text'
                        name='email'
                        onChange={event => handleNameChange(event)}
                    />
            </label>
            <label>
                Password
                    <input 
                        require
                        type='password'
                        name='password'
                        onChange={event => handlePasswordChange(event)}
                    />
            </label>
            <button>Sign In</button>
        </form>
    </div>
)
};



export default SignInForm;