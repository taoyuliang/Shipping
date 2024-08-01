import { createApp } from "vue"
import "./style.css" // TailwindCss
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// import "element-plus/theme-chalk/dark/css-vars.css"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

const app = createApp(App).use(ElementPlus).use(router).use(createPinia())
// .mount("#app")

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount("#app")
