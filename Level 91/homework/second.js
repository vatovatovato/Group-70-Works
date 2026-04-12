// დავალება 5
export function double(n) {
    return n * n
}

export function triple(n) {
    return n * n * n
}

// დავალება 6
export default function sumTo(n) {
    let a = 0
    for(let i = 0; i < n; i++) {
        a += i
    }
    return a
}

// დავალება 7
export function getEvenNumbers(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }

    return newArr
}



