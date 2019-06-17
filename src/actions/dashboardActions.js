import * as allActions from '../actions/allActions';
import axios from 'axios';


export function addNewBook(newBook){
	console.log("addNewBook", newBook);
	return {type: allActions.ADD_NEW_DASHBOARD_BOOK, newBook: newBook};
}

export function setSelectedBook(selectedBook) {
	console.log("setSelectedBook", selectedBook);
	return {type: allActions.SELECTED_BOOK, selectedBookData: selectedBook};
}

export function setSelectedBookByUrl(selectedBookUrl){
	axios({
        method: 'get',
        url: 'http://localhost:9090/bookbyurl',
    }).then(response => { 
    	return {type: allActions.SELECTED_BOOK, selectedBookData: response}; 
    })	
    .catch(error => {
        console.log(error);
    });
}