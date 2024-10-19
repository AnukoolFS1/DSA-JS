//// exponent
function exponents(b, e) {
    if(e === 0){
        return 1;
    }

    return b * exponents(b, e - 1);
}

console.log(exponents(3, 3))