import React, { useState } from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import background from "../Assets/background.png";

const Header = () => {
  const [input, setInput] = useState("");

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      console.log("fetch APIs");
    }
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
              <Button color="secondary">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Header;
