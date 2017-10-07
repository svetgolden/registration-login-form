import { LOGIN_ACTION, LOGIN_RESULT } from '../actions/loginForm.js';

const initialState={
	login: '',
	password: '',
	isFetching: false,
	isLoginSuccess: false,
	isSubmit: false
};

export default function loginForm(state = initialState, action){
	switch(action.type){
		case LOGIN_ACTION:  
		return {
			...state,
			login: action.login,
			password: action.password,
			isFetching: true,
			isSubmit: true
		}
        case LOGIN_RESULT:
        return {
        	...state,
        	isLoginSuccess: action.isSuccess,
        	isFetching: false,

        }
        default: return state;
	}
}

