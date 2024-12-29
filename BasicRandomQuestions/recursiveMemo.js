function fibonacciMemoized() {
    const cache = {}; // Stores previously computed results

    function fib(n) {
        if (n in cache) {
            console.log(cache)
            return cache[n]; // Return cached result if it exists
        }
        if (n <= 1) {
            return n;
        }
        const result = fib(n - 1) + fib(n - 2);
        cache[n] = result; // Save the result in the cache
        return result;
    }

    return fib; // Returns the inner function `fib`
}

const fib = fibonacciMemoized();

console.log(fib(100))