import React, { Component } from 'react';

import Header from './components/HeaderFooter/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';
import './styles.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
