import * as userActions from '../actions/index';

const initialSignUpState = {
	userData: null,
	candidates: [],
	error: null
};

export const appReducer = (state=initialSignUpState, action) => {
	if (action.type === userActions.FETCH_SIGNUP_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_SIGNUP_ERROR){
		return {...state, error: action.error};
	}

	if (action.type === userActions.FETCH_LOGIN_SUCCESS) {
	return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_LOGIN_ERROR){
		return {...state, error: action.error};
	}

	if (action.type === userActions.FETCH_LOGOUT_SUCCESS) {
		return {...state, userData: null, candidates: [], error: null};
	}
	if (action.type === userActions.FETCH_LOGOUT_ERROR){
		return {...state, error: action.error};
	}

	if (action.type === userActions.FETCH_EDIT_SEARCH_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_EDIT_SEARCH_ERROR){
		return {...state, error: action.error};
	}

	if (action.type === userActions.FETCH_EDIT_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_EDIT_ERROR){
		return {...state, error: action.error};
	}

	if (action.type === userActions.FETCH_SEARCH_SUCCESS) {
		return {...state, candidates: action.candidates, error: null};
	}
	if (action.type === userActions.FETCH_SEARCH_ERROR){
		return {...state, error: "There are no results to display"};
	}

	return state;
};
