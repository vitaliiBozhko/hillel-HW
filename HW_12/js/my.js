const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

let newUsersName = [];
users.forEach(item => newUsersName.push(`${item[0]}!`))
console.log(newUsersName);

let mapNewArray = users.map(item => item[0] + `?`)
console.log(mapNewArray);

const tableHead = [`Name`, `Command`, `Score`, `Data`];

const table = (thead, elements) => {
    let mainTable = `<table>
        <thead>
            <tr>
                ${thead.map(item => `<th>${item}</th>`).join(``)}
            </tr>
        </thead>
        <tbody>
            ${elements.filter(item => item[1] === `red`)
                .map(usersData => `<tr>
                    ${usersData.map(item => `<td>${item}</td>`).join(``)}
                </tr>`)
                .join(``)
            }
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">
                    Total score: ${elements.filter(item => item[1] === `red`)
                        .reduce(
                            function (sum, item) {
                                return sum+item[2];
                            },
                            0
                        )}
                </td>
            </tr>
        </tfoot> 
    </table>`

    document.write(mainTable)
}

table(tableHead, users);