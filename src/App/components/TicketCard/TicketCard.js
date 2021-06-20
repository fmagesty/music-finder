import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "./styles.css";

const TicketCard = ({ tickets }) => {
  return (
    <div className="col-lg-4 mb-3">
      <div id="tickets-div">
        <Card className="ticket-card" id="ticket-card">
          <CardImg
            top
            src={tickets && tickets.images[2].url}
            alt="Ticket event"
            className="ticket-img"
          />
          <CardBody className="card-body">
            <CardTitle tag="h5">Evento: {tickets && tickets.name}</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              enim!
            </CardText>
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
