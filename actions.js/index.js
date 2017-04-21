//var URL_USERS = "localhost8080://collaboration-space.com/users"
//var URL_LOGIN = "localhost8080://collaboration-space.com/login"
//var URL_LOGOUT = "localhost8080://collaboration-space.com/logout"
//var URL_ID = "localhost8080://collaboration-space.com/users/id"
//var URL_USERS_EDITS = "localhost8080://collaboration-space.com/users/"
//
//export const fetchSignUp = (firstName, lastName, username, password, category, location, phone, bio) => dispatch => {
//	$.ajax({
//		url: URL_USERS
//		data: {
//			firstName: firstName. 
//			lastName: lastName, 
//			username: username, 
//			password: password, 
//			category: category, 
//			location: location, 
//			phone: phone, 
//			bio: bio
//		},
//        method: 'POST'
//	}).done(function(data){
//		dispatch(fetchSignUpSuccess(userData));
//	}).fail(function(err){
//		dispatch(fetchSignUpError());
//	});
//	
//}
//
//export const fetchLogIn = (username, password) => dispatch => {
//	$.ajax({
//		url: URL_LOGIN
//		data: { 
//			username: username, 
//			password: password, 
//		},
//        method: 'POST'
//	}).done(function(data){
//		dispatch(fetchLogInSuccess(userData));
//	}).fail(function(err){
//		dispatch(fetchSLogInError());
//	});
//	
//}
//
//export const fetchLogOut = (username) => dispatch => {
//	$.ajax({
//		url: URL_LOGOUT
//		data: { 
//			username: username,  
//		},
//        method: 'DELETE'
//	}).done(function(data){
//		dispatch(fetchLogOutSuccess(userData));
//	}).fail(function(err){
//		dispatch(fetchLogOutError());
//	});
//	
//}
//
//export const Edit = (firstName, lastName, category, location, phone, bio) => dispatch => {
//	$.ajax({
//		url: URL_USERS_EDITS
//		data: {
//			firstName: firstName. 
//			lastName: lastName,  
//			category: category, 
//			location: location, 
//			phone: phone, 
//			bio: bio
//		},
//        method: 'PUT'
//	}).done(function(data){
//		dispatch(fetchEditSuccess(userData));
//	}).fail(function(err){
//		dispatch(fetchEditError());
//	});
//	
//}
//
//export const Search = (firstName, lastName, category, location, phone, bio) => dispatch => {
//	$.ajax({
//		url: URL_USERS
//		data: {
//			firstName: firstName. 
//			lastName: lastName,  
//			category: category, 
//			location: location, 
//			phone: phone, 
//			bio: bio
//		},
//        method: 'GET'
//	}).done(function(data){
//		dispatch(fetchSearchSuccess(userData));
//	}).fail(function(err){
//		dispatch(fetchSearchError());
//	});
//	
//}
//
//
//export const FETCH_SIGNUP_SUCCESS = 'FETCH_SIGNUP_SUCCESS';
//export fetchSignUpSuccess = (userData) => ({
//	type: FETCH_SIGNUP_SUCCESS,
//	userData
//});
//export const FETCH_SIGNUP_ERROR = 'FETCH_SIGNUP_ERROR';
//export fetchSignUpError = (error) => ({
//	type: FETCH_SIGNUP_ERROR,
//	error
//});
//
//export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
//export fetchLogInSuccess = (userData) => ({
//	type: FETCH_LOGIN_SUCCESS,
//	userData
//});
//export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';
//export fetchLogInError = (userData) => ({
//	type: FETCH_LOGIN_ERROR,
//	error
//});
//
//export const FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS';
//export fetchLogOutSuccess = (userData) => ({
//	type: FETCH_LOGOUT_SUCCESS,
//	userData
//});
//export const FETCH_LOGOUT_ERROR = 'FETCH_LOGOUT_ERROR';
//export fetchLogOutError = (userData) => ({
//	type: FETCH_LOGOUT_ERROR,
//	userData
//});
//
//export const FETCH_EDIT_SUCCESS = 'FETCH_EDIT_SUCCESS';
//export fetchEditSuccess = (userData) => ({
//	type: FETCH_EDIT_SUCCESS,
//	userData
//});
//export const FETCH_EDIT_ERROR = 'FETCH_EDIT_ERROR';
//export fetchEditError = (userData) => ({
//	type: FETCH_EDIT_ERROR,
//	userData
//});
//
//export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
//export fetchSearchSuccess = (userData) => ({
//	type: FETCH_SEARCH_SUCCESS,
//	Data
//});
//export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
//export fetchSearchError = (userData) => ({
//	type: FETCH_SEARCH_ERROR,
//	Data
//});