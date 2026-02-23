// evel 65:
// 1) შექმენი მასივი, მაგალითად let fruits = ["apple", 
// "banana"]; და გაუკეთე push() ფუნქცია, რომ დაამატო ახალი
//  ელემენტი "kiwi" მასივში. შემდეგ გამოიტანე კონსოლში განახლებული მასივი.
// 2) შექმენი ნებისმიერი 5 ელემენტიანი მასივი. length თვისებით
//  გამოიტანე ეკრანზე რამდენი ელემენტია მასივში. შემდეგ push()-ით დაამატე ორი ელემენტი და თავიდან გამოიტანე length.
// 3) შექმენი მასივი რიცხვებით და pop() ფუნქციით წაშალე ბოლო
//  ელემენტი. კონსოლში გამოიტანე რა წაიშალა და როგორ გამოიყურება მასივი ბოლოს.
// 4) შექმენი პროგრამა, სადაც გექნება მარტივი შეყვანილი ტექსტი 
// (prompt-ის მაგივრად შეგიძლია უბრალოდ ცვლადად ჩაწერო).
//  დაამატე ტექსტი მასივში push-ით და დაბეჭდე რამდენი ელემენტი გაქვს (length).
// 5) შექმენი ობიექტი car ველებით: brand, model, year.
//  კონსოლში გამოიტანე ყველა key ცალ–ცალკე და ყველა value ცალ–ცალკე (Object.keys(car) და Object.values(car)).
// 6) ობიექტიდან წაშალე ერთი ველი delete person.city და კონსოლში გამოიტანე შედეგი.

// 1
let fruits = ['apple','bannana']
fruits.push('kiwi')

console.log(fruits)

// 2
let lenArr = ['a','b','c','d','e']
console.log(lenArr.length)
lenArr.push('f','g')
console.log(lenArr.length)

// 3
let numArr=[1,2,3,4,5]
numArr.pop()
console.log(numArr)

// 4
let text = 'hello world my name is vato'
let empArr = []
empArr.push(text)
console.log(empArr[0].length)

// 5
let car = {
    brand: 'bmw',
    model: 'F10',
    year: 1553
}

console.log(Object.keys(car))
console.log(Object.values(car))

// 6) ობიექტიდან წაშალე ერთი ველი delete person.city და კონსოლში გამოიტანე შედეგი.
let person = {
    name: 'vato',
    lastname: 'kheladze',
    city: 'tbilisi'
}

delete(person.city)

console.log(person)



// 5) შექმენი ობიექტი counter. ობიექტს ქონდეს მეთოდი სადაც უკვე შექმნილ
//  count-s (key-ს) დაემატება 1. ეს უნდა გამეორდეს 50 ჯერ. დაგჭირდება for loop.
// 6) შექმენი ობიექტი sum რომელიც გამოიტანს 1 დან 20 მდე რიცხვების ჯამს

// 5 edited
let counter = {
    numbers: 0,
    numberMethod: function() {
        for(let i = 0; i <= 50; i++) {
            this.numbers += 1
        }
        return this.numbers
    }
}

console.log(counter.numberMethod())


// 6 edited
let sum = {
    a: 0,
    forMethod: function() {
        for(let i = 1; i <= 20; i++) {
            this.a += i
        }
        return this.a
    }
}

console.log(sum.forMethod())