function fibonacci(num) {
    if (num == 0) {
        return 0
    }
    else if (num == 1) {
        return 1
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

console.log(fibonacci(6))


// // function fibonacciSeries(num) {
// //     var fib = []
// //     for (var i = 0; i < num; i++) {
// //         fib.push(fibonacci(i))
// //     }
// //     return fib
// // }

// console.log(fibonacciSeries(10))