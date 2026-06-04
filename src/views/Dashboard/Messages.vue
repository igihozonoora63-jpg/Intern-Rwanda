<!-- MessagesList.vue -->
<script setup>
import { ref } from 'vue';
import { MessageSquare, MessageCircle, Clock, ArrowUpRight } from 'lucide-vue-next';

const messages = ref([
  { id: 1, name: "Noora Uwase", initial: "N", color: "bg-teal-50 text-teal-700 border-teal-100", time: "10 mins ago", text: "Hello, I would like to know when internship interview calls for the engineering division begin." },
  { id: 2, name: "Eric Niyonzima", initial: "E", color: "bg-indigo-50 text-indigo-700 border-indigo-100", time: "Yesterday", text: "Thank you for accepting my validation application records. I am excited to join the technical infrastructure program." },
  { id: 3, name: "Alice Mukamana", initial: "A", color: "bg-purple-50 text-purple-700 border-purple-100", time: "2 days ago", text: "I have uploaded my authenticated terminal transcript report. Kindly let me know if any additional records are required." }
]);

const handleReply = (name) => {
  console.log(`Instantiating localized gateway stream for: ${name}`);
};
</script>

<template>
  <div class="animate-fade-in-up">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-black text-slate-900 tracking-tight">Messages</h1>
      <p class="text-slate-500 mt-1.5 text-sm sm:text-base">Communicate directly with technical high school applicants and review pipeline channels.</p>
    </div>

    <!-- Messages Container -->
    <div class="bg-white rounded-3xl shadow-xl shadow-slate-100/40 border border-slate-100 overflow-hidden">
      <div class="divide-y divide-slate-100">
        <div 
          v-for="(msg, index) in messages" 
          :key="msg.id" 
          :style="{ animationDelay: `${index * 80}ms` }"
          class="p-6 flex flex-col sm:flex-row gap-4 hover:bg-slate-50/50 transition duration-200 group animate-fade-in-up"
        >
          <!-- Profile Badge Wrapper -->
          <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center text-base font-bold tracking-wider shrink-0 border shadow-sm shadow-slate-200/40', msg.color]">
            {{ msg.initial }}
          </div>

          <!-- Message Data Block -->
          <div class="flex-1 space-y-1">
            <div class="flex justify-between items-center gap-4">
              <h3 class="font-bold text-slate-800 text-base group-hover:text-teal-700 transition-colors">{{ msg.name }}</h3>
              <span class="text-xs text-slate-400 font-medium flex items-center gap-1 shrink-0">
                <Clock :size="12" /> {{ msg.time }}
              </span>
            </div>

            <p class="text-slate-600 text-sm leading-relaxed max-w-2xl pt-0.5">
              {{ msg.text }}
            </p>

            <div class="pt-3">
              <button 
                @click="handleReply(msg.name)"
                class="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm shadow-slate-900/5 active:scale-[0.98]"
              >
                Reply Channel <ArrowUpRight :size="14" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>