const book = {
  year_: 2017,
  edition: 1
}
console.log(book)
Object.defineProperty(book, 'year', {
  get () {
    return this.year_
  },
  set (newValue) {
    if (newValue > 2017) {
      this.year_ = newValue
      this.edition += newValue - 2017
    }
  }
})
console.log(book)
console.log(book.year)
book.year = 2018
console.log(book)
console.log(book.year)
