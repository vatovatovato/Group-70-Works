// 1) შექმენი class Person, რომლის constructor იღებს name და age მნიშვნელობებს და ინახავს ობიექტში.

class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

const p1 = new Person('vato','16')

console.log(`my name is ${p1.name} i am ${p1.age} years old`)

// 2) შექმენი class Car, რომლის constructor იღებს brand და model და ავტომატურად ამატებს year = 2020 (default მნიშვნელობა).
class Car {
    constructor(brand,model) {
        this.brand = brand
        this.model = model
        this.year = '2010'
    }
}

const c1 = new Car('BMW','F10')

console.log(c1)
// 3) შექმენი class Student, რომლის constructor იღებს name, ხოლო grade-ს აყენებს default-ად 0.
class Student {
    constructor(name) {
        this.name = name
        this.grade = 0  
    }
}

const s1 = new Student('vato')

console.log(s1)

// 4) შექმენი class Rectangle, რომლის constructor იღებს width და height.
class Rectangle {
    constructor(width,height) {
        this.width = width
        this.height = height
    }
}
const r1 = new Rectangle(100,20)

console.log(`width: ${r1.width} height: ${r1.height}`)

// 5) შექმენი class User, რომლის constructor იღებს username და password.
class Username {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}

const u1 = new Username('vato','12345')
console.log(`user name: ${u1.username}. password: ${u1.password}`)