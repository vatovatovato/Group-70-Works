export function sumEven(arr) {
    let sumArr = 0
    for(let i = 0; i < arr.length;i++) {
        if (arr[i] % 2 == 0) {
            sumArr += arr[i]
        }
    }

    return sumArr
}

console.log(sumEven([10,4,7,3,3,2,6,7]))