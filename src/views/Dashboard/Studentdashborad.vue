<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import Profile from './Profile.vue';
import Applications from './Applications.vue';
import Interships from './Interships.vue';
import Notifications from './Notifications.vue';
import Settings from './Settings.vue';

const router= useRouter();
const activeMenu= ref('profile');

function logout(){
    router.push('/login')
}
</script>








<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
         <aside class="w-68 bg-teal-600 text-white flex flex-col">
           <div class="p-6 border-b border-teal-500">

    <h1 class="text-3xl font-bold">
        Intern Rwanda
    </h1>

    <p class="text-sm text-teal-100 mt-2">
        Connecting Talent & Opportunity
    </p>

</div>
            <div class="p-6 text-2xl  border-b border-teal-700">
                Student Dashboard
                <nav class="flex-1 p-4">
                    <button @click="activeMenu='profile'":class="activeMenu=== 'profile'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Profile
                    </button>
                    <button @click="activeMenu='applications'":class="activeMenu=== 'applications'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Applications
                    </button>
                    <button @click="activeMenu='internships'":class="activeMenu=== 'internships'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Internships
                    </button>
                    <button @click="activeMenu='notifications'":class="activeMenu=== 'notifications'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Notifications
                    </button>
                    <button @click="activeMenu='settings'":class="activeMenu=== 'settings'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Settings
                    </button>
                </nav>

                <!-- Logout button -->

                 <div class="p-4 border-t border-teal-700 mt-auto">
                    <button @click="logout" class="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                        Logout
                    </button>

                 </div>
            </div>
         </aside>


         <!-- Main content -->

         <main class="flex-1 overflow-y-auto p-8">
            <!-- This will contain profile -->
            <Profile v-if="activeMenu==='profile'"></Profile>
                <!-- Thsi will contain Applications -->
                 <Applications v-if="activeMenu==='applications'"></Applications>
                    <!-- This will contain Internships -->
                     <Interships v-if="activeMenu==='internships'"></Interships>
                        <!-- This will contain Notifications -->
                         <Notifications v-if="activeMenu==='notifications'"></Notifications>
                            <!-- This will contain Settings -->
                             <Settings v-if="activeMenu==='settings'"></Settings>
         </main>
    </div>
</template>