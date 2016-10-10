import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default class RootComponent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}