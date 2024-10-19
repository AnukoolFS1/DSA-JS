///// reverse string //////
let string = "developer"

function reverseString(str) {
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed
}

console.log(reverseString(string))

////// count vowel /////
function countVowel(str) {
    count = 0;

    for (let i = 0; i < str.length; i++) {
        switch (str[i].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
                break;
            default:
        }
    }

    return count
}

console.log(countVowel(string))