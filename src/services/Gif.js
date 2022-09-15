export const Getgifs = async( {keyword = "SaulGoodman"} = {} ) => {
    let API_KEY = "1Yq5MAQYjQKbV027i4ga8N3tU8tvA2M1"
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    const petition = await fetch(url)
    const response = await petition.json()

    const { data } = response

    return data;
}