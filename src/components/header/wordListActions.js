import * as allActions from '../actions/allActions';


export function addnewWord(newWord){
	return {type: allActions.ADD_NEW_WORD, newWord: newWord};
}