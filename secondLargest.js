function secondLargestFor(arr) {
    var max = arr[0]
    var secondMax = 0
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            // secondMax = max
            max = arr[i]
        }
        else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i]
        }
    }
    return secondMax
}

console.log(secondLargestFor([6,4,2,5,6,6]))


// const array = [0,1,0,1];

// let largestNum = array[0];
// let secondLargestNum = array[0];

// for(let i = 1; i < array.length; i++) {
// 	if(array[i] > largestNum) {
//     secondLargestNum = largestNum;
//     largestNum = array[i];
//     }
//   else if (array[i] < largestNum && array[i] > secondLargestNum) {
//   secondLargestNum = array[i];
//   }
// };
// console.log("Largest Number in the array is " + largestNum);
// console.log("Second Largest Number in the array is " + secondLargestNum);

