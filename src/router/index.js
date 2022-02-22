import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../components/MainPage'
import Catalog from '../components/Catalog'
import Cart from '../components/Cart'

const routes = [
  { path: "/", component: MainPage },
  { path: "/catalog", component: Catalog },
  { path: "/cart", component: Cart }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
