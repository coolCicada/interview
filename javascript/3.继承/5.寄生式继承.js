function createAnother (original) {
  const clone = Object.create(original)
  clone.sayHi = function () {
    console.log('hi')
  }
  return clone
}

const person = {
  name: 'ls', friends: ['ss', 'BB', 'CC']
}

const anotherPerson = createAnother(person)
anotherPerson.sayHi()

console.log(anotherPerson)
