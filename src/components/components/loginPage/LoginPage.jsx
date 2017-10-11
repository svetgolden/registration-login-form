import React, { Component } from 'react';
import LoginForm from './loginForm/LoginForm.jsx';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import styles from '../AppStyles.js';


class LoginPage extends Component {
render(){
	return (
		
		<div className = {css(styles.container)}>
		<Link to = "/register">register</Link>
		  <div>
		   <LoginForm/>
		  </div>
		</div>
	);
}
}

export default LoginPage;