import * as allActions from '../actions/allActions';


export function addNewUserStorie(newUserStory){
	return {type: allActions.ADD_NEW_USER_STORIE, newUserStory: newUserStory};
}