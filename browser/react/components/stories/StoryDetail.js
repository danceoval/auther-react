import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default ({story}) => (
  <div className="container story-container">
    <h1>Story</h1>
    <ul className="list-inline large-font">
      <li>
        <span className="large-font">
          {story.title}
        </span>
      </li>
      <li><span className="muted">by</span></li>
      <li>
        {story.author_id}
      </li>
    </ul>
    <br />
    <p>
      {story.paragraphs}
    </p>
  </div>
)
