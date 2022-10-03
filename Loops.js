let birds = ['owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach( function (bird){
    // Repeat once for each object in array
    // Function will be called for each object in the array
    console.log(bird.toUpperCase()) // every single element in teh array will be printed in UpperCase because
    // it has 'toUpperCase()'
})
// Creating new line
let newLine =  '\n'
console.log(newLine)

birds.forEach( function (birdsNum,index) {
    console.log(index, birdsNum.toUpperCase())
})

console.log(newLine)


// Other traditional way of looping the Array
for (let x=0; x<birds.length; x++) {
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}