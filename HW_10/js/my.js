const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
], food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
], universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
];

function getInfo(arrayName, tableHeader) {
    let TRs =[];
    if (Array.isArray(arrayName)) {
        for (let i=0;i<arrayName.length; i++) {
            let TDs = [];
            for (let j=0; j<arrayName[i].length; j++) {
                if (Array.isArray(arrayName[i][j])) {
                    TDs.push(`<td>${arrayName[i][j].join(`;`)}</td>`)
                } else TDs.push(`<td>${arrayName[i][j]}</td>`)
            }
            TRs.push(`<tr>${TDs.join(``)}</tr>`)
        }
        document.write(`
            <table style="border: 1px solid black; border-collapse: collapse;">
                <caption>${tableHeader} info</caption>
                    ${TRs.join(``)}
            </table>
        `)
    }
}

getInfo(animals, `Animals`);
getInfo(food, `Food`);
getInfo(universes, `Universes`);



