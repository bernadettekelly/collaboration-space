import * as userActions from '../actions/index';

const initialSignUpState = {
	userData: {},
	error: null
};

export const signUpReducer = (state=initialSignUpState, action) => {
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
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_LOGOUT_ERROR){
		return {...state, error: action.error};
	}

	if (action.type === userActions.FETCH_EDIT_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_EDIT_ERROR){
		return {...state, error: action.error};
	}

	if (action.type === userActions.FETCH_SEARCH_SUCCESS) {
		return {...state, userData: action.userData, error: null};
	}
	if (action.type === userActions.FETCH_SEARCH_ERROR){
		return {...state, error: action.error};
	}

	return state;
};

const initialLoginState = {
	userData: {},
	error: null
};





