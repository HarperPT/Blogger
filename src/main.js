import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n';
import en from './lang/en'
import tw from './lang/tw'
import './plugins/element.js'
import router from './router/index';

Vue.config.productionTip = false

const messages = {
  en: en,
  tw: tw
}
const i18n = new VueI18n({
  locale: 'en',
  messages,
});


new Vue({
  store,
  router,
  render: h => h(App),
  i18n,
}).$mount('#app')
