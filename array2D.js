// function to make 2d array
function make2DArray(rows, cols) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

console.log(make2DArray(2, 2));