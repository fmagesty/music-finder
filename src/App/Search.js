import React, { useState } from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import background from "../Assets/background.png";
import config from "../config";

const Search = () => {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState("");
  const key = config.API_KEY;

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      fetchApi(input);
    }
  };
  const handleSubmit = () => {
    fetchApi(input);
  };

  const fetchApi = async (input) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=25&q=${input}`
    );
    if (response.status >= 400 && response.status < 600) {
      console.log(`error: ${response.status}`);
      throw new Error("Bad response from server");
    }
    const responseBody = await response.json();
    const data = responseBody.items;
    console.log(data);
    const dataMap = data.map((item) => (
      <div key={item.id.videoId}>
        <h3>{item.id.videoId}</h3>
        <p>{item.snippet.description}</p>
        <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
          <img src={item.snippet.thumbnails.high.url} alt={item.id.videoId} />
        </a>
      </div>
    ));
    return setCards(dataMap);
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
      <ul>{cards}</ul>
    </div>
  );
};

export default Search;
