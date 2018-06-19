/*
父子组件通信可以通过 props / emit-on
兄弟组件通信可以通过引入一个空的vue实例new Vue()，在两个兄弟组件中emit-on来实现

on只能监听该vue组件本身emit的事件

new Vue()和Vue.component()的区别是
前者返回实例
后者返回一个函数
 */

var mediator = new Vue()

var sister = Vue.component('sister', {
  template: '<button @click="send">plus</button>',
  methods: {
    send () {
      // mediator发消息
      mediator.$emit('plus', 1)

      // 子组件sister发消息
      this.$emit('send', 'sister send')
    }
  },
  mounted() {
    this.$on('send', data => {
      console.log('sister组件收到本组件发送消息：', data)
    })
  }
})

var brother = Vue.component('brother', {
  template: '<p>{{number}}</p>',
  data: function () {
    return {
      number: 10
    }
  },
  mounted() {
    // mediator收消息
    mediator.$on('plus', msg => {
      this.number++
    })
  }
})

var app = new Vue({
  el: '#app',
  components: {
    brother,
    sister
  },
  methods: {
    receive (data) {
      console.log('根组件收到子组件发送消息：', data)
    }
  }
})
