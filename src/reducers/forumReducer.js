import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function forumTipsList(store = initialState.forumTipsList, action){
	switch(action.type){
		case allActions.LIST_ALL_FORUM_TIPS: 
			return store;

		case allActions.ADD_NEW_FORUM_TIP:
		 	var storeLength = store.length-1;
		 	console.log(store[storeLength]);

			if(action.newTip.content === ''){
				alert("Note's content body is empty.");
				return store;
			}else if(action.newTip.content === store[storeLength].content){
				alert("Please do not post same note one after another.");
				return store;
			}else if(action.newTip.title === ''){
				action.newTip.title = 'UNNAMED'
				return [...store, action.newTip];
			}else { 
				return [...store, action.newTip];
			}

		default: 
			return store;
	}
}