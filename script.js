// function numeralSystemTransition(base, num) {
//     let digits = 1;
//     let b = 10 - base;
//     let ans = num;

//     for (let j = num; j >= base; j /= base) {
//         ans += b * (10 ** (digits - 1)) * Math.floor(num / (base ** digits++));
//     }

//     return ans
// }
// // console.log(77..toString(8))
// console.log(numeralSystemTransition(2, 3))


///////////////////// By ChatGpt

// function numeralSystemTransition(base, num) {
//     let ans = 0;
//     let power = 0;

//     // Loop through each digit starting from the least significant one
//     while (num > 0) {
//         let digit = num % 10; // Extract the last digit
//         ans += digit * (base ** power); // Convert the digit to decimal
//         num = Math.floor(num / 10); // Remove the last digit
//         power++; // Move to the next power of the base
//     }

//     return ans;
// }



// console.log(numeralSystemTransition(2, 3));



///////////////String Method//////////////////////
function convertToBaseStirng(num, base) {
    let result = "";
    while (num > 0) {
        result = (num % base) + result;
        num = Math.floor(num / base);
    }
    return result;
}


console.log(convertToBaseStirng(3, 2))


//////////////Number Method//////////////////////
function convertToBase(num, base) {
    let result = 0;
    let placeValue = 1;

    while (num > 0) {
        let remainder = num % base;
        result += remainder * placeValue;
        placeValue *= 10;
        num = Math.floor(num / base);
    }

    return result;
}

console.log(convertToBase(3, 2))







