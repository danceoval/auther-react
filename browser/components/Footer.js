import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer text-center">
        <div className="vcenter muted">
          <span>
            <span className="glyphicon glyphicon-wrench"></span> with <span className="glyphicon glyphicon-heart"></span> at <a href="http://fullstackacademy.com">Fullstack Academy of Code</a> <span className="glyphicon glyphicon-education"></span>
          </span>
        </div>
      </div>
    );
  }
}
