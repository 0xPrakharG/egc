import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VerificationView from '@/views/VerificationView.vue'
import HelpView from '@/views/HelpView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RecordView from '@/views/RecordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: HomeView
    },
    {
      path: '/verification',
      name: 'Verification',
      component: VerificationView
    },
    {
      path: '/help',
      name: 'Help',
      component: HelpView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/#introduction',
      name: 'Featured',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/record',
      name: 'Record',
      component: RecordView
    },
    {
      path: '/staking',
      name: 'Staking',
      component: HomeView
    },
    {
      path: '/whitepaper',
      name: 'Whitepaper',
      component: RecordView
    }
  ]
})

export default router
