import axios from 'axios';

// ACTIONS
const SET    = 'SET_CURRENT_USER',
      REMOVE = 'REMOVE_CURRENT_USER';

// ACTION CREATORS
export const set    = user => ({ type: SET, user });
export const remove = ()   => ({ type: REMOVE });

// REDUCER
export default function reducer (currentUser = null, action) {
  switch (action.type) {
    
    case SET: 
      return action.user;

    case REMOVE: 
      return null;

    default: 
      return currentUser;
  }
}

// DISPATCHERS
export const login = credentials => dispatch => {
  return axios
    .post('/auth/login', credentials)
    .then(res => dispatch(set(res.data)))
    .catch(err => console.error("login failed", err))
}

export const signup = credentials => dispatch => {
  return axios
    .post('/auth/signup', credentials)
    .then(res => dispatch(set(res.data)))
    .catch(err => console.error("signup failed", err))
}

export const fetchLoggedInUser = () => dispatch => {
  return axios
    .get('/auth/me')
    .then(res => dispatch(set(res.data)))
    .catch(err => console.error("retreive loggin in user failed", err));
}

export const logout = () => dispatch => {
  dispatch(remove()) 
  return axios
    .get('/auth/logout')
    .catch(err => console.error("cannot log out", err));
}

