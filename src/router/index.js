import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeaguesView from "@/views/LeaguesView.vue";
import TeamsView from "@/views/TeamsView.vue";
import LeagueAbout from "@/views/LeagueAbout.vue";

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
            component: LeaguesView,
        },
        {
            path: '/league/:leagueId',
            component: LeagueAbout
        },
        {
            path: '/teams',
            name: 'teams',
            component: TeamsView
        },
    ]
})

export default router
