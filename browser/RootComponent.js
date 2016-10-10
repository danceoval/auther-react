import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import UserList from './components/UserList';

export default class RootComponent extends Component {
  render() {
    return (
      <div id="root">
        <Navbar />
        // <Home />
        <UserList />
        <Footer />
      </div>
    );
  }
}
