


// for (let i = 0; i <= check; i++) {

//     console.log('------------------------------------------')
//     console.log("direct -", i.toString(ns), i)
// }


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

// let checkNum = 700;
// let ns = 2;

// console.log(numeralSystemTransition(ns, checkNum), checkNum);


// function convertToBase(num, base) {
//     let result = "";
//     while (num > 0) {
//         result = (num % base) + result;
//         num = Math.floor(num / base);
//     }
//     return result;
// }


// console.log(convertToBase(700, 2))

// let sec2 = new Date()

// function convertToBase(num, base) {
//     let result = 0;
//     let placeValue = 1;

//     while (num > 0) {
//         let remainder = num % base;
//         result += remainder * placeValue;
//         placeValue *= 10; // Shift place to the left (1s -> 10s -> 100s)
//         num = Math.floor(num / base);
//     }

//     return result;
// }

// console.log(convertToBase(700, 2))

// console.log(new Date() - sec2, '--');

// let checkNum = 700;
// let ns = 2;

// let sec1 = new Date()

// function numeralSystemTransition(base, num) {
//     let digits = 1;
//     let b = 10 - base;
//     let ans = num;

//     for (let j = num; j >= base;j/=base){
//         ans += b * (10**(digits-1)) * Math.floor(num / (base**digits++));
//     }

//     return ans
// }
// console.log(numeralSystemTransition(ns, checkNum), checkNum)

// console.log(new Date() - sec1);


//////////////////////////// SubArray ////////////////// recursive //////////////
// function generateSubarrays(arr, start, end) {
//     // Base Case: If we've reached the end of the array
//     if (start === arr.length) {
//         return;
//     }
//     // If the end of the current subarray exceeds the array length, start a new subarray
//     else if (end === arr.length) {
//         // Move to the next starting index and reset the end index
//         generateSubarrays(arr, start + 1, start + 1);
//     }
//     // Recursive Case: Print the subarray and increment the end index
//     else {
//         // Slice and log the subarray from start to end
//         console.log(arr.slice(start, end + 1));
//         // Recur for the next subarray with the same start but a larger end
//         generateSubarrays(arr, start, end + 1);
//     }
// }

// // Example usage:
// let arr = [1, 2, 3, 4];
// generateSubarrays(arr, 0, 0);

//////////////////////////// SubArray ////////////////// iterative //////////////
// function subArray(arr) {
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i; j < arr.length; j++){
//             result.push(arr.slice(i,j+1))
//         }
//     }

//     return result
// }

// let result = subArray([1,2,3,4])
// console.log(result)


//DSA
const arr = [1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]




function firstAndLastIndex(arr, target) {
    let lowestIndex = 0;
    let highestIndex = 0

    let low = 0;
    let high = arr.length - 1;

    let searchLow = 0;
    let searchHigh = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            searchLow = low;
            searchHigh = high;
            break;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            if (arr[mid - 1] === target) {
                high = mid - 1;
            } else {
                lowestIndex = mid;
                break;
            }
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    while (searchLow <= searchHigh) {
        let mid = Math.floor((searchHigh + searchLow) / 2);
        if (arr[mid] === target) {
            if (arr[mid + 1] === target) {
                searchLow = mid + 1;
            } else {
                highestIndex = mid;
                break;
            }
        } else if (arr[mid] > target) {
            searchHigh = mid - 1;
        } else {
            searchLow = mid + 1;
        }
    }

    return [lowestIndex, highestIndex]
}

const start1 = new Date().getTime()

const result = firstAndLastIndex(arr, 4)

const end = new Date().getTime() - start1

console.log(end)
console.log(result)



function firstAndLastIndex(arr, target) {
    // Helper function to find first or last index
    function binarySearch(arr, target, findFirst) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1; // Initialize to -1 to handle the case when target is not found

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === target) {
                result = mid; // Record the current position
                if (findFirst) {
                    high = mid - 1; // Look for earlier occurrences
                } else {
                    low = mid + 1; // Look for later occurrences
                }
            } else if (arr[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return result;
    }

    // Find the first occurrence of the target
    const firstIndex = binarySearch(arr, target, true);
    if (firstIndex === -1) return [-1, -1]; // Target not found

    // Find the last occurrence of the target
    const lastIndex = binarySearch(arr, target, false);

    return [firstIndex, lastIndex];
}

const start = new Date().getTime()

// Example usage
const result2 = firstAndLastIndex(arr, 4);
const end2 = new Date().getTime() - start
console.log(end2)

console.log(result); // Output: [4, 9]