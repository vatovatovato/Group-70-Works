import { math } from "./math.js";
import { utils } from "../second/utils.js"
import {capitalize,reverse} from "../third/stringUtils.js"
import { arrMethods } from "../five/arrayUtils.js";
import {person,greet} from "../six/six.js"

// 1
const {add,substract} = math

console.log(add(4,2))
console.log(substract(10,2))


// 2
const {min,max,average} = utils

console.log(average(5,10))
console.log(min(5,10))
console.log(max(5,10))

// 3
console.log(capitalize('vato'))

// 5
const {sumArray, findMax} = arrMethods

console.log(sumArray([4,7,3,1,4]))
console.log(findMax([5,3,7,8,4,2]))


let num = 0
let inpNum

// 6
console.log(greet())
