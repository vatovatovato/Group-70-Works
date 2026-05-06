export const person = {
    name: 'vato',
    age: 16
}

export function greet() {
    return `hello ${person.name}`
}

console.log(greet())