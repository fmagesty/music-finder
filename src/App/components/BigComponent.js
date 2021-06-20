import React, { useState } from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import background from "../../Assets/background.png";
import config from "../../config";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState("");
  const [tickets, setTickets] = useState("");
  const key = config.API_KEY;
  const key2 = config.API_KEY_2;

  const fetchApiYoutube = async (input) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=6&q=${input}`
    );
    if (response.status >= 400 && response.status < 600) {
      console.log(`error: ${response.status}`);
      throw new Error("Bad response from server");
    }
    const responseBody = await response.json();
    const data = responseBody.items;
    const dataMap = data.map((item) => (
      <div className="col-lg-4 mb-3" key={item.id.videoId}>
        <Card style={{ width: "233" }} className="m-auto">
          <a
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            target="a_blank"
          >
            <CardImg
              top
              style={{ width: "100%", height: "234px" }}
              src={item.snippet.thumbnails.high.url}
              alt="Card image cap"
            />
          </a>
          <CardBody className="card-body">
            <CardTitle tag="h5">{item.snippet.title}</CardTitle>
            <CardText>{item.snippet.description}</CardText>
            <Button color="secondary" onClick={handleDetalhes}>
              Detalhes
            </Button>
          </CardBody>
        </Card>
      </div>
    ));
    return setCards(dataMap);
  };

  const fetchApiTicketmaster = async () => {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${key2}&keyword=${input}`
    );
    if (response.status >= 400 && response.status < 600) {
      console.log(`error: ${response.status}`);
      throw new Error("Bad response from server");
    }
    const responseBody = await response.json();
    console.log(responseBody);
    const data = responseBody._embedded.attractions;
    const dataMap = data.map((item) => (
      <div>
        <h3 className="subtitle">Evento: {item.name}</h3>
        <a href={item.url || "tickets indisponíveis para este evento"}>
          Compre seus tickets aqui{" "}
        </a>
        <br />
        <img src={item.images[1].url} alt="event" />
        <br />
      </div>
    ));
    return setTickets(dataMap);
  };

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      fetchApiYoutube(input);
      fetchApiTicketmaster(input);
      document.getElementById("div-container").scrollIntoView();
    }
  };

  const handleSubmit = () => {
    fetchApiYoutube(input);
    fetchApiTicketmaster(input);
    document.getElementById("div-container").scrollIntoView();
  };

  const handleDetalhes = () => {
    document.getElementById("title").scrollIntoView();
  };

  return (
    <div className="w-100 h-100">
      <div
        className="main-image d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1
          className="display-2 text-center text-white mb-3"
          style={{ zIndex: 2 }}
        >
          Procura Bandas
        </h1>
        <div style={{ width: "60%", zIndex: 2 }}>
          <InputGroup size="lg" className="mb-3">
            <Input
              placeholder="Digite o nome da banda"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="input"
              onKeyPress={handleEnter}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div
        className="container my-5"
        id="div-container"
        style={{ height: "100vh" }}
      >
        <div className="row">{cards}</div>
        <h1 id="title">Próximos eventos da banda {input}:</h1>
        <div id="tickets">{tickets}</div>
      </div>
    </div>
  );
};

export default Searchbar;

// https://app.ticketmaster.com/discovery/v2/attractions.json?apikey={API_KEY_2}&keyword={input}
