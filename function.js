// HOw to make UPPERCASE

function  shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}
 let textMassage = "There are a lot of opportunities in United State of America that helps you to\n your life in long term goals "
console.log(shout( 'Hello World '+ textMassage))
let message = 'hello web programmers '
console.log(shout(message))


function f_to_c(f, decimalPlaces) {
    let celsius = (f -32) * 5/9
    if (decimalPlaces) {
        return celsius.toFixed(decimalPlaces)  // if the number have decimal places. it will be 2 decimal place
        //undefined value are consider to be false
        // undefined is a falsy value
    } else {
        return celsius // if the number don't have decimal places the number will print out as it is
    }

}

let todayTemp = 75
todayCelsis = f_to_c(todayTemp, 3)
console.log(todayCelsis)