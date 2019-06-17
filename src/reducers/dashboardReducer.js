import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function dashboardBookList(store = initialState.dashboardBookList, action){
	switch(action.type){
		case allActions.LIST_ALL_DASHBOARD_BOOK: 
			return store;

		case allActions.ADD_NEW_DASHBOARD_BOOK:
			return [...store, action.newBook]

		case allActions.REMOVE_NEW_DASHBOARD_BOOK:
			return store;
 
		default: 
			return store;
	}
}

export function selectedBook(store = initialState.selectedBook, action){
	switch(action.type){
		case allActions.SELECTED_BOOK: 
			return action.selectedBookData;
 
		default: 
			return store;
	}
}