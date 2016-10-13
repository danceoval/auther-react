import axios from 'axios';

const RECEIVE_STORIES = 'RECEIVE_STORIES';
const ADD_STORY = 'ADD_STORY';

const initialStories = [];

/*
  ACTION CREATORS
*/
const _receiveStories = stories => 
  ({ type: RECEIVE_STORIES, stories })

const _addStory = story => 
  ({ type: ADD_STORY, story })

/*
  DISPATCHERS
*/

export const receiveStories = () => dispatch => 
    axios.get('/api/stories')
         .then(res => dispatch(_receiveStories(res.data)));

export const addStory = story => dispatch => 
    axios.post('/api/stories', story)
         .then(res => dispatch(_addStory(res.data)));

/*
  REDUCER
*/

export default function stories (state = initialStories, action) {
  switch (action.type) {
    
    case RECEIVE_STORIES: 
      return action.stories;

    case ADD_STORY: 
      console.log('added', action.story)
      return [action.story, ...state];
    
    default: 
      return state;
  }
}



