function reverseNum(num) {
    var ans = 0
    while (num > 0) {
        ans = ans * 10 + num % 10
        num = parseInt(num / 10)

        console.log(ans)
    }
    return ans
}

console.log(reverseNum(3075))


// let num = 12345;
// let reversedNum = Number(num.toString().split("").reverse().join(""));
// console.log(reversedNum);