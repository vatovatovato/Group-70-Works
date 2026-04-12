// 9.
// შექმენი ორი მოდული numbers.js და average.js. 
// numbers.js-ში დაწერე ფუნქცია sumEven(arr) რომელიც 
// მიიღებს array-ს, for loop-ის გამოყენებით იპოვის ყველა
//  ლუწ რიცხვს და დააჯამებს მათ. ეს ფუნქცია გააკეთე
//  named export.
//  average.js-ში დაწერე ფუნქცია average(arr) რომელიც 
// დაითვლის 
// array-ის საშუალოს და იყოს default export. შემდეგ app.js-ში
//  დააიმპორტე ორივე მოდული, გამოიყენე ერთ array-ზე
//  და გამოიტანე
//  console.log-ში ლუწი რიცხვების ჯამი და array-ის საშუალო.

import average from "./average.js"
import {sumEven} from "./numbers.js"

let mainArr = [5,8,2,1,7,9,0,7,4,2,42,64,52,34,2,34]

console.log(average(mainArr))
console.log(sumEven(mainArr))

