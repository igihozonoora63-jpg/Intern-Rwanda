<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Profile from './Profile.vue';
import Applications from './Applications.vue';
import Interships from './Interships.vue';
import Notifications from './Notifications.vue';
import Settings from './Settings.vue';
import DashboardNavbar from '@/components/DashboardNavbar.vue';

const router = useRouter();
const activeMenu = ref('profile');

function logout() {
  router.push('/login');
}

const menuItems = [
  {
    key: 'profile',
    label: 'Profile',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  },
  {
    key: 'applications',
    label: 'Applications',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  },
  {
    key: 'internships',
    label: 'Internships',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  },
  {
    key: 'notifications',
    label: 'Notifications',
    badge: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  },
];
</script>

<template>
  <div class="flex h-screen bg-gray-100 overflow-hidden">
    
    <!-- Sidebar Layout Panel -->
    <aside class="w-64 bg-teal-600 text-white flex flex-col flex-shrink-0">
      <!-- Brand Header -->
      <div class="p-6 border-b border-teal-500">
        <h1 class="text-2xl font-bold tracking-tight">Intern Rwanda</h1>
        <p class="text-sm text-teal-100 mt-1">Connecting Talent &amp; Opportunity</p>
      </div>

      <!-- Section Context Header -->
      <div class="px-6 pt-5 pb-2">
        <span class="text-xs font-semibold uppercase tracking-widest text-teal-200">Student Dashboard</span>
      </div>

      <!-- Sidebar Navigation Actions -->
      <nav class="flex-1 px-3 pb-4 space-y-1 overflow-y-auto">
        <button
          v-for="item in menuItems"
          :key="item.key"
          @click="activeMenu = item.key"
          :class="activeMenu === item.key ? 'bg-teal-700 text-white' : 'text-teal-100 hover:bg-teal-700 hover:text-white'"
          class="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          <span class="flex-shrink-0" v-html="item.icon"></span>
          <span class="flex-1 text-left">{{ item.label }}</span>
          <span v-if="item.badge" class="bg-white text-teal-700 text-xs font-bold px-2 py-0.5 rounded-full">
            {{ item.badge }}
          </span>
        </button>
      </nav>

      <!-- User Terminate Session Action -->
      <div class="p-4 border-t border-teal-700">
        <button
          @click="logout"
          class="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/xl" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <!-- Main Application Pipeline Layout Content Workspace Area -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- Included Common Top App Navbar Component Header -->
      <DashboardNavbar userName="Noora Uwase" role="Student" />

      <!-- Scrollable Inner View Wrapper Window Container Grid Frame Element -->
      <main class="flex-1 overflow-y-auto p-8">
        <Profile v-if="activeMenu === 'profile'" />
        <Applications v-if="activeMenu === 'applications'" />
        <Interships v-if="activeMenu === 'internships'" />
        <Notifications v-if="activeMenu === 'notifications'" />
        <Settings v-if="activeMenu === 'settings'" />
      </main>
    </div>

  </div>
</template>