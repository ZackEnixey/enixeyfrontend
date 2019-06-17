import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function frontPageDemoBookList(store = initialState.frontPageDemoBookList, action){
	switch(action.type){
		case allActions.LIST_ALL_FRONT_PAGE_DEMO_BOOKS: 
			return store;

		default: 
			return store;
	}
}