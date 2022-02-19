module.exports = function toReadable (number) {
    const objNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }

    const arrNumber = number.toString().split('');
    const arrKeys = Object.keys(objNumbers);
    const arrValues = Object.values(objNumbers);

    for (let i = 0; i <= arrKeys.length; i++) {
        if (arrKeys[i] === `${number}`) return arrValues[i];
    }

    if (arrNumber.length === 2) {
       return `${objNumbers[arrNumber[0] + 0]} ${objNumbers[arrNumber[1]]}`
    }

    if (arrNumber.length === 3) {
        if (arrNumber[1] === '0') {
            return `${objNumbers[arrNumber[0] + 0 + 0]} ${objNumbers[arrNumber[2]]}`;
        } else if (arrNumber[2] === '0') {
            return `${objNumbers[arrNumber[0] + 0 + 0]} ${objNumbers[arrNumber[1] + 0]}`;
        } else if (arrNumber[1] === '1') {
            return `${objNumbers[arrNumber[0] + 0 + 0]} ${objNumbers[1 + arrNumber[2]]}`;
        } else {
            return `${objNumbers[arrNumber[0] + 0 + 0]} ${objNumbers[arrNumber[1] + 0]} ${objNumbers[arrNumber[2]]}`;   
        }
    }
}