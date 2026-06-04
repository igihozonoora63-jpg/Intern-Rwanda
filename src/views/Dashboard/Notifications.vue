<!-- StudentNotifications.vue -->
<script setup>
import { ref } from 'vue';
import { Search, Sparkles, FileSpreadsheet, Bell, ArrowRight } from 'lucide-vue-next';

const alerts = ref([
  { id: 1, type: 'review', text: 'BK Group corporate team reviewed your application sheet context.', icon: Search, styles: 'border-slate-100 bg-white text-slate-700' },
  { id: 2, type: 'accept', text: 'MTN Rwanda verified and accepted your system application track!', icon: Sparkles, styles: 'border-emerald-100 bg-emerald-50/20 text-slate-800' },
  { id: 3, type: 'action', text: 'Upload your authenticated TVET evaluation transcripts for structural verification.', icon: FileSpreadsheet, styles: 'border-blue-100 bg-blue-50/20 text-slate-800' }
]);
</script>

<template>
  <div class="animate-fade-in-up">
    <!-- Header Grid Panel -->
    <div class="mb-8 flex justify-between items-start gap-4">
      <div>
        <h1 class="text-3xl font-black text-slate-900 tracking-tight">Notifications</h1>
        <p class="text-slate-500 mt-1.5 text-sm sm:text-base">Live updates concerning your submitted internship tracks and validation states.</p>
      </div>
      <div class="p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm text-slate-400 shrink-0">
        <Bell :size="18" />
      </div>
    </div>

    <!-- Alert List Stack -->
    <div class="space-y-3 max-w-2xl">
      <div 
        v-for="(alert, idx) in alerts" 
        :key="alert.id"
        :style="{ animationDelay: `${idx * 70}ms` }"
        :class="['p-4 rounded-2xl border shadow-sm flex items-center justify-between gap-4 transition duration-200 hover:translate-x-0.5 animate-fade-in-up', alert.styles]"
      >
        <div class="flex items-center gap-3.5">
          <div :class="['w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border', 
            alert.type === 'accept' ? 'bg-emerald-100/50 border-emerald-200 text-emerald-600' : 
            alert.type === 'action' ? 'bg-blue-100/50 border-blue-200 text-blue-600' : 'bg-slate-100 border-slate-200 text-slate-500'
          ]">
            <component :is="alert.icon" :size="16" />
          </div>
          <span class="text-sm font-medium leading-tight">{{ alert.text }}</span>
        </div>
        
        <button class="p-1 text-slate-400 hover:text-slate-700 transition shrink-0 hidden sm:block">
          <ArrowRight :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>