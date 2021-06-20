import Dep from './Dep'
export default function observe (data) {
  if (!data || typeof data !== 'object') return
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}

function defineReactive (data, key, val) {
  const dep = new Dep()
  observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      if (Dep.target) {
        dep.depend()
      }
      console.log('get ===> ', key, val)
      return val
    },
    set: function (newVal) {
      if (val === newVal) return
      console.log('change ===> ', key, val)
      val = newVal
      dep.notify()
    }
  })
}
