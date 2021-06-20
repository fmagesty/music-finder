import React from "react";
import "./styles.css";

const EventCard = ({ input, tickets }) => {
  return (
    <div>
      <h1 id="title">Próximos eventos da banda {input}:</h1>
      <div id="tickets">{tickets}</div>
    </div>
  );
};

export default EventCard;
