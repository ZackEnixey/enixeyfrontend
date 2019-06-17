import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function profileNotesList(store = initialState.listOfNotes, action){
	switch(action.type){
		case allActions.LIST_ALL_PROFILE_NOTES: 
			return store;

		case allActions.ADD_NEW_PROFILE_NOTE:
		 	var storeLength = store.length-1;
		 	console.log(store[storeLength]);

			if(action.newNote.content === ''){
				alert("Note's content body is empty.");
				return store;
			}else if(action.newNote.content === store[storeLength].content){
				alert("Please do not post same note one after another.");
				return store;
			}else if(action.newNote.title === ''){
				action.newNote.title = 'UNNAMED'
				return [...store, action.newNote];
			}else { 
				return [...store, action.newNote];
			}

		case allActions.REMOVE_EXISTING_PROFILE_NOTE:
			return store;
 
		default: 
			return store;
	}
}

export function profileEditInputList(store = initialState.listOfFields, action){
	switch(action.type){
		case allActions.LIST_ALL_INPUT_FIELDS:
			return store;

		case allActions.ADD_NEW_INPUT_FIELD: 
			return [...store, action.newEditImput]

		case allActions.REMOVE_EXISTING_INPUT_FIELD:
			return store;

		default: 
			return store;
	}
}


export function profileEditListOfGenres(store = initialState.listOfGenres, action){
	switch(action.type){
		case allActions.LIST_ALL_GENRES: 
			return store;

		case allActions.ADD_NEW_GENRE: 
			return [...store, action.newEditImput]

		case allActions.REMOVE_EXISTING_GENRE: 
			return store;

		default: 
			return store;
	}
}


export function profileDescription(store = initialState.loggedInUserData, action){
	switch(action.type){
		case allActions.UPDATE_PROFILE_EDIT: 
			{
				var newStore = store;
				var inputedData = action.newEnteredEditData
				
				for (var key in inputedData) {
					if(inputedData[key].length !== 0){
						newStore.key = inputedData[key];
					}
				}
				return action.newEnteredEditData;
			}

		default: 
			return store;
	}
}