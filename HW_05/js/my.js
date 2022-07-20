const tellMe = confirm(`Tell me three most important words 💚`);
const countOfWords = 3;

if (tellMe) {
    let wordNumber;
    let word;
    let result = ``;
    let hasNum = false;
    for(wordNumber = 1; wordNumber <= countOfWords; wordNumber++) {
        do {
            if (wordNumber === 1) {
            word = prompt(`Type word #1:`, `i`);
            }
            if (wordNumber === 2) {
                word = prompt(`Type word #2:`, `love`);
            }
            if (wordNumber === 3) {
                word = prompt(`Type word #3:`, `you`);
            }
            if (word) {
                word = word.trim().toLowerCase();
                hasNum = false;
                for (let num = 0; num < word.length; num++) {
                    let currenLetter = word[num],
                        toNumber = Number(currenLetter),
                        isNumber = isNaN(toNumber)
                    if (isNumber === false) hasNum = true;
                }
            }
        } while (word === null || !word || hasNum);
        if (word) {
            let transformation;
            let uppercase = `uppercase`;
            let lowercase = `lowercase`;
            let capitalize = `capitalize`;
            do {
                transformation = prompt(`Choose next transformation: uppercase || lowercase || capitalize`, `uppercase`)
                if (transformation === uppercase) {
                    word = word.toUpperCase();
                } else if (transformation === lowercase) {
                    word = word.toLowerCase();
                } else if (transformation === capitalize) {
                    word = word[0].toUpperCase() + word.slice(1);
                }
            } while (transformation === null
            || !transformation
            || (transformation !== uppercase && transformation !== lowercase && transformation !== capitalize));
        }
        result += word;
        result += wordNumber === countOfWords ? `!` : ` `;
        console.log(`Number #${wordNumber}`, result);
    }
}