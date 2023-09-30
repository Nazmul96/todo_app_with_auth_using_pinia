import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import TodoPage from '../components/TodoPage.vue'
import authStore from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/todo',
      name: 'TodoPage',
      component: TodoPage,
      meta:{
        requiresAuth:true,
      }
    },
  
  ]
})
router.beforeEach((to, from, next) => {
  const auth = authStore();
  if(to.meta.requiresAuth && auth.isAuthenticated != true){
    next('/login');
  }else{
    next();
  }
});

export default router
