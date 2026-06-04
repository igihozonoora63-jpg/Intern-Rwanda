<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');

// Custom registration data
const school = ref('');
const trade = ref('');
const phone = ref('');
const companyName = ref('');
const companyAddress = ref('');
const regNumber = ref('');

const register = () => {
  if (!name.value) { alert("Please enter your name"); return; }
  if (!email.value) { alert("Please enter your email"); return; }
  if (!email.value.includes('@') || !email.value.includes('.')) { alert("Please enter a valid email address"); return; }
  if (!password.value) { alert("Please enter your password"); return; }
  if (password.value.length < 6) { alert("Password must be at least 6 characters long"); return; }
  if (!role.value) { alert("Please select a role"); return; }

  // Nested validation checks based on selection
  if (role.value === 'student' && (!school.value || !trade.value)) {
    alert("Please complete all student credentials fields");
    return;
  }
  if (role.value === 'company' && (!companyName.value || !regNumber.value)) {
    alert("Please complete core corporate identity credentials");
    return;
  }

  if (role.value === 'student') {
    router.push('/student-dashboard');
  } else if (role.value === 'company') {
    router.push('/company-dashboard');
  }
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
    <div class="max-w-5xl w-full grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
      
      <div class="bg-gradient-to-br from-teal-700 to-teal-500 p-12 text-white flex flex-col justify-between">
        <div>
          <router-link to="/" class="text-3xl font-bold tracking-tight">Intern Rwanda</router-link>
          <p class="text-teal-100 mt-4 text-lg leading-relaxed">
            Create an account to begin posting jobs or deploying student profiles across local enterprises.
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Account Profiles Verified</div>
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Integrated Educational Records</div>
        </div>
      </div>

      <div class="p-10 lg:p-12">
        <h2 class="text-3xl font-bold text-slate-800">Create Account</h2>
        <p class="text-slate-500 mt-1 mb-6">Join the professional TVET ecosystem</p>

        <form @submit.prevent="register" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input v-model="name" type="text" placeholder="John Doe" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input v-model="email" type="email" placeholder="john@example.com" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input v-model="password" type="password" placeholder="Min. 6 characters" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">I am registering as a...</label>
            <select v-model="role" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 bg-white">
              <option value="">Select account role...</option>
              <option value="student">Student looking for Internships</option>
              <option value="company">Company seeking Talent</option>
            </select>
          </div>

          <div v-if="role === 'student'" class="p-4 bg-slate-50 rounded-xl space-y-4 border border-slate-100">
            <h4 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Academic Background</h4>
            <input v-model="school" type="text" placeholder="TVET School Name" class="w-full p-3 bg-white border border-slate-200 rounded-xl" />
            <input v-model="trade" type="text" placeholder="Field of Trade (e.g., Masonry, Software)" class="w-full p-3 bg-white border border-slate-200 rounded-xl" />
            <input v-model="phone" type="tel" placeholder="Active Phone Number" class="w-full p-3 bg-white border border-slate-200 rounded-xl" />
          </div>

          <div v-if="role === 'company'" class="p-4 bg-slate-50 rounded-xl space-y-4 border border-slate-100">
            <h4 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Corporate Identity</h4>
            <input v-model="companyName" type="text" placeholder="Registered Company Name" class="w-full p-3 bg-white border border-slate-200 rounded-xl" />
            <input v-model="companyAddress" type="text" placeholder="Headquarters Address" class="w-full p-3 bg-white border border-slate-200 rounded-xl" />
            <input v-model="regNumber" type="text" placeholder="RDB Registration Number" class="w-full p-3 bg-white border border-slate-200 rounded-xl" />
          </div>

          <button type="submit" class="w-full bg-teal-700 text-white py-3.5 rounded-xl font-semibold hover:bg-teal-800 transition shadow-sm mt-4">
            Create Free Account
          </button>
        </form>

        <p class="text-center text-slate-500 mt-6">
          Already have an account?
          <router-link to="/login" class="text-teal-700 font-semibold hover:underline">Sign In</router-link>
        </p>
      </div>

    </div>
  </div>
</template>