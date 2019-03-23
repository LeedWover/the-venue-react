import React, { Component } from 'react';
import './styles.css';

import Header from './components/HeaderFooter/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Maps from './components/Location';
import Footer from './components/HeaderFooter/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Maps />
        <Footer />
      </div>
    );
  }
}

export default App;
