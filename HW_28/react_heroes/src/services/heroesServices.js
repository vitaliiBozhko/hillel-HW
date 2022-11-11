const API = 'https://63693f7228cd16bba71904e4.mockapi.io';

export const heroesServices = () => fetch(API+'/heroes').then(data => data.json());

export const addHero = (obj) =>
    fetch(API, {
        method: `POST`,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
    }).then((data) => data.json());