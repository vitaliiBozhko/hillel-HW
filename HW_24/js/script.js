const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
const btnWrapper = $(`#btnWrapper`);
const img = $(`#carImg`);
const imgTitle = $(`#carTitle`);

const changeImg = el => {
    img.attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${el.img}.jpg`);
    imgTitle.html(el.title);
}

const renderBTNs = data => {
    $(data).each((index, el) => {
        let btn = $(`<button></button>`);
        btn.css(`background`, el.color);
        btn.on(`click`, () => {
            console.log(`change img url`);
            changeImg(el)
        })

        btnWrapper.append(btn);
    })
}

$.ajax({
    url: URL,
    method: `GET`,
    success: data => {
        console.log(data);
        renderBTNs(data);
        changeImg(data[0]);
    },
    error: error => console.log(error)
})


