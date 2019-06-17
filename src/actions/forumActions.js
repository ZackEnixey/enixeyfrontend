import * as allActions from '../actions/allActions';


export function addNewForumTip(newTip){
	return {type: allActions.ADD_NEW_FORUM_TIP, newTip: newTip};
}