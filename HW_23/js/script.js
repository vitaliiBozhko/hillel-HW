const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`;

const controller = async (url, method=`GET`, obj) => {
    let option = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if (obj) option.body = JSON.stringify(obj);

    let request = await fetch(url),
        response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
};


const heroesTable = document.querySelector(`#heroesTable`);
const createHeroesForm = document.querySelector(`#createHeroesForm`);
const heroesName = document.querySelector(`#heroesName`);
const heroesSelect = document.querySelector(`#heroesSelect`);
const heroesCheckbox = document.querySelector(`#heroesCheckbox`);
const submitHero = document.querySelector(`#submitHero`);


const renderSelect = async () => {
    try {
        let comics = await controller(API+`/universes`);
        heroesSelect.innerHTML = comics
            .map(item => `<option value="${item.name}">${item.name}</option>`)
            .join(``)
    } catch (err) {}
}
renderSelect();

createHeroesForm.addEventListener(`submit`, async e => {
    e.preventDefault();

    let newHero = {
        name: heroesName.value,
        comics: heroesSelect.value,
        favourite: heroesCheckbox.value
    }

    let heroesStorage = await controller(API+`/heroes`);
    let heroInStorage = heroesStorage.find(hero => hero.name === newHero.name);

    if (heroInStorage) {
        console.log(`Status: This hero: ${newHero.name} already in storage`);
        return;
    } else {
        let addNewHero = await controller(API+`/heroes`, `POST`, newHero);
        renderTable(addNewHero);
    }
})

const renderTable = obj => {
    let tr = document.createElement(`tr`);
    tr.innerHTML = `<td>${obj.name}</td>
        <td>${obj.comics}</td>`;

    const tdCheckbox = document.createElement(`td`);
    let checkbox = document.createElement(`input`);
    checkbox.setAttribute(`type`, `checkbox`)
    checkbox.addEventListener(`change`, async () => {
        let changedStatus = await controller(API+`/heroes`, `PUT`, obj);
        console.log(`Status of ${obj.favourite} changed`);

    })

    const tdBtn = document.createElement(`td`)
    const deleteBtn = document.createElement(`button`);
    deleteBtn.className = `delete-btn`;
    deleteBtn.innerHTML = `Delete hero`;
    deleteBtn.addEventListener(`click`, () => tr.remove());

    tdCheckbox.append(checkbox);
    tdBtn.append(deleteBtn);
    tr.append(tdCheckbox);
    tr.append(tdBtn);
    heroesTable.append(tr);
}

const renderHeroes = async () => {
    let heroes = await controller(API+`/heroes`);
    console.log(heroes);

    heroes.forEach(hero => renderTable(hero));
}

renderHeroes();





