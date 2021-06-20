import Compile from './Compile'
import observe from './Observer'

export default class MVVM {
  constructor (options) {
    this.$options = options || {}
    const data = this._data = this.$options.data
    Object.keys(data).forEach(key => {
      this._proxyData(key)
    })
    observe(data, this)
    this.$compile = new Compile(options.el || document.body, this)
  }

  _proxyData (key, setter, getter) {
    Object.defineProperty(this, key, {
      configurable: false,
      enumerable: true,
      get () {
        return this._data[key]
      },
      set (newVal) {
        this._data[key] = newVal
      }
    })
  }
}
