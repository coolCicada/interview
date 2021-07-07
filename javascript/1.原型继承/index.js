function Student(props) {
  this.name = props && props.name || 'Unnamed';
}

Student.prototype.hello = function () {
  alert('Hello, ' + this.name + '!');
}

function F () {}

F.prototype = Student.prototype

function PrimaryStudent(props) {
  // 调用Student构造函数，绑定this变量:
  Student.call(this, props);
  this.grade = props && props.grade || 1;
}
PrimaryStudent.prototype = new F()
PrimaryStudent.prototype.constructor = PrimaryStudent
PrimaryStudent.prototype.hi = function () {
  alert('hi, ' + this.name + '!')
}
PrimaryStudent.prototype.__proto__ = Student.prototype
const ps = new PrimaryStudent()
console.log(ps)
console.log(ps.__proto__ === PrimaryStudent.prototype)
console.log(ps.__proto__.__proto__ === Student.prototype)
console.log(ps instanceof PrimaryStudent)
console.log(ps instanceof Student)
ps.hi()
ps.hello()
