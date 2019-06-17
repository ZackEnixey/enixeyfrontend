import * as allActions from '../actions/allActions';


export function addNewUser(username, newUser){
	var newUserInstance = {'username': username, 'password': newUser}
	return {type: allActions.ADD_NEW_USER, newUser: newUserInstance};
}

export function setLoggedInUserData(email, password, token){
	var loggedUserData = {'email': email, 'password': password, 'token': token};
	return {type: allActions.SET_LOOGED_IN_USER_DATA, loggedUser: loggedUserData};
}

export function setLoggedInUserDataWithLocalStorage(localStorage){
	console.log("setLoggedInUserDataWithLocalStorage: ", localStorage);
	return {type: allActions.SET_LOOGED_IN_USER_DATA_WITH_LOCAL_STORAGE, localStorage: localStorage};
}

export function setUserRegisterToken(user){
	console.log("Aaaaaaaaaaaaaaaaaaaaa USERS ACCOUNT " );
	return {type: allActions.SET_USER_REGISTER_TOKEN, user: user}
}

export function setUserToken(token){
	console.log("setUserToken: " + token);
	return {type: allActions.SET_USER_TOKEN, token: token}
}
