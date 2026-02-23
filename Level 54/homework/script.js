// 1
// switch - gavs if elses, mushaobs konkretul cvladze da ganixilavs ramodenime variants, tu cvladi udris konkretul cases mashin gamoitans mis shedegs, magalitad tu cvladi aris 10 da case udris ats mashin gamoitans im cases

// 2
let age = 18
switch(true) {
    case (age >= 18):
        console.log('full aged')
        break
    case (age < 18):
        console.log('not full aged')
        break;
    default:
        console.log('age not found')
}

// 3
let w = 50
let h = 50

switch(true) {
    case (w === h):
        console.log('cube');
        break;
    case (w !== h):
        console.log('not cube')
    default:
        console.log('cube not found')
}


// 4
// case switch shi nishnavs sxvadasxva variantis ganxilvas da sabolood gamoaqvs shedegi tu konkretuli case sheesabameba switchis statements


// 5
// break - acherebs cases rom agar gagrdzeldes da ar gamovides sxva casebtan ertad, iwereba caseis boloshi


// 6
// default - tu sxva yvela case ar mushaobs gamova default(rogorc else)


// 7
let n = -10

switch(true) {
    case(n > 0):
        console.log('dadebiti')
        break;
    case(n < 0):
        console.log('uaryofiti')
        break;
    default:
        console.log('number not found')
}



// 8
let weekNum = 1

switch(weekNum) {
    case 1:
        console.log('orshabati')
        break
    case 2:
        console.log('samshabati')
        break
    case 3:
        console.log('otxshabati')
        break
    case 4:
        console.log('xutshabati')
        break
    case 5:
        console.log('paraskevi')
        break
    case 6:
        console.log('shabati')
        break
    case 7:
        console.log('kvira')
        break
    default:
        console.log('wrong number')
}



// 9
// for - gamoiyeneba roca gvinda ramodenime mnishveloba bevrjer gamovitanot, aris iteracia, viridebt copy pastes

// 10
for(let i = 0; i < 5; i++) {
    console.log('hello world')
}
// vwert for keywords da vxsnit () ebs sadac vwert sam gancxadebas: 1 - vqmnit saiteracio cvlads(declaration), 2 - vaketebt shedarebas(condition) 3 vzrdit saiteracio cvlads(increment) shemdeg gamogvaq shedegi




// 11
for(let i = 0; i <= 10; i++) {
    console.log(i)
}

// 12
let a = 14
for(let i = 0; i <= a;i++) {
    console.log(i)
}

// 13
// while loop gavs for loops magram viyenebt mashin roca arvicit sadamde ganmeordes loop

// 14
let b = 0
while(b <= 10) {
    console.log('while ' + b)
    b++
}

// 15
let c = 0
while(c <= 20) {
    if(c % 2 === 0) {
        console.log(c)
    }
    c++
}

// 16
// do...while, dos kodi sruldeba ertxel mainc tu while false aris magram tu aris true loopi isev gagrdzeldeba

// 17
// do tu false aris ertxel mainc sruldeba whilesgan gansxvavebit

// 18
let e

do {
    e = prompt('do you like JS')
}while(e !== 'yes')
alert('you like JS')

