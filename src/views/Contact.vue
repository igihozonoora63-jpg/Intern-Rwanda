<script setup>
import { ref } from 'vue';
import { Mail, Phone, MapPin, Send } from 'lucide-vue-next';

const email = ref('');
const message = ref('');
const submitted = ref(false);

const sendMessage = () => {
  if(email.value && message.value) {
    // Send feedback logic 
    submitted.value = true;
    setTimeout(() => {
      submitted.value = false;
      email.value = '';
      message.value = '';
    }, 3000);
  }
};
</script>

<template>
  <div class="bg-slate-50 min-h-screen py-16 px-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-teal-700 mb-4">Contact Support</h1>
      <p class="text-center text-slate-600 max-w-lg mx-auto mb-12">
        Have questions about matching parameters, account configurations, or security protocols? Reach out to us.
      </p>

      <div class="grid md:grid-cols-5 gap-8 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div class="md:col-span-2 bg-teal-700 p-8 text-white flex flex-col justify-between">
          <div class="space-y-6">
            <h3 class="text-xl font-bold">Contact Info</h3>
            <div class="flex items-center gap-4 text-teal-100">
              <Mail :size="20" /> <span>support@internrwanda.rw</span>
            </div>
            <div class="flex items-center gap-4 text-teal-100">
              <Phone :size="20" /> <span>+250 788 000 000</span>
            </div>
            <div class="flex items-center gap-4 text-teal-100">
              <MapPin :size="20" /> <span>Kigali, Rwanda</span>
            </div>
          </div>
          <div class="text-xs text-teal-200/80 mt-8 md:mt-0">Response SLA: Within 24 hours</div>
        </div>

        <form @submit.prevent="sendMessage" class="md:col-span-3 p-8 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
            <input v-model="email" required type="email" placeholder="name@domain.com" class="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-600/20 focus:outline-none focus:border-teal-600" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea v-model="message" required rows="4" placeholder="How can our support agents help your workflow?" class="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-600/20 focus:outline-none focus:border-teal-600"></textarea>
          </div>

          <button type="submit" class="w-full bg-teal-700 hover:bg-teal-800 transition text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Send :size="16" />
            Send Message
          </button>

          <div v-if="submitted" class="p-3 bg-green-50 border border-green-200 text-green-700 text-sm text-center rounded-xl animate-fade-in">
            Message submitted successfully!
          </div>
        </form>
      </div>
    </div>
  </div>
</template>