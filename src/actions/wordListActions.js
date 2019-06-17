import * as allActions from '../actions/allActions';


export function addNewWord(newWord){
	return {type: allActions.ADD_NEW_WORD, newWord: newWord};
}

export function increaseWordsValue(newWordValue){
	console.log(newWordValue);
	newWordValue.newWordPoints+=1;
	console.log(newWordValue);

	return {type: allActions.INCREASE_WORDS_WALUE, newWordValue: newWordValue};
}
