//// exponent
function exponents(b, e) {
    if (e === 0) {
        return 1;
    }

    return b * exponents(b, e - 1);
}

// console.log(exponents(3, 3))


//// Sum of the element

function sumArray(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr.slice(-1)[0] + sumArray(arr.slice(0, arr.length - 1))
}

console.log(sumArray([1, 2, 3, 4, 5]))


///// reverse string

function reverseString(str){
    if(str.length === 0){
        return ''
    }

    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1))
}

console.log(reverseString('anukool'))


///// count digits

const countDigits = (num, count = 0) => {
    if(num === 0){
        return count
    }
    count++

    return countDigits(Math.floor(num/10), count)
}

console.log(countDigits(123456789))