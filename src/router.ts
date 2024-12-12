// filepath: /E:/source/proyects/web-anasty/src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/:shorturl', component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;