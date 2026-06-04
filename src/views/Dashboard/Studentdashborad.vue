<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  User, 
  Briefcase, 
  FileText, 
  Bell, 
  Settings as SettingsIcon, 
  LogOut, 
  Building2 
} from 'lucide-vue-next';

// Dynamic Sub-components Imports
import Profile from './Profile.vue';
import Interships from './Interships.vue';
import Applications from './Applications.vue';
import Notifications from './Notifications.vue';
import Settings from './Settings.vue';

const router = useRouter();
const activeTab = ref('profile'); // Default view state

// Student profile metadata rendered inside the top panel structure
const studentUser = {
  name: 'Noora Uwase',
  email: 'noora@sos.edu.rw',
  role: 'Student Account'
};

// Navigation layout schema matching the layout profiles
const menuItems = [
  {
    key: 'profile',
    label: 'My Profile',
    icon: User,
  },
  {
    key: 'internships',
    label: 'Available Internships',
    icon: Building2,
  },
  {
    key: 'applications',
    label: 'My Applications',
    icon: Briefcase,
  },
  {
    key: 'notifications',
    label: 'Notifications',
    icon: Bell,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: SettingsIcon,
  }
];

const handleLogout = () => {
  router.push('/login');
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex font-poppins">
    
    <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between shrink-0 border-r border-slate-800">
      <div>
        <div class="p-6 border-b border-slate-800 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-black text-lg">
            I
          </div>
          <span class="font-bold text-lg text-white tracking-tight">Intern Rwanda</span>
        </div>

        <nav class="p-4 space-y-1.5">
          <button
            v-for="item in menuItems"
            :key="item.key"
            @click="activeTab = item.key"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition duration-200 text-left',
              activeTab === item.key
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/10'
                : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
            ]"
          >
            <component :is="item.icon" :size="18" />
            <span>{{ item.label }}</span>
          </button>
        </nav>
      </div>

      <div class="p-4 space-y-2 border-t border-slate-800">
        <button 
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition duration-200 text-left"
        >
          <LogOut :size="18" />
          <span>Sign Out</span>
        </button>
        <div class="pt-2 text-center text-[10px] uppercase tracking-wider text-slate-600 font-bold">
          v1.0.4 Trainee Portal
        </div>
      </div>
    </aside>

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      
      <header class="h-16 bg-white border-b border-slate-200/80 flex items-center justify-end px-8 shrink-0">
        <div class="flex items-center gap-3">
          <div class="text-right">
            <div class="text-sm font-bold text-slate-800 leading-tight">{{ studentUser.name }}</div>
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{{ studentUser.role }}</div>
          </div>
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white font-extrabold flex items-center justify-center text-sm shadow-sm shadow-teal-500/10">
            {{ studentUser.name.charAt(0) }}
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-8 lg:p-12">
        <div class="max-w-5xl mx-auto">
          
          <transition name="fade" mode="out-in">
            <div :key="activeTab">
              <Profile v-if="activeTab === 'profile'" />
              <Interships v-else-if="activeTab === 'internships'" />
              <Applications v-else-if="activeTab === 'applications'" />
              <Notifications v-else-if="activeTab === 'notifications'" />
              <Settings v-else-if="activeTab === 'settings'" />
            </div>
          </transition>

        </div>
      </main>
    </div>

  </div>

</template>

<style scoped>
/* Page switcher smooth fade transitions animation style metrics */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>