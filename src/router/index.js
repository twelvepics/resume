import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navigation from '../views/Navigation.vue'
import About from '../views/About.vue'
import Timeline from '../views/Timeline.vue'
import Works from '../views/Works.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nav',
    name: 'nav',
    component: Navigation,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: Timeline,
  },
  {
    path: '/works',
    name: 'works',
    component: Works,
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router