import { createStore } from 'redux';

const initialState = [];

function reducer (state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_USERS":
    	console.log('a', action)
    	return action.users
    default: return state;
  }
}

export default createStore(reducer);