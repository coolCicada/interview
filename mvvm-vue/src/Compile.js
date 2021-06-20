import Watcher from './Watcher'

const updater = {
  textUpdater (node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value
  }
}
const compileUtil = {
  eventHandler (node, vm, exp, dir) {
    const eventType = dir.split(':')[1]
    const fn = vm.$options.methods && vm.$options.methods[exp]
    if (eventType && fn) node.addEventListener(eventType, fn.bind(vm), false)
  },
  text (node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },
  bind (node, vm, exp, dir) {
    const updaterFn = updater[dir + 'Updater']
    if (updaterFn) updaterFn(node, this._getVMVal(vm, exp))
    const w = new Watcher(vm, exp, function (value, oldValue) {
      if (updaterFn) updaterFn(node, value, oldValue)
    })
    console.log(w)
  },
  _getVMVal (vm, exp) {
    let val = vm
    exp = exp.split('.')
    exp.forEach(k => {
      val = val[k]
    })
    return val
  }
}
export default class Compile {
  constructor (el, vm) {
    this.$vm = vm
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el)
      this.init()
      this.$el.appendChild(this.$fragment)
    }
  }

  init () {
    this.compileElement(this.$fragment)
  }

  compileElement (el) {
    const childNodes = el.childNodes
    Array.prototype.slice.call(childNodes).forEach(node => {
      const text = node.textContent
      const reg = /\{\{(.*)\}\}/
      if (this.isElementNode(node)) this.compile(node)
      else if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, RegExp.$1.trim())
      }

      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node)
      }
    })
  }

  compileText (node, exp) {
    compileUtil.text(node, this.$vm, exp)
  }

  compile (node) {
    const nodeAttrs = node.attributes
    Array.prototype.slice.call(nodeAttrs).forEach(attr => {
      const attrName = attr.name
      if (this.isDirective(attrName)) {
        const exp = attr.value
        const dir = attrName.substring(2)
        if (this.isEventDirective(dir)) {
          compileUtil.eventHandler(node, this.$vm, exp, dir)
        } else {
          compileUtil[dir] && compileUtil[dir](node, this.$vm, exp)
        }
        node.removeAttribute(attrName)
      }
    })
  }

  isEventDirective (dir) {
    return dir.indexOf('on') === 0
  }

  isDirective (attr) {
    return attr.indexOf('v-') === 0
  }

  isElementNode (node) {
    return node.nodeType === 1
  }

  isTextNode (node) {
    return node.nodeType === 3
  }

  node2Fragment (el) {
    const fragment = document.createDocumentFragment()
    let child = el.firstChild
    while (child) {
      fragment.appendChild(child)
      child = el.firstChild
    }
    return fragment
  }
}
