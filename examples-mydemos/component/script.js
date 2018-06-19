var PlusButton = Vue.component('sister', {
  template: '<button @click="plus">plus{{times}}</button>',
  data() {
    return {
      times: 0
    }
  },
  methods: {
    plus () {
      this.times++
    }
  }
})

var app = new Vue({
  el: '#app',
  components: {
    PlusButton
  }
})
