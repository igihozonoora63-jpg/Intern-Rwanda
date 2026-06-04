<script setup>
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const phone = ref('');

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const showCurrent = ref(false);
const showNew = ref(false);
const showConfirm = ref(false);

const theme = ref('Light Mode');

const saveSuccess = ref(false);
const passwordError = ref('');
const passwordSuccess = ref(false);

function saveProfile() {
  saveSuccess.value = true;
  setTimeout(() => (saveSuccess.value = false), 3000);
}

function savePassword() {
  passwordError.value = '';
  passwordSuccess.value = false;

  if (!currentPassword.value || !newPassword.value || !confirmPassword.value) {
    passwordError.value = 'Please fill in all password fields.';
    return;
  }
  if (newPassword.value.length < 8) {
    passwordError.value = 'New password must be at least 8 characters.';
    return;
  }
  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = 'New passwords do not match.';
    return;
  }

  passwordSuccess.value = true;
  currentPassword.value = '';
  newPassword.value = '';
  confirmPassword.value = '';
  setTimeout(() => (passwordSuccess.value = false), 3000);
}

function passwordStrength(pwd) {
  if (!pwd) return { label: '', color: '', width: '0%' };
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 1) return { label: 'Weak', color: 'bg-red-500', width: '25%' };
  if (score === 2) return { label: 'Fair', color: 'bg-yellow-400', width: '50%' };
  if (score === 3) return { label: 'Good', color: 'bg-teal-400', width: '75%' };
  return { label: 'Strong', color: 'bg-teal-600', width: '100%' };
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-2 text-gray-800">Account Settings</h1>
    <p class="text-gray-500 mb-8 text-sm">Manage your profile information and security preferences.</p>

    <!-- Profile Info -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
      <div class="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
        <div class="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        </div>
        <h2 class="font-semibold text-gray-800">Profile Information</h2>
      </div>
      <div class="p-8 space-y-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
            <input v-model="fullName" type="text" placeholder="Enter your full name"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
            <input v-model="email" type="email" placeholder="Enter your email"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
            <input v-model="phone" type="tel" placeholder="Enter your phone number"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Theme Preference</label>
            <select v-model="theme"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white">
              <option>Light Mode</option>
              <option>Dark Mode</option>
            </select>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <transition name="fade">
            <span v-if="saveSuccess" class="flex items-center gap-1.5 text-teal-600 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Profile saved successfully!
            </span>
          </transition>
          <button @click="saveProfile"
            class="ml-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            Save Changes
          </button>
        </div>
      </div>
    </div>

    <!-- Change Password -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
        <div class="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div>
          <h2 class="font-semibold text-gray-800">Change Password</h2>
          <p class="text-xs text-gray-400 mt-0.5">Use at least 8 characters with a mix of letters, numbers &amp; symbols.</p>
        </div>
      </div>
      <div class="p-8 space-y-5">

        <!-- Current Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
          <div class="relative">
            <input v-model="currentPassword" :type="showCurrent ? 'text' : 'password'" placeholder="Enter current password"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
            <button type="button" @click="showCurrent = !showCurrent"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors">
              <svg v-if="!showCurrent" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
        </div>

        <!-- New Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
          <div class="relative">
            <input v-model="newPassword" :type="showNew ? 'text' : 'password'" placeholder="Enter new password"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition" />
            <button type="button" @click="showNew = !showNew"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors">
              <svg v-if="!showNew" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
          <!-- Strength meter -->
          <div v-if="newPassword" class="mt-2">
            <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all duration-300"
                :class="passwordStrength(newPassword).color"
                :style="{ width: passwordStrength(newPassword).width }"></div>
            </div>
            <p class="text-xs mt-1" :class="{
              'text-red-500': passwordStrength(newPassword).label === 'Weak',
              'text-yellow-500': passwordStrength(newPassword).label === 'Fair',
              'text-teal-500': passwordStrength(newPassword).label === 'Good' || passwordStrength(newPassword).label === 'Strong'
            }">{{ passwordStrength(newPassword).label }}</p>
          </div>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">Confirm New Password</label>
          <div class="relative">
            <input v-model="confirmPassword" :type="showConfirm ? 'text' : 'password'" placeholder="Confirm new password"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              :class="confirmPassword && confirmPassword !== newPassword ? 'border-red-400 focus:ring-red-400' : ''" />
            <button type="button" @click="showConfirm = !showConfirm"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors">
              <svg v-if="!showConfirm" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
          <p v-if="confirmPassword && confirmPassword !== newPassword" class="text-xs text-red-500 mt-1">Passwords do not match.</p>
        </div>

        <!-- Error / Success -->
        <transition name="fade">
          <div v-if="passwordError" class="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {{ passwordError }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="passwordSuccess" class="flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm px-4 py-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Password updated successfully!
          </div>
        </transition>

        <div class="flex justify-end pt-2">
          <button @click="savePassword"
            class="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Update Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>