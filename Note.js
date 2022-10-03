let text = 'hello world'
console.log(text)

// Length is a property
let stringLength = text.length
console.log(stringLength)

// These are methods - convert to UpperCase
let shout = text.toUpperCase()
console.log(shout)

// LowerCase
let whisper = text.toLowerCase()
console.log(whisper)

//Index of first matching character or -1 if not found
let whereIsW = text.indexOf('w')
console.log(whereIsW)

// Index of first matching or -1 if not found
let whereisZ = text.indexOf('z')
console.log(whereisZ)

// Join string together
let whisperAndShout = whisper.concat(shout)
console.log(whisperAndShout)


// Replace the first instance of first thing with second thing
// See reference for more information on this, can also do global
// and more complex replacements with regular expressions
let replace0 = text.replace('o', '0')
console.log(replace0)

// Replace the all instance of first thing with second thing
let replaceAll0 = text.replace(/o/g, '0')
console.log(replaceAll0 )

// Remove spaces, tabs, newlines etc. From both ends of the strings
let removeWhitespace = text.trim()
console.log(removeWhitespace)


// JavaScript Array
// Use [] to define an array
// Length is not fixed, Can add and delete elements
// Use array[index] to access adn modify element

let animals = ['durk', 'bear', 'Squirrel']

console.log(animals)
console.log(animals[0])   // duck

// Array variable (like list in python)
let quiz_score = [100, 90, 87, 76, 45, 099]
console.log(quiz_score)

// Another array. Can fix type if needed
let my_array = [4, 5, 'Cake', 'Cross', 1234, 4312, text.toUpperCase()]
console.log(my_array)

// Read individual elements
console.log(my_array[0])
console.log(my_array[1])
console.log(my_array[2])
console.log(my_array[3])
console.log(my_array[-10]) // not-existent index: will not be display and this print 'undefined'

//can modify elements by index
my_array[2] = 'pizza' // adding the element to the number 2 in the array
console.log(my_array);