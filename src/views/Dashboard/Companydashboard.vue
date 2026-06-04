<!-- CompanyDashboard.vue -->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  Building2, Plus, Users, GraduationCap, FileSpreadsheet, 
  Settings as SettingsIcon, LogOut, ArrowUpRight, MoreVertical, 
  MapPin, MessageSquare, Bell, PlusCircle
} from 'lucide-vue-next';

// Dynamic Feature Components Imports
import MessagesList from './Messages.vue';
import CompanyNotifications from './Notifications2.vue';
import PostInternships from './Post-internships.vue';

const router = useRouter();
const activeTab = ref('overview'); // Primary view control routing token

const companyProfile = ref({
  name: "Kigali Tech Labs",
  address: "KN 4 Ave, Kigali"
});

const positions = ref([
  { id: 1, title: "Frontend Developer Trainee", applicants: 14, category: "Software" },
  { id: 2, title: "Automotive Mechanics Intern", applicants: 8, category: "Mechanical" },
  { id: 3, title: "Welding Production Assistant", applicants: 3, category: "Manufacturing" }
]);

// Dynamic computed password evaluation parameters matching lower workspace definitions
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const showCurrent = ref(false);
const showNew = ref(false);
const showConfirm = ref(false);
const saveSuccess = ref(false);
const passwordSuccess = ref(false);
const profileError = ref('');
const passwordError = ref('');
const isSavingProfile = ref(false);
const isSavingPassword = ref(false);

const handleLogout = () => {
  router.push('/login');
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex font-poppins">
    
    <!-- Sidebar Navigation Layout Frame -->
    <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between p-6 shrink-0 border-r border-slate-800 animate-fade-in">
      <div class="space-y-8">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">IR</div>
          <span class="text-white font-bold text-lg tracking-tight">Intern Rwanda</span>
        </div>
        
        <!-- Updated Navigation Anchors Stack -->
        <nav class="space-y-1.5">
          <button 
            @click="activeTab = 'overview'"
            :class="['w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left', activeTab === 'overview' ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' : 'hover:bg-slate-800 hover:text-white text-slate-400']"
          >
            <Building2 :size="18" /> Overview
          </button>
          
          <button 
            @click="activeTab = 'applicants'"
            :class="['w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left', activeTab === 'applicants' ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' : 'hover:bg-slate-800 hover:text-white text-slate-400']"
          >
            <Users :size="18" /> Candidates
          </button>

          <button 
            @click="activeTab = 'post-internship'"
            :class="['w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left', activeTab === 'post-internship' ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' : 'hover:bg-slate-800 hover:text-white text-slate-400']"
          >
            <PlusCircle :size="18" /> Post Internship
          </button>

          <button 
            @click="activeTab = 'messages'"
            :class="['w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left', activeTab === 'messages' ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' : 'hover:bg-slate-800 hover:text-white text-slate-400']"
          >
            <MessageSquare :size="18" /> Messages
          </button>

          <button 
            @click="activeTab = 'notifications'"
            :class="['w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left', activeTab === 'notifications' ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' : 'hover:bg-slate-800 hover:text-white text-slate-400']"
          >
            <Bell :size="18" /> Notifications
          </button>

          <button 
            @click="activeTab = 'settings'"
            :class="['w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left', activeTab === 'settings' ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' : 'hover:bg-slate-800 hover:text-white text-slate-400']"
          >
            <SettingsIcon :size="18" /> Settings
          </button>
        </nav>
      </div>

      <button @click="handleLogout" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors text-left">
        <LogOut :size="18" /> Sign Out
      </button>
    </aside>

    <!-- Main Dynamic Interface Layout View Frame Workspace -->
    <main class="flex-1 overflow-y-auto p-10">
      
      <!-- Layout Header Panel Row -->
      <header class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 animate-fade-in-up">
        <div>
          <h1 class="text-3xl font-black text-slate-900 tracking-tight">{{ companyProfile.name }}</h1>
          <p class="text-slate-500 text-sm mt-1 flex items-center gap-1">
            <MapPin :size="14" /> Corporate Dashboard — {{ companyProfile.address }}
          </p>
        </div>
        <button 
          v-if="activeTab !== 'post-internship'"
          @click="activeTab = 'post-internship'"
          class="bg-teal-700 hover:bg-teal-800 active:scale-[0.98] text-white px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-teal-700/10 transition-all self-start sm:self-auto"
        >
          <Plus :size="16" /> Post New Role
        </button>
      </header>

      <!-- Active Layout View Switches Matrix Framework -->
      <transition name="fade" mode="out-in">
        <div :key="activeTab">
          
          <!-- 1. OVERVIEW VIEW PROFILE PANEL -->
          <div v-if="activeTab === 'overview'" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4"><Users :size="20" /></div>
                <div class="text-sm font-medium text-slate-500">Active Pipeline</div>
                <div class="text-2xl font-bold text-slate-800 mt-1">25 Candidates</div>
              </div>
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4"><GraduationCap :size="20" /></div>
                <div class="text-sm font-medium text-slate-500">Open Positions</div>
                <div class="text-2xl font-bold text-slate-800 mt-1">3 Active Roles</div>
              </div>
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4"><FileSpreadsheet :size="20" /></div>
                <div class="text-sm font-medium text-slate-500">Hired This Cohort</div>
                <div class="text-2xl font-bold text-slate-800 mt-1">6 Placements</div>
              </div>
            </div>

            <!-- Active Postings Inner Content Grid Container -->
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div class="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 class="font-bold text-lg text-slate-900">Active Internship Vacancies</h3>
                <button @click="activeTab = 'overview'" class="text-xs font-bold text-teal-700 hover:text-teal-800 transition">View All Roles</button>
              </div>
              <div class="divide-y divide-slate-100">
                <div v-for="job in positions" :key="job.id" class="p-6 flex items-center justify-between hover:bg-slate-50/50 transition group">
                  <div class="space-y-1">
                    <h4 class="font-bold text-slate-800 text-base group-hover:text-teal-700 transition-colors">{{ job.title }}</h4>
                    <div class="flex items-center gap-2.5 text-xs text-slate-400">
                      <span class="px-2 py-0.5 bg-slate-100 text-slate-600 font-medium rounded-md">{{ job.category }}</span>
                      <span>•</span>
                      <span>Reviewing across TVET networks</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-6">
                    <div class="text-right">
                      <div class="text-sm font-bold text-slate-800">{{ job.applicants }} Applicants</div>
                      <div class="text-xs text-emerald-600 font-medium flex items-center gap-0.5 justify-end mt-0.5">
                        <ArrowUpRight :size="12" /> Active intake
                      </div>
                    </div>
                    <button class="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition">
                      <MoreVertical :size="18" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. APPLICANTS PROFILE VERIFICATION STACK VIEW -->
          <div v-else-if="activeTab === 'applicants'" class="space-y-6">
            <div class="mb-6">
              <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Applicants</h1>
              <p class="text-slate-500 mt-1">Review student deployment tracks and request records access profiles.</p>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full border-collapse text-left">
                  <thead class="bg-slate-50 border-b border-slate-200/80 text-slate-500 text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th class="p-4 pl-6">Student</th>
                      <th class="p-4">School</th>
                      <th class="p-4">Trade</th>
                      <th class="p-4">Status</th>
                      <th class="p-4 pr-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-sm text-slate-700">
                    <tr class="hover:bg-slate-50/60 transition duration-200">
                      <td class="p-4 pl-6 font-bold text-slate-900">Noora Igihozo</td>
                      <td class="p-4 text-slate-600">SOS Technical High School</td>
                      <td class="p-4">
                        <span class="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md">Software Development</span>
                      </td>
                      <td class="p-4">
                        <span class="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                          <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Pending
                        </span>
                      </td>
                      <td class="p-4 pr-6 text-right">
                        <div class="inline-flex gap-2 justify-end">
                          <button class="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold px-3 py-2 rounded-xl transition shadow-sm">Accept</button>
                          <button class="bg-rose-50 text-rose-600 hover:bg-rose-100 active:scale-95 text-xs font-bold px-3 py-2 rounded-xl transition">Decline</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- 3. POST INTERNSHIPS COMPONENT MOUNT -->
          <PostInternships v-else-if="activeTab === 'post-internship'" />

          <!-- 4. MESSAGES COMPONENT STREAM MOUNT -->
          <MessagesList v-else-if="activeTab === 'messages'" />

          <!-- 5. NOTIFICATIONS COMPONENT PANEL MOUNT -->
          <CompanyNotifications v-else-if="activeTab === 'notifications'" />

          <!-- 6. SETTINGS ACCOUNT PREFERENCES INTERFACE PANEL -->
          <div v-else-if="activeTab === 'settings'" class="space-y-8">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden p-8">
              <h3 class="font-bold text-xl text-slate-900 mb-2">Company Configuration Settings</h3>
              <p class="text-slate-500 text-sm mb-6">Manage corporate operational identity parameters and validation access keys here.</p>
              <div class="max-w-xl space-y-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Company Name</label>
                  <input v-model="companyProfile.name" type="text" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 text-sm" />
                </div>
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Address Location Base</label>
                  <input v-model="companyProfile.address" type="text" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 text-sm" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </transition>
    </main>
  </div>
</template>

<style scoped>
/* Page cross-fade animations parameters mapping layout profiles */
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