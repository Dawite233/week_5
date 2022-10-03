let animals = ['Lion', 'Tiger', 'Cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000]) // undefined


let newLine = '\n'
console.log(newLine)

animals[3] = 'Giraffe'
console.log(animals)  ///this will display but it will be space between the empty array adn the value tha twe give

console.log(newLine)

// 'push' will print the element at the end of the array
animals.push('Elephant')

// 'unshift' will print the element at the began of the array
animals.unshift('Deer')
console.log(animals)

// shift will remove the first element in the array

let firstAnimals = animals.shift()
console.log(firstAnimals.toUpperCase())
console.log(animals)

// 'pop' will remove teh last element  in the array
let lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals)
console.log(newLine)


//'reverse' will print the element in reverse
animals.reverse()
console.log(animals)
console.log(newLine)

// 'sort' will print the element in alphathic order
animals.sort()
console.log(animals)


// The number of the elements in the array
let numberOfAnimals = animals.length
console.log(numberOfAnimals)

// knowing where  the number of the elements in the array
console.log(animals.indexOf('Lion'))

// trying to look element that is not listed in the array
console.log(animals.indexOf('Monkey'))
// something is not found in the array will return -1


// 'index' is help to know where the element is
if (animals.indexOf('Monkey') == -1) {
    console.log('Monkey is not in the array.')
}

 // if (animals.indexOf('Lion') == animals.length) {
 //    console.log('Lion is listed in the array.')
 // }

if (animals.includes('Cheetah')) {
    console.log('Cheetah is in the array.')
}


// 'join'  will print with character such as *, 1, -
console.log(animals.join(' * '))

//  Looping over the array elements
animals.forEach(function (animal) {
    console.log(animal.toUpperCase())
})


// Use a loop with animal array
// Can you print the length of each animal name?
animals.forEach( function (animal_s) {
    console.log(animal_s.length)
})


// Make a new array with length of each animal name?
// so for my example, [ 'Cheetah', 'Giraffe', 'Lion', 'Tiger' ]
// creat an array [7, 7, 4, 5,]

animals.push('Alligator')
animals.push('Dog')
let animalNameLength = []
animals.forEach( function (animal) {
    let lenght = animal.length
    animalNameLength.push(lenght)
})
console.log(animalNameLength)