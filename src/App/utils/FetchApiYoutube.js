import config from "../../config";

const fetchApiYoutube = async (input) => {
  const key = config.API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=7&q=${input}`
  );
  if (response.status >= 400 && response.status < 600) {
    console.log(`error: ${response.status}`);
    throw new Error("Bad response from server");
  }
  const responseBody = await response.json();
  const videosData = responseBody.items;
  return videosData;
};

export default fetchApiYoutube;
