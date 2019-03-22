import React from "react";
import { Button } from "@material-ui/core";

import TicketIcon from "../../images/icons/ticket.png";

const MyButton = props => (
  <Button
    href={props.link}
    variant="contained"
    target="_blank"
    size={props.size}
    style={{
      background: props.background,
      color: props.color
    }}
  >
    <img src={TicketIcon} className="iconImage" alt="Icon button" />
    {props.innerText}
  </Button>
);

export default MyButton;
