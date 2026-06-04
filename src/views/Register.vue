<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');
const errorMessage = ref('');

const school = ref('');
const trade = ref('');
const phone = ref('');
const companyName = ref('');
const companyAddress = ref('');
const regNumber = ref('');

const register = () => {
  errorMessage.value = '';
  
  // 1. Core Fields Validation
  if (!name.value.trim()) { errorMessage.value = "Please enter your name"; return; }
  if (!email.value.trim()) { errorMessage.value = "Please enter your email"; return; }
  if (!email.value.includes('@') || !email.value.includes('.')) { errorMessage.value = "Please enter a valid email address"; return; }
  if (!password.value) { errorMessage.value = "Please enter your password"; return; }
  if (password.value.length < 6) { errorMessage.value = "Password must be at least 6 characters long"; return; }
  if (!role.value) { errorMessage.value = "Please select a registration role"; return; }

  // 2. Role-specific Sub-fields Validation
  if (role.value === 'student' && (!school.value.trim() || !trade.value.trim())) {
    errorMessage.value = "Please complete all academic profile credentials";
    return;
  }
  if (role.value === 'company' && (!companyName.value.trim() || !regNumber.value.trim())) {
    errorMessage.value = "Please complete all corporate business identities";
    return;
  }

  // 3. Programmatic Routing Injection
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
      
      <div class="bg-gradient-to-br from-teal-800 to-teal-600 p-12 text-white flex flex-col justify-between">
        <div>
          <router-link to="/" class="text-3xl font-black tracking-tight">Intern Rwanda</router-link>
          <p class="text-teal-100/90 mt-4 text-base leading-relaxed">
            Create an account to begin posting jobs or deploying student profiles across local enterprises.
          </p>
        </div>

        <div class="space-y-3 font-medium text-sm text-teal-50">
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Account Profiles Verified</div>
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Integrated Educational Records</div>
        </div>
      </div>

      <div class="p-10 lg:p-12 overflow-y-auto max-h-[85vh] custom-scroll">
        <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Create Account</h2>
        <p class="text-slate-500 mt-1 mb-6 text-sm">Join the professional TVET ecosystem</p>

        <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl animate-fade-in">
          ⚠️ {{ errorMessage }}
        </div>

        <form @submit.prevent="register" novalidate class="space-y-4">
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Full Name</label>
            <input v-model="name" type="text" placeholder="John Doe" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition text-sm" />
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Email Address</label>
            <input v-model="email" type="email" placeholder="john@example.com" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition text-sm" />
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Password</label>
            <input v-model="password" type="password" placeholder="Min. 6 characters" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition text-sm" />
          </div>

          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">I am registering as a...</label>
            <select v-model="role" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 bg-white transition text-sm text-slate-700">
              <option value="">Select account role...</option>
              <option value="student">Student looking for Internships</option>
              <option value="company">Company seeking Talent</option>
            </select>
          </div>

          <transition name="expand">
            <div v-if="role === 'student'" class="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3 animate-fade-in">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Academic Background</h4>
              <input v-model="school" type="text" placeholder="TVET School Name" class="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-600" />
              <input v-model="trade" type="text" placeholder="Field of Trade (e.g., Software Development)" class="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-600" />
              <input v-model="phone" type="tel" placeholder="Active Phone Number" class="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-600" />
            </div>
          </transition>

          <transition name="expand">
            <div v-if="role === 'company'" class="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3 animate-fade-in">
              <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Corporate Identity</h4>
              <input v-model="companyName" type="text" placeholder="Registered Company Name" class="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-600" />
              <input v-model="companyAddress" type="text" placeholder="Headquarters Address" class="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-600" />
              <input v-model="regNumber" type="text" placeholder="RDB Registration Number" class="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-600" />
            </div>
          </transition>

          <button type="submit" class="w-full bg-teal-700 text-white py-3.5 rounded-xl font-semibold hover:bg-teal-800 active:scale-[0.99] transition-all shadow-md shadow-teal-700/10 mt-4 text-sm">
            Create Free Account
          </button>
        </form>

        <p class="text-center text-slate-500 text-sm mt-6">
          Already have an account?
          <router-link to="/login" class="text-teal-700 font-semibold hover:underline">Sign In</router-link>
        </p>
      </div>

    </div>
  </div>
</template>