// var reverse = function(x) {
//     let isNegative = x < 0; //console.log(isNegative)
//     let num = Math.abs(x);
//     let digits = 0
//     let ans = 0

//     while (num > 0){
//         num = Math.floor(num /= 10);
//         ++digits;
//     }

//     num = Math.abs(x)

//     for( let i = 0; i <= digits; i++){
//         ans = ans + (num % 10) * 10**(digits - i - 1);
//         num = Math.floor(num/10)
//     }

//     if(isNegative) ans *= -1
//     return ans
// };

// console.log(reverse(-98776))

console.log(55531 % 10)

var reverse = function (x) {
    let ans = 0;
    let isNegative = x < 0;
    let num = Math.abs(x);

    while (num > 0) {
        let digit = num % 10;

        // Overflow check
        if (ans > Math.floor((2 ** 31 - 1) / 10) || (ans === Math.floor((2 ** 31 - 1) / 10) && digit > 7)) {
            return 0;
        }

        ans = ans * 10 + digit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -ans : ans;
};

console.log(reverse(145236))
