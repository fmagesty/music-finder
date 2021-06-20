import React from "react";
import { Button, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./styles.css";

const TicketCard = ({ tickets }) => {
  return (
    <div className="col-lg-4 mb-3">
      <div id="tickets-div">
        <Card className="ticket-card" id="ticket-card">
          <CardTitle tag="h5">Evento: {tickets && tickets.name}</CardTitle>
          <CardImg
            top
            src={tickets && tickets.images[2].url}
            alt="Ticket event"
            className="ticket-img"
          />
          <CardBody className="card-body">
            <a href={tickets.url} target="_blank">
              <Button className="btn btn-primary">
                Veja ingressos do evento aqui
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TicketCard;
