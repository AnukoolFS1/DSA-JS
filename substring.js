// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


/*
 * Complete the 'maxSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function maxSubstring(s) {
    // Write your code here
    const arr = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++){
            if(i === j){
                arr.push(s[j])
            }else{   
                arr.push(s[j]+arr[j-1])
            }
        } 
    }

    console.log(arr)
    
    let biggestAlphabetical = ""
    
    for(let element of arr){
        if(element[0] > biggestAlphabetical[0]){
            biggestAlphabetical = element[0]
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(biggestAlphabetical === arr[i][0] && arr[i].length > biggestAlphabetical){
            biggestAlphabetical = arr[i]
        }
    }
    
    console.log(biggestAlphabetical)
    return biggestAlphabetical
}


maxSubstring("banana")
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const result = maxSubstring(s);

//     ws.write(result + '\n');

//     ws.end();
// }
