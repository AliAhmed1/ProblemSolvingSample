function findPermutations(arr) {
    let result = [];
  
    function permute(a, start) {
      if (start == a.length - 1) {
        result.push(a.slice());
      } else {
        for (let i = start; i < a.length; i++) {
          [a[start], a[i]] = [a[i], a[start]];
          permute(a, start + 1);
          [a[start], a[i]] = [a[i], a[start]];
        }
      }
    }
  
    permute(arr, 0);
    return result;
  }
  
  let arr = [1, 2, 3, 4];
  console.log(findPermutations(arr));