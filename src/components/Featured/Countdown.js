import React, { Component } from "react";

import { Slide } from "react-reveal";

export default class Countdown extends Component {
  state = {
    countdownItems: [
      {
        time: 23,
        tag: "Days"
      },
      {
        time: 5,
        tag: "Hours"
      },
      {
        time: 5,
        tag: "Minutes"
      },
      {
        time: 5,
        tag: "Seconds"
      }
    ]
  };

  render() {
    let items = this.state.countdownItems.map((item, index) => {
      return (
        <div className="countdown_item">
          <div className="countdown_time">{item.time}</div>
          <div className="countdown_tag">{item.tag}</div>
        </div>
      );
    });

    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">{items}</div>
        </div>
      </Slide>
    );
  }
}
