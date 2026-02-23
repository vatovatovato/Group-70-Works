// 1)Smart Message Box
// შექმენი div id="messageBox" და ღილაკი
// ღილაკზე დაჭერისას უნდა შეიცვალოს ტექსტი
// ფერი უნდა შეიცვალოს CSS კლასის დახმარებით
// მეორედ დაჭერაზე ყველაფერი უნდა დაბრუნდეს საწყის მდგომარეობაში
// გამოიყენე getElementById click innerHTML classList.toggle.
const messageBtn = document.getElementById('messageBtn')
const msgP = document.getElementById('msg')

messageBtn.addEventListener('click', function() {
    msgP.classList.toggle('active-text')
})

// 2)Color Hover Panel
// შექმენი div class="panel"
// JS–ით querySelector–ის გამოყენებით მოძებნე ეს ელემენტი
// მაუსის მიყვანისას უნდა შეეცვალოს ფერი
// მაუსის გაწევისას უნდა დაუბრუნდეს საწყის ფერს.
const panel = document.querySelector('.panel')

panel.addEventListener('mouseover', function() {
    panel.style.color = 'red'
})

panel.addEventListener('mouseout', function() {
    panel.style.color = 'black'
})

// 3)Live Comment Viewer
// შექმენი input ველი და p ელემენტი
// რაც მომხმარებელი აკრიფავს input–ში რეალურ დროში უნდა გამოჩნდეს p–ში
// თუ input ცარიელია p–ში უნდა ეწეროს Start typing…
// გამოიყენე input event innerHTML value.

const liveInp = document.getElementById('liveInp')
const liveP = document.getElementById('liveP')



liveInp.addEventListener('input', function() {
    if(liveInp.value ===  '') {
        liveP.innerHTML = 'start typing...'
    } else {
       liveP.innerHTML = liveInp.value
    }
})

// 4)Add New Paragraph
// შექმენი ღილაკი
// ღილაკზე დაჭერისას უნდა შეიქმნას ახალი p ელემენტი ტექსტით New paragraph created
// და დაემატოს გვერდზე
// გამოიყენე click createElement appendChild.
const creatorBtn = document.getElementById('creatorBtn')

creatorBtn.addEventListener('click', function() {
    const newCreatedP = document.createElement("p")
    newCreatedP.innerHTML = 'New paragraph created'
    document.body.appendChild(newCreatedP)
})

// 5)Show / Hide Info
// შექმენი ტექსტი რომელიც თავიდან დამალულია
// შექმენი ღილაკი
// ღილაკზე დაჭერით ტექსტი უნდა გამოჩნდეს
// მეორედ დაჭერით ისევ უნდა დაიმალოს
// გამოიყენე classList.toggle ან classList.add და remove.
const hiddenText = document.getElementById('hiddenText')
const hiddenBtn = document.getElementById('hiddenBtn')

hiddenBtn.addEventListener('click', function() {
    hiddenText.classList.toggle('newText')
})
// 6)Alert Button
// შექმენი ღილაკი
// ღილაკზე დაჭერისას უნდა გამოჩნდეს alert ტექსტით You clicked the alert button.
const alertBtn = document.getElementById('alertBtn')

alertBtn.addEventListener('click', function() {
    alert('you clicked alert button')
})
// 7)Contact Mini Form
// შექმენი პატარა ფორმა სახელისა და შეტყობინების input ველებით
// გაგზავნისას გვერდი არ უნდა გადატვირთოს
// უნდა გამოჩნდეს alert ტექსტით Message sent successfully
// გამოიყენე submit event და preventDefault.
const form = document.getElementById('form')
const inpName = document.getElementById('inpName')
const inpText = document.getElementById('inpText')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    alert('message sent successfully')

    console.log('user name: ' + inpName.value)
    console.log('user text ' + inpText.value)
})