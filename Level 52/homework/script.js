
// 1
// alert - gamoaqvs gamafrtxilebeli mesiji ekranze

// 2
// prompt - gvadzlevs sashualebas shevitanot informacia

// 3
// alerti gamafrtxilebelia prompt shemtani informaciis

// 4
alert('hello world')

// 5
let a = Number(prompt("enter number: "))
let b = Number(prompt("enter number: "))

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

// 6
let age = Number(prompt('are you full aged?'))

if(age < 18) {
    alert('not full aged')
}
else {
    alert('full aged')
}

// 7
let c = Number(prompt('enter num'))
let d = Number(prompt('enter num'))

if(c < 0) {
    console.log('uaryofiti ricxvia')
}
else {
    console.log('dadebiti')
}

if(d < 0) {
    console.log('uaryofiti ricxvia')
}
else {
    console.log('dadebiti')
}

// 8
let m = prompt('enter mathematical symbol')
let num1 = Number(prompt('enter first Number: '))
let num2 = Number(prompt('enter second Number:'))

if(m === '+'){
    console.log(num1 + num2)
}
else if(m === '-'){
    console.log(num1 - num2)
}
else if(m === '*'){
    console.log(num1 * num2)
}
else if(m === '/'){
    console.log(num1 / num2)
}
else {
    console.log('error')
}