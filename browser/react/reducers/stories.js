import axios from 'axios';
const RECEIVE_STORIES = 'RECEIVE_STORIES';
const initialStories = [];

/*
  ACTION CREATORS
*/
const _receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

/*
  DISPATCHERS
*/

export const receiveStories = () => dispatch => 
    axios.get('/api/stories')
      .then(res => dispatch(_receiveStories(res.data)));

/*
  REDUCER
*/

export default function stories (state = initialStories, action) {
  switch (action.type) {
    
    case RECEIVE_STORIES: 
      return action.stories;
    
    default: 
      return state;
  }
}



