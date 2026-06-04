import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import StudentDashboard from '../views/Dashboard/Studentdashborad.vue';
import CompanyDashboard from '../views/Dashboard/Companydashboard.vue';
import Apply from '../views/Dashboard/Apply.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'Home', component: Home},
    {path:'/about', name:'About', component: About},
    {path:'/contact', name:'Contact', component: Contact},
    {path:'/login', name:'Login', component: Login, meta:{hideNavbar: true}},
    {path:'/register', name:'Register', component: Register, meta:{hideNavbar: true}},
    {path:'/student-dashboard', name:'StudentDashboard', component: StudentDashboard, meta: { hideNavbar: true }},
    {path:'/company-dashboard', name:'CompanyDashboard', component: CompanyDashboard, meta: { hideNavbar: true }},
    {path:'/apply', name: 'Apply', component:Apply, meta: {hideNavbar: true}},
  ],
})

export default router
