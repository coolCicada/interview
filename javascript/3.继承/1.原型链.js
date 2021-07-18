function SuperType () {
  this.property = true
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType () {
  this.subproperty = false
}

SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subproperty
}

const instance = new SubType()
console.log(instance)
console.log(instance instanceof SubType)
console.log(instance instanceof SuperType)
console.log(instance instanceof Object)
instance.colors.push('black')
