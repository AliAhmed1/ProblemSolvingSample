function findPermutationsWithDifference(a, b, k) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (Math.abs(a[i] - b[j]) == k) {
          result.push([a[i], b[j]]);
        }
      }
    }
    return result;
  }
  
  let a = [1, 3, 5];
  let b = [2, 4, 6];
  let k = 1;
  console.log(findPermutationsWithDifference(a, b, k));