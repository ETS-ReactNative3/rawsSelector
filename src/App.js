import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="h-100">
       <Header />
       <Home />
      </div>
    );
  }
}

export default App;
