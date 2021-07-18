function object (o) {
  function F () {}
  F.prototype = o
  return new F()
}

const person = {
  name: 'Ls', friends: ['Shelby', 'Court', 'Van']
}

const anotherPerson = Object.create(person)
console.log(anotherPerson.name)
anotherPerson.name = 'greg'
anotherPerson.friends.push('rob')

const yanotherPerson = Object.create(person)
yanotherPerson.name = 'Linda'
yanotherPerson.friends.push('Linda')

console.log(anotherPerson, yanotherPerson)
