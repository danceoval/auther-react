import axios from 'axios';

const RECEIVE_STORIES = 'RECEIVE_STORIES',
      DELETE_STORY = 'DELETE_STORY',
      ADD_STORY = 'ADD_STORY';

const initialStories = [];

// ACTION CREATORS
const _receiveStories = stories => ({ type: RECEIVE_STORIES, stories })

const _removeStory = id => ({ type: DELETE_STORY, id })

const _addStory = story => ({ type: ADD_STORY, story })

// DISPATCHERS
export const receiveStories = () => dispatch => {
    axios.get('/api/stories')
         .then(res => dispatch(_receiveStories(res.data)));
}

export const removeStory = id => dispatch => { 
    dispatch(_removeStory(id));
    axios.delete(`/api/stories/${id}`)
         .catch(err => console.error(`Removing story: ${id} unsuccesful`, err))
}

export const addStory = story => dispatch => {
    console.log(story)
    axios.post('/api/stories', story)
         .then(res => res.data)
         .then(story => dispatch(_addStory(story)))
         .catch(err => console.error(`Creating story: ${story} unsuccesful`, err))
}

// REDUCER
export default function stories (state = initialStories, action) {
  switch (action.type) {
    
    case RECEIVE_STORIES: 
      return action.stories;

    case DELETE_STORY:
      return state.filter(story => story.id !== action.id);

    case ADD_STORY: 
      return [action.story, ...state];
    
    default: 
      return state;
  }
}



