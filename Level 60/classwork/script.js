// 1
const person = {
    name: 'vato',
    age: 16,
    city: 'tbilisi'
}
console.log(person)

// 2
const car = {
    brand: 'BMW',
    model: 'IDK',
    year: 1999
}

console.log(car.brand)
console.log(car["year"])

// 3
const user = {
    name: 'vato',
    sayHello() {
        return 'hello ' + this.name
    }
}

console.log(user.sayHello())


// 4
const calc = {
    num1: 5,
    num2: 10,
    mimateba() {
        return this.num1 + this.num2 
    },
    gamokleba() {
        return this.num1 - this.num2
    },
    gamravleba() {
        return this.num1 * this.num2
    },
    gayofa() {
        return this.num1 / this.num2
    }
}

console.log(calc.mimateba())
console.log(calc.gamokleba())
console.log(calc.gamravleba())
console.log(calc.gayofa())

// 5
const newUser = {
    name: 'vato',
    age: 16,
    greet() {
        return `my name is ${this.name} and i am ${this.age} years old`
    }
}

console.log(newUser.greet())
