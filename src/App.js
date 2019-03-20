import React, { Component } from 'react';

import Header from './components/HeaderFooter/Header';
import Featured from './components/Featured/Index';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div style={{
        height: '1100px'
      }}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
