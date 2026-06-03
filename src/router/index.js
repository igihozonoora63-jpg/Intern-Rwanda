import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import StudentDashboard from '../views/Dashboard/Studentdashborad.vue';
import CompanyDashboard from '../views/Dashboard/Companydashboard.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'Home', component: Home},
    {path:'/about', name:'About', component: About},
    {path:'/contact', name:'Contact', component: Contact},
    {path:'/login', name:'Login', component: Login},
    {path:'/register', name:'Register', component: Register},
    {path:'/student-dashboard', name:'StudentDashboard', component: StudentDashboard},
    {path:'/company-dashboard', name:'CompanyDashboard', component: CompanyDashboard}
  ],
})

export default router
