let text = ' The class are itec 1550, itec 1250, itec 2560'

let replace = text.replace('itec', 'ITEC')
console.log(replace)


let replacedAll = text.replace(/itec/g, 'ITEC') // it will replace every 'itec'
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2250, 12345'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)
