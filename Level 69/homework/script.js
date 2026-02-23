// 1.დაწერე JavaScript კოდი, რომელიც მუშაობს
//  DOM-თან. შექმენი ერთი მთავარი div id-ს სახელით mainBox და 
//  წაართვი ის JavaScript-ში getElementById-ით. შეცვალე მისი სიგანე და
//   სიმაღლე, დაამატე linear gradient ფონი, border-radius, padding, 
//   box-shadow და transition

// 1
const mainDivBox = document.getElementById('mainBox')

function mainDivFunc() {
    mainDivBox.style.width = '100px'
    mainDivBox.style.height = '100px'
    mainDivBox.style.background = "linear-gradient(to right, purple, pink)"
    mainDivBox.style.borderRadius = '50%    '
    mainDivBox.style.padding = '5px'
    mainDivBox.style.boxShadow = '7px 7px 20px gray'
    mainDivBox.style.transition = '1.5s'
}

mainDivFunc()


// 2.შექმენი სამი div ელემენტი კლასით feature-card და წამოიღე 
// getElementsByClassName-ით. თითოეულს მიანიჭე სხვადასხვა ფონი, დაამატე 
// padding, margin, border-radius, font-size, text-align, ფერი, border და
//  box-shadow
const divClass = document.getElementsByClassName('feature-card');

function divC1() {
    divClass[0].style.backgroundColor = 'red'
    divClass[0].style.paddin = '10px'
    divClass[0].style.margin = '5px'
    divClass[0].style.borderRadius = '50%'
    divClass[0].style.fontSize = '10px'
    divClass[0].style.textAlign = 'center'
    divClass[0].style.color = 'blue'
    divClass[0].style.border = '2px solid black';
    divClass[0].style.boxShadow = '10px 10px 20px black'
}

divC1()

function divC2() {
    divClass[1].style.backgroundColor = 'blue'
    divClass[1].style.paddin = '10px'
    divClass[1].style.margin = '5px'
    divClass[1].style.borderRadius = '50%'
    divClass[1].style.fontSize = '10px'
    divClass[1].style.textAlign = 'center'
    divClass[1].style.color = 'pink'
    divClass[1].style.border = '2px solid black';
    divClass[1].style.boxShadow = '10px 10px 20px black'    
}

divC2()

function divC3() {
    divClass[2].style.backgroundColor = 'pink'
    divClass[2].style.paddin = '10px'
    divClass[2].style.margin = '5px'
    divClass[2].style.borderRadius = '50%'
    divClass[2].style.fontSize = '10px'
    divClass[2].style.textAlign = 'center'
    divClass[2].style.color = 'yellow'
    divClass[2].style.border = '2px solid black';
    divClass[2].style.boxShadow = '10px 10px 20px black'
}

divC3()


// 3.შექმენი რამდენიმე span ელემენტი და წამოიღე getElementsByTagName-ით.
//  ყველას დანიშვნა ერთიანი font-size, ფერი, font-weight და letter-spacing
const sp = document.getElementsByTagName('span')

function spanFunc() {
 for(let i = 0; i < sp.length; i++) {
    sp[i].style.fontSize = '20px'
    sp[i].style.color = 'red'
    sp[i].style.fontWeight = 'bold'
    sp[i].style.letterSpacing = '10px'
 }
}

spanFunc()


// 4.შექმენი 5 li ელემენტი სიაში და JS-ში წამოიღე getElementsByTagName-ით.
//  ყველა li-ს დაუმატე padding, margin-bottom, background-color,
//   border-radius, list-style-type, text-transform. პირველი li-ს ტექსტის 
//   ფერი გახადე წითელი, ბოლოას მწვანე

const liTags = document.getElementsByTagName('li')

function liMain() {
    for(let i = 0; i < liTags.length; i++) {
        liTags[i].style.padding = '10px'
        liTags[i].style.marginBottom = '10px'
        liTags[i].style.backgroundColor = 'blue'
        liTags[i].style.borderRadius = '50%'
        liTags[i].style.listStyleType = 'none'
        liTags[i].style.textTransform = 'origin'
        liTags[i].style.color = 'red'
        liTags[4].style.color = 'green'
    }
    
}

liMain()

// 5.დაამატე სურათი კლასით profilePic და JS-ში წამოიღე. დაუმატე სიგანე,
//  height auto, border, border-radius და box-shadow
const img = document.getElementsByClassName('profilePic')

function imgFunc() {
    img[0].style.width = '100px'
    img[0].style.height = '100px'
    img[0].style.border = '2px solid black'
    img[0].style.borderRadius = '50%'
    img[0].style.boxShadow = '2px 2px 10px gray'
}

imgFunc()


// 6.შექმენი ღილაკი id-ს სახელით submitBtn და JS-ში წამოიღე. დაუმატე
//  background, ფერი, padding, font-size, border, border-radius,
//   cursor და box-shadow
const btn = document.getElementById('submitbtn')

btn.style.backgroundColor = 'red'
btn.style.padding = '10px'
btn.style.fontSize = '20px'
btn.style.border = '2px solid black'
btn.style.borderRadius = '10px'
btn.style.cursor = 'pointer'
btn.style.boxShadow = '2px 2px 4px black'

// 7.ახსენი კომენტარებით რა არის DOM და ასევე ახსენი ხის მაგალითზე

/*Document Object Modeli არის კავშირი html და ჯავასკრიპტს შორის.
დომის თეორიის მიხედვით ყველა ეიჩდიემელ ელემენტი tree root თეორიის
მიხედვით უკავშირდება ერთმანეთს. მაგალითად body თეგი კავშირშია
ყველა თეგთან რაც კი მასში წერია იმიტომ რომ მათ გარშემო არის.
თუ ბოდი თეგში წერია ერთი დივ თეგი და მათში კიდევ ორი პი თეგი მაშინ
ხის ფესვის თეორია იქნება ესეთი:

body
|
|
div
|
|
p -- p

რაღაც ამის მსგავსი.*/
