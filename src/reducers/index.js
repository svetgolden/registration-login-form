import { combineReducers } from 'redux';
import loginForm from './loginForm.jsx';
import registrationForm from './registrationForm.jsx'

const rootReducer = combineReducers ({
	loginForm,
	registrationForm
});

export default rootReducer;