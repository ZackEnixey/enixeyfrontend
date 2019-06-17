import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function otherFeatures(store = initialState.otherFeatures, action){
	switch(action.type){
		case allActions.LIST_ALL_OTHER_FEATURES: 
			return store;

		default: 
			return store;
	}
}