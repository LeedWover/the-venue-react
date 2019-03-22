import React from 'react';
import { Zoom } from 'react-reveal';

import icon_calendar from '../../images/icons/calendar.png';
import icon_location from '../../images/icons/location.png';

const VenueInfo = () => (
  <div className="bck_black">
  <Zoom duration={1500}>
    <div className="center_wrapper">
      <div className="vn_wrapper">
        <div className="vn_item">
          <div className="vn_outer">
            <div className="vn_inner">
              <div className="vn_icon_square bck_red">
              </div>
              <div
                className="vn_icon"
                style={{
                  background:`url(${icon_calendar})`
                }}
              >
              </div>
              <div className="vn_title">
                Event Date & Time
              </div>
              <div className="vn_desc">
                27 March 2019 @10.00 pm
              </div>
            </div>
          </div>
        </div>
        <div className="vn_item">
          <div className="vn_outer">
            <div className="vn_inner">
              <div className="vn_icon_square bck_yellow">
              </div>
              <div
                className="vn_icon"
                style={{
                  background:`url(${icon_location})`
                }}
              >
              </div>
              <div className="vn_title">
                Event Location
              </div>
              <div className="vn_desc">
                1089 Király utca 7
                Első emelet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Zoom>
  </div>
);


export default VenueInfo;