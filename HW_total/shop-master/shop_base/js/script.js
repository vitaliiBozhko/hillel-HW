const API = `https://634e9f834af5fdff3a625f84.mockapi.io`;

const controller = async (url, method=`GET`, obj) => {
    let option = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if (obj) option.body = JSON.stringify(obj);

    let request = await fetch(url, option),
        response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
};

// login
const loginForm = document.querySelector(`#loginForm`);
const registrationForm = document.querySelector(`#registrationForm`);
const error = document.querySelector(`#error`);

loginForm.addEventListener(`submit`, async e => {
    e.preventDefault();

    let usersStorage = await controller(API+`/users`);
    let userEmailInStorage = usersStorage.find(user => user.email);
    let userPassInStorage = usersStorage.find(user => user.password);

    if (userEmailInStorage && userPassInStorage) {
        let changeStatus = await controller(API + `/users/${userEmailInStorage}`, `PUT`, {status: true});
        window.location.href = `http://localhost:63342/HW/HW_total/shop-master/shop_base/index.html`
        return changeStatus;
    } else if (!userEmailInStorage || !userPassInStorage) {
        error.className = `error active`;
    }
})

registrationForm.addEventListener(`submit`, async e => {
    e.preventDefault();

    let name = document.querySelector(`#registrationName`);
    let email = document.querySelector(`#registrationEmail`);
    let password = document.querySelector(`#registrationPassword`);
    let verifyPass = document.querySelector(`#registrationPasswordVer`);
    let registrationErr = document.querySelector(`#registrationErr`);

    let newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
        status: false
    }

    let usersStorage = await controller(API+`/users`);
    let userEmailInStorage = usersStorage.find(user => user.email);
    console.log(userEmailInStorage)

    if (userEmailInStorage) {
        registrationErr.className = `error active`;
        registrationErr.innerHTML = `User with email ${userEmailInStorage} already exist!`;
    } else if (verifyPass !== password) {
        registrationErr.className = `error active`;
        registrationErr.innerHTML = `Password not matches!`;
    } else if (userEmailInStorage === false) {
        let addNewUser = await controller(API+`/users`, `POST`, {newUser, status: true});
        console.log(addNewUser)
    }

})


// login



// render Items

const categoriesContainer = document.querySelector(`#categoriesContainer`);

const renderItem = obj => {
    let section = document.createElement(`section`);
    section.className = obj.category;
    section.dataset.name = obj.category;
    section.innerHTML = `<h2>${obj.title}</h2>`

    let itemCard = document.createElement(`div`);
    itemCard.className = `category__container`;

    // create discount
    let discount = obj.sale;

    let withDiscount = `<div class="product__sale">
                    <span class="product__sale--old">$${obj.price}</span>
                    <span class="product__sale--percent">-${obj.salePercent}%</span>
                    </div>
                    <div class="product__info">
                        <span class="product__price">${obj.price - ((obj.price * obj.salePercent) / 100)}</span>
                        <button class="product__cart">
                        <img
                            src="images/shopping-cart.png"
                            alt="shopping cart"
                            height="20"
                        />
                        </button>
                    </div>`
    let withoutDiscount = `<div class="product__info">
                    <span class="product__price">$${obj.price}</span>
                    <button class="product__cart">
                    <img
                        src="images/shopping-cart.png"
                        alt="shopping cart"
                        height="20"
                    />
                    </button>
                </div>`
    // create discount



    itemCard.innerHTML = `<div data-id="${obj.id}" class="product">
                <img
                    src="./images/products/${obj.img}.png"
                    class="product__img"
                    alt="Aircraft Carrier"
                    height="80"
                />
                    <p class="product__title">${obj.title}</p>
                    ${discount ?  withDiscount : withoutDiscount}
            </div>`

    section.append(itemCard);
    categoriesContainer.append(section)
}

const renderCardsItems = async () => {
    let cardItems = await controller(API+`/products`);
    console.log(cardItems)

    cardItems.forEach(item => renderItem(item));
}
renderCardsItems();

// render Items
