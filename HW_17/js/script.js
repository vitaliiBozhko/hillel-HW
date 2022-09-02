let lastOfTypeLi = document.querySelectorAll(`li:last-of-type`);
lastOfTypeLi.forEach(li => li.classList.add(`last`))

const root = document.querySelector(`ul#root`)

const setFirstItemClassName = (ul) => {
    let Li = ul.children

    let firstLevelLi = [...Li]
    firstLevelLi.map(li => {
        let otherLevelLi = [...li.children]
        otherLevelLi.map(otherLi => otherLi.querySelector(`li`).classList.add(`first`))
    })
}

setFirstItemClassName(root)