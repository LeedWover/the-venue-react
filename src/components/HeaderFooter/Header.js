import React, { Component } from 'react';

import { Menu } from '@material-ui/icons';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import SideDrawer from './SideDrawer';

class Header extends Component {
  
  state = {
    drawerOpen: false,
    headerShow: true
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    if(window.scrollY > 100) {
      this.setState({
        headerShow: false
      });
    } else {
      this.setState({
        headerShow: true
      });
    };
  };

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onOpen={(value) => this.toggleDrawer(value)}
            close={(value) => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  };
};

export default Header;
