<!-- CompanyNotifications.vue -->
<script setup>
import { ref } from 'vue';
import { Sparkles, FileText, CheckCircle2, Calendar, GraduationCap, Clock } from 'lucide-vue-next';

const notifications = ref([
  { id: 1, type: 'application', title: 'New Application Dispatched', desc: 'Noora Uwase has applied for the Software Development Internship track.', badge: 'Intake', time: '5 mins ago', icon: Sparkles, style: 'border-slate-100 bg-white' },
  { id: 2, type: 'request', title: 'Verification Register Sent', desc: 'An evaluation prompt was sent automatically to SOS Technical High School channels.', badge: 'System', time: '1 hour ago', icon: FileText, style: 'border-slate-100 bg-white' },
  { id: 3, type: 'success', title: 'Student Identity Verified', desc: 'Institutional enrollment confirmation has been approved directly by the school principal.', badge: 'Vetted', time: 'Yesterday', icon: CheckCircle2, style: 'border-emerald-100 bg-emerald-50/10' },
  { id: 4, type: 'warning', title: 'Internship Deadline Reminder', desc: 'The entry gateway for Software Development Internship parameters closes in 72 hours.', badge: 'SLA', time: 'Today', icon: Calendar, style: 'border-amber-100 bg-amber-50/10' },
  { id: 5, type: 'placement', title: 'Student Placement Accepted', desc: 'Eric Niyonzima has locked in authorization for the current corporate cohort.', badge: 'Hired', time: '2 days ago', icon: GraduationCap, style: 'border-slate-100 bg-white' }
]);
</script>

<template>
  <div class="animate-fade-in-up">
    <!-- Header Block -->
    <div class="mb-8">
      <h1 class="text-3xl font-black text-slate-900 tracking-tight">Notifications</h1>
      <p class="text-slate-500 mt-1.5 text-sm sm:text-base">Track status changes regarding active pipelines, institutional records, and technical cohort activities.</p>
    </div>

    <!-- Notification Container Cards Stack -->
    <div class="space-y-4 max-w-4xl">
      <div 
        v-for="(item, index) in notifications" 
        :key="item.id"
        :style="{ animationDelay: `${index * 60}ms` }"
        :class="['p-5 rounded-2xl border shadow-sm hover:shadow-md transition duration-200 flex items-start gap-4 animate-fade-in-up', item.style]"
      >
        <!-- Dynamic Icon Matrix Container -->
        <div :class="['w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border shadow-sm',
          item.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-600' :
          item.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-600' :
          item.type === 'request' ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-teal-50 border-teal-100 text-teal-700'
        ]">
          <component :is="item.icon" :size="18" />
        </div>

        <!-- Meta Text Block Description -->
        <div class="flex-1 space-y-1">
          <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h3 class="font-bold text-slate-800 text-base leading-tight">{{ item.title }}</h3>
            <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200/60 text-slate-500 font-bold tracking-wider text-[10px] uppercase">{{ item.badge }}</span>
          </div>

          <p class="text-slate-500 text-sm leading-relaxed pr-4">
            {{ item.desc }}
          </p>

          <div class="flex items-center gap-1 text-slate-400 text-xs pt-1 font-medium">
            <Clock :size="12" /> {{ item.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>