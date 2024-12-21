import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import LoginPage from '../views/Login.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginPage },
  { path: '/about', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
