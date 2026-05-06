// <!-- 4.შექმენი ფაილი arrayUtils.js,
//  სადაც დაწერ ფუნქციებს
//   sumArray(arr) და findMax(arr),
//    გააერთიანე ერთ ობიექტში და export 
//    გააკეთე, შემდეგ app.js-ში გამოიყენე. -->

function sumArray(arr) {
    let a = 0
    for(let i = 0; i < arr.length; i++){
        a += arr[i]
    }

    return a
}

function findMax(arr) {
    return Math.max(...arr)
}

export const arrMethods = {
    sumArray,
    findMax
}