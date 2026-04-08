// 1) მოცემულია ობიექტი:

// {
//   name: "Giga",
//   age: 16
// }
// დესტრუქტურინგის გამოყენებით შეინახე name და age ცვლადებში.

const user = {
    name: 'Giga',
    age: 16
}

const {name : userName} = user
const {age : userAge} = user

console.log(userName)
console.log(userAge)


// 2) მოცემულია ობიექტი:

// {
//   city: "Tbilisi",
//   country: "Georgia"
// }
// დესტრუქტურინგის გამოყენებით ამოიღე მხოლოდ city და გამოიტანეთ.

const region = {
  city: "Tbilisi",
  country: "Georgia"
}

const {city : newCity} = region
console.log(newCity)

// 3) მოცემულია მასივი:
// [100, 200, 300]

// დესტრუქტურინგის გამოყენებით აიღე პირველი ელემენტი და გამოიტანეთ.
let nums = [100, 200, 300]

let [a] = nums

console.log(a)

// 4) მოცემულია მასივი:
// ["apple", "banana"]

// დესტრუქტურინგის გამოყენებით შეინახე ორივე ელემენტი ცვლადებში და გამოიტანეთ.

let fruits = ["apple", "banana"]

let [fruitOne,fruitTwo] = fruits

console.log(fruitOne)

