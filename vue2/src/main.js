import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'node_modules/bootstrap/scss/bootstrap.scss';
import 'node_modules/bootstrap-vue/src/index.scss';

// createApp(App).use(store).use(router).mount('#app')
new Vue({
  router,
  render: h=> h(App),
}).$mount('#app')
