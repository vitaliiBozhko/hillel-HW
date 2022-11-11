const API = 'https://63693f7228cd16bba71904e4.mockapi.io';

export const getHeroes = () => fetch(API+'/heroes').then(data => data.json());