// const inp = document.getElementById('inp')
// const p = document.getElementById('text')

// inp.addEventListener('keydown', function() {
//     p.innerHTML = 'you are texting'
    
// })
// inp.addEventListener('keyup', function() {
//     p.innerHTML = 'you are not texting'
    
// })


// level 75:
// 1)Mouseleave – ფერის შეცვლა
// შექმენი div „Hover me“
// როცა მაუსი გავა div-ის ზონიდან, ფერი წითელი გახდება
// როცა მაუსი დაბრუნდება, ფერი ისევ ნორმალური იქნება
const hoverMeDiv = document.getElementById('hover-me')

    //default styles
    hoverMeDiv.style.width = '100px'
    hoverMeDiv.style.height = '100px'
    hoverMeDiv.style.border = '2px solid black'

hoverMeDiv.addEventListener('mouseleave', function() {
    hoverMeDiv.style.backgroundColor = 'red'
})

hoverMeDiv.addEventListener('mouseover', function() {
    hoverMeDiv.style.backgroundColor = 'white'
});


// 2)Mouseleave – ფერის ციკლური ცვლილება
// შექმენი div „Hover me too“
// როცა მაუსი div-ზე გავა, ფერი უცებ ვერ შეიცვლება
// როცა მაუსი div-დან გავა, ფერი ციკლურად შეიცვალოს
//  წინასწარ ჩაწერილი ფერების სიიდან (მაგ: purple → teal
//  → brown → blue → green)
// ყოველშემდეგ mouseleave-ზე ჩართულ ფერს დაუმატე შემდეგი ფერი სია.
const hoverMeTooDiv = document.getElementById('hover-me-too')

let colorArr = ['red','blue','pink','yellow','green','purple','skyblue','black']
let randomColor = Math.floor(Math.random() * colorArr.length)

hoverMeTooDiv.addEventListener('mouseleave', function() {
    hoverMeTooDiv.style.backgroundColor = colorArr[randomColor]
});


// 3)Keydown – აკრძალული ასოები და ციფრები
// შექმენი input ველი
// აკრძალე ასოები a, b, c
// აკრძალე ციფრები 1, 2, 3
// დანარჩენი ასოები და ციფრები აკრეფისთვის მისაღებია
// აკრძალულ ასოს ან ციფრს აკრეფის შემთხვევაში გამოჩნდეს alert

forbInp = document.getElementById('forbiddenInp')

forbInp.addEventListener('keydown', (e) => {
    if(e.key === 'a') {
        alert('a - akrdzalulia')
    }
    else if(e.key === 'b') {
        alert('b - akrdzalulia')
    }
    else if(e.key === 'c') {
        alert('c - akrdzalulia')
    }
    else if(e.key === '1') {
        alert('1 - akrdzalulia')
    }
    else if(e.key === '2') {
        alert('2 - akrdzalulia')
    }
    else if(e.key === '3') {
        alert('3 - akrdzalulia')
    }
    
})
// 4)Keyup – სიმბოლოების რაოდენობის გაჩვენება
// შექმენი input ველი
// ყოველი keyup-ზე გაჩვენდეს ტექსტი „You typed X characters“
// თუ დაიკრიფა 5 ან მეტი ასო, ტექსტის ფერი წითლად უნდა შეიცვალოს
const quantInp = document.getElementById('quantInp')
let x = 0

quantInp.addEventListener('keyup', function() {
    x += 1
    alert('you typed ' + x + ' characters')
    if(x >= 5) {
        quantInp.style.color = 'red'
    }
})


// 5)Change – ტექსტის ცვლილება
// შექმენი input ველი
// როცა აკრეფა დასრულდა და
//  კურსორი გავა input-იდან, გამოჩნდეს alert „Name changed!“
// ტექსტი ავტომატურად გადაიქცეს დიდი ასოებში uppercase
const changeInp = document.getElementById('changeInp')

changeInp.addEventListener('change', function() {
    alert('name changed: ' + changeInp.value.toUpperCase())
})

// 6)Focus – ფონური ფერი და ჩრდილი
// შექმენი input ველი
// როცა დააკლიკებს, ფონური ფერი მწვანედ უნდა შეიცვალოს
// დაემატოს ჩრდილი shadow
const focInp = document.getElementById('focusInp')

focInp.addEventListener('focus', () => {
    focInp.style.backgroundColor = 'green'
    focInp.style.boxShadow = '2px 2px 5px black'
})

// 7)Blur – ფონური ფერი და ტექსტის ფერი
// შექმენი input ველი
// როცა დატოვებს input-ი, ფონური ფერი ვარდისფრად უნდა შეიცვალოს
// ტექსტის ფერი უნდა გახდეს თეთრი
const blurInp = document.getElementById('blurInp')

blurInp.addEventListener('blur', () => {
    blurInp.style.backgroundColor = 'pink'
    blurInp.style.color = 'white'
})

// 8)Keydown + Keyup – აკრძალული ასოები და Shift
// შექმენი input ველი
// აკრძალე ასოები A, B, C
// აკრძალე Shift-ის გამოყენება
// აკრძალული ასოს ან Shift-ის გამოყენებისას input-ს 
// სურათი ან საზღვარი წითლად გამოჩნდეს
// keyup-ზე საზღვარი დაბრუნდეს ნორმალურ ფერში

