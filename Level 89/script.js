// codewars has complated

//         მოცემულია ფუნქცია, აქიდან დაწერეთ კოდი,
//          რომელიც მიღებული არგუმენტებით მიგვაღებინებს მსგავს შედეგს (უნდა დააბრუნოს ფუნქციამ):
 
// {
//     username: 'vashli123',
//     password: '12345678',
//     more: 'mwvane vashlis moyvaruli'
// };

function main(userName,passWord,moRe) {
    let obj = {
        username: userName,
        password: passWord,
        more: moRe
    }

    return obj
}

console.log(main('vato','124345','tired'));


function signup(email, password, more) {
    const user = {};
    return user;
}

signup('emaili', '12345678', 'mwvane_vashlis_moyvaruli');


// მუშაობს თუ არა მოცემული კოდი? ახსენით რატომ და გამოასწორეთ შეცდომა, რომ შესაბამისი შედეგი მივიღოთ
let numbers = [1, 2, 3, 4, 5];
let [first, ...middle] = numbers;

console.log(middle)