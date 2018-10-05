const clientId = "TJNBOWFRAENKF0VQSTZ0UNSBW4XHQER3WZJUAZ25JVKS3FXG";
const clientSecret = "3G1K42W4GL4FO2S5H2GQYXVSWIJHTI0UX00F4SF5HZICSVQK";
const clientVersion = "20180728";

export const getVenueDetails = venue =>
  fetch(
    `https://api.foursquare.com/v2/venues/${venue}?client_id=${clientId}&client_secret=${clientSecret}&v=${clientVersion}`,
    {
      headers: {}
    }
  )
    .then(response => response.json())
    .then(r => r);

export const getVenueLists = venue =>
  fetch(
    `https://api.foursquare.com/v2/venues/${venue}/listed?client_id=${clientId}&client_secret=${clientSecret}&v=${clientVersion}`,
    {
      headers: {}
    }
  )
    .then(response => response.json())
    .then(r => r);
