const block = document.querySelector(`#block`);
const body = document.querySelector(`body`);

setInterval(() => block.style.background = generateColor(),2000);
const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};

setInterval(() => {
    block.style.left = getRandom(body.clientWidth-block.clientWidth) + `px`
    block.style.top = getRandom( body.clientHeight-block.clientHeight) + `px`
}, 2000)
const getRandom = (number) => {
    return Math.floor(Math.random() * number) + 1;
};

