import { user } from "./user.js"

export function accInfo() {
    return `Name: ${user.name}, User Balance: ${user.balance}`
}