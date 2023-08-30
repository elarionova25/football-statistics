import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeaguesView from "@/views/LeaguesView.vue";
import CommandsView from "@/views/TeamsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/leagues',
      name: 'leagues',
      component: LeaguesView
    },
    {
      path: '/commands',
      name: 'commands',
      component: CommandsView
    },
  ]
})

export default router
