import React, { Component } from "react";
import { scroller } from 'react-scroll';
import { List, ListItem, SwipeableDrawer } from "@material-ui/core";


class SideDrawer extends Component {
  
  state = {
    listItems: [
      "Events starts in",
      "Venue NFO",
      "Highlights",
      "Pricing",
      "Location"
    ],
    scrollElements: [
      'featured',
      'venueinfo',
      'highlights',
      'pricing',
      'location'
    ]
  }
  
  render() {
    
    const scrollToElement = element => {
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 100,
        smooth: true
      });
      this.props.close(false)
    }

    let list = this.state.listItems.map((listItem, index) => {
      return (
        <ListItem
          button
          onClick={() => scrollToElement(this.state.scrollElements[index])}
          key={index}
        >
          {listItem}
        </ListItem>
      )
    });

    return (
      <SwipeableDrawer
        anchor="right"
        open={this.props.open}
        onOpen={() => this.props.onOpen(true)}
        onClose={() => this.props.close(false)}
      >
        <List>
          {list}
        </List>
      </SwipeableDrawer>
    );
  };
};

export default SideDrawer;
