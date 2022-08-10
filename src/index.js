const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const BINARY_TO_MORSE = {
    '00': '',
    '10': '.',
    '11': '-'
}

function decode(expr) {
    function decodeSymbol(symbol) {
        let morseStr = '';
        let symbolArr = symbol.match(/.{1,2}/g);

        symbolArr.forEach(el => {
            morseStr = morseStr + BINARY_TO_MORSE[el];
        });

        return morseStr;
    }

    let messageArr = expr.match(/.{1,10}/g);
    let messageStr = '';

    messageArr.forEach(el => {
        if (el === '**********') {
            messageStr = messageStr + ' ';
        } else {
            messageStr = messageStr + MORSE_TABLE[decodeSymbol(el)];
        }
    });

    return messageStr;
}

module.exports = {
    decode
}