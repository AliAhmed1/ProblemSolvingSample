
// intersect of array
function intersect(arr1, arr2) {
    return filteredArray = arr1.filter(value => arr2.includes(value));
}

console.log(intersect([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]))


// union of two array
function union(arr1, arr2) {
    return filteredArray = [...new Set([...arr1, ...arr2])];
}

console.log(union([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]))
