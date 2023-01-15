import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayersView from '../views/PlayersView.vue'
import CreateMatchView from '../views/CreateMatchView.vue'

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
  {
    path: '/matches',
    name: 'matches',
    component: CreateMatchView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
