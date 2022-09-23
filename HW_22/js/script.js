const jokesCategories = document.querySelector(`#jokesCategories`);
const jokesList = document.querySelector(`#jokesList`);

const API = `https://api.chucknorris.io/jokes/categories`;

const getData = url => fetch(url)
    .then(data => data.ok ? data.json() : Promise.catch(data.statusText))
    .catch(err => console.log(`In catch: ${err}`));

const renderSelectOptions = () => {
    getData(API)
        .then(categories => {
            jokesCategories.innerHTML = categories
                .map(category => `<option>${category}</option>`)
        })

}

const renderLIs = () => {
    console.log(getData(API + `=${categories}`))
}
renderSelectOptions()
renderLIs()