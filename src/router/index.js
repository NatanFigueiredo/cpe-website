import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Equipe from '../views/Equipe.vue'
import Aulas from '../views/Aulas.vue'
import PSAlunos from '../views/ProcessoSeletivo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/equipe',
    name: 'Equipe',
    component: Equipe
  },
  {
    path: '/aulas',
    name: 'Aulas',
    component: Aulas
  },
  {
    path: '/processo-seletivo',
    name: 'Processo Seletivo',
    component: PSAlunos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
