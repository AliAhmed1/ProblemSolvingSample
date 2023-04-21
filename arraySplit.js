function splitToChunks(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}


function split(array, n) {
    let [...arr] = array;
    var res = [];
    while (array.length) {
        res.push(array.splice(0, n));
    }
    return res;
}

console.log(splitToChunks([1, 2, 3, 4, 5], 3))

console.log(split([1, 2, 3, 4, 5, 6], 2))