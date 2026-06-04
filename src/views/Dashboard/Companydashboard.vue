<script setup>
import { ref } from 'vue';
import Postinternship from './Post-internships.vue';
import Applicants from './Applicants.vue';
import Messages from './Messages.vue';
import Notifications from './Notifications2.vue';
import Settings from './Settings2.vue';

const activeMenu = ref('postinternship');

// Corporate profile metadata rendered inside the top panel
const corporateUser = {
  name: 'BK Group HR',
  role: 'Company Account'
};

const menuItems = [
  {
    key: 'postinternship',
    label: 'Post Internship',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  },
  {
    key: 'applicants',
    label: 'Applicants',
    badge: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    key: 'messages',
    label: 'Messages',
    badge: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  },
  {
    key: 'notifications',
    label: 'Notifications',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  },
];
</script>

<template>
  <div class="flex h-screen w-screen bg-slate-50 overflow-hidden font-poppins">
    
    <aside class="w-64 bg-slate-900 text-white flex flex-col border-r border-slate-800 shrink-0">
      <div class="h-16 flex items-center px-6 border-b border-slate-800">
        <span class="text-lg font-bold tracking-tight bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
          Partner Portal
        </span>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-1">
        <button
          v-for="item in menuItems"
          :key="item.key"
          @click="activeMenu = item.key"
          :class="activeMenu === item.key ? 'bg-teal-700 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 text-sm font-medium cursor-pointer"
        >
          <span class="flex-shrink-0 opacity-80" v-html="item.icon"></span>
          <span class="flex-1 text-left">{{ item.label }}</span>
          <span v-if="item.badge" class="bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {{ item.badge }}
          </span>
        </button>
      </nav>

      <div class="p-4 border-t border-slate-800 text-center text-xs text-slate-500">
        v1.0.4 Enterprise Build
      </div>
    </aside>

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      
      <header class="h-16 bg-white border-b border-slate-200/80 flex items-center justify-end px-8 shrink-0">
        <div class="flex items-center gap-3">
          <div class="text-right">
            <div class="text-sm font-semibold text-slate-800 leading-tight">{{ corporateUser.name }}</div>
            <div class="text-xs font-medium text-slate-400 mt-0.5">{{ corporateUser.role }}</div>
          </div>
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow-sm shadow-teal-500/10">
            B
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-8 lg:p-12">
        <div class="max-w-5xl mx-auto">
          <Postinternship v-if="activeMenu === 'postinternship'" />
          <Applicants v-if="activeMenu === 'applicants'" />
          <Messages v-if="activeMenu === 'messages'" />
          <Notifications v-if="activeMenu === 'notifications'" />
          <Settings v-if="activeMenu === 'settings'" />
        </div>
      </main>

    </div>
  </div>
</template>