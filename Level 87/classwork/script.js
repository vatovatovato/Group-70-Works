//      1) შექმენი მასივი numbers = [1, 2, 3].
// შექმენი ახალი მასივი newNumbers, სადაც spread-ის გამოყენებით დაამატებ რიცხვს 4 ბოლოში.

const numbers = [1,2,3]
const newNumbers = [...numbers, 4] 

console.log(newNumbers)

// 2) გაქვს ორი მასივი:

const arr1 = [1, 2];
const arr2 = [3, 4];

// გააერთიანე ისინი ერთ მასივად spread-ის გამოყენებით.
const newArr12 = [...arr1, ...arr2]
console.log(newArr12)

// 3) შექმენი მასივი 
let colors = ["red", "blue"]
// შექმენი ახალი მასივი სადაც "green" იქნება დასაწყისში, შემდეგ spread-ით ძველი ელემენტები.
const newColors = ['green', ...colors]
console.log(newColors)

// 4) შექმენი obj.
// შექმენი ახალი obj, newNumbersObj, სადაც spread-ის გამოყენებით დაამატებ რიცხვს 4 ბოლოში.
const obj = {
    num1: 1,
    num2: 2,
    num3: 3
}

const newNumbersObj = {...obj, num4: 4}

console.log(newNumbersObj)

// 5) გაქვს ორი obj

// გააერთიანე ისინი ერთ obj-ად spread-ის გამოყენებით.

const per1 = {
    name: 'vato',
    lastname: 'kheladze'
}

const per2 = {
    name: 'givi',
    lastname: 'sixarulidze'
}

const full = {...per1, ...per2}

console.log(full)
     
     
