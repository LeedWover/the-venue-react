import React from "react";

const Maps = () => (
  <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10801.075084657243!2d19.0169441!3d47.4066985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x786d6f6108d0d920!2sCampona+%C3%BCzletk%C3%B6zpont!5e0!3m2!1shu!2shu!4v1553350640040"
      // width="600"
      // height="450"
      title="Google Maps"
      frameBorder="0"
      style={{
        border: 0,
        width: '100%',
        height: 500
      }}
      allowFullScreen
    />
    <div className="location_tag">
      <div>Location</div>
    </div>
  </div>
);

export default Maps;
