// 1) შექმენი ობიექტი user და დაამატე თვისება age. შექმენი მეთოდი, რომელიც აბრუნებს "Adult" თუ ასაკი >= 18, სხვა შემთხვევაში "Minor".
const user = {
    age: 16,
    ageM() {
        if(this.age >= 18) {
            return 'Adult'
        }
        else {
            return 'Minor'
        }
    }
}

console.log(user.ageM())


// 2) შექმენი ობიექტი car და დაამატე თვისება speed. შექმენი მეთოდი, რომელიც აბრუნებს "Too fast" თუ სიჩქარე > 120, სხვა შემთხვევაში "Speed okay".
let car = {
    speed: 100,
    speedM() {
        if(this.speed >= 100) {
            return 'Too fast'
        }
        else {
            return 'speed okay'
        }
    }
}

console.log(car.speedM())

// 3) შექმენი ობიექტი student და დაამატე თვისება score. შექმენი მეთოდი, რომელიც აბრუნებს "Passed" თუ ქულა >= 50, სხვა შემთხვევაში "Failed".
let student = {
    score: 30,
    scoreM() {
        if(this.score >= 50) {
            return 'Passed'
        }
        else {
            return 'Failed'
        }
    }
}

console.log(student.scoreM())


// 4) შექმენი ობიექტი numbers (მასივი) და მეთოდი, რომელიც for loop-ით აბრუნებს მხოლოდ დადებით რიცხვებს.
const numberObj = {
    numArr: [1,2,3,-5,40,-3,20,10],
    numberMethod() {
        for(let i = 0; i < this.numArr.length; i++) {
            if(this.numArr[i] > 0) {
                console.log(this.numArr[i])
            }
        }
    }
}

numberObj.numberMethod()


// 5) შექმენი ობიექტი repeater და დაამატე თვისება text და count. შექმენი მეთოდი, რომელიც while loop-ით აჩვენებს ტექსტს რამდენჯერაც მითითებულია.
let repeater = {
    text: 'hello world',
    count: 5,
    repeatM() {
        let c = 0
        while (c < this.count) {
            console.log(this.text)
            c++
        }
    }
}

repeater.repeatM()


// 6) შექმენი ობიექტი calculator და დაამატე თვისება n. შექმენი მეთოდი, რომელიც for loop-ით ითვლის 1–დან n-მდე ჯამს.
let calculator = {
    n: 5,
    nM() {
        for(let i = 1; i <= this.n; i++) {
            return this.n + i
        }
    }
}

console.log(calculator.n())


// 7) შექმენი ობიექტი doubler და დაამატე თვისება numbers (მასივი). შექმენი მეთოდი, რომელიც for loop-ით გაძლიერებს თითო რიცხვს 2-ჯერ და აბრუნებს ახალ მასივს.
let doubler = {
    numbers: [1,2,3,4,5],
    newN: [],
    nuM() {

        for(let i = 0; i < this.numbers.length; i++) {
            this.newN.push(this.numbers[i] * 2)
        }

        return this.newN
    }
}

console.log(doubler.nuM())


// 8) შექმენი ობიექტი day და დაამატე თვისება hour. შექმენი მეთოდი, რომელიც აბრუნებს "Morning", "Afternoon", "Evening" ან "Night" if…else-ით.
const day = {
  hour: 14,
  hourM() {
    if (this.hour >= 5 && this.hour < 12) {
      return "Morning";
    } else if (this.hour >= 12 && this.hour < 17) {
      return "Afternoon";
    } else if (this.hour >= 17 && this.hour < 21) {
      return "Evening";
    } else {
      return "Night";
    }
  }
};

console.log(day.hourM());


// 9) შექმენი ობიექტი scoreboard და დაამატე თვისება scores (მასივი). შექმენი მეთოდი, რომელიც while loop-ით ითვლის ჯამს.

let scoreboard = {
    scores: [1,2,3,4],
    sM() {
        let i = 0
        let n = 0

        while(i < this.scores.length) {
            n += this.scores[i]
            i++
        }

        return n
    }
}

console.log(scoreboard.sM())



// 10)შექმენი ობიექტი evenCounter და დაამატე თვისება numbers (მასივი). შექმენი მეთოდი, რომელიც for loop + if-ით ითვლის რამდენი ლუწი რიცხვია მასივში.

let evenCounter = {
    numbers: [5,4,1,6,3,2,6],
    numMeth: function() {
        let a = 0
        for(let i = 0; i < this.numbers.length; i++) {
            if(this.numbers[i] % 2 == 0) {
                a += 1
            }
        }
        
        return a
    }
}

console.log(evenCounter.numMeth())