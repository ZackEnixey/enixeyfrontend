import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function userStoriesList(store = initialState.userStoriesList, action){
	switch(action.type){
		case allActions.LIST_ALL_FORUM_TIPS: 
			return store;

		case allActions.ADD_NEW_USER_STORIE:
		 	var storeLength = store.length-1;

			if(action.newUserStory.content === ''){
				alert("Note's content body is empty.");
				return store;
			}else if(action.newUserStory.content === store[storeLength].content){
				alert("Please do not post same note one after another.");
				return store;
			}else if(action.newUserStory.title === ''){
				action.newUserStory.title = 'UNNAMED'
				return [...store, action.newUserStory];
			}else { 
				return [...store, action.newUserStory];
			}

		default: 
			return store;
	}
}