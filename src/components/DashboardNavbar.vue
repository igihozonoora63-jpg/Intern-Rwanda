<script setup>
import { useRouter } from 'vue-router';
import { LogOut, Bell, User } from 'lucide-vue-next';

defineProps({
  userName: { type: String, default: 'User' },
  role: { type: String, default: 'Dashboard' }
});

const router = useRouter();

const logout = () => {
  // Clear any auth tokens here if necessary
  router.push('/login');
};
</script>

<template>
  <nav class="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
    <div class="flex items-center gap-3">
      <router-link to="/" class="text-2xl font-bold text-teal-700">Intern Rwanda</router-link>
      <span class="bg-teal-50 text-teal-700 text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
        {{ role }}
      </span>
    </div>

    <div class="flex items-center gap-6">
      <button class="text-slate-500 hover:text-teal-700 transition relative">
        <Bell :size="22" />
        <span class="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
      </button>

      <div class="flex items-center gap-3 border-l pl-6 border-slate-200">
        <div class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
          <User :size="18" />
        </div>
        <div class="hidden md:block text-left">
          <p class="text-sm font-semibold text-slate-800 leading-none">{{ userName }}</p>
        </div>
        
        <button 
          @click="logout" 
          class="ml-2 p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-50 transition"
          title="Log Out"
        >
          <LogOut :size="20" />
        </button>
      </div>
    </div>
  </nav>
</template>