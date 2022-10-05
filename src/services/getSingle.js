import { API_KEY } from "./settings";

export function getSingleGif(id) {
    let url = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
    return fetch(url)
        .then(response => response.json())
        .then(res => {
            const { data } = res;
            return data
        })
}