var reverse = function(x) {
    let isNegative = x < 0; //console.log(isNegative)
    let num = Math.abs(x);
    let digits = 0
    let ans = 0

    while (num > 0){
        num = Math.floor(num /= 10);
        ++digits;
    }

    num = Math.abs(x)

    for( let i = 0; i <= digits; i++){
        ans = ans + (num % 10) * 10**(digits - i - 1);
        num = Math.floor(num/10)
    }

    if(isNegative) ans *= -1
    return ans
};

console.log(reverse(-98776))