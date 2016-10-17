import React from 'react';
import {Link} from 'react-router';

export default ({story, removeStory, currentUser}) => (
  <li className="list-group-item story-item">       
    <ul className="list-inline">
      <li>
        <Link className="large-font" to={`/stories/${story.id}`}>{story.title}</Link>
      </li>
      <li>
        <span>by</span>
      </li>
      <li>
        <Link to={`/users/${story.author_id}`}>{story.author.name}</Link>
      </li>
    </ul>
    { 
    	currentUser ?
	    	<button className="btn btn-default btn-xs" 
	    					onClick={ () => removeStory(story.id) }>
	      	<span className="glyphicon glyphicon-remove"></span>
	    	</button>
	    : 
	    	<div></div>
    }
  </li>
);
