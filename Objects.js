let user = {username: 'Dawite', password: 'Dog'}
console.log(user.username)
console.log('username')

console.log(user.password)
console.log('password')

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(usernameProperty)

user.password = 'elephant'  // changing the password
console.log(user)


user['password'] = 'alligator'
console.log(user)

user.email = 'dawitworku9292@gmail.com'
console.log(user)
console.log(user.email)
