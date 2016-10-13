import axios from 'axios';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
const initialCurrentUser = null;


export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});


export const removeCurrentUser = user => ({
  type: REMOVE_CURRENT_USER,
  user
});


export const login = (credentials) => dispatch =>
    axios.post('/auth/login', credentials)
        .then(res => dispatch(setCurrentUser(res.data)));

export const signup = (credentials) => dispatch =>
    axios.post('/auth/signup', credentials)
        .then(res => dispatch(setCurrentUser(res.data)));

export const retrieveLoggedInUser = () => dispatch =>
    axios.get('/auth/me')
        .then(res => dispatch(setCurrentUser(res.data)));

export const removeLoggedInUser = () => dispatch =>
  axios.post('/auth/logout', credentials)  
    .then(res => dispatch(setCurrentUser(null)))
        

export default function currentUser (state = initialCurrentUser, action) {
  switch (action.type) {
    
    case SET_CURRENT_USER: 
      return action.user;

    case REMOVE_CURRENT_USER: 
      return action.user;  

    default: return state;
  }
}