import React, { useState } from "react";

const VideoCards = (input) => {
  const [cards, setCards] = useState("");

  const fetchApi = async () => {
    console.log(input);
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC6-uMMc3Zag7zlFa4ZSVzG6zoiUJX08PM&type=video&part=snippet&maxResults=25&q=${input}`
    );
    const responseBody = await response.json();
    const data = responseBody.items;
    const dataMap = data.map((item) => (
      <div key={item.id.videoId}>
        <h3>{item.id.videoId}</h3>
        <p>{item.snippet.description}</p>
        <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
          <img src={item.snippet.thumbnails.high.url} alt={item.id.videoId} />
        </a>
      </div>
    ));
    console.log(data);
    return setCards(dataMap);
  };

  return (
    <div>
      <button onClick={fetchApi}>fetch api</button>
      <ul>{cards}</ul>
    </div>
  );
};

export default VideoCards;
// videoId: item.id.videoId,
// description: item.snippet.description,
// thumbnail: item.snippet.thumbnails.high.url,
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyC6-uMMc3Zag7zlFa4ZSVzG6zoiUJX08PM&type=video&part=snippet&maxResults=25&q=${input}
// {`https://www.youtube.com/watch?v=${item.id.videoId}`}
