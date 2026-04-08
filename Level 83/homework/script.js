// 1) კომენტარების სახით ახსენი Destructuring
/* ეს არის მასივის ან ობიექტის ელემენტების მნიშვნელობების გადატანა ცვლადებში და ჩვენ ამის გაკეთება ერთ ხაზზშიც შეგვიძლია და უნდა გვახსოვდეს რომ ჩვენ ამით
მასივის ან ობიექტის მნიშნველობას არ ვცვლით, უბრალოდ მათი ელემენტების შენახვაც შეგივძლია ცალკე ცვლადებში. */


// 2) მოცემულია ობიექტი:
// {
//   username: "admin",
//   password: "1234",
//   role: "user"
// }
// დესტრუქტურინგის გამოყენებით:
// username გადაარქვი user
// role-ს გაუწერე default მნიშვნელობა "guest" (თუ არ არსებობს)

let person = {
  username: "admin",
  password: "1234",
  role: "user"
}
let {username : user,password: password, role='guest'} = person

console.log(user)
console.log(role)


// 3) შექმენი ფუნქცია, რომელიც პარამეტრად იღებს ობიექტს:
// {
//   price: 100,
//   discount: 20
// }
// დესტრუქტურინგით გამოთვალე საბოლოო ფასი (price - discount).

let money = {
  price: 100,
  discount: 20
}

function main(c) {
    let {a,b} = c
    return a - b
}

console.log(main(money))

// 4) მოცემულია მასივი:
// [10, 20, 30, 40, 50]
// დესტრუქტურინგის გამოყენებით:=
// აიღე პირველი ორი ელემენტი
// დანარჩენი შეინახე ცალკე მასივში
let arr = [10, 20, 30, 40, 50]
let [a,b, ...rest] = arr

console.log(a)


// 5) მოცემულია მასივი:
// ["BMW", "Mercedes", "Audi", "Toyota"]
// დესტრუქტურინგით აიღე პირველი და მესამე ელემენტი.
let arr1 = ["BMW", "Mercedes", "Audi", "Toyota"]
const [e,, f] = arr1;
console.log(e)
console.log(f)


// 6) მოცემულია რიცხვების მასივი:
// [5, 12, 8, 20, 3]
// reduce გამოყენებით დაითვალე მხოლოდ ლუწი რიცხვების ჯამი.
let arr3 = [5, 12, 8, 20, 3]

let q = arr3.reduce((acc,curr) =>{
    if (curr % 2 == 0) {
        acc += curr
    }
    return acc
}, 0)

console.log(q)