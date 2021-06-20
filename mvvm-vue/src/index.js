import MVVM from '../src/mvvm'
const mvvm = new MVVM({
  el: '#app',
  data: {
    word: 'Hello World',
    two: {
      name: 'ls'
    }
  },
  methods: {
    sayHi () {
      this.word = 'Hi, everybody!' + new Date().getTime()
      this.two.name = 'ls++'
    }
  }
})
console.log(mvvm)
