import Vue from 'vue'
import DiscussionUser from './components/DiscussionUser.vue'

Vue.component('discussion-add', require('./components/discussion-add.vue'))
Vue.component('discussion-item', require('./components/discussion-item.vue'))
Vue.component('discussion-footer', require('./components/discussion-footer.vue'))

var app = new Vue({
  el: '#app',
  data: {
  	showformdiscussion: false
  },
  render: h => h(DiscussionUser)
})
