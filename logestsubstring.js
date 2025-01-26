let Start = new Date();

function longestSubString(str) {
    let maintainChars = {};
    let maintainProceedings = 0
    let longestSubString = 0;

    for (let i = 0; i < str.length; i++) {
        // console.log(maintainChars[str[i]] === undefined)
        if (maintainChars[str[i]] === undefined) {
            maintainChars[str[i]] = str[i];
            maintainProceedings++
        } else {
            maintainChars = {}
            maintainProceedings = 0
            maintainChars[str[i]] = str[i];
            maintainProceedings++
        }
        longestSubString = longestSubString < maintainProceedings ? maintainProceedings : longestSubString
    }

    return longestSubString
}
// Test cases
console.log(longestSubString("pwwkew"));    // Output: 3
console.log(longestSubString("abcabcabc")); // Output: 3
console.log(longestSubString("bbbbbbb"));   // Output: 1
console.log(longestSubString(""));          // Output: 0
console.log(longestSubString("abcdefg"));   // Output: 7
console.log((new Date() - Start), "ms")


// let Start = new Date();

// function longestSubString(str) {
//     let maintainChars = {}; // Map to store characters and their latest indices
//     let start = 0; // Start of the current window
//     let longestSubString = 0; // Maximum length of substring

//     for (let i = 0; i < str.length; i++) {
//         // If the character is already in the map and within the current window
//         if (maintainChars[str[i]] !== undefined && maintainChars[str[i]] >= start) {
//             start = maintainChars[str[i]] + 1; // Move the start pointer past the duplicate
//         }

//         // Update the character's latest index
//         maintainChars[str[i]] = i;

//         // Calculate the current length and update the longest substring
//         longestSubString = Math.max(longestSubString, i - start + 1);
//     }

//     return longestSubString;
// }
// console.log(longestSubString("pwwkew"));    // Output: 3
// // Test cases
// console.log(longestSubString("abcabcabc")); // Output: 3
// console.log(longestSubString("bbbbbbb"));   // Output: 1
// console.log(longestSubString(""));          // Output: 0
// console.log(longestSubString("abcdefg"));   // Output: 7
// console.log((new Date() - Start), "ms")