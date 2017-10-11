import React, { Component } from 'react';
import RegistrationForm from './registrationForm/RegistrationForm.jsx';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import styles from '../AppStyles.js';



class RegistrationPage extends Component {
render(){
	return (
		<div className = {css(styles.container)}>
		   <Link to = "/login">login</Link>
		   <RegistrationForm/>
		</div>
	);
}
}

export default RegistrationPage;