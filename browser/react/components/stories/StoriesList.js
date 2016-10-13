import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

export default ({ users, stories })=> (  
  <div className="container">
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
    <br />
    <ul className="list-group">
      <li className="list-group-item story-item">
        <ul className="list-inline">
          <li>
            <span className="large-font" contentEditable placeholder="Story Title">
            </span>
          </li>
          <li>
            <span>by</span>
          </li>
          <li>
            <select defaultValue="default">
              <option value="default" disabled>(select an author)</option>
              { 
                users.map((user, index) => (
                  <option key={index} value={user.id}>{user.name}</option>
                ))
              }
            </select>
          </li>
        </ul>
        <button className="btn btn-warning btn-xs" onClick={ () => console.log('add story here') }>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
      </li>
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
 


