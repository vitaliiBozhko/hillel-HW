const element = document.querySelector(`#element`);
const elementType = document.querySelector(`#elementType`);
const elementColor = document.querySelector(`#elementColor`);
const elementRender = document.querySelector(`#elementRender`);
const elementForm = document.querySelector(`#elementForm`);


elementForm.addEventListener(`submit`, event => {
    event.preventDefault();

    let select = elementType.value;
    element.classList.add(select)
    if (select === `rectangle`) {

    }
    elementColor.addEventListener(`change`, event => {
        if (select === `rectangle`) {
            element.style.borderRightColor = `transparent`
            element.style.borderLeftColor = `transparent`
            element.style.borderTopColor = `transparent`
            element.style.borderBottomColor = event.target.value
        } else element.style.background = event.target.value
    })
    elementRender.addEventListener(`click`, () => {
        element.classList.remove(select)
    })
})
