// 1)შექმენი რიცხვების მასივი 5, 7, 10, 8, 12, 4. map
//  მეთოდით თითოეული რიცხვი გაამრავლე 3-ზე, filter 
// მეთოდით დატოვე მხოლოდ 20-ზე მეტი რიცხვები, reduce მეთოდით
//  იპოვე მათი ჯამი და ბოლოს დაბეჭდე რამდენი რიცხვი დარჩა.
let nums = [5,7,10,8,12,4]

let new_nums = nums.map(n => n * 3).filter(a => a > 20).reduce((acc,curr)=> {
  return  acc += curr
}, 0)

console.log(new_nums)
// 2)შექმენი რიცხვების მასივი 5, 8, 3, 12, 10, 7. filter მეთოდით დატოვე 
// მხოლოდ ლუწი რიცხვები, map მეთოდით თითოეული გაამრავლე 2-ზე, sort
//  მეთოდით დაალაგე ზრდადობით და forEach მეთოდით დაბეჭდე თითოეული
//  რიცხვი.
let arr = [5,8,3,12,10,7]

new_arr = arr.filter(a => a % 2 == 0).map(b => b * 2).sort()

new_arr.forEach((e) => {
    console.log(e)
});

// 3)შექმენი რიცხვების მასივი 3, 4, 5, 7, 8. map მეთოდით თითოეულ
//  რიცხვს დაუმატე 1, map მეთოდით მეორე ნაბიჯში გაამრავლე 2-ზე,
//  filter მეთოდით დატოვე მხოლოდ 10-ზე მეტი რიცხვები და reduce
//  მეთოდით იპოვე ნამრავლი.

let tArr = [3, 4, 5, 7, 8]

let tnArr = tArr.map(n => n + 1).map(a => a * 2).filter(b => b > 10)
.reduce((acc,curr) => {
   return acc += curr * curr
})

console.log(tnArr)


// 4)შექმენი რიცხვების მასივი -5, 2, 3, 7, -1, 9. filter მეთოდით
//  დატოვე მხოლოდ დადებითი რიცხვები, filter მეთოდით დატოვე
//  მხოლოდ კენტი რიცხვები, map მეთოდით თითოეული გაამრავლე 5-ზე 
// და forEach მეთოდით დაბეჭდე შედეგები.
let barryWhite = [ -5, 2, 3, 7, -1, 9]

let milesDavis = barryWhite.filter(a => a > 0).filter(b => b % 2 == 1).map(c => c * 5)

milesDavis.forEach((ac) => {
    console.log(ac)
})


// 5)შექმენი რიცხვების მასივი 5, 7, 3, 8, 6. map მეთოდით თითოეულ
//  რიცხვს დაუმატე 2, filter მეთოდით დატოვე მხოლოდ 10-ზე მეტი
//  რიცხვები, reduce მეთოდით იპოვე საშუალო და დაბეჭდე მთლიანი რიცხვი.

let one_arr = [5, 7, 3, 8, 6]

let newOneArr = one_arr.map(g => g + 2).filter(f => f >= 10).
reduce((acc,curr) => {
    return acc += curr
})

console.log(newOneArr / 2)


// 6)შექმენი ფასების მასივი 30, 60, 80, 45, 100. filter მეთოდით დატოვე 
// მხოლოდ 50-ზე მეტი ფასები, map მეთოდით თითოეული ფასს დააკელი 10,
//  reduce მეთოდით იპოვე ჯამი და დაბეჭდე.
let valuesArr = [30, 60, 80, 45, 100]

let newValuesArr = valuesArr.filter(a => a > 50).map(b => b - 10).
reduce((acc,curr) => {
    return acc += curr
})

console.log(newValuesArr)

// 7)შექმენი რიცხვების მასივი 5, 8, 10, 12, 7. map მეთოდით თითოეული 
// რიცხვი გაამრავლე 4-ზე, filter მეთოდით დატოვე მხოლოდ 30-ზე მეტი 
// რიცხვები, filter მეთოდით დატოვე მხოლოდ ლუწი რიცხვები და reduce 
// მეთოდით იპოვე ჯამი.
let n = [5, 8, 10, 12, 7]

let newN = n.map(a => a * 4).fill(b => b > 30).filter(c => c % 2 == 0).
reduce((d,e) => {
    return d += e
},0)


// 8)შექმენი რიცხვების მასივი -5, -10, 8, -3, 2. filter მეთოდით დატოვე 
// მხოლოდ უარყოფითი რიცხვები, map მეთოდით გადაიყვანე დადებით 
// რიცხვებში, sort მეთოდით დაალაგე კლებადობით და reduce მეთოდით 
// იპოვე ჯამი.

let f = [-5, -10, 8, -3, 2]

let r = f.filter((a => a < 0)).map(b => +Math.abs(b)).sort((c,d) => d -c).
reduce((acc,curr) => {
    return acc += curr
})

console.log(r)