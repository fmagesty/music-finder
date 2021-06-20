import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./styles.css";
import EventCards from "../EventCard/EventCards";

const CardDisplay = ({ cards, tickets }) => {
  return (
    <div id="div-display" className="row">
      {cards && cards.map((item) => <VideoCard cards={item} />)}
      {tickets && tickets.map((item) => <EventCards tickets={item} />)}
    </div>
  );
};

export default CardDisplay;
