// 1) მოცემულია მასივი:
// const numbers = [10, 20, 30, 40, 50, 60]
// Destructuring-ის გამოყენებით:
// გამოტოვეთ პირველი ელემენტი
// მეორე ელემენტი შეინახეთ secondNumber ცვლადში
// მესამე ელემენტი შეინახეთ thirdNumber ცვლადში
// დანარჩენი ელემენტები შეინახეთ restNumbers მასივში
// დაბეჭდეთ ყველა ცვლადი.

const numbers = [10, 20, 30, 40, 50, 60]

const [,secondNumber,thirdNumber, ...restNumber] = numbers

console.log(secondNumber)
console.log(thirdNumber)
console.log(restNumber)

// 2) მოცემულია ობიექტი:
// const employee = {
// id: 101,
// name: "Luka",
// position: "Developer",
// salary: 3000,
// contact: {
// email: "luka@gmail.com",
// phone: "555-123-456"
// }
// }
// Nested destructuring-ის გამოყენებით:
// name გადაარქვით employeeName
// salary გადაარქვით monthlySalary
// contact-იდან პირდაპირ აიღეთ email (rename გააკეთეთ workEmail)
// phone-ს მიეცით default მნიშვნელობა "Not Provided"
// დანარჩენი ზედა დონის მონაცემები შეინახეთ restEmployee ობიექტში

const employee = {
id: 101,
name: "Luka",
position: "Developer",
salary: 3000,
contact: {
email: "luka@gmail.com",
phone: "555-123-456"
}
}

const {name: employeeName, salary: monthlySalary, contact: {email: workEmail, phone ='Not provided'}, ...restEmployee} = employee

console.log(workEmail)


// 3) შექმენით ფუნქცია, რომელიც იღებს მასივს შემდეგი სტრუქტურით:
// Destructuring-ის გამოყენებით:
// პირველი კურსიდან აიღეთ title და lessons
// მეორე კურსიდან აიღეთ მხოლოდ title (rename გააკეთეთ secondCourseName)
// მესამე კურსიდან აიღეთ lessons და მიეცით default მნიშვნელობა 0
// ფუნქციამ უნდა დაბეჭდოს ყველა მიღებული მნიშვნელობა.

// const arr = [
// { title: "JS", lessons: 20 },
// { title: "React", lessons: 35 },
// { title: "Node", lessons: 25 }
// ]

// function main([{title,lessons}]) {

// }

// 4) მოცემულია ობიექტი:
const order = {
orderId: 555,
customer: {
name: "Ana",
age: 16
},
items: [
{ product: "Phone", price: 1000 },
{ product: "Case", price: 20 }
]
}

const {customer: {name: customerName},items: [{product, price}, {product: accessoryName}] = [] } = order


// Nested destructuring-ის გამოყენებით:
// customer-იდან აიღეთ name (rename → customerName)
// items მასივიდან აიღეთ პირველი პროდუქტის product და price
// მეორე პროდუქტიდან აიღეთ მხოლოდ product (rename → accessoryName)
// თუ items მასივი არ არსებობს, გამოიყენეთ default ცარიელი მასივი

// 5) მოცემულია სამი ცვლადი:
let a = 1;
let b = 2;
let c = 3;

[a,c] = [c,a];

// Destructuring-ის გამოყენებით:
// გააკეთეთ ისე, რომ a-ში ჩავიდეს c-ის მნიშვნელობა
// b დარჩეს უცვლელი
// c-ში ჩავიდეს a-ის ძველი მნიშვნელობა
// (არ გამოიყენოთ დამატებითი ცვლადები)
// შემდეგ მოცემულია ობიექტი:
const teacher = {
name: "Maia",
subject: "Math",
experience: 5,
school: "High School",
city: "Kutaisi"
}

const {name: teacherName, subject: mainSubject, ...restInfo} = teacher

console.log(teacherName)

// Destructuring-ის გამოყენებით:

// name გადაარქვით teacherName
// subject გადაარქვით mainSubject
// experience შეინახეთ ცვლადში yearsOfExperience
// დანარჩენი მონაცემები შეინახეთ სხვა ობიექტში restInfo
// დაბეჭდეთ ყველა შედეგი.