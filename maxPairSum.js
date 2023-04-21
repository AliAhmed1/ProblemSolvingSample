// //maximize the array
function maximizeArray(arr) {
    let max = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] > max) {
                max = arr[i] + arr[j];
            }
        }
    }
    return max;
}

console.log(maximizeArray([1,2,3,4]))