import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header';
import LinkList from './LinkList';
import CreateLink from './CreateLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CreateLink />
        <LinkList />
      </div>
    );
  }
}

export default App;
