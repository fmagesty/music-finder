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

const VideoCards = ({ cards }) => {
  console.log(cards);
  const handleDetalhes = () => {
    document.getElementById("title").scrollIntoView();
  };

  return (
    <div className="col-lg-4 mb-3" key={cards.id.videoId}>
      <Card className="card" id="card">
        <a
          href={`https://www.youtube.com/watch?v=${cards && cards.id.videoId}`}
          target="a_blank"
        >
          <CardImg
            top
            src={cards && cards.snippet.thumbnails.high.url}
            alt="Card image cap"
            className="card-img"
          />
        </a>
        <CardBody className="card-body">
          <CardTitle tag="h5">{cards && cards.snippet.title}</CardTitle>
          <CardText>{cards && cards.snippet.description}</CardText>
          <Button color="secondary" onClick={handleDetalhes}>
            Detalhes
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default VideoCards;
