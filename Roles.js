let user =  {
    name: 'Dawite',
    password: 'Dog',
    email: 'dawitworku9292@gmail.com',
    roles: ['programmers', 'developers', 'assistance'],
    contact: {
        office: 'M1234',
        telephone: '124654708',
    }
}

user.salary = 54321
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)