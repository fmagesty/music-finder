import React from "react";
import "./styles.css";
import VideoCard from "../VideoCard/VideoCard";
import TicketCard from "../TicketCard/TicketCard";

const CardDisplay = ({ cards, tickets }) => {
  return (
    <div id="div-display" className="row">
      {cards &&
        cards.map((videoItem) => (
          <VideoCard cards={videoItem} key={videoItem.id.videoId} />
        ))}
      {tickets &&
        tickets.map((ticketItem) => (
          <TicketCard tickets={ticketItem} key={ticketItem.id} />
        ))}
    </div>
  );
};

export default CardDisplay;
