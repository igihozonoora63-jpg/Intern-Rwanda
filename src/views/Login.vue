<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const role = ref('');

const login = () => {
  if (!email.value) {
    alert("Please enter your email");
    return;
  }
  if (!email.value.includes('@') || !email.value.includes('.')) {
    alert("Please enter a valid email address");
    return;
  }
  if (!password.value) {
    alert("Please enter your password");
    return;
  }
  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }
  if (!role.value) {
    alert("Please select a role");
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
            Connecting TVET institutions with active companies for verified internship positions.
          </p>
        </div>

        <div class="space-y-4 mt-8 lg:mt-0">
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Verified Students</div>
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Trusted Companies</div>
          <div class="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">✓ Fast Application Tracks</div>
        </div>
      </div>

      <div class="p-10 lg:p-12 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-slate-800">Welcome Back</h2>
        <p class="text-slate-500 mt-2 mb-8">Sign in to continue to your dashboard</p>

        <form @submit.prevent="login" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input v-model="email" type="email" placeholder="name@example.com" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input v-model="password" type="password" placeholder="••••••••" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Select Account Type</label>
            <select v-model="role" class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 bg-white">
              <option value="">Choose your role...</option>
              <option value="student">Student</option>
              <option value="company">Company / Employer</option>
            </select>
          </div>

          <button type="submit" class="w-full bg-teal-700 text-white py-3.5 rounded-xl font-semibold hover:bg-teal-800 transition shadow-sm mt-2">
            Sign In
          </button>
        </form>

        <p class="text-center text-slate-500 mt-8">
          Don't have an account yet?
          <router-link to="/register" class="text-teal-700 font-semibold hover:underline">Create an account</router-link>
        </p>
      </div>

    </div>
  </div>
</template>