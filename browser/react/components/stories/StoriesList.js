import React, { Component } from 'react';
import {Link} from 'react-router';
import NewStoryWidgetContainer from './NewStoryWidgetContainer';

export default ({ stories })=> (  
  <div className="container">
    { /* SEARCH */}
    <div className="list-group-item story-item">
      <ul className="list-inline">
        <li>
          <span contentEditable
            className="large-font" placeholder="Story Title">
          </span>
        </li>
        <li>
          <span>by</span>
        </li>
        <li>
          <span contentEditable
            placeholder="Jean Doe">
          </span>
        </li>
      </ul>
      <span className="glyphicon glyphicon-search"></span>
    </div>
    { /* END SEARCH */}
    <br />
    <ul className="list-group">
      <NewStoryWidgetContainer />
      {  
        stories.map((story, index) => (
           
            <li key={index} className="list-group-item story-item">
              <ul className="list-inline">
                <li>
                  <Link className="large-font" to={`/stories/${story.id}`}>{story.title}</Link>
                </li>
                <li>
                  <span>by</span>
                </li>
                <li>
                { 
                  story.author ?
                    <Link to={`/users/${story.author_id}`}>{story.author.name}</Link>
                  :
                    <pre>Missing story from { story.title}</pre>
                }
                </li>
              </ul>
              <button className="btn btn-default btn-xs" onClick={ () => console.log('remove story here', story) }>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </li>
           
        )) 
      }  
    </ul>
  </div>
);
 


