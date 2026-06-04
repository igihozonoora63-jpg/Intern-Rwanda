<!-- Login.vue -->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const role = ref('');
const errorMessage = ref('');

const login = () => {
  errorMessage.value = '';
  
  // Clean empty spaces from string checking
  if (!email.value.trim()) { errorMessage.value = "Please enter your email"; return; }
  if (!email.value.includes('@') || !email.value.includes('.')) { errorMessage.value = "Please enter a valid email address"; return; }
  if (!password.value) { errorMessage.value = "Please enter your password"; return; }
  if (password.value.length < 6) { errorMessage.value = "Password must be at least 6 characters long"; return; }
  if (!role.value) { errorMessage.value = "Please select an account type"; return; }

  // Route according to chosen user state roles
  if (role.value === 'student') {
    router.push('/student-dashboard');
  } else if (role.value === 'company') {
    router.push('/company-dashboard');
  }
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
    <div class="max-w-4xl w-full grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 animate-fade-in-up">
      
      <!-- Left Info branding -->
      <div class="bg-gradient-to-br from-teal-800 to-teal-600 p-12 text-white flex flex-col justify-between">
        <div>
          <router-link to="/" class="text-3xl font-black tracking-tight">Intern Rwanda</router-link>
          <p class="text-teal-100/90 mt-4 text-base leading-relaxed">
            Connecting TVET institutions with active companies for verified internship positions.
          </p>
        </div>

        <div class="space-y-3 font-medium text-sm text-teal-50">
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Verified Students</div>
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Trusted Companies</div>
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Fast Application Tracks</div>
        </div>
      </div>

      <!-- Right Form Processing Sheet -->
      <div class="p-10 lg:p-12 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Welcome Back</h2>
        <p class="text-slate-500 mt-1 mb-8 text-sm">Sign in to continue to your dashboard</p>

        <!-- Error Panel Display Frame -->
        <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl animate-fade-in">
          ⚠️ {{ errorMessage }}
        </div>

        <!-- Added 'novalidate' to stop native browser conflicts with Vue logic -->
        <form @submit.prevent="login" novalidate class="space-y-4">
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Email Address</label>
            <input v-model="email" type="email" placeholder="name@example.com" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition text-sm" />
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Password</label>
            <input v-model="password" type="password" placeholder="••••••••" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition text-sm" />
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Select Account Type</label>
            <select v-model="role" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 bg-white transition text-sm text-slate-700">
              <option value="">Choose your role...</option>
              <option value="student">Student</option>
              <option value="company">Company / Employer</option>
            </select>
          </div>

          <button type="submit" class="w-full bg-teal-700 text-white py-3.5 rounded-xl font-semibold hover:bg-teal-800 active:scale-[0.99] transition-all shadow-md shadow-teal-700/10 mt-2 text-sm">
            Sign In
          </button>
        </form>

        <p class="text-center text-slate-500 text-sm mt-8">
          Don't have an account yet?
          <router-link to="/register" class="text-teal-700 font-semibold hover:underline">Create an account</router-link>
        </p>
      </div>

    </div>
  </div>
</template>