function SuperType (name) {
  this.name = name
}

function SubType (name) {
  SuperType.call(this, 'Nicholas')
  this.age = 29
}

const instance = new SubType()
console.log(instance)
