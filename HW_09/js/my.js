let sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
],  winterSports = sports.slice(0, 5),
    summerSports = sports.slice(6),
    fruits = winterSports.splice(2,1).concat(summerSports.splice(1,2));

document.write(`<p>**** Winter sports ****</p>`);
for (let i = 0; i<winterSports.length; i++) {
    document.write(`
    <ul>
        <li>${winterSports[i]}</li>
    </ul>   
    `)
}

document.write(`<p>**** Summer sports ****</p>`);
for (let j=0; j<summerSports.length; j++) {
    document.write(`
    <ul>
        <li>${summerSports[j]}</li>
    </ul>   
    `)
}

document.write(`<p>**** Fruits ****</p>`);
for (let a=0; a<summerSports.length; a++) {
    document.write(`
    <ul>
        <li>${fruits[a]}</li>
    </ul>   
    `)
}



