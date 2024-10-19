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