import {combineReducers} from 'redux';
import * as profileReducers from './profileReducers';
import * as wordListReducers from './wordListReducers';
import * as frontPageReducers from './frontPageReducer';
import * as dashboardReducer from './dashboardReducer';
import * as searchReducer from './searchReducer';
import * as otherFeaturesReducer from './otherFeaturesReducer';
import * as forumReducer from './forumReducer';
import * as userStoriesReducer from './userStoriesReducer';
import * as usersReducer from './usersReducer';

const rootReducer = combineReducers({
    profileNotesList:         profileReducers.profileNotesList,
    profileEditInputList:     profileReducers.profileEditInputList,
    profileEditListOfGenres:  profileReducers.profileEditListOfGenres,
    profileDescription:       profileReducers.profileDescription,
    wordList:                 wordListReducers.wordList,
    frontPageDemoBookList:    frontPageReducers.frontPageDemoBookList,
    dashboardBookList:        dashboardReducer.dashboardBookList,
    selectedBook:             dashboardReducer.selectedBook,
    listOfMaterialToSearch:   searchReducer.listOfMaterialToSearch,
    otherFeatures:            otherFeaturesReducer.otherFeatures,
    forumTipsList:            forumReducer.forumTipsList,
    userStoriesList:          userStoriesReducer.userStoriesList,
    users:                    usersReducer.users,
});

export default rootReducer;