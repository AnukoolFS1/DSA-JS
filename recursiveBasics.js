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