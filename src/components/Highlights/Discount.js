import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

import Button from '../Utils/Button';

class Discount extends Component {
  
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 50);
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                ad atque placeat possimus quos perferendis, ipsa perspiciatis
                expedita quia. Aut ipsum qui nisi error blanditiis dolores quas
                quae quasi eos, cum, atque a quos commodi. Ad cum sed inventore
                nostrum!
              </p>
              <Button
                innerText={'Purchase Tickets'}
                background={'#ffa800'}
                color={"#fff"}
                size={'small'}
                link={'https://www.google.com'}
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
