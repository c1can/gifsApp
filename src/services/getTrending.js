import { API_KEY } from "./settings"

export const getTrending = async() => {
    let url = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

    const petition = await fetch(url)
    const response = await petition.json()

    const { data } = response

    return data;
}