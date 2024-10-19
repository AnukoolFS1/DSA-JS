////////////////////////// SubArray ////////////////// recursive //////////////
function generateSubarrays(arr, start, end) {
    if (start === arr.length) {
        return;
    }
    else if (end === arr.length) {
        generateSubarrays(arr, start + 1, start + 1);
    }
    else {
        console.log(arr.slice(start, end + 1));
        generateSubarrays(arr, start, end + 1);
    }
}

let arr = [1, 2, 3, 4];
generateSubarrays(arr, 0, 0);

////////////////////////// SubArray ////////////////// iterative //////////////
function subArray(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            result.push(arr.slice(i,j+1))
        }
    }

    return result
}

let result = subArray([1,2,3,4])
console.log(result)