import * as allActions from '../actions/allActions';


export function addNewNote(newNote){
	return {type: allActions.ADD_NEW_PROFILE_NOTE, newNote: newNote};
}

export function addNewEditInput(newEditImput){
    return {type: allActions.ADD_NEW_INPUT_FIELD, newEditImput: newEditImput};
}

export function editCurrentDescription(newEnteredEditData){
    console.log(newEnteredEditData);
    return {type: allActions.UPDATE_PROFILE_EDIT, newEnteredEditData: newEnteredEditData};
}

