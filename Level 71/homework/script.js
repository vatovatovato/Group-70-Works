// 1) შექმენი ტექსტის ყუთი (<div>) და ღილაკი. 
// ღილაკზე დაჭერისას innerHTML-ით გამოჩნდეს 
// დღევანდელი თარიღი.
const contDiv = document.getElementById('container')
const contBtn = document.getElementById('contbtn')

contBtn.addEventListener('click', () => {
    contDiv.innerHTML = `<p>today is 21.01.2026</p>`
})


// 2) შექმენი <div id="notification"></div>.
//  JS-ით innerHTML-ის დახმარებით გამოიტანე 
// მოკლე შეტყობინება: "New message received!".
const notif = document.getElementById('notification')
notif.innerHTML = 'new message received'


// 3) შექმენი ფოტო <img> ელემენტი და ღილაკი.
//  innerHTML-ის ნაცვლად ატრიბუტის ცვლილებით 
// შეცვალე ფოტოს წყარო და დაამატე classList.add() ახალი სტილისთვის.
const img = document.getElementById('img')
const imgBtn = document.getElementById('imgBtn')

imgBtn.addEventListener('click', function(){
    img.src = '../../images/meddle.png'
    img.classList.add('imgb')
})


// 4) შექმენი <div class="box"></div> CSS-კლასით 
// .highlight (სათითაო ფონი). ღილაკზე დაჭერისას 
// შეცვალე classList.toggle()–ით ფონის ფერი.
const box = document.getElementById('box')
const btnBox = document.getElementById('btnBox')

btnBox.addEventListener('click', function() {
    box.classList.toggle('highlight')
})


// 5) ორი ღილაკი: ერთით დაამატე classList.add() 
// ტექსტზე ელემენტის გამოჩენა, მეორით classList.remove()
//  – ტექსტის დამალვა.

const text = document.getElementById("text");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

showBtn.addEventListener("click", () => {
  text.classList.remove("hidden"); // ტექსტის გამოჩენა
});

hideBtn.addEventListener("click", () => {
  text.classList.add("hidden"); // ტექსტის დამალვა
});


// 6) შექმენი small quiz: <div>-ში innerHTML-ის გამოყენებით
//  გამოიტანე კითხვა, და პასუხის ღილაკზე დაჭერისას
//  classList.add()–ით მიუთითე სწორ/არასწორ პასუხზე.

const quiz = document.getElementById("quiz");

quiz.innerHTML = `
  <h3>რომელია JavaScript-ის სწორი ტიპი?</h3>
  <button id="a">string</button>
  <button id="b">number</button>
  <button id="c">banana</button>
`;

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");

a.addEventListener("click", () => {
  a.classList.add("correct");
});

b.addEventListener("click", () => {
  b.classList.add("correct");
});

c.addEventListener("click", () => {
  c.classList.add("wrong");
});



// 7) შექმენი shopping cart ელემენტი: <div id="cart"></div>.
//  ღილაკზე innerHTML-ის გამოყენებით დაამატე ნივთი სიაში, 
// classList.add()–ით მიუთითე, რომ ეს ახალი ნივთია.

const cart = document.getElementById('cart')
const addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function() {
    cart.innerHTML = '<p>new item added</p>'
    cart.classList.add('newItem')
})

// 8) შექმენი <div> და innerHTML-ის დახმარებით
//  დაამატე ბუტონები: ერთი classList.toggle()–ით 
//  შეცვლის ფონს, მეორე classList.toggle()–ით შეცვლის ტექსტის ფერს
const btnDiv = document.getElementById('btn-div')

btnDiv.innerHTML = `
<p id='divTxt'>hello world</p>
<button id='dBtn1'>change background</button><br>
<button id='dBtn2'>change color</button>
`

const divTxt = document.getElementById('divTxt')

const dBtn1 = document.getElementById('dBtn1')
const dBtn2 = document.getElementById('dBtn2')

dBtn1.addEventListener('click', function() {
  divTxt.classList.toggle('a')
})

dBtn2.addEventListener('click', function() {
  divTxt.classList.toggle('b')
})