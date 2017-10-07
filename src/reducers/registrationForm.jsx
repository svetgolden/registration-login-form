import { REGISTRATION_ACTION, REGISTRATION_RESULT } from '../actions/registrationForm.js';

const initialState={
	login: '',
	password: '',
	isSubmit: false,
	isSuccess: false,
	isFetching: true
};

export default function registrationForm(state = initialState, action){
	switch(action.type){
		case REGISTRATION_ACTION:  
		return {
			...state,
			login: action.login,
			password: action.password,
			isSubmit: true,
			isFetching: true			
		}
		case REGISTRATION_RESULT:  
		return {
			...state,
        	isSuccess: action.isSuccess,
        	isFetching: false
        }
		default: return state; 
	}
};