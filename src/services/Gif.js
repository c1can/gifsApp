import { API_KEY } from "./settings"

export const Getgifs = async( { keyword, limit = 25, page = 0 } ) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

    const petition = await fetch(url)
    const response = await petition.json()

    const { data } = response

    return data;
}