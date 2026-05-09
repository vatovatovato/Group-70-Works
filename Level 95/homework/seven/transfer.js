import { deposit, withdraw } from "./transaction.js"

export {deposit, withdraw} from "./transaction.js"

export function transfer(type,amount) {
    if(type === "deposit") {
        deposit(amount)
    }
    else if(type === 'withdraw') {
        return withdraw(amount)
    }
    else {
        return 'invalid type'
    }
}