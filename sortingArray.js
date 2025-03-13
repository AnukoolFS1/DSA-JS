let array = [15, 14, 6, 8, 0, 2, 16, 12, 11, 1, 9, 7, 3, 4, 5, 10, 13]

let loopCount = 0


function sortArray(arr) {
    let sortedArr = []

    sortedArr.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > sortedArr[sortedArr.length - 1]) {
            sortedArr.push(arr[i])
        } else if (arr[i] < sortedArr[0]) {
            sortedArr.unshift(arr[i])
        } else {
            console.log(sortedArr)
            let tempArr = [sortedArr[0]]
            let tempInd
            for (let j = 1; j < sortedArr.length; j++) {
                if (arr[i] < sortedArr[j]) {
                    tempArr.push(arr[i])
                    tempInd = j
                    break;
                }else{
                    tempArr.push(sortedArr[j])
                }
                ++loopCount
            }

            for (let j = tempInd; j < sortedArr.length; j++){
                tempArr.push(sortedArr[j])
                ++loopCount
            }
            console.log(tempArr)
            sortedArr = tempArr
        }
        ++loopCount
    }
    console.log(loopCount)
    return sortedArr
}

console.log(sortArray(array))