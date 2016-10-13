import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default ({users, story, currentUser}) => {
  console.log(story);
  if (!story) return <div></div>
  return (
    <div className="container story-container">
      <ul className="list-inline large-font">
        <li>
          <span className="large-font" contentEditable>{story.title}</span>
        </li>
        <li><span className="muted">by</span></li>
        <li>
          <select defaultValue={story.author_id}>
            { 
              users.map((user, index) => (
                <option key={index} value={user.id}>{user.name}</option>
              ))
            }
          </select>
        </li>
      </ul>
      <br />
      <p contentEditable
         placeholder="(text here)" 
         dangerouslySetInnerHTML={{ 
            __html: (story && story.paragraphs) ? 
                      story.paragraphs.join("<br /><br />") 
                    : "" 
          }}>
      </p>
    </div>
  )
}

// removed contentEditable conditional
// ={currentUser && (currentUser.id === story.author_id || currentUser.isAdmin)}
