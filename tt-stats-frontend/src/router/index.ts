import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayersView from '../views/PlayersView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/players',
    name: 'players',
    component: PlayersView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
