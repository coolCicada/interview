function Flower () {
  return {
    name: '玫瑰'
  }
}

const xiaoming = {
  sendFloor (target) {
    const m = new Flower()
    console.log(m)
    target.receiveFlower(new Flower())
  }
}

const xiaodai = {
  receiveFlower (flower) {
    xiaobai.listenGoodMood().then(() => {
      xiaobai.receiveFlower(flower)
    })
  }
}

const xiaobai = {
  receiveFlower (flower) {
    console.log('received', flower)
  },
  listenGoodMood (fn) {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}

xiaoming.sendFloor(xiaodai)
