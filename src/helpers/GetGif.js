export const getGif = async (category) => {
    console.log(category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3ZzA1mg1zVVrdPyDwnKw8qyoBG0NhR4k`
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(({id,title,images}) => {
        return {
            id,
            title,
            url : images?.downsized_medium.url
        }
    })

    return gifs;
}