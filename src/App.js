import React, { Component } from 'react';

import Header from './components/HeaderFooter/Header';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div style={{
        height: '1100px'
      }}>
        <Header />
      </div>
    );
  }
}

export default App;
