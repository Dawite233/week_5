// Write a function that joins the name of a city adn state
// Into one string, joined with a comma in the form used in an address
// make sure the state is capitalized
// The function that converts a string to uppercase is called to UpperCase()

function cityStateAddress(city, state) {
    let address = `${city}, ${state.toUpperCase()}` // the TUpperCase() will capitalized teh later of teh state
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'wa')
console.log(address)



function isMinnesotaZip(code_zip) {
    // ALl MN zip are between 55001 and 56763

    if (code_zip >= 55001 && code_zip <= 56763) {
        return true
    } else {
        return false
    }
}

function validGPA(GPA) {
    return GPA >= 0 && GPA <= 4
}
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55000))
console.log(isMinnesotaZip(55546))
console.log(isMinnesotaZip(56764))
console.log(isMinnesotaZip(55895))
console.log(isMinnesotaZip(-1))
console.log(isMinnesotaZip(969656))
console.log(isMinnesotaZip(54687))

console.log(validGPA(0))
console.log(validGPA(-1))
console.log(validGPA(4))
console.log(validGPA(5))
console.log(validGPA(3))
console.log(validGPA(6))









