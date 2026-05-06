function min(a,b) {
    // if(a < b) {
    //     return a
    // }
    // else {
    //     return b
    // }
    return a < b ? a : b
}

function max(a,b) {
    // if(a > b) {
    //     return a
    // }
    // else {
    //     return b
    // }
    return a > b ? a : b
}

function average(a,b) {
    // const c = a + b
    // return c / 3
    return (a + b) / 2
}

export const utils = {
    min,
    max,
    average
}