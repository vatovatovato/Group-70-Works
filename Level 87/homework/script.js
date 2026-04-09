// level 87:
// 1) კომენტარების სახით ახსენით Spread 
// spread aris martivi funqcia romlis sashualebitac masivi shegvidzlia chavsvat sxva masivebtan ertad an davumatot elementebi. ogond axal cvladshi

// 2) შექმენი ობიექტი:
const user = {
  name: "Giga",
  age: 17
};
const newUser = {...user, role: 'Admin', isActive: true}

console.log(newUser)

// შექმენი ახალი ობიექტი სადაც:
// დაემატება role: "admin"
// დაემატება isActive: true
// ყველაფერი გააკეთე spread-ის გამოყენებით.

// 3) გაქვს ორი ობიექტი:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };

const newObj = {...obj1, ...obj2}
console.log(newObj)
// შექმენი ახალი ობიექტი მათი გაერთიანებით.
// დააკვირდი — რომელი b დარჩება საბოლოო ობიექტში?

// 4) შექმენი ობიექტი:
const product = {
  title: "Laptop",
  price: 1500,
  inStock: true
};

// შექმენი ახალი ობიექტი სადაც:
// price შეიცვლება 1200-ზე
// inStock შეიცვლება false-ზე
// Spread-ის გამოყენებით.
const newProduct = {...product, price:1200, inStock: false}

console.log(newProduct)

// 5) შექმენი ობიექტი:
const profile = {
  username: "kocho",
  followers: 120,
  verified: false
};

// შექმენი მისი ასლი spread-ით.
// შემდეგ შეცვალე ასლში followers → 500.
// შეამოწმე — ორიგინალი ობიექტი შეიცვალა თუ არა?

const newProfile = {...profile, followers: 500}

console.log(profile)
console.log(newProfile)
// ორიგინალი ობიექტი არ შეცვლილა


