import { STORAGE_USERS_KEY } from '../constants';
export const REGISTRATION_ACTION = 'REGISTRATION_ACTION';
export const REGISTRATION_RESULT = 'REGISTRATION_RESULT';

export function registrationAction(login, password) { return (dispatch) => {
	dispatch( {
		type: REGISTRATION_ACTION,
		login,
		password
	});

	requestCheck(login, password).then(() => {
		dispatch({
			type: REGISTRATION_RESULT,
			isSuccess: checkRegistration(login, password)
		})	
	});
	setUser(login, password)

  }
};

function requestCheck(login, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(checkRegistration(login, password));
		}, 1000);
	})
}

function checkRegistration(login, password){
	const users = window.localStorage.getItem(STORAGE_USERS_KEY);
    if(!users) return false;
    return isUserInStorage(login, password, users);       
}

function isUserInStorage(login, password, users) {
	if (login===JSON.parse(users).login && password===JSON.parse(users).password) 
		return true;
	}

function setUser(login, password){
	const obj = {
	    login,
		password
    };
    const serialObj = JSON.stringify(obj); 
    window.localStorage.setItem("users", serialObj);
};