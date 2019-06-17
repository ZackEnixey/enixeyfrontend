import * as allActions from '../actions/allActions';


export function addNewBook(newBook){
	return {type: allActions.LIST_ALL_FRONT_PAGE_DEMO_BOOKS, newBook: newBook};
}