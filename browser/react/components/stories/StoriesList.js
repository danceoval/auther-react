import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

export default ({ stories })=> (  
      <div className="container">
        <div className="list-group-item story-item">
          <ul className="list-inline">
            <li>
              <span
                className="large-font" placeholder="Story Title">
              </span>
            </li>
            <li>
              <span>by</span>
            </li>
            <li>
              <span
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
                <span className="large-font" placeholder="Story Title">
                </span>
              </li>
              <li>
                <span>by</span>
              </li>
              <li>
                <select>
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
                 
                  <li className="list-group-item story-item">
                    <ul className="list-inline">
                      <Link  activeClassName="active" to={`/stories/${story.id}`}>
                        <li>
                          <a className="large-font" >{ story.title }</a>
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
 


