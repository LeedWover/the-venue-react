import React, { Component } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class SideDrawer extends Component {
  
  state = {
    listItems: [
      "Events starts in",
      "Venue NFO",
      "Highlights",
      "Pricing",
      "Location"
    ]
  }
  
  render() {
    
    let list = this.state.listItems.map((listItem, index) => {
      return (
        <ListItem button key={index}>{listItem}</ListItem>
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