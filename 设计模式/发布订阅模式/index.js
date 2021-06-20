const event = {
  clientList: {},
  listen: function (key, fn) {
    if (!this.clientList[key]) this.clientList[key] = []
    this.clientList[key].push(fn)
  },
  trigger: function (key) {
    const fns = this.clientList[key]
    if (!fns || fns.length === 0) return false
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, arguments)
    }
  },
  remove: function (key, fn) {
    const fns = this.clientList[key]
    if (!fns) return false
    if (!fn) {
      if (fns) fns.length = 0
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        const _fn = fns[i]
        if (_fn === fn) fns.splice(i, 1)
      }
    }
  }
}
const installEvent = function (obj) {
  for (const i in event) {
    obj[i] = event[i]
  }
}
const saleOffices = {}
installEvent(saleOffices)
const ming88 = function (squareMeter) {
  console.log('ming squareMeter88 = ' + squareMeter)
}
const Li88 = function (squareMeter) {
  console.log('Li squareMeter88 = ' + squareMeter)
}
const ming110 = function (squareMeter) {
  console.log('ming squareMeter110 = ' + squareMeter)
}
saleOffices.listen('squareMeter88', ming88)
saleOffices.listen('squareMeter88', Li88)

saleOffices.listen('squareMeter110', ming110)

saleOffices.trigger('squareMeter88', 20000000)
saleOffices.trigger('squareMeter110', 188)
console.log('=======')
saleOffices.trigger('squareMeter88', 200000004)
saleOffices.trigger('squareMeter110', 1882)
console.log('=======')
saleOffices.remove('squareMeter88', Li88)
saleOffices.trigger('squareMeter88', 200000004)
saleOffices.trigger('squareMeter110', 1882)
