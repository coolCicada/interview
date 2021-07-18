function SuperType (name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType (name, age) {
  SuperType.call(this, name)
  this.age = age
}

SubType.prototype = new SuperType()

const instance1 = new SubType('ls', 39)
instance1.colors.push('black')

const instance2 = new SubType('ls2', 40)
instance2.colors.push('ff')

console.log(instance1, instance2)
