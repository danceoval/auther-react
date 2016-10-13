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
                <select>
                  { 
                    users.map(({id, name}, index) => (
                      <option key={index} value={id}>{name}</option>
                    ))
                  }
                  <option value='' disabled>(select an author)</option>
                </select>
              </li>
            </ul>
            <button className="btn btn-warning btn-xs" >
              <span className="glyphicon glyphicon-plus"></span>
            </button>
          </li>
            {  
              stories.map((story, index) => (
                 
                  <li key={index} className="list-group-item story-item">
                    <ul className="list-inline">
                      <Link  activeClassName="active" to={`/stories/${story.id}`}>
                        <li>
                          <span className="large-font" >{ story.title }</span>
                        </li>
                        <li>
                          <span>by</span>
                        </li>
                        <li>
                          <span >Author #{story.author_id}</span>
                        </li>
                      </Link>   
                    </ul>
                    <button className="btn btn-default btn-xs">
                      <span className="glyphicon glyphicon-remove"></span>
                    </button>
                  </li>
                 
              )) 
            }  
        </ul>
      </div>
      
    );
 


