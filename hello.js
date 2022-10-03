console.log('Hello World! ')

// There way to create variables

let color = 'blue'
var size = 'medium' // not recommended
const language = 'JavaScript' // can not change this value

// language = 'c#' this is actually an ERROR

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi Programmers'

console.log('There are ' + quantity + ' programmers.')

let todayTemp = 75
// Can you use this Variable to console.log
// The message 'Today is temperature is 75F'

console.log('Today\'s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C' )
console.log(`Today\'s temperature is ${tempC.toFixed(2)}C. Which is equivalent to ${todayTemp}F`)

// toFixed use for the decimal place


// Use the variables and a template string to console.log the message
// 'This class is ITEC 2560 Web Programming'

let className = 'Web Programming'
let classCode = '2560'
let department = 'ITEC'

console.log(`This class is ${ department} ${ classCode } ${ className}`)







