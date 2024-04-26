import { HttpsProxyAgent } from 'https-proxy-agent';
import 'whatwg-fetch'

export const getGifs = async (category) => {
    // const apiKey = 'vfsPN1BAf0rc4tHlpAfc49LDWRkFOkb9';

    // const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    // const url = 'https://fakestoreapi.com/products?limit=10'
    const url = `https://fakestoreapi.com/products/category/${category}`

    // const agent = new HttpsProxyAgent('http://73795:Tecnologia09@pxhn.corporacionbi.com:9090');
    const resp = await fetch(url);
    const data = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.image

    })
    );

    return gifs;
}