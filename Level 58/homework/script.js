// 1
let num = 10
if(num > 100) {
    console.log(true)
}
else {
    console.log(false)
}

// 2
let user = 'kocho'
if(user === 'kocho') {
    console.log('welcome back')
}
else {
    console.log(false)
}

// 3
let age = 12
if(age <= 13) {
    console.log('child')
}
else if(age <= 17) {
    console.log('teen')
}
else {
    console.log('adult')
}

// 4
let num1 = 10
if(num1 === 0) {
    console.log(true)
}
else {
    console.log(false)
}


// 5
let psw = 'asdasdASd'
if(psw.length >= 8) {
    console.log('strong')
}
else {
    console.log('weak')
}


// 6
console.log(12 % 5)

// 7
let a = 5
let b = 5
console.log(a !== b)

// 8
let num3 = 5
num3 += 1
num3 += 1
num3 += 1

console.log(num3)

// 9
console.log(15 * 4 / 2)

// 10
let b1 = true
let b2 = false

console.log(b1 && b2)


// 11
for(let i = 10; i >= 1; i--) {
    console.log(i)
}

// 12
for(let i = 0; i <= 50; i++) {
    if(i % 2 === 1) {
        console.log(i)
    }
}

// 13
for(let i = 0; i <= 30; i+=5) {
    console.log(i)
}

// 14
let arr = [3,6,9,12]
let s = 0
for(let i = 0; i < arr.length; i++) {
    console.log(s += arr[i])
}

// 15
let arr1 = ['html','css','js']
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

// 16
let n = 0
while (n <= 20) {
    if(n % 2 === 0) {
        console.log(n)
    }
    n++;
}

// 17
let counter = 5
while(counter <= 20) {
    console.log(counter)
    counter += 5
}

// 18
let s1 = 0
let c = 0
while(c <= 30) {
    if(c % 2 === 1) {
        s1 += c
        console.log(s1)
    }
    c++
}

// 19
let num4 = 0
while(num4 <= 50) {
    if(num4 % 9 === 0) {
        console.log(num4)
    }
    num4++
}



// 20
let num5 = 0
let ab = []
while(num5 <= 40) {
    if(num5 % 3 === 0) {
        ab.push(num5)
    }
    num5++
}
console.log(ab)


// 21
const day = 3;

switch (day) {
  case 1:
    console.log("sunny");
    break;
  case 2:
    console.log("rainy");
    break;
  case 3:
    console.log("cloudy");
    break;
  default:
    console.log("Unknown day");
}


// 22
let seasonNum = Number(prompt('enter number 1-4'))

if(seasonNum > 4) {
    console.log('season failed')
}
else {
    switch(seasonNum) {
        case 1:
            console.log('spring')
            break;
        case 2:
            console.log('summer');
            break
        case 3:
            console.log('autumn');
            break;
        case 4:
            console.log('winter');
            break
        default:
            console.log('season not found')
    }
}

// 22. რიცხვი 1–4 → season: spring, summer, autumn, winter.


// 23
let transport = 'car'

switch(transport) {
    case 'car':
        console.log('this is car')
        break
    case 'bus':
        console.log('this is bus')
        break;
    case 'bike':
        console.log('this is bike')
        break
    default:
        console.log('transport not found')
}


// 24
let sNums = 1
switch(sNums) {
    case 1:
        console.log('january')
        break;
    case 2:
        console.log('february')
        break;
    case 3:
        console.log('march')
        break
    case 4:
        console.log('april')
        break
    case 5:
        console.log('may')
        break
    case 6:
        console.log('jun')
        break
    case 7:
        console.log('july')
        break
    case 8:
        console.log('august')
        break
    case 9:
        console.log('september')
        break;
    case 10:
        console.log('octomber')
        break
    case 11:
        console.log('november')
        break
    case 12:
        console.log('december')
        break
    default:
        console.log('season month not found')
}


// 25
let score = 'A'

switch(score){
    case 'A':
        console.log(100)
        break
    case 'B':
        console.log(80)
        break
    case 'C':
        console.log(60)
        break
    case 'D':
        console.log(40)
        break
    case 'F':
        console.log(20)
        break;
    default:
        console.log('get out of school')
}