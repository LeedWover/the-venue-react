import React, { Component } from 'react';
import { Element } from 'react-scroll';
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
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venueinfo">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Maps />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
