let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];
let colors = [`red`, `orange`, `yellow`, `green`, `aqua`, `blue`, `purple` ];
let rainbow = destination
    .concat(native, hero)
    .reverse();
console.log(rainbow);

rainbow.splice(0,1,`Richard`);
rainbow.splice(3,0,'Gave','Battle');
rainbow.splice(-1,1,'Vain');

for (let i=0; i<rainbow.length; i++){
    document.write(`
        <div class="container">
            <div style="width: 40px; height: 40px; border-radius: 50%;  margin: 10px; background-color: ${colors[i]};"></div>
            <p>${rainbow[i]}</p>
        </div>
    `);
}

