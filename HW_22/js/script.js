const jokesCategories = document.querySelector(`#jokesCategories`);
const jokesContainer = document.querySelector(`#ulContainer`);
const API = `https://api.chucknorris.io/jokes`;

const getData = url => fetch(url)
    .then(data => data.ok ? data.json() : Promise.catch(data.statusText))
    .catch(err => console.log(`In catch: ${err}`));

const renderSelectOptions = () => {
    getData(API+`/categories`)
        .then(categories => {
            jokesCategories.innerHTML = categories
                .map((category) => `<option value="${category}">${category}</option>`)
        })
}
renderSelectOptions();

jokesCategories.addEventListener(`change`, () => {
    let selectedOption = jokesCategories.querySelector(`option[value="${jokesCategories.value}"]`);
    selectedOption.setAttribute(`disabled`, `false`);
    getData(API+`/random?category=${selectedOption.value}`)
        .then(object => {

            const jokesList = document.createElement(`ul`);
            jokesList.className = `jokesList`;
            jokesList.innerHTML = `<li>
                <p>Category: <b>${selectedOption.value}</b></p>
                <p>${object.value}</p> 
            </li>`

            const deleteBtn = document.createElement(`button`);
            deleteBtn.innerHTML = `Remove joke`;
            deleteBtn.addEventListener(`click`, () => {
                jokesList.remove();
            })

            jokesList.append(deleteBtn);
            jokesContainer.append(jokesList);
        })
});