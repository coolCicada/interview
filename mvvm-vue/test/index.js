import MVVM from '../src/mvvm'
const mvvm = new MVVM({
  el: '#app',
  data: {
    word: 'Hello World'
  },
  methods: {
    sayHi () {
      this.word = 'Hi, everybody!'
    }
  }
})
console.log(mvvm)
