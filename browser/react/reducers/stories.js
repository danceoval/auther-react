const RECEIVE_STORIES = 'RECEIVE_STORIES';
const initialStories = [];

export const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

export default function stories (state = initialStories, action) {
  switch (action.type) {
    
    case RECEIVE_STORIES: 
      return action.stories;
    
    default: 
      return state;
  }
}

export const fetchStories = () =>
  dispatch => {
    return fetch('/api/stories')
      .then(res => res.json())
      .then(stories => dispatch(receiveStories(stories)));
  };


