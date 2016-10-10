import { createStore } from 'redux';

const initialState = {users :[]};

function reducer (state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_USERS":
    	return {users: action.users}
    case "REMOVE_USER":
    	return { users : state.users.filter((user) => {
    				console.log('id', user.id, action.user.id)
    				return user.id !== action.user.id
    				})
    			}
    default: return state;
  }
}

export default createStore(reducer);