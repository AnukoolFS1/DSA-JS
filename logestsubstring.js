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
            longestSubString = longestSubString < maintainProceedings ? maintainProceedings : longestSubString
            maintainChars = {}
            maintainProceedings = 0
            maintainChars[str[i]] = str[i];
            maintainProceedings++
        }
    }

    return longestSubString
}

console.log(longestSubString("abcabcabc"))
console.log(longestSubString("bbbbbbb"))
console.log(longestSubString("pwwkew"))