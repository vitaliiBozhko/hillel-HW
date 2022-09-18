const element = document.querySelector(`#element`);
const elementType = document.querySelector(`#elementType`);
const elementColor = document.querySelector(`#elementColor`);
const elementRender = document.querySelector(`#elementRender`);
const elementForm = document.querySelector(`#elementForm`);


elementForm.addEventListener(`submit`, event => {
    event.preventDefault();

    element.className = elementType.value;

    let styleOption = elementType.value === `rectangle` ? `borderBottomColor` : `background`;
    element.style[styleOption] = elementColor.value;
})
