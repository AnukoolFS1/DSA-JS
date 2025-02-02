function SortedAndRotated(arr) {
    let splitPosition = 0;

    for(let i = 0; i < arr.length; i++){
        if(splitPosition > 0){
            if(arr[i] > arr[splitPosition - 1] && arr[i] > arr[0]){
                return false;
            }
        }
        else if(arr[i + 1] < arr[i]){
            splitPosition = i + 1;
        }
    }

    return true
}

console.log(SortedAndRotated([3,4,5,1,2]))
console.log(SortedAndRotated([6,8,9,10,2,3]))
console.log(SortedAndRotated([2,1,3,4]))
console.log(SortedAndRotated([1,2,3]))

