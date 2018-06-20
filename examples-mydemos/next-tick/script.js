
var app = new Vue({
  el: '#app',
  created () {
    Vue.nextTick(() => {
      console.log('nextTick1')
    })
    setTimeout(() => {
      console.log('setTimeout')
    })
    Vue.nextTick(() => {
      console.log('nextTick2')
    })
  }
})
