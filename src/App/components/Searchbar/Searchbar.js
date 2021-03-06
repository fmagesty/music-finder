import React, { useState } from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import background from "../../assets/background.png";
import "./styles.css";

const Searchbar = ({ updateVideoData, updateTicketData }) => {
  const [input, setInput] = useState("");

  const handleEnter = async (e) => {
    if (e.charCode === 13) {
      await updateVideoData(input);
      await updateTicketData(input);
      document.getElementById("div-display").scrollIntoView();
    }
  };

  const handleSubmit = async () => {
    await updateVideoData(input);
    await updateTicketData(input);
    document.getElementById("div-display").scrollIntoView();
  };
  return (
    <div
      className="main-image"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="display-2 text-center text-white mb-3 procura-bandas">
        Procura Bandas
      </h1>
      <div className="input-div">
        <InputGroup size="lg" className="mb-3">
          <Input
            placeholder="Digite o nome da banda"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="input"
            onKeyPress={handleEnter}
          />
          <InputGroupAddon addonType="append">
            <Button className="search-btn" onClick={handleSubmit}>
              <i className="fas fa-search"></i>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default Searchbar;
