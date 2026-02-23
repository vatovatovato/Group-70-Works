// 1) გადახედეთ ჩანაწერს ხელახლა.
// 2) კომენტარების სახით ახსენიტ რა არის DOM და რისთვის გამოიყენება.
// 3) შექმენი <div id="box"></div>.
// JavaScript-ში getElementById-ით წამოიღე ეს div-ი და დაუმატე:
// სიგანე 150px, სიმაღლე 150px, ფონი ლურჯი და ოდნავ მომრგვალებული კუთხეები.
// 4) შექმენი 3 <div class="card"></div>.
// getElementsByClassName-ით წამოიღე ყველა card და:
// მხოლოდ პირველს გაუკეთე წითელი border, მეორეს მწვანე, მესამეს ლურჯი.
// 5) შექმენი 5 <li> ელემენტი.
// getElementsByTagName("li")-ით წამოიღე ყველა ელემენტი და:
// ყველა <li>-ს გაუკეთე margin: 10px.
// 6) შექმენი <img> ელემენტი.
// JavaScript-ში getElementById ან getElementsByTagName-ით წამოიღე და:
// შეუცვალე სიგანე (მაგ: 200px) და დაუმატე borderRadius.
// 7) შექმენი <button id="btn"></button>.
// JavaScript-ში წამოიღე ღილაკი და:
// გაუკეთე ფონი შავი, ტექსტის ფერი თეთრი და cursor: pointer.


// 2
/*DOM - Document Object Model არის ჯავასკრიპტის ერთ-ერთი მნიშვნელოვანი თემა რომელიც ეხება html ის ელემენტების მანიპულირებას ჯავასკრიპტით */

// 3
const divBox = document.getElementById('box')

function divBoxFunction() {
    divBox.style.width = '150px'
    divBox.style.height = '150px'
    divBox.style.backgroundColor = 'red'
}

divBoxFunction()



// 4
const divClass = document.getElementsByClassName('card')

function divClassBorder() {
    divClass[0].style.border = '2px solid red'
    divClass[1].style.border = '2px solid green'
    divClass[2].style.border = '2px solid blue'
}

divClassBorder()



// 5
const liTags = document.getElementsByTagName('li')

function liTagsFunc() {
    for(let i = 0; i < liTags.length; i++) {
        liTags[i].style.margin = '10px'
    }
}

liTagsFunc()



// 6
const imgPhoto = document.getElementById('photo')

function imgFunc() {
    imgPhoto.style.width = '200px'
    imgPhoto.style.borderRadius = '50px'
}

imgFunc()




// 7
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    btn.style.backgroundColor = 'black'
    btn.style.color = 'white'
    btn.style.cursor = 'pointer'
})