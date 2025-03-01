var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }

    return []
};


console.log(twoSum([1,4,5,6,7], 9))

// var twoSum = function(nums, target) {
//     let numMap = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];  // The number needed to reach the target
        
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];  // Found the pair
//         }
        
//         numMap.set(nums[i], i);  // Store the current number and its index
//     }
    
//     return []; // This won't be reached since a solution is guaranteed
// };
