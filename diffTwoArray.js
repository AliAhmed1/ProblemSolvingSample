// // find the longest subarray where the absolute difference between any two elements is less than or equal to 1
function pickingNumbers(a) {
    // Write your code here

    let sortedArray = a.sort((a, b) => a - b)

    let i = 0
    let j = 0

    while (i < sortedArray.length && j < sortedArray.length) {
        if (Math.abs(sortedArray[i] - sortedArray[j]) > 1) {
            i++
            j++
        }

        else {
            j++
        }
    }

    return Math.abs(i > j ? i - j : j - i)

}


console.log(pickingNumbers([1,3,5,6,7]))