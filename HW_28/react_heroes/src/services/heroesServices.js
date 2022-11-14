const API = 'https://63693f7228cd16bba71904e4.mockapi.io';

export const getHeroes = () => fetch(API+'/heroes').then(data => data.json());
export const getUniverses = () => fetch(API+'/universes').then(data => data.json());

export const addHero = (obj) =>
    fetch(API, {
        method: `POST`,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
    }).then((data) => data.json());

export const changeHero = (id, obj) =>
    fetch(API+`/heroes/${id}`, {
        method: `PUT`,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
    }).then((data) => data.json());