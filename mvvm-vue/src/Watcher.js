import Dep from './Dep'

export default class Watcher {
  constructor (vm, exp, cb) {
    this.cb = cb
    this.vm = vm
    this.getter = this.parseGetter(exp.trim())
    this.depIds = {}
    this.value = this.get()
  }

  get () {
    Dep.target = this
    const value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }

  run () {
    const value = this.get()
    const oldVal = this.value
    if (value !== oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  }

  addDep (dep) {
    const id = dep.id
    if (!this.depIds[id]) {
      dep.addSub(this)
      this.depIds[dep.id] = dep
    }
  }

  update () {
    this.run()
  }

  parseGetter (exp) {
    const exps = exp.split('.')
    return function (obj) {
      for (let i = 0; i < exps.length; i++) {
        if (!obj) return false
        obj = obj[exps[i]]
      }
      return obj
    }
  }
}
