const tellMe = confirm(`Tell me three most important words 💚`);
const countOfWords = 3;

if (tellMe) {
    let wordNumber;
    let word;
    let result = ``;
    let hasNum = false;
    for(wordNumber = 1; wordNumber <= countOfWords; wordNumber++) {
        do {
            let defaultWord = `i`;
            switch(wordNumber){
                case 2:
                    defaultWord = `love`;
                    break;
                case 3:
                    defaultWord = `you`;
                    break;
            }

            word = prompt(`Type word #${wordNumber}:`, defaultWord);

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