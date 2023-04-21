function mostFrequent(arr, n) {

    // Sort the array
    arr.sort();

    // find the max frequency using linear
    // traversal
    let maxCount = 1, value = arr[0];
    let currCount = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1])
            currCount++;
        else
            currCount = 1;

        if (currCount > maxCount) {
            maxCount = currCount;
            value = arr[i - 1];
        }

    }

    return value;
}

console.log(mostFrequent([1, 2, 3, 2, 5, 5, 7, 8, 9, 10], 10))
function mostFrequent(arr, n) {

    // Sort the array
    arr.sort();

    // find the max frequency using linear
    // traversal
    let maxCount = 1, value = arr[0];
    let currCount = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1])
            currCount++;
        else
            currCount = 1;

        if (currCount > maxCount) {
            maxCount = currCount;
            value = arr[i - 1];
        }

    }

    return value;
}

console.log(mostFrequent([1, 2, 3, 2, 5, 5, 7, 8, 9, 10], 10))
