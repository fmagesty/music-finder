import config from "../../config";

const fetchApiTicketmaster = async (input) => {
  const key2 = config.API_KEY_2;
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${key2}&keyword=${input}`
  );
  if (response.status >= 400 && response.status < 600) {
    console.log(`error: ${response.status}`);
    throw new Error("Bad response from server");
  }
  const responseBody = await response.json();
  const ticketData = responseBody._embedded.attractions;
  return ticketData;
};

export default fetchApiTicketmaster;
