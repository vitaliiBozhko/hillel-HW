const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

const getMoney = () => new Promise((resolve, reject) => {
    const userChoice = confirm(`Посмотреть баланс на карте?`);
    userChoice ? resolve() : reject();
});

getMoney()
    .then(
        () => {
            let currency;
            let userCurrency = Object.keys(userData);
            do {
                currency = prompt(`Выберите валюту: ${userCurrency.join(`, `)}`, userCurrency[0]);
                if (currency) currency = currency.replaceAll(` `, ``).toUpperCase();
            } while (!userCurrency.includes(currency))
            console.log(`Ваш баланс: ${userData[currency]} ${currency}`);
        },
        () => {
            let currency;
            let amountMoney;

            let userCurrency = Object.keys(userData);
            let bankMoney = Object.keys(bankData);

            let availableCurrencies = bankMoney
                .filter(item => userCurrency.includes(item) && bankData[item].max>0);

            do {
                currency = prompt(`Выберите валюту: ${availableCurrencies.join(`, `)}`, availableCurrencies[0]);
                if (currency) currency = currency.replaceAll(` `, ``).toUpperCase();
            } while (!userCurrency.includes(currency))

            do {
                amountMoney = prompt(`Введите сумму снятия:`, `1000`);
            } while (amountMoney === null || !+amountMoney )

            let maxBankMoney = bankData[currency].max;
            let minBankMoney = bankData[currency].min;
            let imgBankMoney = bankData[currency].img;

            if (amountMoney > maxBankMoney) console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${maxBankMoney}`);
            else if (amountMoney < minBankMoney) console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${minBankMoney}`);
            else if (amountMoney) console.log(`Вот ваши деньги: ${amountMoney}${imgBankMoney}`);
        }
    )
    .finally(
        () => {
            console.log(`Дякую, гарного дня 😊`)
        }
    )
