// Pre-requisites for Android programming - c# or Java


let takenCSharp = true
let takenJava = false

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take c# or Java!')
}


// To be a senator, there are 3 requirements:
// must be at least 30 years old
// have to have been a US citizen for 9 or more years
// You must live in the state you want to represent


let age = 35
let usCitizenTime = 35
let stateOfResidence = ' Minnesota'
let stateWantRepresent = ' Minnesota'

if (age >= 30 && usCitizenTime >=9 && stateOfResidence === stateWantRepresent) {
    console.log('You are eligible to be a senator.')
} else {
    console.log('You are not eligible.')
}

// falsy values - undefined, null, empty, lists, empty objects, 0, false

if({} == 0) {
    console.log('The same!')
} else {
    console.log('Not the same!')
}