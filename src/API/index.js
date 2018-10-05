

class Helper {
    static baseURL() {
        return "https://api.foursquare.com/v2";
    }
    static auth() {
        const keys = {
            client_id:"TJNBOWFRAENKF0VQSTZ0UNSBW4XHQER3WZJUAZ25JVKS3FXG",
            client_secret: "3G1K42W4GL4FO2S5H2GQYXVSWIJHTI0UX00F4SF5HZICSVQK",
            v: "20181005"
        };
        return Object.keys(keys).map(key => `${key}=${keys[key]}`).join("&");
    }

    static urlBuilder(urlPrams) {
        if(!urlPrams){
            return ""
        }
        return Object.keys(urlPrams)
        .map(key => `${key}=${urlPrams[key]}`).join("&");
    }

    static headers() {
        return {
            Accept: "application/json"
        };
    }

    static simpleFetch(endPoint,method,urlPrams){
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(
            `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams
    )}`,
     requestData
    ).then(res => res.json());
    }

}

export default class SquareAPI {
    static search(urlPrams) {
        return Helper.simpleFetch("venues/search", "GET", urlPrams);
    }
    static getVenueDetails(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuePhotos(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}