import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import QueryResultView from "@/views/QueryResultView.vue"
import suppllierEditView from "@/views/suppllierEditView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/queryResult",
      name: "queryResult",
      component: QueryResultView,
    },
    {
      path: "/suppllierEdit",
      name: "suppllierEdit",
      component: suppllierEditView,
    },
  ],
})

export default router
