var addTwoNumbers = function (l1, l2) {
    function arrayToNum(arr) {
        let num = 0;
        totalIndex = arr.length - 1
        for (let i = totalIndex; i >= 0; i--) {
            num += arr[i]*(10**i);
        }

        return num
    }

    let num1 = arrayToNum(l1)
    let num2 = arrayToNum(l2)
    let total = num1 + num2

    let result = [];

    for(let i = 0; i<=total; i++){
        result[i] = Math.floor(total%10);
        total/=10;
    }

    return result
};

console.log(addTwoNumbers([5,6,4], [2,4,3]))


// however the leetcode did not accept it because it wanted the result in ListNode
// a more low-level concept