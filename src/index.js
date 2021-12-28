// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

import Vuelidate from 'vuelidate'
// Plugins
Vue.use(Vuelidate)
import store from './store'
// Vue components (for use in html)
Vue.component('example-component', require('./js/components/Example.vue').default)
Vue.component('modal-component', require('./js/components/Modal.vue').default)
Vue.component('login-button', require('./js/components/UI/controls/buttons/Login.vue').default)
Vue.component('notify-component', require('./js/components/UI/Notify.vue').default)

// Vue init
const app = new Vue({
  data() {
    return {
      component: false,
      modalView: false,
    }
  },
  store,
  el: '#app'
})
