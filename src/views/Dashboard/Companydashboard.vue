<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import Postinternship from './Post-internships.vue';
import Applicants from './Applicants.vue';
import Messages from './Messages.vue';
import Notifications from './Notifications2.vue';
import Settings from './Settings2.vue';

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
            <div class="p-6 text-2xl font-bold">
                Intern Rwanda
            </div>
            <div class="p-6 text-2xl border-b border-teal-700">
                Company Dashboard
                <nav class="flex-1 p-4">
                    <button @click="activeMenu='postinternship'":class="activeMenu=== 'postinternship'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Post Internship
                    </button>
                    <button @click="activeMenu='applicants'":class="activeMenu=== 'applicants'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Applicants
                    </button>
                    <button @click="activeMenu='messages'":class="activeMenu=== 'messages'? 'bg-teal-700' : 'hover:bg-green-700'" class="w-full text-left px-4 py-2 rounded-lg transition-colors duration-300">
                        Messages
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
            <Postinternship v-if="activeMenu==='postinternship'"></Postinternship>
                <!-- Thsi will contain Applications -->
                 <Applicants v-if="activeMenu==='applicants'"></Applicants>
                    <!-- This will contain Internships -->
                     <Messages v-if="activeMenu==='messages'"></Messages>
                        <!-- This will contain Notifications -->
                         <Notifications v-if="activeMenu==='notifications'"></Notifications>
                            <!-- This will contain Settings -->
                             <Settings v-if="activeMenu==='settings'"></Settings>
         </main>
    </div>
</template>