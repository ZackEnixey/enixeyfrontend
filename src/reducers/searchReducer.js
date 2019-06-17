import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function listOfMaterialToSearch(store = initialState.listOfMaterialToSearch, action){
	switch(action.type){
		case allActions.LIST_ALL_SEARCH_MATERIALS: 
			return store;
 
		default: 
			return store;
	}
}
