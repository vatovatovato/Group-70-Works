import { user } from "./user.js"
import { transfer } from "./transfer.js"
import { accInfo } from "./acc.js"

console.log(accInfo())

transfer('deposit', 50)
console.log('after deposit: ' + accInfo())

transfer('withdraw',30)
console.log('after withdraw: ' + accInfo())


const result = transfer('withdraw', 1000)
console.log(result)

console.log('final ' + accInfo())