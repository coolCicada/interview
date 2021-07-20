<template>
  <div id="scroll-container"
    :class="{ 'transition': isTransition }"
    @touchstart.stop="handlerTouchStart"
    @touchmove="handlerTouchMove"
    @touchend.stop="handlerTouchEnd"
    ref="scrollContainer">
      <div :class="['refresh', { 'display': isDisplay.refresh}]">
        <img src="../img/down.jpg" 
        :class="{ 'rotate': isRotate }"  alt="">
      </div>
      <slot></slot>
      <div class="down">
        <img src="../img/load.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startLocation: '',
      moveDistance: 0,
      maxDistance: 100,
      distance: '',
      isTransition: false,
      isDisplay: {
        refresh: true,
        load: true
      },
      isRotate: false,
      isShrinked: false
    }
  },
  methods: {
    handlerTouchStart (e) {
      this.isTransition = false
      this.startLocation = e.touches[0].pageY
      this.isRotate = false
      this.isShrinked = false
    },
    handlerTouchMove (e) {
      e.preventDefault();
      if (this.moveDistance > this.maxDistance + 1) {
        this.isRotate = true
        return
      }
      this.moveDistance = Math.floor(e.touches[0].pageY - this.startLocation)
      this.$refs.scrollContainer.style.transform = `translateY(${this.moveDistance}px)`
      console.log(this.moveDistance);

    },
    handlerTouchEnd () {
      this.isTransition = true
      this.moveDistance = 0
      this.$refs.scrollContainer.style.transform = 'translateY(0px)'
    }
  }
}
</script>

<style>
  #scroll-container {
    background-color: yellow;
  }
  .transition {
    transition: all .7s;
  }
  img {
    width: 100%;
    display: block;
  }
  .rotate {
    transform: rotate(180deg);
  }
</style>