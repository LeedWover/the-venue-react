import React, { Component } from 'react';
import { Zoom } from 'react-reveal';

import Button from '../Utils/Button';

class Pricing extends Component {
  state = {
    prices: [
      100,
      150,
      250
    ],
    positions: [
      'Balcony',
      'Medium',
      'Star'
    ],
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, felis luctus tincidunt ultricies, ante nisl posuere sem, quis pretium odio est non quam.',
      'Mauris eu aliquet magna. Mauris consectetur tincidunt mi scelerisque maximus. In at sollicitudin eros. Fusce sollicitudin hendrerit elit, a placerat orci fringilla et.',
      'Cras placerat eu nisl dssa remnadire elempona tutiro ac ultricies. Sed orci purus, tinciddsunt sed fermentum in, iaculis sojarscv ac urna. Pellentesque quis ipsum lectus.'
    ],
    links: [
      'https://google.com',
      'https://facebook.com',
      'https://twitter.com'
    ],
    delays: [
      500,
      0,
      500
    ]
  }
  
  showBoxes = () => (
    this.state.prices.map((item, index) => (
      <Zoom key={index} delay={this.state.delays[index]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>
                ${item}
              </span>
            </div>
            <div className="pricing_description">
              <span>
                {this.state.descriptions[index]}
              </span>
            </div>
            <div className="pricing_buttons">
              <Button 
                link={this.state.links[index]}
                innerText={'Purchase Tickets'}
                background={'#ffa800'}
                color={"#fff"}
                size={'small'}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    // let showBoxes = this.state.prices.map((item, index) => (
    //       <div className="pricing_item">
    //         <div>Hello</div>
    //       </div>
    //     ))
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    )
  };
};

export default Pricing;