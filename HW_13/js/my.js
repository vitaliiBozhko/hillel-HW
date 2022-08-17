const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

let convert = object => {
    let newObj = {};
    for(let key in object){
        if(typeof object[key] === `object`) {
            for(let newKey in object[key]) {
                newObj[key] = object[key][newKey]
            }
        } else newObj[key] = object[key]
    }
    return newObj;
}

console.log(convert(obj));