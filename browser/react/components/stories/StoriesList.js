import React, { Component } from 'react';
import ContentEditable from "react-contenteditable";
import {Link} from 'react-router';
import NewStoryWidgetContainer from './NewStoryWidgetContainer';
import _ from 'lodash';

export default class StoriesList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      search_title: '',
      search_author: ''
    }

    this.filterStoryItem = this.filterStoryItem.bind(this);
    this.renderStoryItem = this.renderStoryItem.bind(this);
  }

  render() {
    const { stories } = this.props;
    return (  
      <div className="container">
        { /* SEARCH */}
        <div className="list-group-item story-item">
          <ul className="list-inline">
            <li>
              <ContentEditable
                placeholder="Story Title"
                className="large-font" 
                onChange={e => this.setState({ search_title: e.target.value })}
              />
            </li>
            <li>
              <span>by</span>
            </li>
            <li>
              <ContentEditable
                placeholder="Jean Doe"               
                onChange={e => this.setState({ search_author: e.target.value })}
              />
            </li>
          </ul>
          <span className="glyphicon glyphicon-search"></span>
        </div>
        { /* END SEARCH */}
        <br />
        <ul className="list-group">
          <NewStoryWidgetContainer />
          { 
            stories
              .filter(this.filterStoryItem) 
              .map(this.renderStoryItem) 
          }  
        </ul>
      </div>
    );
  }

  filterStoryItem(story) {
    const { author, title } = story;
    const { search_author, search_title } = this.state;
    const authorMatch = _.includes(author.name, search_author);
    const titleMatch = _.includes(title, search_title);

    return authorMatch && titleMatch;
  } 

  renderStoryItem(story, index) {
    const { removeStory } = this.props;

    return (
      <li key={index} 
          className="list-group-item story-item">
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
        <button className="btn btn-default btn-xs" onClick={ () => removeStory(story.id) }>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
      </li>
    );
  }
}
 


