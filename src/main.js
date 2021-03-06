import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faLinkedin, faInstagram, faTwitter, faFacebookF)

Vue.component("font-awesome-icon", FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
