function inheriPrototype (subType, superType) {
  const prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

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

inheriPrototype(SubType, SuperType)

SubType.prototype.sayAge = function () {
  console.log(this.age)
}

const instance = new SubType('ls', 20)
console.log(instance)
console.log(instance instanceof SubType)
console.log(instance instanceof SuperType)
console.log(instance instanceof Object)
