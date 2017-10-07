import React, { Component } from 'react';
import LoginForm from './loginForm/LoginForm.jsx';
import { Link } from 'react-router-dom'


class LoginPage extends Component {
render(){
	return (
		
		<div>
		<Link to = "/register">register</Link>
		  <div>
		   <LoginForm/>
		  </div>
		</div>
	);
}
}

export default LoginPage;