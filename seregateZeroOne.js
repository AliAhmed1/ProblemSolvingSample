
function seregateZeroOne(arr) {
    let arr0 = [], arr1 = []
    let j = 0
    let k = 0

    for (var i in arr) {
        if (arr[i] == 0){
            arr0[j] = arr[i]
            j++
        }
        else {
            arr1[k] = arr[i]
            k++
        }
    }

    return [...arr0, ...arr1]
}

function seregateZeroOne(arr) {

    let type0 = 0;
    let type1 = arr.length - 1;

    while (type0 < type1)
    {
        if (arr[type0] == 1)
        {
             if (arr[type1] != 1)
            {  
              // Swap
              arr[type1] = arr[type1] + arr[type0];
              arr[type0] = arr[type1] - arr[type0];
              arr[type1] = arr[type1] - arr[type0];
             }
            type1--;
        }
        else
            type0++;
    }

    return arr

}


console.log(seregateZeroOne([0, 0, 1, 0, 1,0]))
