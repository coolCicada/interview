const calc = require('./calc')
console.log(calc.add(2, 3))
console.log(require('./center').add(2,3))
calc.add = function (a, b) {
  return a + b + 1
}
console.log(calc.add(2, 3))
console.log(require('./center').add(2,3))