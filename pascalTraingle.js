function pascalTriangle(n) {
    // Write your code here
    let triangle = [];
    for (var i = 0; i < n; i++) {
        triangle[i] = [];
        for (var j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }
    return triangle;
}

let arr = pascalTriangle(6);
arr.map((val) => { console.log(val.join(' ')) })