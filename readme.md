[TOC]
# 面试总结
## 1 JS 原始数据类型有哪些？引用数据类型有哪些？null是对象吗？为什么？
- 1) 原始数据类型
```javascript
  Number、String、Boolean、null、undefined、symbol 、BigInt
```
- 2) 引用数据类型
```Javascript
  Object,Function,Array 
```
- 3) 关于null
```text
  对于null来说，很多人会认为他是个对象类型，其实这是错误的。虽然typeof null会输出object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000开头代表是对象，然而null表示为全零，所以将它错误的判断为object。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来
```
## 2 instanceof能否判断基本数据类型？
> instanceof 用来判断引用数据类型
```Javascript
  1 instanceof Number
  -> false
  let one = new Number(1)
  -> undefined
  one instanceof Number
  -> true
  one instanceof Object
  -> true
```
## 3 手动实现一下instanceof的功能？
=> **_手写系列 / 1_**
```Javascript
   // 变量R的原型 存在于 变量L的原型链上
    function instanceOf(L, R) {
      const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol']
      if (baseType.includes(typeof(L))) return false
      let RP = R.prototype  //取 R 的显式原型
      L = L.__proto__       //取 L 的隐式原型
      while (true) {
        if (L === null) return false //找到最顶层
        if (L === RP) return true   //严格相等
        L = L.__proto__ //没找到继续向上一层原型链查找
      }
    }
```
