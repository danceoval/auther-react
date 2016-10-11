import { createStore } from 'redux';

const RECEIVE_USERS = 'RECEIVE_USERS';
const REMOVE_USER= 'REMOVE_USER';
const RECEIVE_STORIES = 'RECEIVE_STORIES';
const initialState = {users:[], stories:[]} ;

function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
    	return Object.assign({}, state, {users: action.users})
    case RECEIVE_STORIES:
        return Object.assign({}, state, {stories: action.stories})   
    case REMOVE_USER:
    	return  Object.assign({},state.filter((user) => {
    				//console.log('id', user.id, action.user.id)
    				return user.id !== action.user.id
    			}))
    			
    default: return state;
  }
}


export default createStore(reducer);