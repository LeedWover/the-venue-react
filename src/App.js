import React, { Component } from 'react';

import Header from './components/HeaderFooter/Header';
import Featured from './components/Featured/Index';
import VenueInfo from './components/VenueInfo/Index'
import './styles.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
