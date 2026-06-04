<!-- Contact.vue -->
<script setup>
import { ref } from 'vue';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-vue-next';

const email = ref('');
const message = ref('');
const submitted = ref(false);

const sendMessage = () => {
  if(email.value && message.value) {[cite, 12]
    submitted.value = true;[cite, 12]
    setTimeout(() => {
      submitted.value = false;[cite, 12]
      email.value = '';[cite, 12]
      message.value = '';[cite, 12]
    }, 3000);[cite, 12]
  }
};
</script>

<template>
  <div class="bg-slate-50 min-h-screen py-20 px-6">
    <div class="max-w-4xl mx-auto animate-fade-in-up">
      <h1 class="text-4xl font-extrabold text-center text-slate-900 tracking-tight mb-4">Contact Support</h1>
      <p class="text-center text-slate-500 max-w-md mx-auto mb-16 text-sm md:text-base">
        Have questions about matching parameters, account configurations, or security protocols? Reach out to us.
      </p>

      <div class="grid md:grid-cols-5 gap-0 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <!-- Left Side Info Block -->
        <div class="md:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
          <div class="space-y-8">
            <h3 class="text-xl font-bold tracking-tight text-white">Contact Info</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4 text-slate-300 text-sm">
                <Mail :size="18" class="text-teal-500" /> <span>support@internrwanda.rw</span>
              </div>
              <div class="flex items-center gap-4 text-slate-300 text-sm">
                <Phone :size="18" class="text-teal-500" /> <span>+250 788 000 000</span>
              </div>
              <div class="flex items-center gap-4 text-slate-300 text-sm">
                <MapPin :size="18" class="text-teal-500" /> <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
          <div class="text-xs text-slate-400 font-medium pt-8">Response SLA: Within 24 hours</div>
        </div>

        <!-- Right Side Form Block -->
        <form @submit.prevent="sendMessage" class="md:col-span-3 p-10 space-y-5 relative">
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Your Email</label>
            <input v-model="email" required type="email" placeholder="name@domain.com" class="w-full p-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition" />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Message</label>
            <textarea v-model="message" required rows="4" placeholder="How can our support agents help your workflow?" class="w-full p-3.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition resize-none"></textarea>
          </div>

          <button type="submit" class="w-full bg-teal-700 hover:bg-teal-800 active:scale-[0.99] transition-all text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md shadow-teal-700/10">
            <Send :size="16" />
            Send Message
          </button>

          <!-- Dynamic Absolute Alert Toast Notification overlay -->
          <transition name="pop">
            <div v-if="submitted" class="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center text-center space-y-3 z-10">
              <CheckCircle2 :size="48" class="text-emerald-500" />
              <h4 class="text-xl font-bold text-slate-900">Message Dispatched</h4>
              <p class="text-sm text-slate-500 max-w-xs">Your inquiry was submitted successfully. Support team will connect shortly.</p>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth Vue Transition Hook Keyframes for the Form Overlay */
.pop-enter-active,
.pop-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Micro-bounce animation target for the checkmark icon */
.pop-enter-active .text-emerald-500 {
  animation: icon-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes icon-pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>