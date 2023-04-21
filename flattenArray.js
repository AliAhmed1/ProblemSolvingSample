function flattenArray(arr) {
    let flattenedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
  
      if (Array.isArray(element)) {
        // console.log(element)
        flattenedArr = flattenedArr.concat(flattenArray(arr[i]));
      } else {
        // console.log()
        flattenedArr.push(arr[i]);
      }
    }
  
    return flattenedArr;
  }
  

  console.log(flattenArray([1,2,[3,{abc :"abc"}],[[4]]]))