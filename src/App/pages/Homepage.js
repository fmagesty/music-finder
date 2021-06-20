import React, { useState } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import fetchApiYoutube from "../utils/FetchApiYoutube";
import fetchApiTicketmaster from "../utils/FetchApiTicketmaster";

const Homepage = () => {
  const [cards, setCards] = useState(undefined);
  const [tickets, setTickets] = useState(undefined);

  const updateVideoState = async (input) => {
    const videoData = await fetchApiYoutube(input);
    setCards(videoData);
  };

  const updateTicketState = async (input) => {
    const ticketData = await fetchApiTicketmaster(input);
    setTickets(ticketData);
  };

  return (
    <div id="homepage-div">
      <Searchbar
        updateVideoData={updateVideoState}
        updateTicketData={updateTicketState}
      />
      <CardDisplay cards={cards} tickets={tickets} />
    </div>
  );
};

export default Homepage;
