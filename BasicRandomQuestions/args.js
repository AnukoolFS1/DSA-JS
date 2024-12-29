var argumentsLength = function(...args) {
    return args.length
};


// console.log(argumentsLength(1,2,3,4))

// Apply Transformation for each element of array
var map = function(arr, fn) {
    let newArr = []
    for(let e = 0; e<arr.length; e++){
        newArr.push(fn(arr[e], e))
    }
    return newArr
};

map([1,2,3], function(n, i){return n + 1})
map([1,2,3], function(n, i){return n + i})
map([1,2,3], function(n, i){return 42})


//Filter
var filter = function(arr, fn) {
    const newArr = [];
    for(let i = 0; i<arr.length;i++){
        if(fn(arr[i])) newArr.push(arr[i])
    }

    return newArr
};

filter([0,10,20,30], fn = function greaterThan10(n) { return n > 10; })
filter([-1,-2,0,2,1], fn = function greaterThan10(n) { return n + 1; })
