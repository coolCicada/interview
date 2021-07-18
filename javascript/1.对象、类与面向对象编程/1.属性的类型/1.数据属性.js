const person = {
  name: 'Nicholas'
}
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'ls'
})
console.log(person)
person.name = 'ne'
console.log(person)
