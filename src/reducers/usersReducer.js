import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function users(store = initialState.loggedInUserData, action){
	switch(action.type){

		case allActions.ADD_NEW_USER:
			return [...store, action.newUser];

		case allActions.SET_LOOGED_IN_USER_DATA:
			store.email = action.loggedUser.email;
			store.pass = action.loggedUser.password;
			store.token = action.loggedUser.token;
			return store;

		case allActions.SET_USER_REGISTER_TOKEN:
			console.log(" I recieved his token: " + action.user);
			Object.assign(store, ...action.user)
			return action.user;

		case allActions.SET_LOOGED_IN_USER_DATA_WITH_LOCAL_STORAGE:
			console.log("users", action);
			var newStore  	= store;
			newStore.token 	= action.localStorage.token;
			newStore.email 	= action.localStorage.email;
			newStore.id 	= action.localStorage.id;
			newStore.token 	 = action.localStorage.token; 
			newStore.password = action.localStorage.password;
			Object.assign(store, ...newStore)
			return newStore;

		case allActions.SET_USER_TOKEN:
			console.log("I recieved this in set user reducer: " + action.token);
			var newStore = store;
			store.token = action.token;
			Object.assign(store, ...newStore)
			return newStore;

		default: 
			return store;
	}
}