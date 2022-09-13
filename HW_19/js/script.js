const block = document.querySelector(`#block`);
const body = document.querySelector(`body`);

block.style.left = `0`;
block.style.top = `0`;

const STEP = 10;
const showBems = () => {
    block.innerHTML = `BEMS`;
    block.style.color = `white`;
    setTimeout(() => block.innerHTML = ``, 2000);
}
const moveLeft = (block) => {
    if((block.offsetLeft) < 0){
        showBems();
        block.style.left = parseInt(block.style.left) + STEP*2 + `px`;
    } else{
        block.style.left = parseInt(block.style.left) - STEP + `px`;
    }
};
const moveRight = (block) => {
    if((block.offsetLeft + block.clientWidth) > body.clientWidth){
        showBems();
        block.style.left = parseInt(block.style.left) - STEP*2 + `px`;
    } else{
        block.style.left = parseInt(block.style.left) + STEP + `px`;
    }
};
const moveUp = (block) => {
    if((block.offsetTop) < 0){
        showBems();
        block.style.top = parseInt(block.style.top) + STEP*2 + `px`;
    } else{
        block.style.top = parseInt(block.style.top) - STEP + `px`;
    }
};
const moveDown = (block) => {
    if((block.offsetTop + block.clientHeight) > body.clientHeight){
        showBems();
        block.style.top = parseInt(block.style.top) - STEP*2 + `px`;
    } else{
        block.style.top = parseInt(block.style.top) + STEP + `px`;
    }
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
    17: block => sitDown(block),
    38: block => moveUp(block),
    40: block => moveDown(block)
}

document.addEventListener(`keydown`, event => {
    EVENTS[event.keyCode] && EVENTS[event.keyCode](block);
})