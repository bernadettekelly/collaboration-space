import * as userActions from '../actions/index';

const initialState = {
	userData: [],
	error: null
};

export const signUpReducer = (state=initialState, action) => {
	if (action.type === userActions.FETCH_SIGNUP_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_SIGNUP_ERROR){
		return {...state, error: action.error};
	}

	return state;
};

export const loginReducer = (state=initialState, action) => {
	if (action.type === userActions.FETCH_LOGIN_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_LOGIN_ERROR){
		return {...state, error: action.error};
	}

	return state;
};

export const logoutReducer = (state=initialState, action) => {
	if (action.type === userActions.FETCH_LOGOUT_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_LOGOUT_ERROR){
		return {...state, error: action.error};
	}

	return state;
};

export const editReducer = (state=initialState, action) => {
	if (action.type === userActions.FETCH_EDIT_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_EDIT_ERROR){
		return {...state, error: action.error};
	}

	return state;
};

export const searchReducer = (state=initialState, action) => {
	if (action.type === userActions.FETCH_SEARCH_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_SEARCH_ERROR){
		return {...state, error: action.error};
	}

	return state;
};