const block = document.querySelector(`#block`);
const body = document.querySelector(`body`);

setInterval(() => block.style.background = generateColor(),2000);
const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};

const bodyHeight = body.clientHeight;
const bodyWidth = body.clientWidth

setInterval(() => {
    block.style.left = getRandom(bodyWidth-block.clientWidth) + `px`
    block.style.top = getRandom( bodyHeight-block.clientHeight) + `px`
}, 2000)
const getRandom = (number) => {
    return Math.floor(Math.random() * number) + 1;
};

