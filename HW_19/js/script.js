const block = document.querySelector(`#block`);
const body = document.querySelector(`body`);

block.style.left = `0`;
block.style.top = `0`;

const moveLeft = (block) => {
 //   block.style.left = parseInt(block.style.left) - 10 + `px`;
    if (+block.style.left === body.clientWidth) {
        block.style.left = parseInt(block.style.left) + 10 + `px`;
    } else block.style.left = parseInt(block.style.left) - 10 + `px`;
};
const moveRight = (block) => {
    block.style.left = parseInt(block.style.left) + 10 + `px`;
};
const jumpUp = (block) => {
    block.style.top = parseInt(block.style.top) + 10 + `px`;
    block.style.transition = `0.2s`

    setTimeout(() => {
        block.style.top = parseInt(block.style.top) - 10 + `px`;
    },500)
};
const sitDown = (block) => {
    block.style.width = `125px`;
    block.style.height = `60px`
    block.style.transition = `0.2s`

    setTimeout(() => {
        block.style.width = `100px`;
        block.style.height = `100px`
        block.style.transition = `0.2s`
    }, 500)
};

const EVENTS = {
    39: block => moveRight(block),
    37: block => moveLeft(block),
    32: block => jumpUp(block),
    17: block => sitDown(block)
}

document.addEventListener(`keydown`, event => {
    EVENTS[event.keyCode] && EVENTS[event.keyCode](block);
})