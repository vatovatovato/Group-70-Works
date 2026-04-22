// level 93:
// 1 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს 
// object-ს სადაც იქნება ყველაზე პატარა რიცხვი და ყველაზე დიდი რიცხვი 
// გამოიყენე for loop და if else ფუნქცია უნდა იყოს ცალკე ფაილში და 
// ექსპორტირებული და მეორე ფაილში უნდა მოხდეს იმპორტი და გამოყენება
export function main(arr,obj) {
    let max = arr[0]
    let min = arr[0]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    obj.maxNum = max
    obj.minNum = min

    console.log(obj)
}

main([6,3,1,7,4,2,7,8],{})


// 2 შექმენი ფუნქცია რომელიც მიიღებს array-ს და target რიცხვს ფუნქციამ\
//  უნდა მოძებნოს target array-ში while loop-ის გამოყენებით თუ 
// იპოვა დააბრუნოს index თუ ვერ იპოვა დააბრუნოს ტექსტი ვერ
//  მოიძებნა ფუნქცია უნდა იყოს ცალკე მოდულში ექსპორტირებული და სხვა
//  ფაილში იმპორტირებული და გამოყენებული
export function targetNum(targArr, target) {
    let i = 0;

    while (i < targArr.length) {
        if (targArr[i] === target) {
            return i; 
        }
        i++;
    }

    return 'ვერ მოიძებნა';
}

// 3 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს ყველა
//  იმ წყვილს რომლის ჯამი არის 27 გამოიყენე nested for loop if და შეინახე შედეგი
//   ახალ array-ში ფუნქცია უნდა იყოს მოდულში ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული
export function sumOfTwoNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 27) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result.length ? result : 'not found';
}
// 4 შექმენი ფუნქცია რომელიც მიიღებს ტექსტს და დააბრუნებს იგივე ტექსტს მაგრამ ციფრების
//  გარეშე გამოიყენე for loop if და continue ფუნქცია უნდა იყოს ცალკე ფაილში
//  და გამოყენებული იყოს იმპორტის საშუალებით სხვა ფაილში

export function removeNumbers(text) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '9') {
            continue; // ციფრია → გამოტოვე
        }
        result += text[i];
    }

    return result;
}


// 5 შექმენი ფუნქცია რომელიც მიიღებს სტუდენტის ქულას და დააბრუნებს 
// შეფასებას 90 ან მეტი არის A 70 ან მეტი არის B 50 ან მეტი არის C 50-ზე
//  ნაკლები არის F გამოიყენე if else if else ფუნქცია უნდა იყოს მოდულში ექსპორტირებული და იმპორტირებული
//  და გამოყენებული სხვა ფაილში
export function studentGrades(grade) {
    if(grade >= 90) {
        return 'A'
    }
    else if(grade >= 70) {
        return 'B'
    }
    else if(grade >= 50) {
        return 'C'
    }
    else if(grade < 50) {
        return 'Tqveni shvili debilad chamogiyalibebiat qalbatono - F'
    }
}

// 6 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს object-ს სადაც იქნება ლუწი რიცხვების 
// რაოდენობა კენტი რიცხვების რაოდენობა და ყველა რიცხვის ჯამი გამოიყენე for loop და if else ფუნქცია უნდა იყოს 
// ცალკე მოდულში და გამოყენებული იყოს იმპორტით სხვა ფაილში

export function arrObjNums(arr,obj) {
    let evenArr = []
    let oddArr = []
    let sumArr = 0
    for(let i = 0; i < arr.length; i++) {

        sumArr += arr[i]

        if(arr[i] % 2 == 0) {
            evenArr.push(arr[i])
        }
        else if(arr[i] % 2 == 1) {
            oddArr.push(arr[i])
        }
    }

    obj.even = evenArr
    obj.odd = oddArr
    obj.sum = sumArr

    return obj
}


// 7. 
// შექმენი ორი ფაილი ერთში export გააკეთე ფუნქცია სახელით addNumbers მეორე ფაილში იმპორტის დროს ეს ფუნქცია შემოიტანე 
// სხვა სახელით as-ის გამოყენებით მაგალითად rename და გამოიყენე ფუნქცია 
// იმპორტირებული სახელით ორი რიცხვის დასამატებლად
export function addNumbers(a,b) {
    return a + b
}

