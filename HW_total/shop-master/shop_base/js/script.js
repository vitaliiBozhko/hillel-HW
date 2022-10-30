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

const getLocalStorage = (key, value=[]) => {
    let storage = localStorage.getItem(`userEmail`);
    storage = storage ? JSON.parse(storage) : [];

    return storage;
}

if(loginForm) {
    loginForm.addEventListener(`submit`, async e => {
        e.preventDefault();

        let usersStorage = await controller(API+`/users`);
        const errorLogin = loginForm.querySelector(`#error`);
        let email =  loginForm.querySelector(`input[data-name="email"]`).value;
        let password =  loginForm.querySelector(`input[data-name="password"]`).value;

        let userEmailInStorage = usersStorage.find(user => user.email === email);

        if(!userEmailInStorage){
            errorLogin.classList.add(`active`);
            errorLogin.innerHTML = `Invalid email`;
            return;
        }

        if (userEmailInStorage.password !== password) {
            errorLogin.classList.add(`active`);
            errorLogin.innerHTML = `Invalid password`;
            return;
        }

        await controller(API + `/users/${userEmailInStorage.id}`, `PUT`, {status: true});
        window.location.href = `index.html`;

        let storageEmail = getLocalStorage(`userEmail`);
        storageEmail.push(userEmailInStorage.email);
        localStorage.setItem(`userEmail`, JSON.stringify(storageEmail));

        const headerUser = document.querySelector(`#headerUser`);
        const headerLogout = document.querySelector(`#headerLogout`);

        if (userEmailInStorage.status === true) {
            headerUser.innerHTML = `<a href="account.html" class="header__user" id="headerUser">${userEmailInStorage.name}</a>`;
            headerLogout.classList.add(`active`);
        }
    })
}

if (registrationForm) {
    registrationForm.addEventListener(`submit`, async e => {
        e.preventDefault();

        let name = registrationForm.querySelector(`input[data-name="name"]`).value;
        let email =  registrationForm.querySelector(`input[data-name="email"]`).value;
        let password =  registrationForm.querySelector(`input[data-name="password"]`).value;
        let verifyPass = registrationForm.querySelector(`input[data-name="passwordVerify"]`).value;
        const errorRegistration = registrationForm.querySelector(`#registrationErr`);

        let newUser = {
            name: name,
            email: email,
            password: password,
            status: false
        }

        let usersStorage = await controller(API+`/users`);
        let userEmailInStorage = usersStorage.find(user => user.email===email);

        if (userEmailInStorage) {
            errorRegistration.classList.add(`active`);
            errorRegistration.innerHTML = `User with email ${userEmailInStorage.email} already exist!`;
            return;
        }
        if (verifyPass !== password) {
            errorRegistration.classList.add(`active`);
            errorRegistration.innerHTML = `Password not matches!`;
            return;
        }
        if (userEmailInStorage !== email) {
            let addNewUser = await controller(API+`/users`, `POST`, Object.assign(newUser, {status: true}));

            let storageEmail = getLocalStorage(`userEmail`);
            storageEmail.push(userEmailInStorage.email);
            localStorage.setItem(`userEmail`, JSON.stringify(storageEmail));

            return addNewUser;
        }
    })
}
// login

// user in/out
const renderUserOnline = async () => {
    let usersStorage = await controller(API+`/users`);
    let userStatus = usersStorage.find(status => status.status);
    let storageEmail = getLocalStorage(`userEmail`);

    const headerUser = document.querySelector(`#headerUser`);
    const headerLogout = document.querySelector(`#headerLogout`);

    if (storageEmail) {
        headerUser.innerHTML = `<a href="account.html" class="header__user" id="headerUser">${userStatus.name}</a>`;
        headerLogout.classList.add(`active`);
    }

    headerLogout.addEventListener(`click`, async () => {
        headerLogout.classList.remove(`active`);
        headerUser.innerHTML = `<a href="login.html" class="header__user" id="headerUser">Log in</a>`
        await controller(API + `/users/${userStatus.id}`, `PUT`, {status: false});


        storageEmail.pop();
        localStorage.setItem(`userEmail`, JSON.stringify(storageEmail));

        window.location.href = `index.html`;
    })

}
//renderUserOnline();
// user in/out


// render Items

const categoriesContainer = document.querySelector(`#categoriesContainer`);

const renderItem = obj => {
    let section = document.querySelector(`section[data-name="${obj.category}"] .category__container`);

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

    let itemCard = document.createElement(`div`);
    itemCard.className = `product`;
    itemCard.dataset.id = obj.id;
    itemCard.innerHTML = `<img
        src="./images/products/${obj.img}.png"
        class="product__img"
        alt="Aircraft Carrier"
        height="80"
    />
    <p class="product__title">${obj.title}</p>
    ${discount ?  withDiscount : withoutDiscount}`;

    section.append(itemCard);
}

const renderCardsItems = async products => {
    products.forEach(item => renderItem(item));
}

// render Items

// render sections
const renderSections = async products => {
    const uniqueCategories = [];
    products.forEach(product => {
        if(!uniqueCategories.includes(product.category))
            uniqueCategories.push(product.category)
    });

    uniqueCategories.forEach(category => {
        const section = document.createElement(`section`);
        section.className = `category`;
        section.dataset.name = category;
        section.innerHTML = `<h2>${category}</h2>
        <div class="category__container"></div>`;

        categoriesContainer.append(section);
    })
}
// render sections


if(categoriesContainer){
    (async ()=>{
        let products = await controller(API+`/products`);

        renderSections(products);
        renderCardsItems(products);
    })();
}
