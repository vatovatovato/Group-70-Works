// level 93:
// 1) შექმენი ფაილი, სადაც არის ორი ფუნქცია:
// ერთი პოულობს მასივში ყველაზე პატარა რიცხვს
// მეორე პოულობს ყველაზე დიდ რიცხვს
// მეორე ფაილში დააიმპორტე ეს ფუნქციები და გამოიყენე ერთ მასივზე.
export function minimal(arr) {
    return Math.min(...arr)
}

export function maximal(arr) {
    return Math.max(...arr)
}


// 2) შექმენი ფაილი, სადაც ორი ფუნქციაა:
// ერთი რიცხვს აორმაგებს
// მეორე რიცხვს ასამმაგებს
export function double(n) {
    return n * n
}

export function triple(n) {
    return n * n * n
}


// 3) შექმენი ფაილი, სადაც:
// default export არის ფუნქცია, რომელიც მომხმარებელს ესალმება
// დამატებით export არის ფუნქცია, რომელიც ემშვიდობება
export default function sayHello() {
    return 'hello world'
}
export function sayGoodbye() {
    return 'Goodbye'
}
