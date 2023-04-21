function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len-i-1; j++) {
        if (arr[j] > arr[j+1]) {
          // swap elements at positions j and j+1
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }


  console.log(bubbleSort([3,2,1]))